import React, { useState } from 'react';
import { Posts } from '../../data/index';
import NewsItem from '../../components/NewsItem/NewsItem';
import styles from './post.module.css'
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { title: 'Rada & zastupitelstvo', key: 1 },
  { title: 'Volby', key: 2 },
  { title: 'Urbanismus', key: 3 }
]

const News = () => {
  const [posts, setPosts] = useState(Posts);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFilterPosts = (key: number) => {
    const filteredPosts = Posts.filter((post) => post.key === key)
    setPosts(filteredPosts)
    setDropdownOpen(false)
  }

  const handleChooseAllPosts = () => {
    setPosts(Posts);
    setDropdownOpen(false);
  }

  return (
    <>
      <div className={styles.allPosts__container}>
        <div className={styles.allPosts__menu}>
          <Link href="/#informujeme"><a className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width="40px" height="40px" /></a></Link>
          <div className={styles.menu}>
            <div className={styles.menuSmall}>
              <button className={styles.dropdownButton} onClick={() => setDropdownOpen(!dropdownOpen)}>Témata<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
              {dropdownOpen && (
                <div className=" z-10 w-52 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {menuItems.map((item) =>
                      <li key={item.key} style={{ margin: '0.5rem auto' }} onClick={() => handleFilterPosts(item.key)}>
                        <a href="#" className={styles.menuItem}>{item.title}</a>
                      </li>
                    )}
                    <li className={styles.menuItem} style={{ fontStyle: 'italic', marginTop: '2rem' }} onClick={() => handleChooseAllPosts()}>Vše</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.menuLarge}>
              {menuItems.map((item) =>
                <h1 key={item.title} className={styles.menuItem} onClick={() => handleFilterPosts(item.key)}>{item.title}</h1>
              )}
              <h1 className={styles.menuItem} style={{ fontStyle: 'italic', marginTop: '2rem' }} onClick={() => setPosts(Posts)}>Vše</h1>
            </div>
          </div>
        </div>

        <div className={styles.allPosts}>
          {posts.map((post) => {
            const { title, theme, slug, date, image, paragraphs } = post;
            return (
              <NewsItem
                title={title}
                theme={theme}
                slug={slug}
                date={date}
                image={image}
                paragraphs={paragraphs}
                key={title}
              />
            )
          })}
        </div>
      </div>

    </>
  )
}

export default News;

