import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ALL_SEKCE } from '../data/program-new-data';
import { TocTiles } from '../components/ProgramNew/TocTiles';
import { PersonaFilter } from '../components/ProgramNew/PersonaFilter';
import { SidebarNav } from '../components/ProgramNew/SidebarNav';
import { ProgSection } from '../components/ProgramNew/ProgSection';
import { FeedbackSection } from '../components/ProgramNew/FeedbackSection';
import styles from '../components/ProgramNew/ProgramNew.module.css';

const ProgramNewPage: NextPage = () => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [activePersona, setActivePersona] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.program === 'tajny') {
      setAllowed(true);
    } else {
      router.replace('/');
    }
  }, [router.isReady, router.query.program]);

  useEffect(() => {
    const saved = localStorage.getItem('bsn_persona');
    if (saved) setActivePersona(saved);
  }, []);

  useEffect(() => {
    if (activePersona) localStorage.setItem('bsn_persona', activePersona);
    else localStorage.removeItem('bsn_persona');
  }, [activePersona]);

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
          style={{ backgroundImage: "url('/namesti1.jpg')" }}
        />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Volební program 2026</span>
          <h1 className={styles.heroTitle}>
            Beroun pro lidi,<br />kteří tu skutečně žijí.
          </h1>
          <p className={styles.heroSubtitle}>
            Nejsme tu od toho, abychom slibovali zázraky. Jsme tu proto, že Beroun známe a víme, kde ho tlačí bota.
          </p>
        </div>
      </section>

      <TocTiles />
      <PersonaFilter active={activePersona} setActive={setActivePersona} />
      <SidebarNav />

      {ALL_SEKCE.map(sec => (
        <ProgSection key={sec.id} sec={sec} activePersona={activePersona} />
      ))}

      <FeedbackSection />
    </>
  );
};

export default ProgramNewPage;
