import React from 'react';
import SmallProfile from '../components/SmallProfile/SmallProfile';
import { Experts } from '../data/index';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Advisors = () => {
  return (
    <section className={styles.advisors}>
      <h2 className={styles.aboutUs}><strong>S KÝM SE RADÍME</strong>
        <div>
          <div className={styles.blueDot} />
          <div className={styles.blueDot} />
        </div>
      </h2>
      {Experts.map((profile) => {
        const { title, profession, text, topic } = profile;
        return (
          <SmallProfile
            title={title}
            profession={profession}
            text={text}
            topic={topic}
            key={title} />
        )
      })
      }
      <Link href="/#kdojsme"><a className={styles.arrowBack}><Image src="/arrow4.svg" alt="sipka" width="40px" height="40px"/></a></Link>
    </section>
  );
};

export default Advisors;