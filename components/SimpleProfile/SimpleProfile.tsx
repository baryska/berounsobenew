import Image from 'next/image';
import styles from './SimpleProfile.module.css';

interface Props {
  name: string;
  photo: string;
  badge?: string;
}

const SimpleProfile = ({ name, photo, badge }: Props) => {
  return (
    <div className={styles.container}>
      {badge && (
        <span className={styles.badge}>{badge}</span>
      )}
      <div className={styles.photoWrapper}>
        <Image 
          src={photo} 
          alt={name}
          width={112}
          height={112}
          className={styles.photo}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
    </div>
  )
}

export default SimpleProfile;
