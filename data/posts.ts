import { Posts } from '../data/index'

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

  export function getPostData(id: string) {
    const post = Posts.find((post) => post.slug === id);
    return {
      id,
      post,
    };
  }