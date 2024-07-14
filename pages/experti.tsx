import React from 'react';
import SmallProfile from '../components/SmallProfile/SmallProfile';
import { Experts } from '../data/index';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Image from 'next/image';


const Advisors = () => {
  const router = useRouter();

  return (
    <section className={styles.advisors}>
      <h2 className={styles.aboutUs}><strong>S KÝM SE RADÍME</strong>
        <div>
          <div className={styles.blueDot} />
          <div className={styles.blueDot} />
        </div>
      </h2>
      {Experts.map((profile) => {
        const { title, profession, text, topic, nomination } = profile;
        return (
          <SmallProfile
            title={title}
            profession={profession}
            text={text}
            topic={topic}
            nomination={nomination}
            key={title} />
        )
      })
      }
      <button onClick={() => router.back()} className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width="40px" height="40px"/></button>
    </section>
  );
};

export default Advisors;
