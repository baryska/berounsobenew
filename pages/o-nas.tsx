import type { NextPage, GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import CandidateEditorial from '../components/CandidateEditorial/CandidateEditorial';
import CandidateMiniCard from '../components/CandidateMiniCard/CandidateMiniCard';
import CandidateModal, { CandidateModalData } from '../components/CandidateModal/CandidateModal';
import { renderBold } from '../lib/renderBold';
import { FeaturedCandidates, OtherCandidates, Candidate } from '../data/candidates';
import styles from '../styles/ONas.module.css';

// Přístupový klíč – stránka se zobrazí jen s ?klic=<tato hodnota>, jinak vrací 404.
const ONAS_PREVIEW_KEY = 'nahled-onas-2026';

const ONas: NextPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateModalData | null>(null);

  const handleOpenModal = (candidate: Candidate) => {
    setSelectedCandidate({
      // number a badge musí jít do modálu taky – bez number se nevykreslí
      // velké pořadové číslo, bez badge zelená pilulka v hlavičce
      number: candidate.number,
      name: candidate.name,
      titles: candidate.titles,
      tags: candidate.tags,
      badge: candidate.badge,
      fullText: candidate.fullText,
      photo: candidate.photo,
    });
  };

  const handleCloseModal = () => setSelectedCandidate(null);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>O nás | Beroun sobě</title>
        <meta name="description" content="Kandidáti Beroun sobě – lidé, kteří chtějí posunout Beroun dál." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nove_logo.png" type="image/png" />
        <meta name="referrer" content="no-referrer" />
        {/* náhled – neindexovat */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className={styles.main}>
        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Lidé, kteří chtějí{' '}
            {/* podtržení jako inline background → láme se spolu s textem, vždy pod slovy */}
            <span className={styles.heroHighlight}>posunout Beroun</span> dál.
          </h1>

          {/* Přes renderBold: **tučně** i nedělitelné mezery za předložkami
              řeší stejná funkce jako u medailonků, ať se to nerozejde. */}
          <p className={styles.heroPerex}>
            {renderBold(
              'Jsme **nezávislá, občanská kandidátka** a nejsilnější opoziční síla v Berouně. ' +
                'Za víc než deset let v komunální politice jsme pochopili, co město skutečně potřebuje. ' +
                'Náš tým jsme posílili o nové osobnosti a odborníky – a dnes jsme připraveni Beroun zodpovědně vést.'
            )}
          </p>

        </section>

        {/* ===== PRVNÍCH 10 – editorial layout ===== */}
        {/* na mobilu full-bleed (bez horizontálního paddingu), aby absolutní vrstvy mířily na okraj viewportu */}
        <section className={styles.editorialSection}>
          {FeaturedCandidates.map((candidate, i) => (
            <CandidateEditorial
              key={candidate.number}
              number={candidate.number}
              name={candidate.name}
              titles={candidate.titles}
              tags={candidate.tags}
              perex={candidate.perex}
              photo={candidate.photo}
              badge={candidate.badge}
              reverse={i % 2 === 1}
              onReadMore={() => handleOpenModal(candidate)}
            />
          ))}
        </section>

        {/* ===== KANDIDÁTI 11–21 – roster ===== */}
        <section className={styles.rosterSection}>

          <div className={styles.rosterGrid}>
            {OtherCandidates.map((candidate) => (
              <CandidateMiniCard
                key={candidate.number}
                number={candidate.number}
                name={candidate.name}
                titles={candidate.titles}
                tags={candidate.tags}
                shortText={candidate.shortText ?? candidate.perex}
                photo={candidate.photo}
                onReadMore={() => handleOpenModal(candidate)}
              />
            ))}
          </div>
        </section>

        <CandidateModal candidate={selectedCandidate} onClose={handleCloseModal} />
      </main>
    </div>
  );
};

// Stránka je „skrytá" – bez správného klíče v URL vrací 404, takže ji najde jen ten, kdo má odkaz.
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (query.klic !== ONAS_PREVIEW_KEY) {
    return { notFound: true };
  }
  return { props: {} };
}

export default ONas;
