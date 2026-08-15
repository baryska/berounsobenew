import type { NextPage, GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import CandidateEditorial from '../components/CandidateEditorial/CandidateEditorial';
import CandidateMiniCard from '../components/CandidateMiniCard/CandidateMiniCard';
import CandidateModal, { CandidateModalData } from '../components/CandidateModal/CandidateModal';
import { FeaturedCandidates, OtherCandidates, Candidate } from '../data/candidates';

// Přístupový klíč – stránka se zobrazí jen s ?klic=<tato hodnota>, jinak vrací 404.
const ONAS_PREVIEW_KEY = 'nahled-onas-2026';

const ONas: NextPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateModalData | null>(null);

  const handleOpenModal = (candidate: Candidate) => {
    setSelectedCandidate({
      name: candidate.name,
      titles: candidate.titles,
      tags: candidate.tags,
      fullText: candidate.fullText,
      photo: candidate.photo,
    });
  };

  const handleCloseModal = () => setSelectedCandidate(null);

  return (
    <div style={{ overflowX: 'clip' }}>
      <Head>
        <title>O nás | Beroun sobě</title>
        <meta name="description" content="Kandidáti Beroun sobě – lidé, kteří chtějí posunout Beroun dál." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nove_logo.png" type="image/png" />
        <meta name="referrer" content="no-referrer" />
        {/* náhled – neindexovat */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="relative bg-[#F7F9FB]">
        {/* ===== HERO ===== */}
        <section className="relative px-5 sm:px-8 pt-16 pb-10 md:pt-20 md:pb-14 max-w-6xl mx-auto">
          <h1
            className="text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl font-bold text-[#161534] max-w-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Lidé, kteří chtějí{' '}
            {/* podtržení jako inline background → láme se spolu s textem, vždy pod slovy */}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(rgba(60, 150, 215, 0.2), rgba(60, 150, 215, 0.2))',
                backgroundSize: '100% 0.28em',
                backgroundPosition: '0 88%',
                backgroundRepeat: 'no-repeat',
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone',
              }}
            >
              posunout Beroun
            </span>{' '}
            dál.
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Jsme <strong className="text-[#161534]">nezávislá, občanská kandidátka</strong> a nejsilnější
            opoziční síla v Berouně. Za víc než deset let v komunální politice jsme pochopili, co město
            skutečně potřebuje. Náš tým jsme posílili o nové osobnosti a odborníky – a dnes jsme připraveni
            Beroun zodpovědně vést.
          </p>

        </section>

        {/* ===== PRVNÍCH 10 – editorial layout ===== */}
        {/* na mobilu full-bleed (bez horizontálního paddingu), aby absolutní vrstvy mířily na okraj viewportu */}
        <section className="relative md:px-8 pt-10 md:pt-16 pb-16 max-w-6xl mx-auto">
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
        <section className="relative px-5 sm:px-8 max-w-6xl mx-auto pb-28">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
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
