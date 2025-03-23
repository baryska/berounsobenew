import sanityClient from '../../lib/sanity';
export const fetchPosts = async () => {
  const query = `
  *[_type == "postContent"]{
      title,
      theme,
      key,
      slug,
      date,
      image {
        asset -> {
          url,
          metadata {
            lqip,
            dimensions { width, height }
            }
          } 
        },
      additionalImages[]{
        asset -> {
          url,
          metadata {
            lqip,
            dimensions { width, height }
          }
        } 
      },
      paragraphs
    }
  `
  const data = await sanityClient.fetch(query);
  return data;
}
