import { Posts } from './index';

  export async function getPosts() {
    const res = await fetch('https://infinite-beyond-27081-4bb7e61c8ac8.herokuapp.com/api/posts?populate=*');
    const posts = await res.json();
    console.log(posts)
    //@ts-ignore
    const data = posts.data.map((post) => {
      //@ts-ignore
      const paragraphs = post.attributes.text.map((paragraph) => paragraph.children)
      const title = post.attributes.title;
      const date = post.attributes.date;
      const key = post.attributes.key;
      const slug = post.attributes.slug;
      const theme = post.attributes.theme;
      const imageUrl = post.attributes.mainPhoto.data.attributes.url;
      const additionalPhotosUrls = post.attributes.photos.data;
      const id = post.id;
      console.log(post)
      return {
        paragraphs,
        title,
        date,
        key,
        slug,
        theme,
        imageUrl,
        additionalPhotosUrls,
        id
      }
    })
    return data;
  }

  export async function getPostData(id: string) {
    const posts = await getPosts();
    //@ts-ignore
    const post = posts.find((post) => post.slug === id);
    return {
      id,
      post,
    };
  }
