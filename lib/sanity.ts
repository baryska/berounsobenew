import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: '1jc9t4l8', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-01-01', // Use a fixed date for stable APIs
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);

export default sanityClient;
