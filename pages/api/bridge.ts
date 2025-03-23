import sanityClient from '../../lib/sanity';
export const fetchImageGroups = async () => {
  const query = `
    *[_type == "imageGroup"]{
      title,
      description,
      type,
      key,
      images[]{
        asset->{
          _id,
          url
        },
        caption,
        alt
      }
    }
  `;
  const data = await sanityClient.fetch(query);
  return data;
};

export const fetchFAQ = async () => {
  const query = `
    *[_type == "faqContent"]{
      question,
      answer,
    }
  `;
  const data = await sanityClient.fetch(query);
  return data;
};

export const fetchTimeline = async () => {
  const query = `
    *[_type == "timelineContent"]{
      text,
      year,
    }
  `;
  const data = await sanityClient.fetch(query);
  return data;
};

export const fetchPosts = async () => {
  const query = `
  *[_type == "postContent"]{
      title,
      theme,
      key,
      slug,
      date,
      image,
      additionalImages,
      paragraphs
    }
  `
  const data = await sanityClient.fetch(query);
  return data;
}
