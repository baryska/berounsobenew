import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// --- PŮVODNÍ sekce „kdo jsme" – dočasně zakomentováno (viz zakomentovaný blok v JSX níže) ---
// import Profile from '../components/Profile/Profile';
// import CandidateProfileCard from '../components/CandidateProfileCard/CandidateProfileCard';
// import CandidateModalLegacy, { CandidateModalData as CandidateModalDataLegacy } from '../components/CandidateModalLegacy/CandidateModalLegacy';
// import { Candidates } from '../data/index';
// --- NOVÁ sekce „O nás" – přeneseno ze stránky /o-nas ---
import CandidateEditorial from '../components/CandidateEditorial/CandidateEditorial';
import CandidateMiniCard from '../components/CandidateMiniCard/CandidateMiniCard';
import CandidateModal, { CandidateModalData } from '../components/CandidateModal/CandidateModal';
import { renderBold } from '../lib/renderBold';
import { FeaturedCandidates, OtherCandidates, Candidate } from '../data/candidates';
import ContactForm from '../components/ContactForm/ContactForm';
import FacebookFeed from '../components/FacebookFeed/FacebookFeed';
import QRBadge from '../components/QRBadge/QRBadge';
import styles from '../styles/Home.module.css';
import onasStyles from '../styles/ONas.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Beroun sobě</title>
        <meta name="description" content="Beroun sobě - Beroun má na víc!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nove_logo.png" type="image/png" />
        <meta name="referrer" content="no-referrer" />
        <meta property="og:image" content="https://www.berounsobe.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvsichni_small.793a465f.jpeg&w=1920&q=75" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:title" content="Beroun sobě" />
        <meta name="og:description" content="Beroun sobě - Beroun má na víc!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.berounsobe.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvsichni_small.793a465f.jpeg&w=1920&q=75" />
        <meta name="twitter:title" content="Beroun sobě" />
        <meta name="twitter:description" content="Beroun sobě - Beroun má na víc!" />
      </Head>

      <main>
        <QRBadge />
        <section className={styles.home}>
          <video autoPlay muted loop className={styles.video}>
            <source src="/beroun4.mp4" type="video/mp4" />
          </video>
          <div className={styles.slogan}>
            <Image src="/novy_slogan.png" alt="Beroun sobě - slogan" width={1200} height={400} />
          </div>
          <button onClick={handleScrollTop} className={styles.arrow}>
            <Image src="/up.svg" width={40} height={40} alt="arrow" />
          </button>
        </section>
        {/* ===== NOVÁ SEKCE „O nás" – přeneseno ze stránky /o-nas ===== */}
        <section id="kdojsme" className={`${onasStyles.pageWrapper} ${onasStyles.main}`}>
          {/* ===== HERO ===== */}
          <div className={onasStyles.hero}>
            <h1 className={onasStyles.heroTitle}>
              Lidé, kteří chtějí{' '}
              {/* podtržení jako inline background → láme se spolu s textem, vždy pod slovy */}
              <span className={onasStyles.heroHighlight}>posunout Beroun</span> dál.
            </h1>

            {/* Přes renderBold: **tučně** i nedělitelné mezery za předložkami
                řeší stejná funkce jako u medailonků, ať se to nerozejde. */}
            <p className={onasStyles.heroPerex}>
              {renderBold(
                'Jsme **nezávislá, občanská kandidátka** a nejsilnější opoziční síla v Berouně. ' +
                  'Za víc než deset let v komunální politice jsme pochopili, co město skutečně potřebuje. ' +
                  'Náš tým jsme posílili o nové osobnosti a odborníky – a dnes jsme připraveni Beroun zodpovědně vést.'
              )}
            </p>
          </div>

          {/* ===== PRVNÍCH 10 – editorial layout ===== */}
          {/* na mobilu full-bleed (bez horizontálního paddingu), aby absolutní vrstvy mířily na okraj viewportu */}
          <div className={onasStyles.editorialSection}>
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
          </div>

          {/* ===== KANDIDÁTI 11–21 – roster ===== */}
          <div className={onasStyles.rosterSection}>
            <div className={onasStyles.rosterGrid}>
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
          </div>
        </section>

        {/* ===== PŮVODNÍ SEKCE „kdo jsme" – dočasně zakomentováno, zatím nemazat =====
        <section id="kdojsme" className="bg-slate-50 py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-8">
            <div className={`w-full ${styles.orangeFrame}`}>
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-left space-y-4" style={{ fontFamily: 'var(--font-heading)' }}>
              <p>Jsme <strong>nezávislá, občanská kandidátka</strong>, nejsilnější opoziční síla v Berouně.
              Nejsme spojeni s žádnou celostátní politickou stranou. V posledních komunálních volbách jsme získali <strong>nejvíce hlasů a mandátů</strong>, ale i tak jsme skončili v opozici.</p>
              <p>Tuto situaci jsme využili k tomu, abychom hlídali, co se na radnici děje, a zároveň hledali vlastní řešení,
              která městu <strong>konečně přinesou změnu</strong>.</p>
              <p>Během více než deseti let v berounské komunální politice jsme pochopili, co město skutečně potřebuje a jak ho můžeme reálně posunout dál.
              Nadále jsme přesvědčení, že Beroun si zaslouží <strong>lepší správu, otevřenost a skutečný pokrok</strong>.</p>
              <p>Náš tým jsme posílili o <strong>nové osobnosti a odborníky</strong> a dnes jsme připraveni Beroun zodpovědně a kompetentně vést.</p>
            </div>
            </div>
          </div>
          <h2 className={styles.aboutUs}><strong>Naši kandidáti</strong>
            <div>
              <div className={styles.blueDot} />
              <div className={`${styles.blueDot} ${styles.blueDotBottom}`} />
            </div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[minmax(420px,1fr)] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {Candidates.map((candidate) => {
              const badgeMap: Record<string, string> = {
                'Barbora Skálová': 'současná zastupitelka',
                'Eva Kotrčová': 'současná zastupitelka',
                'Martin Veselý': 'současný zastupitel',
              };
              const badge = badgeMap[candidate.name];
              return (
                <CandidateProfileCard
                  key={candidate.name}
                  name={candidate.name}
                  titles={candidate.titles}
                  tags={candidate.tags}
                  perex={candidate.perex}
                  photo={candidate.photo}
                  badge={badge}
                  onReadMore={() => handleOpenModal(candidate)}
                />
              );
            })}
          </div>
        </section>
        ===== konec původní sekce ===== */}
        <div className={styles.experts}>
          <p>Na naši práci nejsme sami - víme, že nemůžeme být odborníky na vše, proto se často obracíme na <strong>experty</strong>.
            Chcete se také zařadit do našeho <strong>týmu odborných konzultantů</strong>?
          </p>
          <p className={styles.letUsKnow}>
            <strong><Link href="/#napistenam">Dejte nám vědět!</Link></strong>
          </p>
        </div>
        <section id="informujeme" className={styles.aktualityContainer}>
          <div className={styles.aktuality}>
            <h2 className={styles.aboutUs}><strong>Sledujte nás na Facebooku</strong>
              <div>
                <div className={styles.blueDot} />
                <div className={`${styles.blueDot} ${styles.blueDotBottom}`} />
              </div>
            </h2>
            <FacebookFeed />
          </div>
        </section>
        <section id="napistenam" className={styles.contact}>
          <ContactForm />
        </section>
        <footer className={styles.footer}>© 2026 BEROUN SOBĚ | Barbora Skálová</footer>

        <CandidateModal candidate={selectedCandidate} onClose={handleCloseModal} />
      </main>
    </div>
  )
}

export default Home
