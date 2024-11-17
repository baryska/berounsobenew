import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { fetchPost, getAllPostSlugs, Paragraphs } from '../../data/posts';
import styles from './post.module.css';



interface Props {
  post: {
    paragraphs: Paragraphs[] | undefined,
    image: {
      asset: {
        url: string
      }
    },
    title: string | undefined,
    additionalImages?: StaticImageData[]
  }

}

interface Params {
  params: {
    id: string
  }
}

const Post = ({ post }: Props) => {
  const { paragraphs, image, title, additionalImages } = post;
  console.log(post)
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button style={{ textAlign: 'left', left: '0' }} onClick={() => router.back()} className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width={40} height={40} /></button>
      <h1 className={styles.title}>{title}</h1>
      {image !== undefined && (
        <span className={styles.image}><Image src={image.asset.url} alt="foto" width={760} height={507} className={styles.image} /></span>
      )}
      <div className={styles.paragraphs}>
        {paragraphs !== undefined ? (
          paragraphs.map((paragraph) => (
            <p key={paragraph._key} className={styles.paragraph}>
              {paragraph.children.map((span) => {
                if (span.marks.includes("strong")) {
                  return <strong key={span._key}>{span.text}</strong>;
                }
                return <span key={span._key}>{span.text}</span>;
              })}
            </p>
          ))
        ) : null}

      </div>
      {additionalImages?.map((image) =>
        <span className={styles.image} key={title}>
          <Image src={image} alt="foto" width={760} height={507} className={styles.image} placeholder="blur" />
        </span>)}
    </div>

  )
}


export async function getStaticPaths() {
  const slug = getAllPostSlugs();
  return {
    paths: slug,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const data = await fetchPost(params.id);
  
  return {
    props: {
      post: data.post
    },
    revalidate: 60,
  };
}

export default Post;
