import styles from './SmallProfile.module.css';


interface Props {
  title: string;
  profession: string;
  text: string;
  topic: string;
  nomination?: string
}

const Profile = ({ title, profession, text, topic, nomination }: Props) => {

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
      <div className={styles.nomination}>
        <p>Nominace do:</p>
        {nomination}
      </div>
      <h2 className={styles.footer}>ČEMU SE VĚNUJE:
        <p>{topic}</p>
      </h2>
    </div>
  )
}

export default Profile;