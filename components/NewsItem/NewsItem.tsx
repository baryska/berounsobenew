import React from 'react';
import styles from './NewsItem.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  title: string,
  theme: string,
  slug: string,
  date: string
  image: StaticImageData,
  additionalImages: StaticImageData[],
  paragraphs: string[]
}

const NewsItem = ({ title, theme, slug, date, image }: Props) => {
  console.log(image)
  return (
    <Link href={{
      pathname: '/posts/[slug]',
      query: {
        slug: slug,
      }
    }}><a className={styles.post}>
        <Image
          src={`https://infinite-beyond-27081-4bb7e61c8ac8.herokuapp.com${image}`}
          alt="obrazek"
          width="400px"
          height="266px"
          className={styles.post__image}
           />
        <div className={styles.post__text}>
          <div className={styles.post__theme}><span>{theme}</span><span>{date}</span></div>
          <div className={styles.post__title}>{title}</div>
        </div>
      </a>
    </Link>
  )
}

export default NewsItem;
