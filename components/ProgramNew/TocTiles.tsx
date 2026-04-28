import styles from './ProgramNew.module.css';

interface TocItem {
  id: string;
  label: string;
  subtitle: string;
  colorClass: 'green' | 'blue';
  icon: JSX.Element;
}

const TOC_ITEMS: TocItem[] = [
  {
    id: 'chytre',
    label: 'Chytré město',
    subtitle: 'Berounská karta, aplikace a otevřená data',
    colorClass: 'blue',
    icon: <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="12" y="4" width="24" height="40" rx="4" fill="rgba(60,150,215,0.12)" stroke="#3c96d7" strokeWidth="2"/><circle cx="24" cy="38" r="2" fill="#3c96d7"/><rect x="18" y="12" width="12" height="8" rx="1.5" fill="rgba(60,150,215,0.18)" stroke="#3c96d7" strokeWidth="1.5"/><line x1="18" y1="25" x2="30" y2="25" stroke="#3c96d7" strokeWidth="1.5"/><line x1="18" y1="29" x2="26" y2="29" stroke="#3c96d7" strokeWidth="1.5"/></svg>,
  },
  {
    id: 'dustojne',
    label: 'Veřejný prostor a sídliště',
    subtitle: 'Parkování, úklid a život na sídlištích',
    colorClass: 'green',
    icon: <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="20" width="14" height="22" rx="2" fill="rgba(0,153,77,0.12)" stroke="#00994d" strokeWidth="2"/><rect x="28" y="8" width="14" height="34" rx="2" fill="rgba(0,153,77,0.12)" stroke="#00994d" strokeWidth="2"/><circle cx="13" cy="27" r="1.5" fill="#00994d"/><circle cx="13" cy="33" r="1.5" fill="#00994d"/><circle cx="35" cy="16" r="1.5" fill="#00994d"/><circle cx="35" cy="22" r="1.5" fill="#00994d"/><circle cx="35" cy="28" r="1.5" fill="#00994d"/><line x1="22" y1="42" x2="26" y2="42" stroke="#00994d" strokeWidth="2"/></svg>,
  },
];

export function TocTiles() {
  return (
    <nav className={styles.tocSection}>
      <h2 className={styles.tocTitle}>Co v programu najdete</h2>
      <div className={styles.tocGrid}>
        {TOC_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={[styles.tocTile, item.colorClass === 'green' ? styles.tocTileGreen : styles.tocTileBlue].join(' ')}
            onClick={e => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className={styles.tocIcon}>{item.icon}</div>
            <div className={styles.tocText}>
              <span className={styles.tocLabel}>{item.label}</span>
              <span className={styles.tocSubtitle}>{item.subtitle}</span>
            </div>
            <svg className={styles.tocArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18"/></svg>
          </a>
        ))}
      </div>
    </nav>
  );
}
