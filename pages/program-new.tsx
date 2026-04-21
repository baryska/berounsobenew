import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../components/ProgramNew/ProgramNew.module.css';

/* ── DATA ──────────────────────────────────────────────── */

interface Persona {
  id: string;
  photo: string;
  name: string;
  tags: string[];
}

interface ProgramPoint {
  id: string;
  heading: string;
  text: string;
  tags: string[];
}

interface Sekce {
  id: string;
  eyebrow: string;
  color: 'blue' | 'green';
  headline: string;
  perex1: string;
  perex2: string;
  quote: string;
  quoteName: string;
  quoteRole: string;
  quoteAvatar: string | null;
  points: ProgramPoint[];
}

const PERSONAS: Persona[] = [
  { id: 'dojizdi', photo: '/cars.jpg',       name: 'Dojíždím\ndo Prahy za prací', tags: ['dojizdi','mhd','doprava'] },
  { id: 'byznys',  photo: '/radnice.jpg',    name: 'Živnostník\nv centru města',  tags: ['byznys','centrum','priorita_byznys'] },
  { id: 'rodic',   photo: '/schoolkids.jpg', name: 'Rodič\ns malými dětmi',       tags: ['rodic','priorita_skoly'] },
  { id: 'senior',  photo: '/senior.jpg',     name: 'Senior',                      tags: ['senior','sluzby','zdravi'] },
];

const SEKCE_DUSTOJNE: Sekce = {
  id: 'dustojne',
  eyebrow: 'Beroun Důstojně',
  color: 'green',
  headline: 'Sídliště potřebují péči.\nZačneme s parkováním a lepším úklidem.',
  perex1: 'Večerní kroužení ulicemi při hledání parkování, rozmazané bláto po úklidových vozech a pocit, že se na sídlišti trochu zapomíná. Žijeme tam také, takže víme, jak to na berounských sídlištích chodí. Neslíbíme vám zázraky přes noc, ale až příliš dobře známe desítky míst, kde se dá situace citelně zlepšit.',
  perex2: 'Chceme z našich sídlišť vytvořit příjemnější místo pro život. Beroun už dávno není jen noclehárnou, proto budeme poctivě hledat cesty, jak nabídnout lepší parkování, udržet ulice čisté a do horkých letních dní mezi domy nabídnout více stínu.',
  quote: 'Bydlíme se ženou a třemi dětmi kousek od Hvězdy. O nepořádek tak zakopáváme denně a také svým způsobem chápu, že lidé neparkují na trávě naschvál, ale z čiré nouze. Přeji si, abychom jako město nejprve hledali cesty, jak lidem s parkováním pomoct, a až potom vymýšleli, jak vybrat víc na pokutách.',
  quoteName: 'Tomáš Procházka',
  quoteRole: 'Beroun sobě',
  quoteAvatar: '/tomas_small.jpg',
  points: [
    { id:'parkovani', heading: 'Férový přístup k parkování: nejdřív alternativy, pak pokuty.', text: 'Nechceme lidi trestat za to, že nemají kde zaparkovat. Vymáhat zákazy stání na zeleni dává smysl až ve chvíli, kdy nabídneme řešení. Chceme zkusit model samofinancujících menších garáží na městských pozemcích. Část míst se prodá a zaplatí výstavbu, zbytek město pronajme. Žádná zátěž pro rozpočet, víc míst pro lidi.', tags:['priorita_doprava','sidliste','auto','dojizdi'] },
    { id:'uklid',    heading: 'Důslednější kontrola úklidu a přehledné termíny svozů.', text: 'Vnímáme, že současný úklid má k dokonalosti daleko – ať už jde o nekropení ulic nebo zmatky v termínech. Budeme se víc ptát a tlačit na lepší práci nasmlouvaných firem. Chceme lidem nabídnout jasný online přehled, kdy se v jejich ulici uklízí nebo vyváží odpad.', tags:['priorita_bezpeci','sidliste','senior','doma'] },
    { id:'bezdomovci', heading: 'Aktivní řešení nepořádku a situace lidí bez domova.', text: 'Nechceme zavírat oči před lidmi bez domova nebo uživateli návykových látek. Nejde je ze dne na den vymazat z ulic, ale město musí situaci aktivně řídit. Budeme víc hlídat čistotu kolem popelnic, s městskou policií bránit vzniku squatů a hledat funkční sociální cesty.', tags:['priorita_bezpeci','centrum','senior','sidliste'] },
    { id:'vnitrobloky', heading: 'Krok za krokem oživíme vnitrobloky a veřejný prostor.', text: 'Chceme do sídlišť vracet život. Znamená to postupné úpravy – od instalace kvalitních laviček do zanedbaného parku u Zdravky přes modernizaci dětských hřišť o vodní prvky až po podporu pravidelných trhů u Hvězdy.', tags:['priorita_prostor','sidliste','rodic','priroda'] },
    { id:'koupaliste', heading: 'Větší využití areálu koupaliště během celého dne.', text: 'Areál koupaliště má mnohem větší potenciál. Budeme hledat cesty, jak ho otevřít rannímu kondičnímu plavání nebo klidným podvečerním akcím. Pro rodiny s dětmi bychom rádi přímo v areálu vytvořili zázemí v podobě suchého hřiště.', tags:['sport','sidliste','rodic','senior','priroda'] },
    { id:'nova_zastavba', heading: 'Propojení nové zástavby se stávajícím životem a MHD.', text: 'Nové rezidenční projekty nesmí fungovat jako odříznuté ostrovy, které jen zkomplikují dopravu starousedlíkům. Při jednání s developery budeme trvat na tom, aby se nové čtvrti smysluplně propojovaly se stávající zástavbou a měly od počátku vyřešené napojení na linky MHD.', tags:['priorita_doprava','mhd','sidliste','dojizdi'] },
    { id:'barabizny', heading: 'Cílený tlak na úpravu chátra­jících budov a trafostanic.', text: 'Tyto staré objekty dlouhodobě hyzdí naše okolí. Chceme jako radnice vyvinout systematický tlak na jejich majitele, aby se o svůj majetek starali, nebo společně hledat způsoby, jak tyto plochy alespoň vizuálně zcivilizovat.', tags:['priorita_prostor','centrum','sidliste','byznys'] },
  ],
};

/* ── ACCORDION ITEM ──────────────────────────────────────── */

function AccItem({ point, isHighlighted, defaultOpen }: {
  point: ProgramPoint;
  isHighlighted: boolean;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const itemClass = [
    styles.accItem,
    open ? styles.accItemOpen : '',
    isHighlighted ? styles.accItemHighlighted : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={itemClass}>
      <button className={styles.accHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.accDot} />
        <span className={styles.accHeading}>{point.heading}</span>
        {isHighlighted && <span className={styles.priorityBadge}>Pro vás</span>}
        <svg className={styles.accChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.accBody}>
        <p className={styles.accBodyInner}>{point.text}</p>
      </div>
    </div>
  );
}

/* ── PROGRAMME SECTION ───────────────────────────────────── */

function ProgSection({ sec, activePersona, odd }: {
  sec: Sekce;
  activePersona: string | null;
  odd: boolean;
}) {
  const activeTags = activePersona
    ? PERSONAS.find(p => p.id === activePersona)?.tags || []
    : [];

  const scored = sec.points.map(pt => {
    const hits = activeTags.filter(t => pt.tags.includes(t)).length;
    return { ...pt, score: hits };
  });

  const sorted = activePersona
    ? [...scored].sort((a, b) => b.score - a.score)
    : scored;

  const highlightedIds = new Set(sorted.filter(p => p.score > 0).map(p => p.id));

  const sectionClass = [
    styles.progSection,
    odd ? styles.progSectionOdd : styles.progSectionEven,
  ].join(' ');

  const eyebrowClass = [
    styles.progEyebrow,
    sec.color === 'blue' ? styles.progEyebrowBlue : styles.progEyebrowGreen,
  ].join(' ');

  return (
    <section className={sectionClass}>
      <div className={styles.progInner}>
        <span className={eyebrowClass}>{sec.eyebrow}</span>

        <h2 className={styles.progHeadline}>
          {sec.headline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && sec.headline.includes('\n') ? <br /> : ''}
            </span>
          ))}
        </h2>

        <p className={styles.progPerex}>{sec.perex1}</p>
        <p className={styles.progPerex}>{sec.perex2}</p>

        <div className={styles.progQuote}>
          <div className={styles.quotePhotoCol}>
            {sec.quoteAvatar ? (
              <img
                className={styles.quoteAvatarLarge}
                src={sec.quoteAvatar}
                alt={sec.quoteName}
              />
            ) : (
              <div className={styles.quoteAvatarPlaceholder}>🤝</div>
            )}
          </div>
          <div className={styles.quoteTextCol}>
            <blockquote className={styles.quoteBody}>{sec.quote}</blockquote>
            <div className={styles.quoteMeta}>
              <div className={styles.quoteName}>— {sec.quoteName}</div>
              <div className={styles.quoteRole}>{sec.quoteRole}</div>
            </div>
          </div>
        </div>

        <div className={styles.accordion}>
          <p className={styles.accordionTitle}>Programové body</p>

          {activePersona && highlightedIds.size > 0 && (
            <div className={styles.filterBar}>
              <span className={styles.filterLabel}>Seřazeno podle:</span>
              <span className={styles.filterChip}>
                {PERSONAS.find(p => p.id === activePersona)?.name.replace('\n', ' ')}
              </span>
            </div>
          )}

          {sorted.map((pt, i) => (
            <AccItem
              key={pt.id}
              point={pt}
              isHighlighted={!!activePersona && highlightedIds.has(pt.id)}
              defaultOpen={!!activePersona && highlightedIds.has(pt.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PERSONA SELECTOR ────────────────────────────────────── */

function PersonaSelector({ active, setActive }: {
  active: string | null;
  setActive: (id: string | null) => void;
}) {
  return (
    <section className={styles.personaSection}>
      <h2 className={styles.personaSectionTitle}>Kdo jste?</h2>
      <div className={styles.personaGrid}>
        {PERSONAS.map(p => {
          const cardClass = [
            styles.personaCard,
            active === p.id ? styles.personaCardActive : '',
          ].filter(Boolean).join(' ');

          return (
            <div
              key={p.id}
              className={cardClass}
              onClick={() => setActive(active === p.id ? null : p.id)}
            >
              <div
                className={styles.personaPhoto}
                style={{ backgroundImage: `url('${p.photo}')` }}
              />
              <div className={styles.personaOverlay} />
              <div className={styles.personaContent}>
                <span className={styles.personaName}>
                  {p.name.split('\n').map((l, i) => (
                    <span key={i}>{l}{i === 0 && p.name.includes('\n') ? <br /> : ''}</span>
                  ))}
                </span>
                <span className={styles.personaCheck}>✓ Vybráno</span>
              </div>
            </div>
          );
        })}
      </div>
      {active ? (
        <button
          className={styles.personaReset}
          onClick={() => setActive(null)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Zrušit výběr
        </button>
      ) : (
        <p className={styles.personaHint}>
          Vyberte, kdo jste – přeskládáme program podle vašich priorit.
        </p>
      )}
    </section>
  );
}

/* ── PAGE ─────────────────────────────────────────────────── */

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

      <PersonaSelector active={activePersona} setActive={setActivePersona} />
      <ProgSection sec={SEKCE_DUSTOJNE} activePersona={activePersona} odd={false} />

      <section className={styles.feedbackSection}>
        <div className={styles.feedbackInner}>
          <h2 className={styles.feedbackHeadline}>Něco vám v programu chybí?</h2>
          <p className={styles.feedbackPerex}>
            Napište nám, co vás trápí nebo co byste chtěli zlepšit — každý podnět čteme.
          </p>
          <form className={styles.feedbackForm} onSubmit={e => e.preventDefault()}>
            <textarea
              className={styles.feedbackTextarea}
              placeholder="Váš podnět nebo nápad…"
              rows={4}
            />
            <div className={styles.feedbackRow}>
              <input
                className={styles.feedbackInput}
                type="text"
                placeholder="Jméno (nepovinné)"
              />
              <input
                className={styles.feedbackInput}
                type="email"
                placeholder="E-mail (nepovinné)"
              />
            </div>
            <button type="submit" className={styles.feedbackSubmit}>
              Odeslat podnět
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProgramNewPage;
