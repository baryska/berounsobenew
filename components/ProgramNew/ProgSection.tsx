import { useState, useEffect } from 'react';
import type { Sekce } from '../../data/program-new-data';
import { PERSONAS } from '../../data/program-new-data';
import { AccItem } from './AccItem';
import styles from './ProgramNew.module.css';

export function ProgSection({ sec, activePersona }: {
  sec: Sekce;
  activePersona: string | null;
}) {
  const [expandState, setExpandState] = useState<'default' | 'all' | 'none'>('default');

  useEffect(() => {
    setExpandState('default');
  }, [activePersona]);

  const activeTags = activePersona
    ? PERSONAS.find(p => p.id === activePersona)?.tags || []
    : [];

  const scored = sec.points.map(pt => {
    const hits = activeTags.filter(t => pt.tags.includes(t)).length;
    return { ...pt, score: hits };
  });

  const sorted = activePersona
    ? [...scored].sort((a, b) => b.score - a.score)
    : scored;

  const highlightedIds = new Set(sorted.filter(p => p.score > 0).map(p => p.id));

  const eyebrowClass = [
    styles.progEyebrow,
    sec.color === 'blue' ? styles.progEyebrowBlue : styles.progEyebrowGreen,
  ].join(' ');

  return (
    <section id={sec.id} className={styles.progSection}>
      <div id={`${sec.id}-hero`} className={styles.sectionHero}>
        <div className={styles.sectionHeroText}>
          <span className={eyebrowClass}>{sec.eyebrow}</span>
          <h2 className={styles.progHeadline}>
            {sec.headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && sec.headline.includes('\n') ? <br /> : ''}
              </span>
            ))}
          </h2>
        </div>
        <div
          className={styles.sectionHeroImage}
          style={{ backgroundImage: `url('${sec.heroImage}')` }}
        />
      </div>

      <div id={`${sec.id}-content`} className={styles.progContent}>
        <p className={styles.progPerex}>{sec.perex1}</p>
        {sec.perex2.split('\n\n').map((para, i) => (
          <p key={i} className={styles.progPerex}>{para}</p>
        ))}

        <div className={styles.progQuote}>
          <div className={styles.quotePhotoCol}>
            {sec.quoteAvatar ? (
              <img
                className={styles.quoteAvatarLarge}
                src={sec.quoteAvatar}
                alt={sec.quoteName}
              />
            ) : (
              <div className={styles.quoteAvatarPlaceholder} />
            )}
          </div>
          <div className={styles.quoteTextCol}>
            <blockquote className={styles.quoteBody}>{sec.quote}</blockquote>
            <div className={styles.quoteName}>— {sec.quoteName}</div>
          </div>
        </div>

        <div className={styles.accordion}>
          <div className={styles.accordionHeader}>
            <p className={styles.accordionTitle}>Programové body</p>
            <button
              className={styles.expandAllBtn}
              onClick={() => setExpandState(s => s === 'all' ? 'none' : 'all')}
            >
              {expandState === 'all' ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                  Sbalit vše
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                  Rozbalit vše
                </>
              )}
            </button>
          </div>

          {activePersona && highlightedIds.size > 0 && (
            <div className={styles.filterBar}>
              <span className={styles.filterLabel}>Seřazeno podle:</span>
              <span className={styles.filterChip}>
                {PERSONAS.find(p => p.id === activePersona)?.label}
              </span>
            </div>
          )}

          {sorted.map(pt => (
            <AccItem
              key={pt.id}
              point={pt}
              isHighlighted={!!activePersona && highlightedIds.has(pt.id)}
              forceOpen={expandState === 'all' || (expandState === 'default' && !!activePersona && highlightedIds.has(pt.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
