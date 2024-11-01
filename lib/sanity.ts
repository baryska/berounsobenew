import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '1jc9t4l8', // Find this in sanity.json or your Sanity dashboard
  dataset: 'production',      // Usually 'production'
  apiVersion: '2024-11-01',     // use current date or set it explicitly
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
