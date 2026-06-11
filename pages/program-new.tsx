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
  const ids = raw.split(',').filter((id): id is PersonaId => valid.includes(id as PersonaId));
  return new Set(ids);
}

const ProgramNewPage: NextPage = () => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [active, setActive] = useState<Set<PersonaId>>(new Set());

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.program === 'tajny') {
      setAllowed(true);
      const fromUrl = parseFiltr(router.query.filtr);
      if (fromUrl.size > 0) setActive(fromUrl);
    } else {
      router.replace('/');
    }
  }, [router.isReady, router.query.program]);

  const syncUrl = useCallback((next: Set<PersonaId>) => {
    const query: Record<string, string> = { program: 'tajny' };
    if (next.size > 0) query.filtr = [...next].join(',');
    router.replace({ pathname: router.pathname, query }, undefined, { shallow: true });
  }, [router]);

  const toggle = useCallback((id: PersonaId) => {
    setActive(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
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

  if (!allowed) return null;

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
        <ProgSection key={sv.sekce.id} view={sv} filterActive={active.size > 0} />
      ))}

      <FeedbackSection />
      <ScrollToTop />
    </>
  );
};

export default ProgramNewPage;
