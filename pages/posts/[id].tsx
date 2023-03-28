import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { getAllPostSlugs, getPostData } from '../../data/posts';
import parse from 'html-react-parser';
import styles from './post.module.css';

interface Props {
  paragraphs: string[] | undefined,
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

  return (
    <div className={styles.container}>
      <button style={{ textAlign: 'left', left: '0' }} onClick={() => router.back()} className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width="40px" height="40px" /></button>
      <h1 className={styles.title}>{title}</h1>
      {image !== undefined && (
        <span className={styles.image}><Image src={image} alt="foto" width="760px" height="507px" className={styles.image} placeholder="blur" /></span>
      )}
      <div className={styles.paragraphs}>
        {paragraphs?.map((paragraph) => <p key={paragraph} className={styles.paragraph}>{parse(paragraph)}</p>)}
      </div>
      {additionalImages?.map((image) =>
        <span className={styles.image} key={title}>
          <Image src={image} alt="foto" width="760px" height="507px" className={styles.image} placeholder="blur" />
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
  const data = getPostData(params.id)
  return {
    props: {
      paragraphs: data.post?.paragraphs,
      image: data.post?.image,
      title: data.post?.title,
      additionalImages: data.post?.additionalImages
    }
  }
}

export default Post;
