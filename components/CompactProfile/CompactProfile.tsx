import Image, { StaticImageData } from 'next/image';
import styles from './CompactProfile.module.css';

interface Props {
  title: string;
  profession: string;
  photo: StaticImageData;
  text: string;
  variant?: 'blue' | 'green' | 'orange';
}

const CompactProfile = ({ title, profession, photo, text, variant = 'blue' }: Props) => {

  return (
    <div className={`${styles.container} ${styles[`variant_${variant}`]}`}>
      <div className={styles.header}>
        <div className={styles.profileImg}>
          <Image
            src={photo}
            alt={title}
            fill
            sizes="120px"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>
        <div className={styles.title__block}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.title__profession}>{profession}</h2>
        </div>
      </div>
      <p className={styles.description}>{text}</p>
    </div>
  )
}

export default CompactProfile;
