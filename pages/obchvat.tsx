import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Obchvat.module.css';

/* ---------- DATA ---------- */
// PRVNÍ SIGNÁLNÍ — úplně základní srovnání: roky a etapy, které postavil Králův Dvůr a Beroun.
// Žádné detaily, žádné odkazy. Kdo chce víc, čte dál pod tím.
interface Basics {
  id: string;
  role: string;
  who: string;
  big: string;
  bigNote: string;
  /** Doplňující věta pod hlavním číslem — zobrazí se jen tam, kde je vyplněná. */
  note?: string;
  years: { y: string; t: string }[];
}

const BASICS: Basics[] = [
  {
    id: 'kd',
    role: 'kd',
    who: 'Králův Dvůr',
    big: '2 úseky',
    bigNote: 'postavené a v provozu',
    note: 'Třetí úsek se připravuje a postaví se společně s berounskými úseky.',
    years: [
      { y: '2018 a 2020', t: 'pravomocná stavební povolení na oba úseky' },
      { y: '2020 a 2022', t: 'oba úseky zprovozněné, jezdí se po nich' },
      { y: '2026', t: 'odevzdání projektu třetí, poslední části, na kraj' },
    ],
  },
  {
    id: 'beroun',
    role: 'beroun',
    who: 'Beroun',
    big: '2 úseky',
    bigNote: 've fázi přípravy',
    years: [
      { y: '2020', t: 'získal stavební povolení na úsek mezi Královým Dvorem a Koněpruskou' },
      { y: '2023', t: 'podpis smlouvy s krajem na úsek s mostem přes Berounku' },
      { y: '2026', t: 'dokončování projektové dokumentace a výkup pozemků' },
    ],
  },
];

// Úseky obchvatu — bez interaktivity, vše viditelné rovnou.
// Číslování jde po trase od Králova Dvora k Hostímské a zahrnuje i obě postavené
// etapy, aby čísla 1–3 odpovídala etapám obchvatu Králova Dvora tak, jak se jmenují.
// map = pozice čísla nad mapou v procentech obrázku /obchvat.png (997 × 547 px);
// odpovídá barevným tahům trasy, zelená je v mapě jeden tah pro obě hotové etapy.
const SEGMENTS = [
  {
    id: 'done',
    role: 'm3',
    n: '1–2',
    title: 'První dvě etapy obchvatu Králova Dvora',
    from: 'postavené a v provozu',
    map: { x: 34.3, y: 75.0 },
  },
  {
    id: 's1',
    role: 'kd',
    n: '3',
    title: 'Obchvat Králova Dvora – 3. etapa',
    from: 'vede od Králova Dvora k hranici s Berounem',
    map: { x: 51.4, y: 48.8 },
  },
  {
    id: 's2',
    role: 'beroun',
    n: '4',
    title: 'Úsek s mostem přes Litavku',
    from: 'vede od hranice s Královým Dvorem ke Koněpruské ulici',
    map: { x: 62.1, y: 32.5 },
  },
  {
    id: 's3',
    role: 'kraj',
    n: '5',
    title: 'Okružní křižovatka u D5',
    from: 'napojí obchvat na Koněpruskou',
    map: { x: 69.8, y: 22.5 },
  },
  {
    id: 's4',
    role: 'beroun',
    n: '6',
    title: 'Most přes Berounku a napojení na Hostímskou',
    from: 'vede od autobusového nádraží přes nový most k Hostímské ulici',
    map: { x: 89.4, y: 12.6 },
  },
];

// Q&A — odpovědi na nejčastější otázky (accordion na konci stránky).
const FAQ = [
  {
    q: 'Co přesně se bude stavět?',
    a: 'Cílem je vést dopravu jižním okrajem města místo centrem. Část trasy tvoří ulice, které už existují, jinde silnice chybí a musí se postavit. Od Králova Dvora povede nová silnice k hranici s Berounem a odtud dál ke Koněpruské ulici, kde překoná Litavku novým mostem. U dálnice na ni naváže nová okružní křižovatka. Druhý chybějící kus měří necelý kilometr: vede od autobusového nádraží po novém mostě přes Berounku k silnici na Hostim. Kromě silnic a mostů k tomu patří sjezdy, opěrné zdi, chodník s cyklostezkou, osvětlení, odvodnění a přeložky plynu, elektřiny a kabelů.',
  },
  {
    q: 'Proč se nedá stavět po částech, aspoň to, co je připravené?',
    a: 'Jednotlivé úseky na sebe technicky navazují – opěrné zdi, most přes Litavku a okružní křižovatka se nedají stavět odděleně. Kraj a obě města se proto dohodly postavit tři navazující úseky jako jednu zakázku s jedním zhotovitelem. Soutěž nelze vypsat, dokud není připravené všechno, takže hotové projekty čekají na dokončení ostatních.',
  },
  {
    // Sloučeno z dřívějších otázek „Za co odpovídá město a za co kraj?" a „Kdo to zaplatí?".
    q: 'Kdo co dělá a kdo to zaplatí?',
    a: 'Stavbu bude realizovat a z větší části platit Středočeský kraj. U úseku s mostem přes Berounku ale nezačne dřív, než mu Beroun předá hotovou projektovou dokumentaci, vykoupené pozemky a pravomocné stavební povolení - tak to stojí ve smlouvě mezi městem a krajem z roku 2023. Projektovou dokumentaci a výkup pozemků platí město ze svého a zavázalo se i k údržbě chodníků, osvětlení a dešťové kanalizace na novém úseku. Okružní křižovatku u dálnice připravuje kraj.',
  },
  {
    q: 'Kdy se má začít stavět?',
    a: 'Podle odpovědi na žádost o informace má Beroun předat kraji všechny podklady k úseku s mostem přes Berounku orientačně v květnu 2027. Projektová dokumentace počítá se zahájením stavby v roce 2028. Kraj ale podle smlouvy nejdřív hledá dotaci a soutěž na zhotovitele vypíše až po jejím schválení.',
  },
  {
    q: 'Co obchvat znamená pro most TGM?',
    a: (
      <>
        Obchvat i most TGM jsou samostatné stavby, kraj je ale koordinuje tak, aby neprobíhaly zároveň. Krajská správa
        silnic chce s rekonstrukcí mostu TGM začít až poté, co bude hotová okružní křižovatka u D5, třetí etapa
        obchvatu Králova Dvora, úsek ke Královu Dvoru a most přes Litavku – tedy úseky 1 až 3 obchvatu. Víc najdete na{' '}
        <Link href="/most">
          <a className={styles.inl}>stránce o mostu TGM</a>
        </Link>
        .
      </>
    ),
  },
  {
    q: 'V čem se liší postup Králova Dvora a Berouna?',
    a: 'Králův Dvůr získal stavební povolení na své úseky v letech 2018 a 2020 a obě etapy postavil: první slouží od roku 2020, druhá od roku 2022. Beroun získal v roce 2020 povolení na úsek mezi Královým Dvorem a Koněpruskou a v červenci 2023 podepsal s krajem smlouvu na úsek s mostem přes Berounku. Na berounské straně se protáhl výkup pozemků: první kupní smlouvu schválilo zastupitelstvo v březnu 2026.',
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
    title: 'Memorandum o jižním obchvatu – zpráva o podpisu',
    meta: 'říjen 2014',
    source: 'Zpravodaj Králova Dvora',
    href: '/dokumenty/zpravodaj-kd-2014-10.pdf#page=3',
  },
  {
    id: 'smlouva-kraj-2023',
    title: 'Smlouva o spolupráci s krajem (úsek s mostem přes Berounku)',
    meta: 'S-2385/2023, 26. 7. 2023',
    source: 'Registr smluv',
    href: '/dokumenty/Smlouva_o_spolupraci_-_Jizni_paralelni_komunikace_Beroun_p.pdf',
  },
  {
    id: 'povoleni-2020',
    title: 'Stavební povolení na úsek s mostem přes Litavku',
    meta: 'MBE/61529/2020, právní moc 10. 11. 2020',
    source: 'Rozhodnutí stavebního úřadu',
    href: '/dokumenty/priloha_1077298324_2_61529-2020_SP_-_Paralelni_komunikace_Beroun_-_KD_-_usek_C1_-_Beroun.pdf',
  },
  {
    id: 'zapis-zm-2025-09',
    title: 'Zápis ze zastupitelstva (výkup pozemků)',
    meta: '',
    source: '10. 9. 2025',
    href: '/dokumenty/Z_ZM_10_09.pdf',
  },
  {
    id: 'odpoved-32586-2026',
    title: 'Odpověď města na žádost o informace (dotčené pozemky a výkupy)',
    meta: 'INF/27/2026',
    source: 'MBE/32586/2026',
    href: '/dokumenty/Odpoved.pdf',
  },
  {
    id: 'zapis-zm-2026-03',
    title: 'Zápis ze zastupitelstva (výkupy pozemků)',
    meta: '',
    source: '4. 3. 2026',
    href: '/dokumenty/Z_ZM_04_03.pdf',
  },
  {
    id: 'zapis-zm-2026-04',
    title: 'Zápis ze zastupitelstva (výkupy pozemků)',
    meta: '',
    source: '29. 4. 2026',
    href: '/dokumenty/Z_ZM_29_04.pdf',
  },
  {
    id: 'zapis-zm-2026-06',
    title: 'Zápis ze zastupitelstva (výkupy pozemků, stav dokumentace)',
    meta: '',
    source: '16. 6. 2026',
    href: '/dokumenty/Z_ZM_16_06_ANON.pdf',
  },
  {
    id: 'technicka-zprava',
    title: 'Souhrnná technická zpráva',
    meta: '',
    source: 'Projektová dokumentace',
    href: '/dokumenty/B_STZ.pdf',
  },
  {
    id: 'scitani-dopravy',
    title: 'Sčítání dopravy – kartogramy intenzit (17 840 aut denně přes centrum)',
    meta: '',
    source: 'Příloha C.1',
    href: '/dokumenty/C_1_Kartogramy_intenzit_dopravy.pdf',
  },
  {
    id: 'info-kd-2022',
    title: 'Odpověď města na žádost o informace (vydaná stavební povolení, Králův Dvůr i Beroun)',
    meta: 'INF/49/2022, 31. 8. 2022',
    source: 'MBE/55322/2022',
    href: '/dokumenty/poskytnuti-informaci-inf-49-2022.pdf',
  },
  {
    id: 'web-mesta-2023',
    title: 'Web města: Město zajistilo potřebné kroky ke stavbě obchvatu',
    meta: '',
    source: '25. 8. 2023',
    href: 'https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/mesto-zajistilo-potrebne-kroky-ke-stavbe-obchvatu-8480cs.html',
  },
  {
    id: 'web-mesta-2024',
    title: 'Web města: Realizace jižního obchvatu probíhá v souladu s harmonogramem',
    meta: '',
    source: '6. 3. 2024',
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
              Jak pokračuje <em>obchvat Berouna</em> a co k dokončení chybí
            </h1>
            <p className={styles.subtitle}>
              Podle dopravní studie projede centrem Berouna a přes most TGM <strong>17 840 aut denně</strong>. Obchvat
              má velkou část této dopravy odvést mimo centrum. Oficiálně se stavba jmenuje <strong>Jižní paralelní komunikace</strong>,
              my používáme zavedené označení <strong>obchvat</strong>. Na této stránce najdete, co je hotové, co ještě chybí
              k dokončení a s jakými termíny se počítá.
            </p>
            <p className={styles.heroNote}>Poslední aktualizace: 30. 9. 2026</p>

            <div className={styles.basics}>
              <div className={styles.basicsStart}>
                <span className={styles.basicsStartYear}>2014</span>
                <p>
                  Společný obchvat obou měst připravují Beroun, Králův Dvůr a Středočeský kraj od roku 2014, kdy
                  podepsali memorandum. Takhle jsou na tom dnes:
                </p>
              </div>

              <div className={styles.basicsGrid}>
                {BASICS.map((b) => (
                  <div key={b.id} className={`${styles.bcard} ${styles[b.role]}`}>
                    <div className={styles.bcardHead}>
                      <h2>{b.who}</h2>
                    </div>
                    <div className={styles.bbig}>{b.big}</div>
                    <div className={styles.bbigNote}>{b.bigNote}</div>
                    {b.note ? (
                      <div className={styles.bnote}>
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
                <h2 className={styles.delayLead}>Co se v Berouně nejvíc zdrželo?</h2>

                <div className={styles.delayBody}>
                  <div className={styles.delayStat}>
                    <div className={styles.delayStatN}>Březen 2026</div>
                    <div className={styles.delayStatL}>
                      až tehdy schválilo zastupitelstvo první kupní smlouvu na pozemky pod stavbou
                    </div>
                  </div>

                  <div className={styles.delayText}>
                    <p>
                      U úseku s mostem přes Berounku podepsalo město smlouvu s krajem{' '}
                      <strong>v červenci 2023</strong>. Zavázalo se v ní předat kraji vykoupené pozemky – bez nich
                      kraj stavbu nezahájí.
                    </p>
                    <p>
                      Stavba se dotýká <strong>69 pozemků</strong> cizích vlastníků. První kupní smlouvu na ně
                      schválilo zastupitelstvo až v březnu 2026, víc než dva a půl roku po podpisu smlouvy s krajem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dvě klíčová čísla */}
            <div className={styles.keyfacts}>
              <div className={styles.keyfact}>
                <div className={styles.keyfactN}>12 let</div>
                <div className={styles.keyfactL}>
                  od podpisu memoranda mezi Berounem, Královým Dvorem a Středočeským krajem.
                </div>
              </div>
              <div className={`${styles.keyfact} ${styles.keyfactDark}`}>
                <div className={styles.keyfactN}>
                  17 840<small>aut / den</small>
                </div>
                <div className={styles.keyfactL}>
                  projede denně centrem Berouna a přes most TGM podle dopravní studie z roku 2019.
                </div>
              </div>
            </div>

            {/* Mapa obchvatu */}
            <div className={styles.mapwrap} style={{ marginTop: '26px' }}>
              <figure className={styles.mapfig}>
                {/* Držák musí mít rozměr obrázku, aby čísla úseků seděla na trase
                    i po zmenšení mapy na užších displejích (pozice jsou v %). */}
                <div className={styles.mapholder}>
                  <Image
                    className={styles.mapimg}
                    src="/obchvat.png"
                    alt="Mapa jižního obchvatu Berouna a Králova Dvora s vyznačenými úseky trasy"
                    width={997}
                    height={547}
                    sizes="(max-width: 997px) 100vw, 997px"
                    priority
                  />
                  {/* Čísla úseků nad mapou. Pro čtečky je skryté — tutéž informaci
                      nese legenda „Detaily úseků" pod mapou. */}
                  <div className={styles.mappins} aria-hidden="true">
                    {SEGMENTS.map((s) => (
                      <span
                        key={s.id}
                        className={`${styles.mappin} ${styles[s.role]}`}
                        style={{ left: `${s.map.x}%`, top: `${s.map.y}%` }}
                      >
                        {s.n}
                      </span>
                    ))}
                  </div>
                </div>
                <figcaption className={styles.mapcap}>
                  Trasa jižního obchvatu Berouna a Králova Dvora. Dvě etapy obchvatu Králova Dvora jsou postavené
                  a v provozu, navázat na ně mají čtyři úseky, které se zatím připravují. Čísla v mapě jdou po trase
                  od Králova Dvora k Hostímské a odpovídají seznamu úseků pod mapou; postavené etapy nesou čísla 1 a 2.
                </figcaption>
              </figure>

              {/* Detaily úseků — rozbalené rovnou, čísla v mapě odkazují na tenhle seznam */}
              <details className={styles.mapDetails} open>
                <summary className={styles.mapDetailsSummary}>
                  Detaily úseků
                  <span className={styles.mapDetailsChevron} aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <div className={styles.mapDetailsBody}>

                  <div className={styles.seglist}>
                    {SEGMENTS.map((s) => (
                      <div key={s.id} className={`${styles.sl} ${styles[s.role]}`}>
                        <span className={styles.n}>{s.n}</span>
                        <div>
                          <b>{s.title}</b>
                          <em>{s.from}</em>
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
              <h2>Jak šel čas s obchvatem</h2>
            </div>
            <p className={styles.secNote}>
              Od memoranda v roce 2014 postupují obě města i kraj každý na svém úseku. Vlevo najdete kroky Králova
              Dvora, vpravo kroky Berouna.
            </p>

            {/* Společná startovní čára */}
            <div className={styles.startline}>
              <div className={styles.startYear}>2014</div>
              <div>
                <div className={styles.startTitle}>Memorandum o společné stavbě obchvatu</div>
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
                  Zpravodaj Králova Dvora, říjen 2014
                </a>
              </div>
            </div>

            <div className={styles.tracks}>
              {/* KRÁLŮV DVŮR */}
              <div className={`${styles.track} ${styles.kd}`} id="kdvur">
                <header>
                  <h3>Králův Dvůr</h3>
                  <div className={styles.sub}>
                    Dvě etapy jsou postavené a v provozu. Třetí se připravuje a postaví se společně s berounskými
                    úseky.
                  </div>
                </header>
                <div className={styles.steps}>
                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2018 a 2020</div>
                    <h4>Pravomocná stavební povolení na obě etapy</h4>
                    <p>
                      Králův Dvůr získal pravomocná stavební povolení na obě etapy svého obchvatu: na I. etapu
                      v červnu 2018 a na II. část v lednu 2020.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/poskytnuti-informaci-inf-49-2022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Odpověď města na žádost o informace, INF/49/2022
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2020</div>
                    <h4>První etapa zprovozněná</h4>
                    <p>První etapa obchvatu Králova Dvora je hotová a slouží řidičům.</p>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2022</div>
                    <h4>Druhá etapa zprovozněná</h4>
                    <p>Druhá etapa obchvatu Králova Dvora je hotová a slouží řidičům.</p>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2026</div>
                    <h4>Projekt třetí části odevzdaný kraji</h4>
                    <p>
                      Králův Dvůr odevzdal kraji projektovou dokumentaci ke třetí, poslední části obchvatu. Jde
                      o hotový projekt, ne o postavenou silnici. Beroun odevzdal svou část o několik měsíců později.
                    </p>
                  </div>
                </div>
              </div>

              {/* BEROUN */}
              <div className={`${styles.track} ${styles.beroun}`} id="beroun">
                <header>
                  <h3>Beroun</h3>
                  <div className={styles.sub}>Dva berounské úseky jsou ve fázi přípravy.</div>
                </header>
                <div className={styles.steps}>
                  <div className={`${styles.ev} ${styles.m2}`}>
                    <div className={styles.date}>Říjen 2020</div>
                    <h4>Povolení na úsek od hranice s Královým Dvorem ke Koněpruské</h4>
                    <p>
                      Beroun získal stavební povolení na úsek od hranice s Královým Dvorem ke Koněpruské ulici, včetně
                      nového mostu přes Litavku. Povolení by propadlo, kdyby se do dvou let nezačalo stavět.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/priloha_1077298324_2_61529-2020_SP_-_Paralelni_komunikace_Beroun_-_KD_-_usek_C1_-_Beroun.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rozhodnutí stavebního úřadu MBE/61529/2020
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>2022</div>
                    <h4>Formální zahájení stavby archeologickým průzkumem</h4>
                    <p>
                      Aby povolení z roku 2020 nepropadlo, zahájilo město Beroun stavbu zemními pracemi pro zjišťovací
                      archeologický průzkum a potom práce přerušilo.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/mesto-zajistilo-potrebne-kroky-ke-stavbe-obchvatu-8480cs.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web města Beroun, 25. 8. 2023
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>26. 7. 2023</div>
                    <h4>Podpis smlouvy s krajem na úsek s mostem přes Berounku</h4>
                    <p>
                      Beroun podepsal s krajem smlouvu o spolupráci na úseku s mostem přes Berounku. Smlouva určuje
                      pořadí: kraj zajistí stavbu až poté, co mu město předá{' '}
                      <b>hotovou dokumentaci, vykoupené pozemky a pravomocné povolení</b>.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Smlouva_o_spolupraci_-_Jizni_paralelni_komunikace_Beroun_p.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Smlouva o spolupráci S-2385/2023
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>Březen 2024</div>
                    <h4>Město informuje o postupu podle harmonogramu</h4>
                    <p>
                      Město Beroun na svém webu uvedlo, že se stavba křižovatky a úseku do Králova Dvora plánuje na
                      přelom let 2024 a 2025. K tomu zatím nedošlo.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/realizace-jizniho-obchvatu-jiz-probiha-v-souladu-s-harmonogramem-9253cs.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web města Beroun, 6. 3. 2024
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m1}`}>
                    <div className={styles.date}>2025</div>
                    <h4>U mostu přes Litavku proběhla změna stavby</h4>
                    <p>
                      Projekt mostu přes Litavku bylo nutné přepracovat, protože výškově nenavazoval na plánovanou
                      okružní křižovatku. Povolení změny nabylo právní moci v květnu 2025. 
                    </p>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>Září 2025</div>
                    <h4>Pozemky ke směně město teprve zajišťuje</h4>
                    <p>
                      Na zastupitelstvu zaznělo, že pozemky, které chce Beroun nabídnout vlastníkům výměnou, ještě musíme
                      získat.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_10_09.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zápis ze zastupitelstva, 10. 9. 2025
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m1}`}>
                    <div className={styles.date}>Březen až červen 2026</div>
                    <h4>Výkupy pozemků se rozbíhají</h4>
                    <p>
                      Zastupitelstvo Berouna schválilo první kupní smlouvy na pozemky pod stavbou: v březnu na podíly
                      ve čtyřech pozemcích, v dubnu a červnu další, mezi nimi pozemky od Českých drah za 2,1 milionu
                      korun.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_04_03.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zápis ze zastupitelstva, 4. 3. 2026
                    </a>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_29_04.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zápis ze zastupitelstva, 29. 4. 2026
                    </a>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_16_06_ANON.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zápis ze zastupitelstva, 16. 6. 2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>Duben 2026</div>
                    <h4>Stavba se dotýká 69 cizích pozemků</h4>
                    <p>
                      V odpovědi na žádost o informace město uvedlo, že se stavba dotýká 69 pozemků cizích vlastníků
                      a že k tomu datu byla uzavřená jedna kupní smlouva.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Odpoved.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Odpověď města na žádost o informace, INF/27/2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>Červen 2026</div>
                    <h4>Žádost o povolení zatím nepodána</h4>
                    <p>
                      Projektová dokumentace se od února upravuje podle připomínek kraje. Na jaře se příprava protáhla
                      o 3 měsíce: Správa železnic si u své haly vyžádala místo svahu opěrnou zeď. Projektant změnu
                      zapracoval, žádost o stavební povolení zatím podaná nebyla.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Z_ZM_16_06_ANON.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zápis ze zastupitelstva, 16. 6. 2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>Květen 2027</div>
                    <h4>Předpokládané předání všech podkladů kraji</h4>
                    <p>
                      Předpokládaný termín, kdy má Beroun předat kraji všechny podklady k úseku s mostem přes
                      Berounku. Město ho v odpovědi na žádost o informace označuje jako orientační.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/Odpoved.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Odpověď města na žádost o informace, INF/27/2026
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>2028</div>
                    <h4>Předpokládané zahájení stavby</h4>
                    <p>
                      Předpokládaný rok zahájení stavby úseku s mostem přes Berounku, jak ho uvádí souhrnná technická
                      zpráva projektové dokumentace. Kraj podle smlouvy nejdřív hledá dotaci a soutěž na zhotovitele
                      vypíše až po jejím schválení.
                    </p>
                    <a
                      className={styles.doc}
                      href="/dokumenty/B_STZ.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Souhrnná technická zpráva
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
              zastupitelstva, odpovědi na žádosti o informace a sčítání dopravy.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Obchvat;