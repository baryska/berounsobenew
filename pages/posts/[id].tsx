import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import styles from './post.module.css';
import { fetchPosts } from '../api/posts';
import { ApiPost } from '.';

interface Params {
  params: {
    id: string
  }
}

const Post = (props: ApiPost) => {
  console.log(props)
  const { paragraphs, image, title, additionalImages } = props;
  const imgSrc = {
    src: image.asset.url,
    width: image.asset.metadata.dimensions.width,
    height: image.asset.metadata.dimensions.height,
    blurDataURL: image.asset.metadata.lqip
  }

  const additionalImagesSrc = additionalImages ? additionalImages.map((image) => ({
    src: image.asset.url,
    width: image.asset.metadata.dimensions.width,
    height: image.asset.metadata.dimensions.height,
    blurDataURL: image.asset.metadata.lqip
  })
  ) : []
  
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button style={{ textAlign: 'left', left: '0' }} onClick={() => router.back()} className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width={40} height={40} /></button>
      <h1 className={styles.title}>{title}</h1>
      {image !== undefined && (
        <span className={styles.image}><Image src={imgSrc} alt="foto" width={760} height={507} className={styles.image} placeholder="blur" /></span>
      )}
      <div className={styles.paragraphs}>
        {paragraphs?.map((paragraph) => (
          <p key={paragraph._key} className={styles.paragraph}>
            {paragraph.children.map((child) => {
              const isStrong = child.marks?.includes('strong');
              const linkMarkKey = child.marks?.find((mark) =>
                paragraph.markDefs?.some((def) => def._key === mark && def._type === 'link')
              );

              const linkDef = paragraph.markDefs?.find((def) => def._key === linkMarkKey);

              let content = <>{child.text}</>;

              if (isStrong) {
                content = <strong>{content}</strong>;
              }

              if (linkDef) {
                content = (
                  <a href={linkDef.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {content}
                  </a>
                );
              }
              return <span key={child._key}>{content}</span>;
            })}
          </p>
        ))}
      </div>
      {additionalImagesSrc.map((image) =>
        <span className={styles.image} key={title}>
          <Image src={image} alt="foto" width={760} height={507} className={styles.image} placeholder="blur" />
        </span>)}
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await fetchPosts();
  const slug = posts.map((post) => {
    return {
      params: {
        id: post.slug.current
      }
    }
  })

  return {
    paths: slug,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const posts = await fetchPosts();
  const currentPost = posts.find((post) => post.slug.current === params.id)
  return {
    props: {
      title: currentPost?.title,
      date: currentPost?.date,
      key: currentPost?.key,
      slug: currentPost?.slug.current,
      theme: currentPost?.theme,
      additionalImages: currentPost?.additionalImages,
      paragraphs: currentPost?.paragraphs,
      image: currentPost?.image
    }
  }
}

export default Post;
