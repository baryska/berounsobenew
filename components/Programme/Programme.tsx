import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import styles from './Programme.module.css';

const programmePoints: { image: string; theme: string; paragraphs: string[] }[] = [];

function Programme() {
  return (
    <div className={styles.container}>
      <h1 className={styles.whatWeWant}>
        <strong>Co chceme</strong>
        <div>
          <div className={styles.blueDot} />
          <div className={`${styles.blueDot} ${styles.blueDotBottom}`} />
        </div>
      </h1>
      {programmePoints.map((point) => {
        const { image, theme, paragraphs } = point;
        return (
          <article className={styles.programme} key={Math.random()}>
            <div className={styles.theme}>
              <span className={styles.themeImage}><Image src={`/${image}.svg`} layout="fill" objectFit="contain" alt={image} /></span> <p className={styles.title}>{theme}</p>
            </div>
            <div className={styles.content}>
              <div className={styles.title}></div>
              <div className={styles.text}>
                {paragraphs.map((paragraph) => <p key={paragraph}>{parse(paragraph)}</p>
                )}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Programme