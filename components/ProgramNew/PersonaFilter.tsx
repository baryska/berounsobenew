import { PERSONAS, type PersonaId } from '../../data/program-new-data';
import styles from './ProgramNew.module.css';

export function PersonaFilter({ active, toggle, reset }: {
  active: Set<PersonaId>;
  toggle: (id: PersonaId) => void;
  reset: () => void;
}) {
  return (
    <div id="program-filter" className={styles.filterSection} role="group" aria-label="Filtr programu podle životní situace">
      <span className={styles.filterSectionLabel}>Co pro mě máte, když:</span>
      <div className={styles.checkboxGroup}>
        {PERSONAS.map(p => (
          <label
            key={p.id}
            className={[
              styles.checkboxLabel,
              active.has(p.id) ? styles.checkboxLabelActive : '',
            ].filter(Boolean).join(' ')}
          >
            <input
              type="checkbox"
              className={styles.checkboxInput}
              checked={active.has(p.id)}
              onChange={() => toggle(p.id)}
            />
            <span className={styles.checkboxCustom} />
            <span className={styles.checkboxText}>{p.label}</span>
          </label>
        ))}
      </div>
      {active.size > 0 && (
        <button className={styles.filterClear} onClick={reset} type="button">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Zrušit filtry
        </button>
      )}
    </div>
  );
}
