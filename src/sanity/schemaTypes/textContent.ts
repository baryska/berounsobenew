import { SchemaTypeDefinition } from 'sanity';

const textContent: SchemaTypeDefinition = {
  name: 'textContent',
  title: 'Text Content',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'text' },
  ],
};

export default textContent;
