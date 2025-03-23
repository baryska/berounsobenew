import React from 'react';
import styles from './NewsItem.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface Paragraph {
  children: {
    marks: string[],
    text: string,
    _key: string,
    _type: string
  }[],
  markDefs: {
    style: string,
    href: string,
    _key: string,
    _type: string,
  }[],
  style: string,
  _key: string,
  _type: string
}

export interface ApiImg {
  asset: {
    url: string,
    metadata: {
      lqip: string,
      dimensions: {
        width: number,
        height: number
      }
    }
  }
}

interface Props {
  title: string,
  theme: string,
  slug: string,
  date: string
  image: ApiImg,
  additionalImages: ApiImg[],
  paragraphs: Paragraph[]
}

const NewsItem = ({ title, theme, slug, date, image }: Props) => {
  const imgSrc = {
    src: image.asset.url,
    width: image.asset.metadata.dimensions.width,
    height: image.asset.metadata.dimensions.height, 
    blurDataURL: image.asset.metadata.lqip
  }
  return (
    <Link href={{
      pathname: '/posts/[slug]',
      query: {
        slug: slug,
      }
    }}><a className={styles.post}>
      <Image src={imgSrc} alt="obrazek" width={400} height={266} className={styles.post__image} placeholder="blur"/>
      <div className={styles.post__text}>
        <div className={styles.post__theme}><span>{theme}</span><span>{date}</span></div>
        <div className={styles.post__title}>{title}</div>
      </div>
    </a>
    </Link>
  )
}

export default NewsItem;
