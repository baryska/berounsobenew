import type { ReactNode } from 'react';
import styles from './ProgramNew.module.css';

type Props = {
  src: string;
  title: string;
  description?: string;
  variant?: 'hero' | 'section';
  note?: ReactNode;
};

export function PodcastEmbed({ src, title, description, variant = 'section', note }: Props) {
  const isHero = variant === 'hero';
  const outerClass = isHero ? styles.podcastBand : styles.podcastInline;
  const innerClass = [styles.podcastInner, isHero ? styles.podcastInnerHero : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <div className={styles.podcastIcon} aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="8" y1="22" x2="16" y2="22" />
          </svg>
        </div>
        <div className={styles.podcastMeta}>
          <p className={styles.podcastEyebrow}>Podcast Beroun sobě</p>
          <p className={styles.podcastTitle}>{title}</p>
          {description && <p className={styles.podcastDesc}>{description}</p>}
        </div>
        <audio controls preload="none" src={src} className={styles.podcastAudio}>
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
        {note && <p className={styles.podcastNote}>{note}</p>}
      </div>
    </div>
  );
}
