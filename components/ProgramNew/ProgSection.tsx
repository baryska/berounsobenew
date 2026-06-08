import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Sekce } from '../../data/program-new-data';
import type { SekceView } from '../../lib/buildProgram';
import { AccItem } from './AccItem';
import { RichText } from './RichText';
import styles from './ProgramNew.module.css';

const HERO_COLOR_MAP: Record<string, string> = {
  chytre: styles.sectionHeroPrimary,
  dostupne: styles.sectionHeroPrimary,
  zelene: styles.sectionHeroSecondary,
  vzdelane: styles.sectionHeroAccent,
  lokalne: styles.sectionHeroAccent,
  udrzitelne: styles.sectionHeroSecondary,
  transparentne: styles.sectionHeroPrimary,
};

function SectionHeader({ sec }: { sec: Sekce }) {
  const eyebrowClass = styles.progEyebrow;

  const heroClass = [
    styles.sectionHero,
    HERO_COLOR_MAP[sec.id] || styles.sectionHeroPrimary,
  ].join(' ');

  return (
    <div id={`${sec.id}-hero`} className={[heroClass, !sec.heroImage ? styles.sectionHeroFull : ''].filter(Boolean).join(' ')}>
      <div className={styles.sectionHeroText}>
        {sec.eyebrow && <span className={eyebrowClass}>{sec.eyebrow}</span>}
        <h2 className={styles.progHeadline}>
          {sec.headline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && sec.headline.includes('\n') ? <br /> : ''}
            </span>
          ))}
        </h2>
      </div>
      {sec.heroImage && (
        <div
          className={styles.sectionHeroImage}
          style={{ backgroundImage: `url('${sec.heroImage}')` }}
        />
      )}
    </div>
  );
}

export function ProgIntroSection({ sec }: { sec: Sekce }) {
  return (
    <section id={sec.id} className={styles.progSection}>
      <div id={`${sec.id}-content`} className={styles.progContent}>
        <h2 className={styles.progHeadline} style={{ color: '#161534' }}>
          {sec.headline}
        </h2>
        <p className={styles.progPerex}><RichText text={sec.perex1} /></p>
        {sec.perex2.split('\n\n').map((para, i) => (
          <p key={i} className={styles.progPerex}><RichText text={para} /></p>
        ))}
      </div>
    </section>
  );
}

export function ProgSection({ view, filterActive }: {
  view: SekceView;
  filterActive: boolean;
}) {
  const { sekce: sec, visiblePoints, hiddenPoints, collapsed } = view;
  const [expandState, setExpandState] = useState<'default' | 'all' | 'none'>('default');

  useEffect(() => {
    setExpandState('default');
  }, [filterActive, view.score]);

  const allPoints = [...visiblePoints, ...hiddenPoints];
  const priorityIds = new Set(visiblePoints.map(p => p.id));

  return (
    <section id={sec.id} className={styles.progSection}>
      <SectionHeader sec={sec} />

      <div id={`${sec.id}-content`} className={styles.progContent}>
        <p className={styles.progPerex}><RichText text={sec.perex1} /></p>
        {sec.perex2.split('\n\n').map((para, i) => (
          <p key={i} className={styles.progPerex}><RichText text={para} /></p>
        ))}

        {sec.ctaUrl && (
          <a href={sec.ctaUrl} target="_blank" rel="noopener noreferrer" className={styles.sectionCta}>
            {sec.ctaLabel || sec.ctaUrl}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        )}

        {sec.quote && (
          <div className={styles.progQuote}>
            <div className={styles.quotePhotoCol}>
              {sec.quoteAvatar ? (
                <Image
                  className={styles.quoteAvatarLarge}
                  src={sec.quoteAvatar}
                  alt={sec.quoteName}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center 15%"
                  quality={90}
                  sizes="145px"
                />
              ) : (
                <div className={styles.quoteAvatarPlaceholder} />
              )}
            </div>
            <div className={styles.quoteTextCol}>
              <blockquote className={styles.quoteBody}><RichText text={sec.quote} /></blockquote>
              <div className={styles.quoteName}>— {sec.quoteName}</div>
            </div>
          </div>
        )}

        {allPoints.length > 0 && (
          <div className={styles.accordion}>
            <div className={styles.accordionHeader}>
              <p className={styles.accordionTitle}>Programové body</p>
              <button
                className={styles.expandAllBtn}
                onClick={() => setExpandState(s => s === 'all' ? 'none' : 'all')}
                type="button"
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

            {allPoints.map(pt => {
              const isPriority = filterActive && !collapsed && priorityIds.has(pt.id);
              return (
                <AccItem
                  key={pt.id}
                  point={pt}
                  isHighlighted={isPriority}
                  forceOpen={
                    expandState === 'all' ||
                    (expandState === 'default' && isPriority)
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
