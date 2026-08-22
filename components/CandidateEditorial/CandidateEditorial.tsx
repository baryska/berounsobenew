import type { StaticImageData } from 'next/image';
import { renderBold } from '../../lib/renderBold';
import { fixNbsp } from '../../lib/nbsp';
import styles from './CandidateEditorial.module.css';

type CandidateEditorialProps = {
  number: number | string;
  name: string;
  titles?: string;
  tags: string[];
  perex: string;
  photo: string | StaticImageData;
  badge?: string;
  reverse?: boolean;
  onReadMore: () => void;
};

const CandidateEditorial = ({
  number,
  name,
  titles,
  tags,
  perex,
  photo,
  badge,
  reverse = false,
  onReadMore,
}: CandidateEditorialProps) => {
  const photoSrc = typeof photo === 'string' ? photo : photo.src;
  // Bez vodicí nuly – 1–9 je jedna číslice
  const numberLabel = String(number);
  const isSingleDigit = numberLabel.length === 1;

  const desktopNumberPosition = reverse
    ? isSingleDigit
      ? styles.desktopNumberRightSingle
      : styles.desktopNumberRightDouble
    : isSingleDigit
      ? styles.desktopNumberLeftSingle
      : styles.desktopNumberLeftDouble;

  const mobileNumberPosition = reverse
    ? isSingleDigit
      ? styles.mobileNumberRightSingle
      : styles.mobileNumberRightDouble
    : isSingleDigit
      ? styles.mobileNumberLeftSingle
      : styles.mobileNumberLeftDouble;

  return (
    <article className={styles.article}>
      {/* ================= DESKTOP (lg+) ================= */}
      <div className={`${styles.desktop} ${reverse ? styles.desktopReverse : ''}`}>
        {/* Foto + číslo: pevná výška = kotva bloku, definuje výšku sloupce. */}
        <div className={styles.desktopPhotoBox}>
          <span
            aria-hidden="true"
            className={`${styles.desktopNumber} ${desktopNumberPosition}`}
          >
            {numberLabel}
          </span>
          <img src={photoSrc} alt={name} className={styles.desktopPhoto} loading={Number(number) <= 2 ? "eager" : "lazy"}/>
        </div>

        {/* Text: kompaktní blok, vertikálně vycentrovaný vůči fotce */}
        <div className={styles.desktopText}>
          <h2 className={styles.desktopName}>{name}</h2>

          {titles ? <p className={styles.desktopTitles}>{fixNbsp(titles)}</p> : null}

          <div className={styles.desktopTags}>
            {badge ? (
              <span className={`${styles.pill} ${styles.desktopPill} ${styles.pillBadge}`}>
                {badge}
              </span>
            ) : null}
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${styles.pill} ${styles.desktopPill} ${styles.pillTag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className={styles.desktopPerex}>{renderBold(perex)}</p>

          <button
            type="button"
            onClick={onReadMore}
            className={`${styles.readMore} ${styles.desktopReadMore}`}
          >
            Celý profil &rarr;
          </button>
        </div>
      </div>

      {/* ================= MOBIL (<lg) ================= */}
      {/* Pevná geometrie: fotka je kotva a určuje výšku bloku.
          Textové prvky mají pevnou pozici vůči fotce — jméno u horní hrany,
          odkaz u dolní, bio ve stálém pásu mezi nimi. Kratší/delší bio už
          NEposouvá ostatní prvky. Pod blokem průběžná linka jako u rosteru. */}
      <div className={styles.mobile}>
        {/* Číslo na úrovni bloku, v mezeře fotka/text */}
        <span
          aria-hidden="true"
          className={`${styles.mobileNumber} ${mobileNumberPosition}`}
        >
          {numberLabel}
        </span>

        {/* Fotka: pevná výška = kotva bloku, postava stojí na dně. */}
        <div
          className={`${styles.mobilePhotoBox} ${reverse ? styles.mobilePhotoBoxReverse : ''}`}
        >
          <img
            src={photoSrc}
            alt={name}
            className={`${styles.mobilePhoto} ${
              reverse ? styles.mobilePhotoRight : styles.mobilePhotoLeft
            }`}
          />
        </div>

        {/* Textový sloupec: stejně vysoký jako fotka, prvky rozprostřené
            mezi horní a dolní hranu (jméno nahoře, odkaz dole) */}
        <div className={`${styles.mobileText} ${reverse ? styles.mobileTextReverse : ''}`}>
          {/* Horní zóna: jméno u horní hrany fotky */}
          <div>
            <h2 className={styles.mobileName}>{name}</h2>

            {titles ? <p className={styles.mobileTitles}>{fixNbsp(titles)}</p> : null}

            <div className={styles.mobileTags}>
              {badge ? (
                <span className={`${styles.pill} ${styles.mobilePill} ${styles.pillBadge}`}>
                  {badge}
                </span>
              ) : null}
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={`${styles.pill} ${styles.mobilePill} ${styles.pillTag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Střední zóna: celý perex (vejde se i nejdelší) */}
          <div className={styles.mobilePerexZone}>
            <p className={styles.mobilePerex}>{renderBold(perex)}</p>
          </div>

          {/* Dolní zóna: odkaz u dolní hrany fotky */}
          <button
            type="button"
            onClick={onReadMore}
            className={`${styles.readMore} ${styles.mobileReadMore}`}
          >
            Celý profil &rarr;
          </button>
        </div>

        {/* Linka hned pod fotkou, na koncích mizící do ztracena */}
        <span aria-hidden="true" className={styles.mobileDivider} />
      </div>
    </article>
  );
};

export default CandidateEditorial;
