import { PERSONAS } from '../../data/program-new-data';
import styles from './ProgramNew.module.css';

export function PersonaFilter({ active, setActive }: {
  active: string | null;
  setActive: (id: string | null) => void;
}) {
  return (
    <div className={styles.filterSection}>
      <span className={styles.filterSectionLabel}>Kdo jsem:</span>
      <div className={styles.checkboxGroup}>
        {PERSONAS.map(p => (
          <label key={p.id} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              className={styles.checkboxInput}
              checked={active === p.id}
              onChange={() => setActive(active === p.id ? null : p.id)}
            />
            <span className={styles.checkboxCustom} />
            <span className={styles.checkboxText}>{p.label}</span>
          </label>
        ))}
      </div>
      {active && (
        <button className={styles.filterClear} onClick={() => setActive(null)}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Zrušit
        </button>
      )}
    </div>
  );
}
