import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { fetchFAQ, fetchImageGroups, fetchTimeline } from './api/bridge';
import FAQ from '../components/FAQs/faqs';
import Timeline from '../components/Timeline/Timeline';
import glass from '../public/iconlenstrans2.png';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


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
    <div className={styles.bridgeSection}>
      <div className={styles.bridgeHeader}>
      <h2 className={styles.bridgeTitle}>
        <strong>VŠE, CO VÍME O REKONSTRUKCI MOSTU TGM</strong>
        <div>
          <div className={styles.blueDot} /> <div className={styles.blueDot} />
        </div>
      </h2>
      <p className={styles.bridgeInfo}>Informace o rekonstrukci mostu TGM i stavbě provizorního mostu se neustále mění.
        Tato stránka je aktualizována dle nejnovějšího stavu poznání. Datum poslední aktualizace: <strong>2. 2. 2025</strong></p>
        </div>
      <FAQ faqs={faqs} />
      <Timeline timeline={timeline} />
      <h2 className={styles.heading}>DOSTUPNÁ DOKUMENTACE:</h2>
      <div className={styles.docs}>
        {docsGroup
          .sort((a, b) => a.key - b.key)
          .map((group, index) => (
            <div className={styles.doc} style={{background: '#ebf8ff'}} key={group.title}>
              <h2>{group.description}</h2>
              <div style={{ textAlign: 'right' }}>
                <button onClick={() => setOpenLightbox({ group: 'docsGroup', index })}>
                  <Image src={glass} alt="glass" width={40} height={40} />
                </button>
              </div>
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
      <h2 className={styles.heading}>Z TISKU:</h2>
      <div className={styles.docs}>
        {pressGroup
          .sort((a, b) => a.key - b.key)
          .map((group, index) => (
            <div className={styles.doc}  style={{background: '#f7f7f7'}} key={group.title}>
              <h2>{group.description}</h2>
              <div style={{ textAlign: 'right' }}>
                <button onClick={() => setOpenLightbox({ group: 'pressGroup', index })}>
                  <Image src={glass} alt="glass" width={40} height={40} />
                </button>
              </div>
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
