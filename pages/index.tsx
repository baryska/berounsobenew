import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Profile from '../components/Profile/Profile';
import CandidateProfileCard from '../components/CandidateProfileCard/CandidateProfileCard';
import CandidateModal, { CandidateModalData } from '../components/CandidateModal/CandidateModal';
import { Candidates } from '../data/index';
import ContactForm from '../components/ContactForm/ContactForm';
import FacebookFeed from '../components/FacebookFeed/FacebookFeed';
import QRBadge from '../components/QRBadge/QRBadge';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateModalData | null>(null);

  const handleOpenModal = (candidate: typeof Candidates[0]) => {
    setSelectedCandidate({
      name: candidate.name,
      titles: candidate.titles,
      tags: candidate.tags,
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
        <section id="kdojsme" className="bg-slate-50 py-16">
          {/* Candidate Profiles - Concept A: Clean minimalism with color accents */}
          <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-8">
            <div className={`w-full ${styles.orangeFrame}`}>
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-left space-y-4" style={{ fontFamily: 'var(--font-heading)' }}>
              <p>Jsme <strong>nezávislá, občanská kandidátka</strong>, nejsilnější opoziční síla v Berouně. 
              Nejsme spojeni s žádnou celostátní politickou stranou. V posledních komunálních volbách jsme získali <strong>nejvíce hlasů a mandátů</strong>, ale i tak jsme skončili v opozici.</p>
              <p>Tuto situaci jsme využili k tomu, abychom hlídali, co se na radnici děje, a zároveň se připravovali na vlastní řešení, 
              která městu <strong>konečně přinesou změnu</strong>.</p>
              <p>Více než deset let v berounské komunální politice nám dalo hluboké znalosti města, jeho problémů i potenciálu. 
              Zůstali jsme věrní svému přesvědčení, že Beroun si zaslouží <strong>lepší správu, otevřenost a skutečný pokrok</strong>.</p>
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
          {/* Karty kandidátů - responzivní: 1 sloupec na mobile, 2 na tablet, 3 na desktop */}
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
