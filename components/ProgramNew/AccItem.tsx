import { useState, useEffect, useRef } from 'react';
import type { ProgramPoint } from '../../data/program-new-data';
import { RichText } from './RichText';
import styles from './ProgramNew.module.css';

export function AccItem({ point, forceOpen, isHighlighted }: {
  point: ProgramPoint;
  forceOpen: boolean;
  isHighlighted?: boolean;
}) {
  const [manualToggle, setManualToggle] = useState<boolean | null>(null);
  const prevForceOpen = useRef(forceOpen);

  useEffect(() => {
    if (forceOpen !== prevForceOpen.current) {
      setManualToggle(null);
      prevForceOpen.current = forceOpen;
    }
  }, [forceOpen]);

  const open = manualToggle !== null ? manualToggle : forceOpen;

  const itemClass = [
    styles.accItem,
    open ? styles.accItemOpen : '',
    isHighlighted ? styles.accItemHighlighted : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={itemClass}>
      <button
        className={styles.accHeader}
        onClick={() => setManualToggle(prev => prev !== null ? !prev : !forceOpen)}
        type="button"
        aria-expanded={open}
      >
        <span className={styles.accDot} />
        <span className={styles.accHeading}>{point.heading}</span>
        {isHighlighted && <span className={styles.priorityBadge}>Pro vás</span>}
        <svg className={styles.accChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.accBody}>
        <div className={styles.accBodyInner}>
          {point.text.split('\n\n').map((para, i, arr) => (
            <p key={i} style={{ marginBottom: i < arr.length - 1 ? '0.75rem' : 0 }}><RichText text={para} /></p>
          ))}
        </div>
      </div>
    </div>
  );
}
