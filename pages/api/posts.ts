import sanityClient from '../../lib/sanity';


export interface ApiImg {
  asset: {
    url: string,
    metadata: {
      lqip: string,
      dimensions: {
        width: number,
        height: number
      }
    }
  }
}

export interface Paragraph {
  children: {
    marks: string[],
    text: string,
    _key: string,
    _type: string
  }[],
  markDefs: {
    style: string,
    href: string,
    _key: string,
    _type: string,
  }[],
  style: string,
  _key: string,
  _type: string
}

export interface Post {
  title: string,
  theme: string,
  key: string,
  slug: {current: string},
  date: string,
  image: ApiImg,
  additionalImages: ApiImg[],
  paragraphs: Paragraph[]
}

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
  const data: Post[] = await sanityClient.fetch(query);
  return data;
}
