import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { fetchPost, getAllPostSlugs, Paragraphs } from '../../data/posts';
import parse from 'html-react-parser';
import styles from './post.module.css';



interface Props {
  paragraphs: Paragraphs[] | undefined,
  image: StaticImageData | undefined,
  title: string | undefined,
  additionalImages?: StaticImageData[]
}

interface Params {
  params: {
    id: string
  }
}

const Post = ({ paragraphs, image, title, additionalImages }: Props) => {
  const router = useRouter();
  console.log(paragraphs)

  return (
    <div className={styles.container}>
      <button style={{ textAlign: 'left', left: '0' }} onClick={() => router.back()} className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width={40} height={40} /></button>
      <h1 className={styles.title}>{title}</h1>
      {image !== undefined && (
        <span className={styles.image}><Image src={image} alt="foto" width={760} height={507} className={styles.image} /></span>
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
  const post = await fetchPost(params.id);
  console.log(post)
  return {
    props: {
      paragraphs: post.post.paragraphs,
      image: post.post.image.asset.url,
      title: post.post.title,
      additionalImages: post.post.additionalImages
    },
    revalidate: 60,
  };
}

export default Post;
