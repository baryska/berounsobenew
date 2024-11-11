import { SchemaTypeDefinition } from 'sanity';

const imageContent: SchemaTypeDefinition = {
  name: 'imageContent',
  title: 'Image Content',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
  ],
};

export default imageContent;
