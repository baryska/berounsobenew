import type { Sekce } from '../../data/program-new-data';
import styles from './ProgramNew.module.css';

const TOC_COLOR_MAP: Record<string, string> = {
  chytre: styles.tocTilePrimary,
  dostupne: styles.tocTilePrimary,
  zelene: styles.tocTileSecondary,
  vzdelane: styles.tocTileAccent,
  lokalne: styles.tocTileAccent,
  udrzitelne: styles.tocTileSecondary,
  transparentne: styles.tocTilePrimary,
};

export function TocTiles({ orderedSekce }: { orderedSekce: Sekce[] }) {
  return (
    <nav className={styles.tocSection}>
      <h2 className={styles.tocTitle}>Jaké kapitoly v programu najdu?</h2>
      <div className={styles.tocGrid}>
        {orderedSekce.map((sec, i) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={[styles.tocTile, TOC_COLOR_MAP[sec.id] || styles.tocTilePrimary].join(' ')}
            onClick={e => {
              e.preventDefault();
              document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className={styles.tocText}>
              <span className={styles.tocLabel}>{sec.eyebrow}</span>
              <span className={styles.tocSubtitle}>{sec.headline}</span>
            </div>
            <svg className={styles.tocArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18"/></svg>
          </a>
        ))}
      </div>
    </nav>
  );
}
