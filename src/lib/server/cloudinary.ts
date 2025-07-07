import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

// Debug environment variables
console.log('Cloudinary config:', {
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET ? '***' : undefined,
});

export async function fetchCloudinaryImages() {
  try {
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      type: 'upload',
      max_results: 50,
    });
    console.log('Cloudinary response:', JSON.stringify(result, null, 2));
    return result.resources.map((image: any) => ({
      url: image.secure_url,
      name: image.public_id.split('/').pop() || image.public_id,
    }));
  } catch (error) {
    console.error('Cloudinary fetch error:', JSON.stringify(error, null, 2));
    return [];
  }
}