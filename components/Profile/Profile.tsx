import Image, { StaticImageData } from 'next/image';
import parse from 'html-react-parser';
import styles from './Profile.module.css';

interface Props {
  title: string;
  profession: string;
  photo: StaticImageData;
  text: string;
  topic: string;
  email: string;
  nomination: string;
}

const Profile = ({ title, profession, photo, text, topic, email, nomination }: Props) => {

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
      <div className={styles.nomination}>
        <p>Nominace do:</p>
        {parse(nomination)}
      </div>
      <h2 className={styles.heading}>ČEMU SE VĚNUJE:
        <p>{topic}</p>
      </h2>
      <footer className={styles.footer}>
        <h2 className={styles.email}>{email}</h2>
        <a className={styles.email__icon} href={`mailto:${email}`}>
          <Image src="/email.svg" alt="email" width={50} height={50} />
        </a>
      </footer>
    </div>
  )
}

export default Profile;
