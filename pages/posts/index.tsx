import React, {useState} from 'react';
import { Posts } from '../../data/index';
import NewsItem from '../../components/NewsItem/NewsItem';
import styles from './post.module.css'
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {title: 'Rada & zastupitelstvo', key: 1},
  {title: 'Volby', key: 2},
  {title: 'Urbanismus', key: 3}
]



const News = () => {
  const [posts, setPosts] = useState(Posts)
  
  const handleFilterPosts = (key: number) => {
    const filteredPosts = Posts.filter((post) => post.key === key)
    setPosts(filteredPosts)
  }

  return (
    <>
    <div className={styles.allPosts__container}>
      <div className={styles.allPosts__menu}>
      <Link href="/#informujeme"><a className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width="40px" height="40px"/></a></Link>
        {menuItems.map((item) => 
        <h1 key={item.title} className={styles.menuItem} onClick={() => handleFilterPosts(item.key)}>{item.title}</h1>
        )}
        <h1 className={styles.menuItem} style={{fontStyle: 'italic', marginTop: '2rem' }}onClick={() => setPosts(Posts)}>Vše</h1>
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

