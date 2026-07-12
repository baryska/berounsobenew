import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { PODCAST_EPISODES, PODCAST_SHOW_URL } from '../data/podcast-data';
import { EpisodeCard } from '../components/Podcast/EpisodeCard';
import styles from '../components/Podcast/Podcast.module.css';

const PodcastPage: NextPage = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Podcast Beroun tobě | Beroun sobě</title>
        <meta
          name="description"
          content="Podcast Beroun tobě — rozhovory o tom, jak může Beroun fungovat lépe. Poslouchejte přímo na webu nebo na Spotify."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroWave} aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              style={{
                height: `${18 + Math.abs(Math.sin(i * 1.7)) * 46}px`,
                animationDelay: `${(i % 9) * 0.24}s`,
              }}
            />
          ))}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Podcast</span>
          <h1 className={styles.heroTitle}>Beroun tobě</h1>
          <p className={styles.heroSubtitle}>
            Rozhovory s lidmi z kandidátky Beroun sobě o tom, jak může naše město fungovat lépe.
            Ke každé kapitole programu postupně přidáváme jeden díl.
          </p>
          <a
            className={styles.heroSpotify}
            href={PODCAST_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.42-1.021.6-1.561.3z" />
            </svg>
            Sledovat na Spotify
          </a>
        </div>
      </section>

      <section className={styles.episodes}>
        {PODCAST_EPISODES.map(episode => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            isActive={activeId === episode.id}
            onPlay={setActiveId}
          />
        ))}
      </section>

      <div className={styles.note}>
        <p className={styles.noteInner}>
          Další díly budeme zveřejňovat postupně přes celé léto zde i u jednotlivých kapitol{' '}
          <Link href="/program">
            <a>volebního programu</a>
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default PodcastPage;
