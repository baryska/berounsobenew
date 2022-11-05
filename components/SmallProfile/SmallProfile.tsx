import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './SmallProfile.module.css';
import { useState } from 'react';

interface Props {
  title: string;
  profession: string;
  photo: StaticImageData;
  number: number;
}

function SmallProfile({ title, profession, photo, number }: Props) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${photo.src})` }}
          onMouseEnter={() => setInfoOpen(true)}
          onMouseLeave={() => setInfoOpen(false)}
          onClick={() => setInfoOpen(!infoOpen)}
        >
          {!infoOpen && (
            <button className={styles.infoIcon} onClick={() => setInfoOpen(true)}>
              <Image src="/info.svg" alt="info" width="30px" height="30px" />
            </button>
          )}
          <button className={styles.infoIcon} onClick={() => setInfoOpen(true)}>
            <Image src="/info.svg" alt="info" width="30px" height="30px" />
          </button>
          <div className={styles.info} style={infoOpen ? { transform: 'translateY(70%) translateZ(0)' } : { transform: 'translateY(100%) translateY(-55px) translateZ(0)' }}>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
            <p className={styles.profession}>{profession}</p>
          </div>

        </div>
      </main>
    </>
  )
}

export default SmallProfile