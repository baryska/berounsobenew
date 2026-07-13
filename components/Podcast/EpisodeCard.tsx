import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { PodcastEpisode } from '../../data/podcast-data';
import styles from './Podcast.module.css';

const SPEEDS = [1, 1.25, 1.5, 2];

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function SpotifyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.42-1.021.6-1.561.3z" />
    </svg>
  );
}

type Props = {
  episode: PodcastEpisode;
  isActive: boolean;
  onPlay: (id: string) => void;
};

export function EpisodeCard({ episode, isActive, onPlay }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const draggingRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);

  // Když začne hrát jiný díl, tento se pozastaví.
  useEffect(() => {
    if (!isActive) audioRef.current?.pause();
  }, [isActive]);

  // Metadata se mohou načíst ještě před hydratací, takže událost
  // loadedmetadata proběhne dřív, než ji React začne poslouchat.
  // Po připojení komponenty proto délku přečteme přímo z elementu.
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audio.readyState >= HTMLMediaElement.HAVE_METADATA && isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      onPlay(episode.id);
      audio.play();
    }
  };

  const seekTo = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const max = duration || audio.duration || 0;
    const clamped = max > 0 ? Math.min(Math.max(time, 0), max) : Math.max(time, 0);
    audio.currentTime = clamped;
    setCurrent(clamped);
  };

  // Během tažení jezdce jen aktualizujeme zobrazenou pozici;
  // do audia se skočí až po puštění, aby se jezdec nepral s přehráváním.
  const handleSliderChange = (value: number) => {
    setCurrent(value);
    if (!draggingRef.current) seekTo(value);
  };

  const handleDragStart = () => {
    draggingRef.current = true;
  };

  const handleDragEnd = (value: number) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    seekTo(value);
  };

  const cycleSpeed = () => {
    const next = (speedIdx + 1) % SPEEDS.length;
    setSpeedIdx(next);
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next];
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!draggingRef.current) setCurrent(audio.currentTime);
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrent(0);
  };

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <article className={[styles.card, playing ? styles.cardActive : ''].filter(Boolean).join(' ')}>
      <audio
        ref={audioRef}
        src={episode.src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onDurationChange={() => setDuration(audioRef.current?.duration ?? 0)}
      />

      <div className={styles.cardTop}>
        <span className={styles.episodeBadge}>Díl {episode.number}</span>
        {episode.chapterLabel && episode.chapterHref && (
          <Link href={episode.chapterHref}>
            <a className={styles.chapterTag}>
              Kapitola: {episode.chapterLabel}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          </Link>
        )}
      </div>

      <h3 className={styles.cardTitle}>{episode.title}</h3>
      {episode.speakers.length > 0 && (
        <p className={styles.cardSpeakers}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>
          {episode.speakers.join(', ')}
        </p>
      )}
      <p className={styles.cardDesc}>{episode.description}</p>

      <div className={styles.player}>
        <button
          type="button"
          className={styles.playBtn}
          onClick={togglePlay}
          aria-label={playing ? `Pozastavit díl ${episode.number}` : `Přehrát díl ${episode.number}`}
        >
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.5-6.86a1.03 1.03 0 0 0 0-1.76L9.56 4.26A1.03 1.03 0 0 0 8 5.14z" />
            </svg>
          )}
        </button>

        <div className={styles.playerBody}>
          <div className={styles.seekRow}>
            <span className={styles.time}>{formatTime(current)}</span>
            <input
              type="range"
              className={styles.slider}
              min={0}
              max={duration || 0}
              step={0.1}
              value={duration > 0 ? Math.min(current, duration) : 0}
              disabled={duration <= 0}
              onChange={e => handleSliderChange(Number(e.target.value))}
              onPointerDown={handleDragStart}
              onPointerUp={e => handleDragEnd(Number(e.currentTarget.value))}
              onTouchStart={handleDragStart}
              onTouchEnd={e => handleDragEnd(Number(e.currentTarget.value))}
              style={{ ['--progress' as string]: `${progress}%` }}
              aria-label={`Pozice přehrávání dílu ${episode.number}`}
            />
            <span className={styles.time}>{formatTime(duration)}</span>
          </div>

          <div className={styles.controlsRow}>
            <button type="button" className={styles.skipBtn} onClick={() => seekTo(current - 15)} aria-label="Zpět o 15 sekund">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" />
              </svg>
              15 s
            </button>
            <button type="button" className={styles.skipBtn} onClick={() => seekTo(current + 30)} aria-label="Vpřed o 30 sekund">
              30 s
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
              </svg>
            </button>
            <button type="button" className={styles.speedBtn} onClick={cycleSpeed} aria-label={`Rychlost přehrávání ${SPEEDS[speedIdx]}×`}>
              {SPEEDS[speedIdx]}×
            </button>
            {episode.spotifyUrl && (
              <a className={styles.spotifyLink} href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <SpotifyIcon />
                Poslechnout na Spotify
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
