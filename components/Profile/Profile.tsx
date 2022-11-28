import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './Profile.module.css';


interface Props {
  title: string;
  profession: string;
  photo: StaticImageData;
  text: string;
  topic: string;
  email: string;
}

const Profile = ({ title, profession, photo, text, topic, email }: Props) => {

  return (
    <div className={styles.container}>
      <div
        className={styles.profileImg}
        style={{ backgroundImage: `url(${photo.src})` }}
      />
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
      <h2 className={styles.heading}>ČEMU SE VĚNUJE:
        <p>{topic}</p>
      </h2>
      <footer className={styles.footer}>
        <h2 className={styles.email}>{email}</h2>
        <a className={styles.email__icon} href={`mailto:${email}`}>
          <Image src="/email.svg" alt="email" width="50px" height="50px" />
        </a>
      </footer>
    </div>
  )
}

export default Profile;