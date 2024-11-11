import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { getPostData, getPosts } from '../../data/posts';
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
      <button style={{ textAlign: 'left', left: '0' }} onClick={() => router.back()} className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width="40" height="40" /></button>
      <h1 className={styles.title}>{title}</h1>
      {image !== undefined && (
        <span className={styles.image}>
          <Image
            src={`https://infinite-beyond-27081-4bb7e61c8ac8.herokuapp.com${image}`}
            alt="foto"
            width="760"
            height="507"
            className={styles.image}
          />
        </span>
      )}
      <div className={styles.paragraphs}>
        {paragraphs?.map((texts) => <p key={Math.random()} className={styles.paragraph}>{texts.map(
          (paragraph: any) => {
            if (paragraph.type === 'text') {
              return (
                <span
                  key={paragraph.text}
                  className={`${paragraph.bold ? styles.bold : ''}`}>{paragraph.text}
                </span>
              )
            } else if (paragraph.type === 'link') {
              return (
                <a href={paragraph.url} target="_blank" className={styles.anchor} rel="noreferrer">{paragraph.children[0].text}</a>
              )
            }
          })
        }
        </p>)}
      </div>
      {additionalImages?.map((image) =>
        <span className={styles.image} key={title}>
          <Image
          src={`https://infinite-beyond-27081-4bb7e61c8ac8.herokuapp.com${image.attributes.url}`} 
          alt="foto" 
          width="760" 
          height="507" 
          className={styles.image} 
           />
        </span>)}
    </div>

  )
}

export async function getStaticPaths() {
  const strapiPosts = await getPosts();
  const slugs = strapiPosts.map((post: any) => {
    return {
      params: {
        id: post.slug,
      },
    };
  })
  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const data = await getPostData(params.id)
  return {
    props: {
      paragraphs: data.post.paragraphs,
      image: data.post.imageUrl,
      title: data.post.title,
      additionalImages: data.post.additionalPhotosUrls ?? []
    }
  }
}


export default Post;
