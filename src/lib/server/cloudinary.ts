// src/lib/server/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

function parseCloudinaryUrl(url: string) {
  // cloudinary://<api_key>:<api_secret>@<cloud_name>
  try {
    const m = url.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
    if (!m) return null;
    return { api_key: m[1], api_secret: m[2], cloud_name: m[3] };
  } catch {
    return null;
  }
}

// 1) Preferred: process.env (server-side)
// 2) Fallback: import.meta.env (Astro/Vite)
const envSources = {
  process_env_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  process_env_api_key: process.env.CLOUDINARY_API_KEY,
  process_env_api_secret: process.env.CLOUDINARY_API_SECRET,
  import_meta_cloud_name: typeof import.meta !== 'undefined' ? (import.meta as any).env?.CLOUDINARY_CLOUD_NAME : undefined,
  import_meta_api_key: typeof import.meta !== 'undefined' ? (import.meta as any).env?.CLOUDINARY_API_KEY : undefined,
  import_meta_api_secret: typeof import.meta !== 'undefined' ? (import.meta as any).env?.CLOUDINARY_API_SECRET : undefined,
  process_env_url: process.env.CLOUDINARY_URL,
  import_meta_url: typeof import.meta !== 'undefined' ? (import.meta as any).env?.CLOUDINARY_URL : undefined,
};

// Try process.env first
let cloudName = envSources.process_env_cloud_name;
let apiKey = envSources.process_env_api_key;
let apiSecret = envSources.process_env_api_secret;

// Fallback to import.meta.env if missing
if (!cloudName || !apiKey || !apiSecret) {
  cloudName = cloudName ?? envSources.import_meta_cloud_name;
  apiKey = apiKey ?? envSources.import_meta_api_key;
  apiSecret = apiSecret ?? envSources.import_meta_api_secret;
}

// Fallback to CLOUDINARY_URL parsing
if ((!cloudName || !apiKey || !apiSecret) && (envSources.process_env_url || envSources.import_meta_url)) {
  const url = envSources.process_env_url ?? envSources.import_meta_url!;
  const parsed = parseCloudinaryUrl(url);
  if (parsed) {
    cloudName = cloudName ?? parsed.cloud_name;
    apiKey = apiKey ?? parsed.api_key;
    apiSecret = apiSecret ?? parsed.api_secret;
  }
}

// Configure cloudinary with whatever we have
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

// Masked logging (safe for CI logs)
const mask = (s?: string) => (s ? '***' : undefined);
console.log('[cloudinary] config presence:', {
  from_process_env: {
    cloud_name: !!envSources.process_env_cloud_name,
    api_key: !!envSources.process_env_api_key,
    api_secret: !!envSources.process_env_api_secret,
  },
  from_import_meta: {
    cloud_name: !!envSources.import_meta_cloud_name,
    api_key: !!envSources.import_meta_api_key,
    api_secret: !!envSources.import_meta_api_secret,
  },
  from_cloudinary_url: !!(envSources.process_env_url ?? envSources.import_meta_url),
  effective: {
    cloud_name: !!cloudName,
    api_key: !!apiKey,
    api_secret: !!apiSecret,
  }
});

// Helpful, explicit error if missing required values
function missingError() {
  const missing = [
    cloudName ? null : 'cloud_name',
    apiKey ? null : 'api_key',
    apiSecret ? null : 'api_secret',
  ].filter(Boolean) as string[];

  return new Error(`Cloudinary configuration incomplete, missing: ${missing.join(', ')}`);
}

export async function fetchCloudinaryImages() {
  if (!cloudName || !apiKey || !apiSecret) {
    // Provide a clear error in server logs and return empty array
    console.error('[cloudinary] ' + missingError().message);
    return [];
  }

  try {
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      type: 'upload',
      max_results: 50,
    });

    return result.resources.map((image: any) => ({
      url: cloudinary.url(image.public_id, {
        width: 500,
        quality: 'auto',
        fetch_format: 'auto',
        crop: 'scale',
      }),
      name: image.public_id.split('/').pop() || image.public_id,
    }));
  } catch (error) {
    console.error('[cloudinary] fetch error:', error);
    return [];
  }
}
