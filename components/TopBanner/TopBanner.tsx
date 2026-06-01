import styles from './TopBanner.module.css';

export default function TopBanner() {
  return (
    <div className={styles.banner} role="region" aria-label="Oznámení">
      <div className={styles.bannerInner}>
        <span className={styles.text}>
          Berounská karta (beroun.ka) <span className={styles.textLight}>|</span> <span className={styles.textLight}>výhody pro ty, kteří tu jsou doma</span>
        </span>
        <a
          href="https://www.berounskakarta.cz"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Zjistit více
          <span className={styles.arrow} aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
