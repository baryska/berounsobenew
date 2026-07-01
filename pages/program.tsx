import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { type PersonaId } from '../data/program-new-data';
import { buildProgram } from '../lib/buildProgram';
import { TocTiles } from '../components/ProgramNew/TocTiles';
import { PersonaFilter } from '../components/ProgramNew/PersonaFilter';
import { SidebarNav } from '../components/ProgramNew/SidebarNav';
import { ProgSection, ProgIntroSection } from '../components/ProgramNew/ProgSection';
import { FeedbackSection } from '../components/ProgramNew/FeedbackSection';
import { PodcastEmbed } from '../components/ProgramNew/PodcastEmbed';
import styles from '../components/ProgramNew/ProgramNew.module.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={[styles.scrollTop, visible ? styles.scrollTopVisible : ''].filter(Boolean).join(' ')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Zpět nahoru"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

function parseFiltr(raw: string | string[] | undefined): Set<PersonaId> {
  if (!raw || Array.isArray(raw)) return new Set();
  const valid: PersonaId[] = ['rodina','senior','student','auto','mhd','cyklista','podnikatel','sidliste','miluji'];
  const first = raw.split(',').find((id): id is PersonaId => valid.includes(id as PersonaId));
  return first ? new Set([first]) : new Set();
}

const ProgramPage: NextPage = () => {
  const router = useRouter();
  const [active, setActive] = useState<Set<PersonaId>>(new Set());

  useEffect(() => {
    if (!router.isReady) return;
    const fromUrl = parseFiltr(router.query.filtr);
    if (fromUrl.size > 0) setActive(fromUrl);
  }, [router.isReady]);

  const syncUrl = useCallback((next: Set<PersonaId>) => {
    const query: Record<string, string> = {};
    if (next.size > 0) query.filtr = [...next].join(',');
    router.replace({ pathname: router.pathname, query }, undefined, { shallow: true });
  }, [router]);

  const toggle = useCallback((id: PersonaId) => {
    setActive(prev => {
      const next = new Set<PersonaId>();
      if (!prev.has(id)) next.add(id);
      syncUrl(next);
      return next;
    });
  }, [syncUrl]);

  const reset = useCallback(() => {
    setActive(new Set());
    syncUrl(new Set());
  }, [syncUrl]);

  const view = useMemo(() => buildProgram(active), [active]);

  const orderedSekce = useMemo(
    () => view.sekce.map(sv => sv.sekce),
    [view]
  );

  return (
    <>
      <Head>
        <title>Program | Beroun sobě</title>
        <meta name="description" content="Volební program 2026 – Beroun sobě" />
      </Head>

      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: "url('/namesti_husovo.jpg')" }}
        />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Volební program 2026</span>
          <h1 className={styles.heroTitle}>
            Tolik nápadů, jak zlepšit život v Berouně, <br /> že se nám nevešly na billboard.
          </h1>
          <p className={styles.heroSubtitle}>
            Žádný seznam vzletných přání, které zůstanou v šuplíku, ale konkrétní projekty, kterými obratem začneme zlepšovat život všech obyvatel Berouna. Potřebujeme jen váš hlas.
          </p>
        </div>
      </section>

      <PodcastEmbed
        variant="hero"
        src="/01-barbora-v2.mp3"
        title="Úvodní díl: Beroun může fungovat lépe"
        description="Proč vstoupila do komunální politiky? Jakou vizi má pro Beroun? Odpovídá berounská zastupitelka a kandidátka na starostku Barbora Skálová, která už deset let bojuje za vodovod v Hostímě."
        spotifyUrl="https://open.spotify.com/episode/5nNgcNxTmpbH98XXSIYkyJ?si=5301e6d37c1449ca"
        note={
          <>
            Další díly budeme zveřejňovat postupně přes celé léto u jednotlivých kapitol programu. Všechny díly najdete i na{' '}
            <a
              className={styles.podcastSpotifyInline}
              href="https://open.spotify.com/show/5IJyRDm6FBcBa0trvk1FE3?si=2697036db0bf4231"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.42-1.021.6-1.561.3z" />
              </svg>
              Spotify
            </a>
            .
          </>
        }
      />

      <TocTiles orderedSekce={orderedSekce} />
      <PersonaFilter active={active} toggle={toggle} reset={reset} />
      <SidebarNav orderedSekce={orderedSekce} />

      {view.microcopy && (
        <div className={styles.microcopyBanner}>
          <p className={styles.microcopyText}>{view.microcopy}</p>
        </div>
      )}

      {view.intro.map(sec => (
        <ProgIntroSection key={sec.id} sec={sec} />
      ))}

      {view.sekce.map(sv => (
        <ProgSection key={sv.sekce.id} view={sv} filterActive={active.size > 0} filterKey={[...active].sort().join(',')} />
      ))}

      <FeedbackSection />
      <ScrollToTop />
    </>
  );
};

export default ProgramPage;
