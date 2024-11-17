import { Posts } from '../data/index'
import sanityClient from '../lib/sanity';

interface ParagraphChildren {
  marks: string[],
  text: string,
  _key: string
}

export interface Paragraphs {
  children: ParagraphChildren[],
  _key: string
}

export interface Post {
  key: number,
  date: string,
  image: {
    asset: {
      url: string
    }
  },
  slug: {
    current: string
  },
  theme: string,
  title: string,
  paragraphs: Paragraphs[],
  additionalImages?: string[]
}

export function getAllPostSlugs() {
    const data = Posts.map((post) => {
      return {
        params: {
          id: post.slug,
        },
      };
    });
    return data
  }

  export async function fetchPosts() {
    const query = `*[_type == "postContent"] {
      key,
      title,
      theme,
      slug,
      date,
      paragraphs,
      additionalImages,
      image {
        asset->{
          _id,
          url
        }
      }
    }`;
  
    const posts = await sanityClient.fetch(query);
    return posts;
  }

  export async function fetchPost(id: string) {
    console.log(id)
    const query = `*[_type == "postContent"] {
      key,
      title,
      theme,
      slug,
      date,
      paragraphs,
      additionalImages,
      image {
        asset->{
          _id,
          url
        }
      }
    }`;
  
    const posts = await sanityClient.fetch(query);
    const post = posts.find((post: Post) => post.slug.current === id);
    return {
      id,
      post,
    };
  }
