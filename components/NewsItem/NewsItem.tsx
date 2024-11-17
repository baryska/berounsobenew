import React from 'react';
import styles from './NewsItem.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  title: string,
  theme: string,
  slug: string,
  date: string,
  image: StaticImageData,
}

const NewsItem = ({ title, theme, slug, date, image }: Props) => {
  return (
    <Link href={{
      pathname: '/posts/[slug]',
      query: {
        slug: slug,
      }
    }}
    legacyBehavior><a className={styles.post}>
      <Image src={image} alt="obrazek" width={400} height={266} className={styles.post__image} />
      <div className={styles.post__text}>
        <div className={styles.post__theme}><span>{theme}</span><span>{date}</span></div>
        <div className={styles.post__title}>{title}</div>
      </div>
    </a>
    </Link>
  )
}

export default NewsItem;
