import React, { useState } from 'react';
import NewsItem, { ApiImg, Paragraph } from '../../components/NewsItem/NewsItem';
import styles from './post.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { fetchPosts } from '../api/posts';

export interface ApiPost {
  title: string,
  date: string,
  key: number,
  slug: string,
  theme: string,
  additionalImages: ApiImg[],
  paragraphs: Paragraph[],
  image: ApiImg
}

export interface ApiPosts {
  apiPosts: ApiPost[];
}

const menuItems = [
  { title: 'Rada & zastupitelstvo', key: 1 },
  { title: 'Volby', key: 2 },
  { title: 'Urbanismus', key: 3 },
  { title: 'Zeleň', key: 4 },
  { title: 'Městské služby', key: 5 },
  { title: 'Školství', key: 6 },
  { title: 'Kultura', key: 7 },
  { title: 'Obecné informace', key: 8 },
  { title: 'Doprava', key: 9 },
]

export const sortPostsByDate = (posts: ApiPost[]): ApiPost[] => {
  const parseDate = (str: string): Date => {
    const [day, month, year] = str.replace(/\s/g, "").split(".");
    return new Date(`${year}-${month}-${day}`);
  };

  return posts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
};

const News = ({ apiPosts }: ApiPosts) => {
  const [posts, setPosts] = useState(apiPosts);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFilterPosts = (key: number) => {
    const filteredPosts = apiPosts.filter((post) => {
      return (
        post.key === key)
    })
    setPosts(filteredPosts)
    setDropdownOpen(false)
  }

  const handleChooseAllPosts = () => {
    setPosts(apiPosts);
    setDropdownOpen(false);
  }

  return (
    <>
      <div className={styles.allPosts__container}>
        <div className={styles.allPosts__menu}>
          <Link href="/#informujeme"><a className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width={40} height={40} /></a></Link>
          <div className={styles.menu}>
            <div className={styles.menuSmall}>
              <button className={styles.dropdownButton} onClick={() => setDropdownOpen(!dropdownOpen)}>Témata<Image src={dropdownOpen ? "/arrowUp.svg" : "/arrowDown.svg"} alt="sipka" width={15} height={15} /></button>
              {dropdownOpen && (
                <div className={styles.dropdown}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {menuItems.map((item) =>
                      <li key={item.key} style={{ margin: '0.5rem auto' }} onClick={() => handleFilterPosts(item.key)}>
                        <a href="#">{item.title}</a>
                      </li>
                    )}
                    <li style={{ fontStyle: 'italic', marginTop: '2rem' }} onClick={() => handleChooseAllPosts()}>Vše</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.menuLarge}>
              {menuItems.map((item) =>
                <h1 key={item.title} className={styles.menuItem} onClick={() => handleFilterPosts(item.key)}>{item.title}</h1>
              )}
              <h1 className={styles.menuItem} style={{ fontStyle: 'italic', marginTop: '2rem' }} onClick={() => setPosts(apiPosts)}>Vše</h1>
            </div>
          </div>
        </div>

        <div className={styles.allPosts}>
          {sortPostsByDate(posts).map((post) => {
            const { title, theme, slug, date, image, paragraphs, additionalImages } = post;
            return (
              <NewsItem
                title={title}
                theme={theme}
                slug={slug}
                date={date}
                image={image}
                paragraphs={paragraphs}
                additionalImages={additionalImages}
                key={title}
              />
            )
          })}
        </div>
      </div>

    </>
  )
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: {
      apiPosts: posts.map((post) => ({
        title: post.title,
        date: post.date,
        key: post.key,
        slug: post.slug.current,
        theme: post.theme,
        additionalImages: post.additionalImages,
        paragraphs: post.paragraphs,
        image: post.image
      }))
    }
  }
}

export default News;
