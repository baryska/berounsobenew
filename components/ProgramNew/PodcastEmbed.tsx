import type { ReactNode } from 'react';
import styles from './ProgramNew.module.css';

type Props = {
  src: string;
  title: string;
  description?: string;
  variant?: 'hero' | 'section';
  note?: ReactNode;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
};

export function PodcastEmbed({ src, title, description, variant = 'section', note, spotifyUrl, appleUrl, youtubeUrl }: Props) {
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
          <p className={styles.podcastEyebrow}>Podcast Beroun tobě</p>
          <p className={styles.podcastTitle}>{title}</p>
          {description && <p className={styles.podcastDesc}>{description}</p>}
        </div>
        <div className={styles.podcastPlayer}>
          <audio controls preload="none" src={src} className={styles.podcastAudio}>
            Váš prohlížeč nepodporuje přehrávání audia.
          </audio>
          <div className={styles.podcastLinks}>
            {spotifyUrl && (
              <a
                className={styles.podcastSpotifyLink}
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.42-1.021.6-1.561.3z" />
                </svg>
                Spotify
              </a>
            )}
            {appleUrl && (
              <a
                className={styles.podcastAppleLink}
                href={appleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.56 12.72c-.02-2.5 2.04-3.7 2.13-3.76-1.16-1.7-2.97-1.93-3.61-1.95-1.54-.16-3 .9-3.78.9-.78 0-1.98-.88-3.26-.86-1.68.03-3.22.98-4.08 2.48-1.74 3.02-.44 7.5 1.25 9.96.83 1.2 1.81 2.55 3.11 2.5 1.25-.05 1.72-.81 3.23-.81 1.51 0 1.94.81 3.26.78 1.35-.02 2.2-1.22 3.02-2.43.95-1.39 1.34-2.74 1.36-2.81-.03-.01-2.61-1-2.63-3.99zM15.08 5.62c.69-.83 1.15-1.99 1.03-3.14-.99.04-2.19.66-2.9 1.49-.64.73-1.19 1.91-1.04 3.04 1.1.09 2.23-.56 2.91-1.39z" />
                </svg>
                Apple Podcasts
              </a>
            )}
            {youtubeUrl && (
              <a
                className={styles.podcastYoutubeLink}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.6 15.6V8.4l6.24 3.6L9.6 15.6z" />
                </svg>
                YouTube
              </a>
            )}
          </div>
        </div>
        {note && <p className={styles.podcastNote}>{note}</p>}
      </div>
    </div>
  );
}
