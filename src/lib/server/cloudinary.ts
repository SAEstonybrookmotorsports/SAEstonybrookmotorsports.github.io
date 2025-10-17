import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables (server-side)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Debug (safe to log keys partially)
console.log('Cloudinary config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? '***' : undefined,
  api_secret: process.env.CLOUDINARY_API_SECRET ? '***' : undefined,
});

export async function fetchCloudinaryImages() {
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
        crop: 'scale'
      }),
      name: image.public_id.split('/').pop() || image.public_id,
    }));
  } catch (error) {
    console.error('Cloudinary fetch error:', error);
    return [];
  }
}
