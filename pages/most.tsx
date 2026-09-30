import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { fetchFAQ, fetchImageGroups, fetchTimeline } from './api/bridge';
import FAQ from '../components/FAQs/faqs';
import Timeline from '../components/Timeline/Timeline';
import glass from '../public/iconlenstrans2.png';
import Image from 'next/image';
import styles from '../styles/Obchvat.module.css';


interface Img {
  asset: {
    url: string
  }
}

interface ImageGroup {
  description: string;
  title: string;
  type: string;
  key: number;
  images: Img[];
}

export interface TimelineContent {
  text: string,
  year: number
}

interface Props {
  groups: ImageGroup[],
  faqs: [
    {
      question: string,
      answer: string
    }
  ],
  timeline: TimelineContent[]
}



const Most = ({ groups, faqs, timeline }: Props) => {
  const [openLightbox, setOpenLightbox] = useState<{ group: string; index: number } | null>(null);
  if (groups === undefined) {
    return (
      <div>...loading</div>
    )
  }

  const pressGroup = groups.filter((group) => group.type === 'press');
  const docsGroup = groups.filter((group) => group.type === 'docs');

  return (
    <div className={styles.page}>
      {/* ---------- HERO: titulek + info o aktualizaci ---------- */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Beroun sobě · rekonstrukce mostu TGM</div>
          <h1>
            Vše, co víme o <em>rekonstrukci mostu TGM</em>
          </h1>
          <p className={styles.subtitle}>
            Informace o rekonstrukci mostu TGM i stavbě provizorního mostu se neustále mění. Tato stránka je
            aktualizována dle nejnovějšího stavu poznání. Datum poslední aktualizace: <strong>13. 2. 2026</strong>
          </p>
        </div>
      </header>

      {/* ---------- OTÁZKY A ODPOVĚDI ---------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ---------- ČASOVÁ OSA ---------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <Timeline timeline={timeline} />
        </div>
      </section>

      {/* ---------- DOSTUPNÁ DOKUMENTACE ---------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Dostupná dokumentace</h2>
          </div>
          <div className={styles.docGrid}>
            {docsGroup
              .sort((a, b) => a.key - b.key)
              .map((group, index) => (
                <div className={styles.docCard} key={group.title}>
                  <h3 className={styles.docTitle}>{group.description}</h3>
                  <button
                    className={styles.docOpen}
                    aria-label={`Zobrazit: ${group.description}`}
                    onClick={() => setOpenLightbox({ group: 'docsGroup', index })}
                  >
                    <Image src={glass} alt="" width={28} height={28} />
                  </button>
                  {openLightbox?.group === 'docsGroup' && openLightbox?.index === index ? (
                    <Lightbox
                      open
                      close={() => setOpenLightbox(null)}
                      slides={group.images.map((image) => ({ src: image.asset.url }))}
                      carousel={{ finite: group.images.length === 1 }}
                    />
                  ) : null}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ---------- Z TISKU ---------- */}
      <section className={`${styles.section} ${styles.sectionHighlight}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Z tisku</h2>
          </div>
          <div className={styles.docGrid}>
            {pressGroup
              .sort((a, b) => a.key - b.key)
              .map((group, index) => (
                <div className={`${styles.docCard} ${styles.press}`} key={group.title}>
                  <h3 className={styles.docTitle}>{group.description}</h3>
                  <button
                    className={styles.docOpen}
                    aria-label={`Zobrazit: ${group.description}`}
                    onClick={() => setOpenLightbox({ group: 'pressGroup', index })}
                  >
                    <Image src={glass} alt="" width={28} height={28} />
                  </button>
                  {openLightbox?.group === 'pressGroup' && openLightbox?.index === index ? (
                    <Lightbox
                      open
                      close={() => setOpenLightbox(null)}
                      slides={group.images.map((image) => ({ src: image.asset.url }))}
                      carousel={{ finite: group.images.length === 1 }}
                    />
                  ) : null}
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const groups = await fetchImageGroups();
  const faqs = await fetchFAQ();
  const timeline = await fetchTimeline();

  return {
    props: {
      groups,
      faqs,
      timeline
    },
    revalidate: 60,
  };
}

export default Most;
