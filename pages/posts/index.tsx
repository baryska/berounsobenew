import React, { useState } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import styles from './post.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';
import { fetchPosts, Post } from '../../data/posts';

export async function getStaticProps() {
  const fetchedPosts: Post[] = await fetchPosts();

  return {
    props: {
      fetchedPosts,
    },
    revalidate: 60,
  };
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

const News = ({ fetchedPosts }: any) => {
  const [posts, setPosts] = useState<Post[]>(fetchedPosts);
  console.log(posts)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFilterPosts = (key: number) => {
    const filteredPosts = fetchedPosts.filter((post: Post) => post.key === key)
    setPosts(filteredPosts)
    setDropdownOpen(false)
  }

  const handleChooseAllPosts = () => {
    setPosts(fetchedPosts);
    setDropdownOpen(false);
  }

  return (
    <>
      <div className={styles.allPosts__container}>
        <div className={styles.allPosts__menu}>
          <Link href="/#informujeme" legacyBehavior><a className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width={40} height={40} /></a></Link>
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
              <h1 className={styles.menuItem} style={{ fontStyle: 'italic', marginTop: '2rem' }} onClick={() => setPosts(fetchedPosts)}>Vše</h1>
            </div>
          </div>
        </div>

        <div className={styles.allPosts}>
          {posts.map((post) => {
            const { title, theme, slug, date, image} = post;
            return (
              <NewsItem
                title={title}
                theme={theme}
                slug={slug.current}
                date={date}
                //@ts-ignore
                image={urlFor(image.asset.url).url()}
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
