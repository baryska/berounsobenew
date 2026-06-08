import { PERSONAS, type PersonaId } from '../../data/program-new-data';
import styles from './ProgramNew.module.css';

export function PersonaFilter({ active, toggle, reset }: {
  active: Set<PersonaId>;
  toggle: (id: PersonaId) => void;
  reset: () => void;
}) {
  return (
    <div className={styles.filterSection} role="group" aria-label="Filtr programu podle životní situace">
      <span className={styles.filterSectionLabel}>Kdo jsem:</span>
      <div className={styles.checkboxGroup}>
        {PERSONAS.map(p => (
          <button
            key={p.id}
            type="button"
            role="switch"
            aria-pressed={active.has(p.id)}
            aria-checked={active.has(p.id)}
            className={[
              styles.personaBtn,
              active.has(p.id) ? styles.personaBtnActive : '',
            ].filter(Boolean).join(' ')}
            onClick={() => toggle(p.id)}
          >
            {p.label}
          </button>
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
