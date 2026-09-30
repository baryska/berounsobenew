import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Obchvat.module.css';

// Přístupový klíč – stránka se zobrazí jen s ?klic=<tato hodnota>, jinak vrací 404.
// Až půjde stránka veřejně, smaž getServerSideProps na konci souboru a odkomentuj odkaz v menu.
const OBCHVAT_PREVIEW_KEY = 'nahled-obchvat-2026';

/* ---------- DATA ---------- */
// PRVNÍ SIGNÁLNÍ — úplně základní srovnání: roky a etapy, které postavil Králův Dvůr a Beroun.
// Žádné detaily, žádné odkazy. Kdo chce víc, čte dál pod tím.
interface Basics {
  id: string;
  role: string;
  who: string;
  status: string;
  statusType: string;
  big: string;
  bigNote: string;
  /** Doplňující věta pod hlavním číslem — zobrazí se jen tam, kde je vyplněná. */
  note?: string;
  /** Štítek nad touto větou — stejná logika jako u status, jen pro nehotovou část. */
  noteTag?: string;
  years: { y: string; t: string }[];
}

const BASICS: Basics[] = [
  {
    id: 'kd',
    role: 'kd',
    who: 'Králův Dvůr',
    status: 'Postaveno',
    statusType: 'done',
    big: '2 etapy',
    bigNote: 'postavené a v provozu',
    noteTag: '3. etapa se připravuje',
    note: 'Postavit se musí společně s berounským úsekem.',
    years: [
      { y: '2018 a 2019', t: 'dostal stavební povolení na obě etapy' },
      { y: '2020', t: 'obě etapy hotové — lidé po nich jezdí' },
      { y: '2026', t: 'projekt třetí, poslední části odevzdal kraji' },
    ],
  },
  {
    id: 'beroun',
    role: 'beroun',
    who: 'Beroun',
    status: 'V přípravě',
    statusType: 'open',
    big: 'Připravuje se',
    bigNote: '',
    years: [
      { y: '2020', t: 'získal stavební povolení na úsek mezi Královým Dvorem a Koněpruskou' },
      { y: '2023', t: 'podepsal s krajem smlouvu na most přes Berounku' },
      { y: '2026', t: 'dokončuje projektovou dokumentaci a vykupuje pozemky' },
    ],
  },
];

// Úseky obchvatu — bez interaktivity, vše viditelné rovnou.
const SEGMENTS = [
  {
    id: 'done',
    role: 'm3',
    n: '✓',
    title: 'Dvě etapy obchvatu Králova Dvora',
    from: 'hotovo a v provozu',
    who: 'Králův Dvůr',
    chip: 'V provozu',
    chipType: 'done',
  },
  {
    id: 's1',
    role: 'kd',
    n: '1',
    title: 'Obchvat Králova Dvora — III. část',
    from: 'Králův Dvůr → hranice katastru',
    who: 'Králův Dvůr',
    chip: 'Čeká na společnou soutěž',
    chipType: 'open',
  },
  {
    id: 's2',
    role: 'beroun',
    n: '2',
    title: 'Úsek s mostem přes Litavku',
    from: 'hranice katastru → Koněpruská',
    who: 'Beroun',
    chip: 'Čeká na společnou soutěž',
    chipType: 'open',
  },
  {
    id: 's3',
    role: 'kraj',
    n: '3',
    title: 'Okružní křižovatka u D5',
    from: 'napojení na Koněpruskou',
    who: 'Středočeský kraj',
    chip: 'Čeká na společnou soutěž',
    chipType: 'open',
  },
  {
    id: 's4',
    role: 'beroun',
    n: '4',
    title: 'Most přes Berounku a napojení na Hostímskou',
    from: 'nádraží → most přes Berounku → Hostímská',
    who: 'Beroun',
    chip: 'Povolení zatím nepodáno',
    chipType: 'open',
  },
];

// Q&A — odpovědi na nejčastější otázky (accordion na konci stránky).
const FAQ = [
  {
    q: 'Za co odpovídá město a za co kraj?',
    a: 'Stavbu bude realizovat a z větší části platit Středočeský kraj. Nezačne ale dřív, než mu Beroun předá hotovou projektovou dokumentaci, vykoupené pozemky a pravomocné stavební povolení. To je přímo ve smlouvě mezi městem a krajem z roku 2023. Okružní křižovatka u dálnice je naopak krajská stavba.',
  },
  {
    q: 'Kdy se má začít stavět?',
    a: 'Beroun má podle své odpovědi na žádost o informace předat kraji podklady orientačně v květnu 2027. V projektové dokumentaci je jako předpokládaný rok zahájení uveden rok 2028. Město u obou termínů upozorňuje, že se mohou posunout.',
  },
  {
    q: 'V čem se liší postup Králova Dvora a Berouna?',
    a: 'Králův Dvůr získal stavební povolení na své úseky v letech 2018 a 2019 a obě etapy postavil — v provozu jsou od roku 2020. Beroun získal v roce 2020 povolení na úsek mezi Královým Dvorem a Koněpruskou a v červenci 2023 podepsal s krajem smlouvu na úsek s mostem přes Berounku. Projektovou dokumentaci na společnou stavbu tří úseků odevzdala obě města v roce 2026, Beroun o několik měsíců později než Králův Dvůr. Beroun zdrželo zejména opožděné vykupování pozemků.',
  },
  {
    q: 'Co přesně se bude stavět?',
    a: 'Cílem je vést dopravu jižním okrajem města místo centrem. Část trasy tvoří ulice, které už existují, jinde silnice chybí a musí se postavit. Od Králova Dvora povede nová silnice až na hranici s Berounem a odtud dál k ulici Koněpruská, kde překoná Litavku novým mostem; u dálnice na ni naváže nová okružní křižovatka. Druhý chybějící kus měří necelý kilometr a vede od autobusového nádraží přes nový most přes Berounku k silnici na Hostim. Kromě silnic a mostů k tomu patří sjezdy, opěrné zdi, chodník s cyklostezkou, osvětlení, odvodnění a přeložky plynu, elektřiny a kabelů.',
  },
  {
    q: 'Proč se nedá stavět po částech, aspoň to, co je hotové?',
    a: 'Jednotlivé úseky na sebe technicky navazují — opěrné zdi, most přes Litavku a okružní křižovatka se nedají stavět odděleně. Kraj a obě města se proto dohodly postavit tři navazující úseky jako jednu zakázku s jedním zhotovitelem. Soutěž nelze vypsat, dokud není připravené všechno, takže hotové části čekají na dokončení ostatních.',
  },
  {
    q: 'Kdo to zaplatí?',
    a: 'Celou stavbu realizuje Středočeský kraj a Beroun je spoluinvestorem v rozsahu veřejného osvětlení, chodníků a dalšího příslušenství. Projektovou dokumentaci a výkup pozemků hradí město ze svého.',
  },
  {
    q: 'Co obchvat znamená pro most TGM?',
    a: (
      <>
        Obchvat i most jsou samostatné dopravní stavby, které kraj koordinuje tak, aby neprobíhaly zároveň. Aktuální
        informace o mostu najdete na{' '}
        <Link href="/most">
          <a className={styles.inl}>samostatné stránce</a>
        </Link>
        .
      </>
    ),
  },
];

// Dokumenty a zdroje — seznam ke stažení/ověření na konci stránky.
// href:
//   • veřejný originál (registr smluv, web města) → celá URL 'https://…'
//   • vlastní PDF → nahraj do public/dokumenty/ a dej '/dokumenty/soubor.pdf'
//   • zatím nemáme → nech href: '' a položka se zobrazí jako „Připravujeme"
// Před nahráním skenů zkontroluj osobní údaje (jména, podpisy).
const DOCUMENTS = [
  {
    id: 'memorandum-2014',
    title: 'Memorandum o jižním obchvatu — zpráva o podpisu',
    meta: 'Zpravodaj Králova Dvora · říjen 2014',
    source: 'Zpravodaj',
    href: '/dokumenty/zpravodaj-kd-2014-10.pdf#page=3',
  },
  {
    id: 'smlouva-kraj-2023',
    title: 'Smlouva o spolupráci s krajem (most přes Berounku)',
    meta: 'S-2385/2023 · 26. 7. 2023',
    source: 'Registr smluv',
    href: '/dokumenty/Smlouva_o_spolupraci_-_Jizni_paralelni_komunikace_Beroun_p.pdf',
  },
  {
    id: 'povoleni-2020',
    title: 'Stavební povolení na úsek s mostem přes Litavku',
    meta: 'MBE/61529/2020 · PM 10. 11. 2020',
    source: 'Rozhodnutí úřadu',
    href: '/dokumenty/priloha_1077298324_2_61529-2020_SP_-_Paralelni_komunikace_Beroun_-_KD_-_usek_C1_-_Beroun.pdf',
  },
  {
    id: 'zapis-zm-2025-09',
    title: 'Zápis ze zastupitelstva (výkup pozemků)',
    meta: '10. 9. 2025',
    source: 'Zápis ZM',
    href: '/dokumenty/Z_ZM_10_09.pdf',
  },
  {
    id: 'odpoved-32586-2026',
    title: 'Odpověď města dle InfZ (dotčené pozemky a výkupy)',
    meta: 'MBE/32586/2026 · INF/27/2026',
    source: '§106',
    href: '/dokumenty/Odpoved.pdf',
  },
  {
    id: 'zapis-zm-2026-03',
    title: 'Zápis ze zastupitelstva (výkupy pozemků)',
    meta: '4. 3. 2026',
    source: 'Zápis ZM',
    href: '/dokumenty/Z_ZM_04_03.pdf',
  },
  {
    id: 'zapis-zm-2026-04',
    title: 'Zápis ze zastupitelstva (výkupy pozemků)',
    meta: '29. 4. 2026',
    source: 'Zápis ZM',
    href: '/dokumenty/Z_ZM_29_04.pdf',
  },
  {
    id: 'zapis-zm-2026-06',
    title: 'Zápis ze zastupitelstva (výkupy pozemků, stav dokumentace)',
    meta: '16. 6. 2026',
    source: 'Zápis ZM',
    href: '/dokumenty/Z_ZM_16_06_ANON.pdf',
  },
  {
    id: 'technicka-zprava',
    title: 'Souhrnná technická zpráva (projektová dokumentace)',
    meta: 'DÚSP',
    source: 'Projekt',
    href: '/dokumenty/B_STZ.pdf',
  },
  {
    id: 'scitani-dopravy',
    title: 'Sčítání dopravy (17 840 aut/den přes centrum)',
    meta: 'C_1 — kartogramy intenzit dopravy',
    source: 'Sčítání dopravy',
    href: '/dokumenty/C_1_Kartogramy_intenzit_dopravy.pdf',
  },
  {
    id: 'info-kd-2022',
    title: 'Poskytnutí informací — vydaná stavební povolení (Králův Dvůr i berounský úsek)',
    meta: 'MBE/55322/2022 · INF/49/2022 · 31. 8. 2022',
    source: '§106',
    href: '/dokumenty/poskytnuti-informaci-inf-49-2022.pdf',
  },
  {
    id: 'web-mesta-2023',
    title: 'Město Beroun: Město zajistilo potřebné kroky ke stavbě obchvatu',
    meta: '25. 8. 2023',
    source: 'Web města',
    href: 'https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/mesto-zajistilo-potrebne-kroky-ke-stavbe-obchvatu-8480cs.html',
  },
  {
    id: 'web-mesta-2024',
    title: 'Město Beroun: Realizace jižního obchvatu probíhá v souladu s harmonogramem',
    meta: '6. 3. 2024',
    source: 'Web města',
    href: 'https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/realizace-jizniho-obchvatu-jiz-probiha-v-souladu-s-harmonogramem-9253cs.html',
  },
];

const Obchvat = () => {
  return (
    <>
      <Head>
        <title>Obchvat Berouna: co je hotové a co ještě chybí | Beroun sobě</title>
        <meta
          name="description"
          content="Jak pokračuje příprava jižního obchvatu Berouna a Králova Dvora. Přehled z úředních dokumentů: co je hotové, co ještě chybí a s jakými termíny se počítá."
        />
      </Head>

      <div className={styles.page}>
        {/* ---------- HERO ---------- */}
        <header className={styles.hero}>
          <div className={styles.wrap}>

            <h1>
              Jak je na tom <em>obchvat</em>
              <sup className={styles.starMark}>*</sup> Berouna a co ještě chybí
            </h1>
            <p className={styles.heroNote}>
              <span className={styles.starMark}>*</span> Oficiálně se tato stavba nazývá Jižní paralelní komunikace. Pro
              snazší čtení používáme na celé stránce nepřesný, ale zavedený termín „obchvat“.
            </p>
            <p className={styles.subtitle}>
              Společný obchvat Berouna a Králova Dvora se připravuje <strong>od roku 2014</strong>. Králův Dvůr má svou
              část hotovou, berounské úseky jsou ve fázi přípravy. Zde je přehled toho, co je hotové, co ještě
              chybí a s jakými termíny se počítá.
            </p>

            {/* ---------- NA PRVNÍ SIGNÁLNÍ: roky a etapy ---------- */}
            <div className={styles.basics}>
              <div className={styles.basicsStart}>
                <span className={styles.basicsStartYear}>2014</span>
                <p>
                  Beroun, Králův Dvůr a Středočeský kraj se dohodli, že postaví společný obchvat obou měst. Tohle se od
                  té doby stalo:
                </p>
              </div>

              <div className={styles.basicsGrid}>
                {BASICS.map((b) => (
                  <div key={b.id} className={`${styles.bcard} ${styles[b.role]}`}>
                    <div className={styles.bcardHead}>
                      <h2>{b.who}</h2>
                      <span className={`${styles.bstatus} ${styles[b.statusType]}`}>{b.status}</span>
                    </div>
                    <div className={styles.bbig}>{b.big}</div>
                    <div className={styles.bbigNote}>{b.bigNote}</div>
                    {b.note ? (
                      <div className={styles.bnote}>
                        {b.noteTag ? <span className={styles.bnoteTag}>{b.noteTag}</span> : null}
                        <p>{b.note}</p>
                      </div>
                    ) : null}
                    <ul className={styles.byears}>
                      {b.years.map((it) => (
                        <li key={it.y}>
                          <b>{it.y}</b>
                          <span>{it.t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Hlavní zjištění — kde se příprava nejvíc zdržela. Záměrně tady,
                  hned pod srovnáním obou měst, a vizuálně nejvýraznější prvek stránky. */}
              <div className={styles.delay}>
                <div className={styles.delayLabel}>Kde se to nejvíc zdrželo</div>
                <h2 className={styles.delayLead}>U výkupu pozemků</h2>

                <div className={styles.delayBody}>
                  <div className={styles.delayStat}>
                    <div className={styles.delayStatN}>Březen 2026</div>
                    <div className={styles.delayStatL}>
                      až tehdy schválilo zastupitelstvo první kupní smlouvu na pozemky pod stavbou
                    </div>
                  </div>

                  <div className={styles.delayText}>
                    <p>
                      U úseku s mostem přes Berounku podepsalo město smlouvu s krajem už{' '}
                      <strong>v červenci 2023</strong>. Zavázalo se v ní předat kraji vykoupené pozemky —
                      bez nich kraj stavbu nezahájí.
                    </p>
                    <p>
                      Stavba se dotýká <strong>69 pozemků</strong> cizích vlastníků. Od podpisu smlouvy do
                      první schválené kupní smlouvy uplynuly víc než dva a půl roku.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dvě klíčová čísla */}
            <div className={styles.keyfacts}>
              <div className={styles.keyfact}>
                <div className={styles.keyfactN}>12 let</div>
                <div className={styles.keyfactL}>od uzavření memoranda mezi Berounem a Královým Dvorem.</div>
              </div>
              <div className={`${styles.keyfact} ${styles.keyfactDark}`}>
                <div className={styles.keyfactN}>
                  17 840<small>aut / den</small>
                </div>
                <div className={styles.keyfactL}>
                  projede denně centrem Berouna a přes most TGM podle dopravní studie z roku 2019. Obchvat má velkou část této
                  dopravy odvést mimo centrum.
                </div>
                <a
                  className={styles.keyfactSrc}
                  href="/dokumenty/C_1_Kartogramy_intenzit_dopravy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  zdroj: kartogramy intenzit dopravy
                </a>
              </div>
            </div>

            {/* Předěl — odsud dál začínají podrobnosti */}
            <div className={styles.more}>
              <span className={styles.moreText}>Chcete vědět víc? Čtěte dál</span>
              <span className={styles.moreArrow} aria-hidden="true">
                ↓
              </span>
            </div>

            {/* Mapa obchvatu */}
            <div className={styles.mapwrap} style={{ marginTop: '26px' }}>
              <figure className={styles.mapfig}>
                <Image
                  className={styles.mapimg}
                  src="/obchvat.png"
                  alt="Mapa jižního obchvatu Berouna a Králova Dvora s vyznačenými úseky trasy"
                  width={1116}
                  height={521}
                  sizes="(max-width: 1116px) 100vw, 1116px"
                  priority
                />
                <figcaption className={styles.mapcap}>
                  Trasa jižního obchvatu Berouna a Králova Dvora. Úseky 1 až 3 se budou stavět jako jedna zakázka
                  s jedním zhotovitelem, protože na sebe technicky navazují — soutěž nelze vypsat, dokud nebude hotová
                  dokumentace všech tří. Podrobnosti k jednotlivým úsekům jsou rozepsané níž.
                </figcaption>
              </figure>

              {/* Detaily úseků — schované pod kolaps */}
              <details className={styles.mapDetails}>
                <summary className={styles.mapDetailsSummary}>
                  Detaily úseků
                  <span className={styles.mapDetailsChevron} aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <div className={styles.mapDetailsBody}>
                  <div className={styles.maplegend}>
                    <span>
                      <i style={{ background: 'var(--m3)' }} /> hotovo a v provozu
                    </span>
                    <span>
                      <i style={{ background: 'var(--kd)' }} /> Králův Dvůr — odevzdáno
                    </span>
                    <span>
                      <i style={{ background: 'var(--beroun)' }} /> Beroun — ještě chybí
                    </span>
                    <span>
                      <i style={{ background: 'var(--kraj)' }} /> Kraj — okružní křižovatka
                    </span>
                  </div>
                  <div className={styles.maphint}>
                    Úseky v pořadí od Králova Dvora k Hostímské — čísla 1–4 odpovídají mapě.
                  </div>

                  <div className={styles.seglist}>
                    {SEGMENTS.map((s) => (
                      <div key={s.id} className={`${styles.sl} ${styles[s.role]}`}>
                        <span className={styles.n}>{s.n}</span>
                        <div>
                          <b>{s.title}</b>
                          <em>{s.from}</em>
                          <span className={styles.slWho}>odpovídá: {s.who}</span>
                          <span className={`${styles.chip} ${styles[s.chipType]}`}>{s.chip}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* ---------- DVĚ OSY: KRÁLŮV DVŮR vs BEROUN ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <h2>Jak šel čas u obou měst</h2>
            </div>
            <p className={styles.secNote}>
              Obě města vycházejí ze společného memoranda z roku 2014. Vlevo najdete kroky Králova Dvora, vpravo kroky
              Berouna.
            </p>

            {/* Společná startovní čára */}
            <div className={styles.startline}>
              <div className={styles.startYear}>2014</div>
              <div>
                <div className={styles.startTitle}>Společný začátek — memorandum o obchvatu</div>
                <p>
                  Beroun, Králův Dvůr a Středočeský kraj podepsali memorandum o společné stavbě obchvatu obou měst.
                  Každé z měst připravuje úseky na svém území, okružní křižovatku u dálnice projektuje kraj.
                </p>
                <a
                  className={styles.doc}
                  href="/dokumenty/zpravodaj-kd-2014-10.pdf#page=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zpravodaj Králova Dvora · říjen 2014
                </a>
              </div>
            </div>

            <div className={styles.tracks}>
              {/* KRÁLŮV DVŮR */}
              <div className={`${styles.track} ${styles.kd}`} id="kdvur">
                <header>
                  <h3>Králův Dvůr</h3>
                  <div className={styles.sub}>
                    Dvě etapy postavil a zprovoznil, na poslední část odevzdal kraji hotovou dokumentaci.
                  </div>
                  <span className={styles.status}>Hotovo / odevzdáno</span>
                </header>
                <div className={styles.steps}>
                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2018 → 2019</div>
                    <h4>Dvě pravomocná stavební povolení</h4>
                    <p>
                      Králův Dvůr získává povolení na obchvat I. etapa (právní moc 6/2018) a na II. část (právní moc
                      1/2020).
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/poskytnuti-informaci-inf-49-2022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Poskytnutí informací · INF/49/2022
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>do 2020</div>
                    <h4>Dvě etapy hotové a v provozu</h4>
                    <p>Dvě etapy obchvatu jsou dokončené a využívané od roku 2020.</p>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2026</div>
                    <h4>Třetí část: odevzdal kraji dokumentaci</h4>
                    <p>
                      Králův Dvůr odevzdal kraji podklady ke třetí, poslední části — tedy hotovou projektovou
                      dokumentaci, ne postavenou silnici. Beroun odevzdal svou část o několik měsíců později.
                    </p>
                  </div>
                </div>
              </div>

              {/* BEROUN */}
              <div className={`${styles.track} ${styles.beroun}`} id="beroun">
                <header>
                  <h3>Beroun</h3>
                  <div className={styles.sub}>
                    Odpovídá za úsek mezi Královým Dvorem a Koněpruskou i za úsek s mostem přes Berounku.
                  </div>
                  <span className={styles.status}>Ve fázi přípravy</span>
                </header>
                <div className={styles.steps}>
                  <div className={`${styles.ev} ${styles.m2}`}>
                    <div className={styles.date}>10/2020</div>
                    <h4>Povolení na úsek od hranice s Královým Dvorem ke Koněpruské</h4>
                    <p>
                      Město získává stavební povolení na tento úsek včetně nového mostu přes Litavku. Povolení propadá,
                      pokud se do dvou let nezačne stavět.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/priloha_1077298324_2_61529-2020_SP_-_Paralelni_komunikace_Beroun_-_KD_-_usek_C1_-_Beroun.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rozhodnutí MBE/61529/2020 · PM 10. 11. 2020
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>2022</div>
                    <h4>Formální zahájení stavby archeologickým průzkumem</h4>
                    <p>
                      Město stavbu formálně zahajuje zemními pracemi pro zjišťovací archeologický průzkum a práce poté
                      přerušuje. Podle webu města tím zajistilo, aby stavební povolení z roku 2020 nepropadlo.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/mesto-zajistilo-potrebne-kroky-ke-stavbe-obchvatu-8480cs.html"
                    >
                      Web města Beroun · 25. 8. 2023
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>26. 7. 2023</div>
                    <h4>Podpis smlouvy s krajem na most přes Berounku</h4>
                    <p>
                      Smlouva určuje pořadí: kraj zajistí stavbu až poté, co mu Beroun předá{' '}
                      <b>hotovou dokumentaci, vykoupené pozemky a pravomocné povolení</b>.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Smlouva_o_spolupraci_-_Jizni_paralelni_komunikace_Beroun_p.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Smlouva o spolupráci · S-2385/2023
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>03/2024</div>
                    <h4>Město informuje o postupu podle harmonogramu</h4>
                    <p>
                      Podle webu města se stavba křižovatky a úseku do Králova Dvora plánuje na přelom let 2024 a 2025.
                      Tento termín se nepodařilo dodržet.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/realizace-jizniho-obchvatu-jiz-probiha-v-souladu-s-harmonogramem-9253cs.html"
                    >
                      Web města Beroun · 6. 3. 2024
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m1}`}>
                    <div className={styles.date}>2025</div>
                    <h4>U mostu přes Litavku proběhla změna stavby</h4>
                    <p>
                      Původní projekt mostu bylo nutné přepracovat, protože výškově nenavazoval na plánovanou
                      okružní křižovatku. Povolení změny nabylo právní moci v květnu 2025. Do té doby nešlo stavět
                      ani jedno, přestože povolení platilo.
                    </p>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>09/2025</div>
                    <h4>Pozemky ke směně město teprve zajišťuje</h4>
                    <p>
                      Na zastupitelstvu zaznělo, že pozemky, které má město nabídnout vlastníkům výměnou, teprve musí
                      získat.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_10_09.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zápis ZM · 10. 9. 2025
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m1}`}>
                    <div className={styles.date}>03 → 06/2026</div>
                    <h4>Výkupy pozemků se rozbíhají</h4>
                    <p>
                      Zastupitelstvo schvaluje první smlouvy — v březnu podíly na čtyřech pozemcích, v dubnu a červnu
                      další balíky včetně pozemků od Českých drah za 2,1 milionu korun.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_04_03.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zápis ZM · 4. 3. 2026
                    </a>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_29_04.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zápis ZM · 29. 4. 2026
                    </a>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_16_06_ANON.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zápis ZM · 16. 6. 2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>04/2026</div>
                    <h4>Stavba se dotýká 69 cizích pozemků</h4>
                    <p>
                      Podle odpovědi města na žádost o informace je dotčeno 69 pozemků cizích vlastníků. K datu
                      odpovědi byla uzavřena jedna kupní smlouva.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Odpoved.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Odpověď města · MBE/32586/2026 · INF/27/2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>06/2026</div>
                    <h4>Žádost o povolení zatím nepodána</h4>
                    <p>
                      Dokumentace se od února upravuje podle připomínek kraje. Na jaře 2026 přibyl tříměsíční skluz —
                      Správa železnic si vyžádala změnu řešení u své haly, kde má místo svahu vzniknout opěrná zeď.
                      Projektant úpravu zapracoval, žádost o povolení zatím podána nebyla.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_16_06_ANON.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zápis ZM · 16. 6. 2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>05/2027</div>
                    <h4>Předpokládané předání všech podkladů kraji</h4>
                    <p>Termín je v odpovědi města označen jako orientační.</p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Odpoved.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Odpověď města · §106
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>2028</div>
                    <h4>Předpokládané zahájení stavby</h4>
                    <p>Rok uvedený v souhrnné technické zprávě projektové dokumentace.</p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/B_STZ.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Souhrnná technická zpráva DÚSP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ČASTÉ OTÁZKY ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <h2>Časté otázky</h2>
            </div>
            <div className={styles.faq}>
              {FAQ.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>
                    {item.q}
                    <span className={styles.faqChevron} aria-hidden="true">
                      ▾
                    </span>
                  </summary>
                  <div className={styles.faqA}>{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- DOKUMENTY A ZDROJE ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <h2>Dokumenty a zdroje</h2>
            </div>
            <p className={styles.secNote}>
              Všechno na této stránce vychází z úředních dokumentů. Tady si je můžete otevřít a ověřit.
            </p>
            <div className={styles.docs}>
              {DOCUMENTS.map((d) => (
                <div key={d.id} className={styles.docItem}>
                  <div className={styles.docMain}>
                    <div className={styles.docTitle}>{d.title}</div>
                    <div className={styles.docMeta}>
                      {d.source}
                      {d.meta ? ` · ${d.meta}` : ''}
                    </div>
                  </div>
                  {d.href ? (
                    <a className={styles.docLink} href={d.href} target="_blank" rel="noopener noreferrer">
                      Otevřít ↗
                    </a>
                  ) : (
                    <span className={styles.docPending}>Připravujeme</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <p className={styles.note}>
              Vše na této stránce vychází z úředních dokumentů: smlouvy z registru, rozhodnutí stavebního úřadu, zápisy
              zastupitelstva, odpovědi na žádosti dle §106 a sčítání dopravy.

            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

// Stránka je „skrytá" – bez správného klíče v URL vrací 404, takže ji najde jen ten, kdo má odkaz.
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (query.klic !== OBCHVAT_PREVIEW_KEY) {
    return { notFound: true };
  }
  return { props: {} };
}

export default Obchvat;