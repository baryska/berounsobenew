import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { getAllPostSlugs, getPostData } from '../../data/posts';
import styles from './post.module.css';

interface Props {
  paragraphs: string[] | undefined,
  image: StaticImageData | undefined,
  title: string | undefined
}

interface Params {
  params: {
    id: string
  }
}

const Post = ({ paragraphs, image, title }: Props) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      
        {image !== undefined && (
          <span className={styles.image}><Image src={image} alt="foto" width="800px" height="500px" className={styles.image} /></span>
        )}
        <div className={styles.paragraphs}>
          {paragraphs?.map((paragraph) => <p key={paragraph} className={styles.paragraph}>{paragraph}</p>)}
        </div>
      
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
      title: data.post?.title
    }
  }
}

export default Post;