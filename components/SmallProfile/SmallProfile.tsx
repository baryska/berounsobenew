import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './SmallProfile.module.css';


interface Props {
  title: string;
  profession: string;
  text: string;
  topic: string;
}

const Profile = ({ title, profession, text, topic }: Props) => {

  return (
    <div className={styles.container}>
      <div className={styles.title__block}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <h2 className={styles.title__profession}>
          {profession}
        </h2>
      </div>
      <p className={styles.description}>
        {text}
      </p>
      <h2 className={styles.footer}>ČEMU SE VĚNUJE:
        <p>{topic}</p>
      </h2>
    </div>
  )
}

export default Profile;