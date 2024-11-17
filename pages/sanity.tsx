import sanityClient from '../lib/sanity';

export async function getStaticProps() {
  const query = `*[_type == "postContent"] {
    title,
    theme,
    slug,
    date,
    image {
      asset->{
        _id,
        url
      }
    }
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export default function Blog({ posts }: any) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug.current}>
            <h2>{post.title}</h2>
            <p>{post.theme}</p>
            <img src={post.image?.asset?.url} alt={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
  
  