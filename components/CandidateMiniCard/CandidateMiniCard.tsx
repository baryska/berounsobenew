import styles from './CandidateMiniCard.module.css';

type CandidateMiniCardProps = {
  number: number | string;
  name: string;
  titles?: string;
  shortText: string;
  photo: string | { src: string };
  // tags a onReadMore záměrně ignorujeme — roster 11–21 je nemá
  tags?: string[];
  onReadMore?: () => void;
};

const CandidateMiniCard = ({
  number,
  name,
  titles,
  shortText,
  photo,
}: CandidateMiniCardProps) => {
  const photoSrc = typeof photo === 'string' ? photo : photo.src;
  const numberLabel = String(number).padStart(2, '0');

  return (
    <article className={styles.card}>
      {/* Číslo a postava stojí spolu na lince a překrývají se */}
      <div className={styles.mediaBox}>
        <span aria-hidden="true" className={styles.number}>
          {numberLabel}
        </span>
        {/* Holý cutout na lince — čtvercové fotky, rám 1:1 */}
        <div className={styles.photoBox}>
          <img src={photoSrc} alt={name} className={styles.photo} />
        </div>
      </div>

      {/* Text pod linkou — nikdy přes fotku */}
      <div className={styles.text}>
        <h3 className={styles.name}>{name}</h3>
        {titles && titles.trim() ? <p className={styles.titles}>{titles}</p> : null}
        <p className={styles.shortText}>{shortText}</p>
      </div>
    </article>
  );
};

export default CandidateMiniCard;
