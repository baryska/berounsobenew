import React, { useState } from 'react';
import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import styles from '../styles/Obchvat.module.css';

// Přístupový klíč – stránka se zobrazí jen s ?klic=<tato hodnota>, jinak vrací 404.
// Až půjde stránka veřejně, smaž getServerSideProps na konci souboru a odkomentuj odkaz v menu.
const OBCHVAT_PREVIEW_KEY = 'nahled-obchvat-2026';

interface Segment {
  id: string;
  role: 'west' | 'east' | 'done';
  n: string;
  cx: number; // střed úseku v souřadnicích viewBox (šířka 900) — pro pozici karty
  title: string;
  meta: string;
  chip: string;
  chipType: 'done' | 'open';
  vTitle: string; // popisek „odkud kam" ve svislém schématu (mobil)
  vMeta: string;
}

// Data úseků — dřívější legenda pod schématem, teď obsah vyskakovacích karet.
const SEGMENTS: Segment[] = [
  {
    id: 'done',
    role: 'done',
    n: '✓',
    cx: 107,
    title: 'Dvě etapy obchvatu Králova Dvora',
    meta: 'povolení 2018 a 2019, řidiči je podle starosty Králova Dvora několik let využívají',
    chip: 'V provozu',
    chipType: 'done',
    vTitle: 'Hotovo a v provozu',
    vMeta: 'dvě etapy obchvatu v Králově Dvoře',
  },
  {
    id: 's1',
    role: 'west',
    n: '1',
    cx: 252,
    title: 'Obchvat Králova Dvora — III. část',
    meta: 'zajišťuje Králův Dvůr',
    chip: 'Odevzdáno',
    chipType: 'done',
    vTitle: 'Králův Dvůr → hranice katastru',
    vMeta: 'západní část — jedna zakázka',
  },
  {
    id: 's2',
    role: 'west',
    n: '2',
    cx: 394,
    title: 'Úsek C1 — Beroun',
    meta: 'zajišťuje Beroun, stavební povolení z roku 2020',
    chip: 'Projekt jen v pracovní verzi',
    chipType: 'open',
    vTitle: 'hranice katastru → Koněpruská',
    vMeta: 'západní část — jedna zakázka',
  },
  {
    id: 's3',
    role: 'west',
    n: '3',
    cx: 518,
    title: 'Okružní křižovatka u D5 s mostem přes Litavku',
    meta: 'projektuje kraj',
    chip: 'Povolení nutno prodloužit',
    chipType: 'open',
    vTitle: 'okružní křižovatka u D5 a most přes Litavku',
    vMeta: 'západní část — jedna zakázka',
  },
  {
    id: 's4',
    role: 'east',
    n: '4',
    cx: 743,
    title: 'I. etapa — autobusové nádraží a most přes Berounku',
    meta: 'zajišťuje Beroun, na mostě závisí oprava mostu TGM',
    chip: 'Povolení nepodáno',
    chipType: 'open',
    vTitle: 'nádraží → most přes Berounku → Hostímská',
    vMeta: 'východní část — vlastním tempem',
  },
];

const ariaLabelFor = (s: Segment) =>
  `${s.n === '✓' ? 'Hotový úsek' : 'Úsek ' + s.n}: ${s.title}, ${s.meta}. Stav: ${s.chip}.`;

const Obchvat = () => {
  // Který úsek má otevřenou kartu (hover na desktopu / klepnutí na mobilu)
  const [active, setActive] = useState<string | null>(null);

  // Sdílené chování spouštěče úseku ve schématu
  const triggerProps = (id: string) => ({
    tabIndex: 0,
    role: 'button' as const,
    'aria-label': ariaLabelFor(SEGMENTS.find((s) => s.id === id) as Segment),
    'aria-expanded': active === id,
    className: `${styles.seg}${active === id ? ' ' + styles.segActive : ''}`,
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive((a) => (a === id ? null : a)),
    onFocus: () => setActive(id),
    onBlur: () => setActive((a) => (a === id ? null : a)),
    onClick: () => setActive((a) => (a === id ? null : id)),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActive((a) => (a === id ? null : id));
      }
    },
  });

  const activeSeg = SEGMENTS.find((s) => s.id === active) || null;

  return (
    <>
      <Head>
        <title>Proč se v Berouně nestaví obchvat | Beroun sobě</title>
        <meta
          name="description"
          content="Obchvat Berouna se skládá z několika úseků, které se projektují a povolují každý zvlášť. Přehled toho, co je hotové, co chybí a proč kvůli tomu stojí i oprava mostu T. G. Masaryka."
        />
      </Head>

      <div className={styles.page}>
        {/* ---------- HERO ---------- */}
        <header className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Beroun sobě · dopravní stavby · aktualizováno 08/2026</div>
            <h1>
              Proč se v Berouně nestaví obchvat<sup className={styles.starMark}>*</sup> a proč kvůli tomu{' '}
              <em>stojí i rekonstrukce mostu TGM</em>
            </h1>
            <p className={styles.heroNote}>
              <span className={styles.starMark}>*</span> Oficiálně se tato stavba nazývá Jižní paralelní komunikace.
            </p>
            <p className={styles.lede}>
              Obchvat není jedna stavba. Skládá se z několika úseků, které se projektují a povolují každý zvlášť.
              Králův Dvůr má dvě etapy hotové a lidé po nich už roky jezdí. Zbývá dostavět čtyři úseky — a nejdál od
              zahájení je ten berounský s novým mostem přes Berounku.{' '}
              <strong>
                Dokud nebude hotový, kraj nezačne opravovat ani most TGM: nebylo by kudy vést dopravu přes Berounku.
              </strong>
            </p>

            <div className={styles.mapwrap}>
              <div className={styles.eyebrow}>Kudy obchvat povede</div>
              <p className={styles.maphint}>
                Zelený úsek je hotový a v provozu. Zbylé čtyři chybí: tři z nich na západě se mají postavit najednou
                jako jedna zakázka, čtvrtý na východě jde vlastním tempem. Schéma není v měřítku.{' '}
                <span className={styles.maphintTip}>Najetím na úsek (na mobilu klepnutím) zobrazíš detail.</span>
              </p>

              {/* Horizontální schéma — desktop / tablet */}
              <div className={styles.corridorDesktop}>
                <svg
                  className={styles.corridor}
                  viewBox="0 0 900 130"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Schéma úseků obchvatu Berouna od Králova Dvora k Hostímské ulici: hotová část v Králově Dvoře, tři západní úseky jako jedna zakázka a jeden východní úsek s mostem přes Berounku."
                >
                  <text className={styles.seglabel} x="34" y="24">Hotovo a v provozu</text>
                  <text className={styles.seglabel} x="186" y="24">Západní část — tři úseky, jedna zakázka</text>
                  <text className={styles.seglabel} x="626" y="24">Východní část</text>

                  <g {...triggerProps('done')}>
                    <rect className="bar" x="34" y="36" width="146" height="20" rx="10" fill="var(--done)" />
                    <text className={styles.segnum} x="107" y="50" textAnchor="middle">HOTOVO</text>
                    <text className={styles.segfrom} x="34" y="76">dvě etapy obchvatu</text>
                    <text className={styles.segfrom} x="34" y="90">v Králově Dvoře</text>
                  </g>

                  <g {...triggerProps('s1')}>
                    <rect className="bar" x="186" y="36" width="132" height="20" rx="10" fill="var(--west)" opacity=".5" />
                    <text className={styles.segnum} x="252" y="50" textAnchor="middle">1</text>
                    <text className={styles.segfrom} x="186" y="76">Králův Dvůr →</text>
                    <text className={styles.segfrom} x="186" y="90">hranice katastru</text>
                  </g>

                  <g {...triggerProps('s2')}>
                    <rect className="bar" x="324" y="36" width="140" height="20" rx="10" fill="var(--west)" opacity=".76" />
                    <text className={styles.segnum} x="394" y="50" textAnchor="middle">2</text>
                    <text className={styles.segfrom} x="324" y="76">hranice katastru →</text>
                    <text className={styles.segfrom} x="324" y="90">Koněpruská</text>
                  </g>

                  <g {...triggerProps('s3')}>
                    <rect className="bar" x="470" y="36" width="96" height="20" rx="10" fill="var(--west)" />
                    <text className={styles.segnum} x="518" y="50" textAnchor="middle">3</text>
                    <text className={styles.segfrom} x="470" y="76">okružní křižovatka u D5</text>
                    <text className={styles.segfrom} x="470" y="90">a most přes Litavku</text>
                  </g>

                  <g {...triggerProps('s4')}>
                    <rect className="bar" x="626" y="36" width="234" height="20" rx="10" fill="var(--east)" />
                    <text className={styles.segnum} x="743" y="50" textAnchor="middle">4</text>
                    <text className={styles.segfrom} x="626" y="76">nádraží → most přes Berounku →</text>
                    <text className={styles.segfrom} x="626" y="90">Hostímská</text>
                  </g>

                </svg>

                {/* Vyskakovací karta úseku — hover na desktopu, focus z klávesnice */}
                {activeSeg && (
                  <div
                    className={styles.popover}
                    style={{ left: `clamp(125px, ${activeSeg.cx / 9}%, calc(100% - 125px))` }}
                    role="status"
                  >
                    <div className={`${styles.sl} ${styles[activeSeg.role]}`}>
                      <span className={styles.n}>{activeSeg.n}</span>
                      <div>
                        <b>{activeSeg.title}</b>
                        <em>{activeSeg.meta}</em>
                        <span className={`${styles.chip} ${styles[activeSeg.chipType]}`}>{activeSeg.chip}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Svislé schéma — mobil. Klepnutím se rozbalí detail úseku. */}
              <div className={styles.corridorMobile}>
                {SEGMENTS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`${styles.vseg} ${styles[s.role]}${active === s.id ? ' ' + styles.vsegOpen : ''}`}
                    aria-expanded={active === s.id}
                    onClick={() => setActive((a) => (a === s.id ? null : s.id))}
                  >
                    <span className={styles.vbar} aria-hidden="true" />
                    <span className={styles.n}>{s.n}</span>
                    <span className={styles.vtext}>
                      <b>{s.vTitle}</b>
                      <em>{s.vMeta}</em>
                      {active === s.id && (
                        <span className={styles.vcard}>
                          <strong>{s.title}</strong>
                          <span className={styles.vcardMeta}>{s.meta}</span>
                          <span className={`${styles.chip} ${styles[s.chipType]}`}>{s.chip}</span>
                        </span>
                      )}
                    </span>
                    <span className={styles.vchevron} aria-hidden="true">⌄</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.handoff}>
              Než kraj začne stavět, musí od města Beroun dostat: <b>hotovou dokumentaci</b> ·{' '}
              <b>vykoupené pozemky</b> · <b>stavební povolení</b>.
            </div>
          </div>
        </header>

        {/* ---------- VE ZKRATCE (sbalitelné shrnutí nahoře) ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <details className={styles.summaryDetails}>
              <summary className={styles.summarySummary}>
                <span>Ve zkratce</span>
                <span className={styles.summaryChevron} aria-hidden="true">⌄</span>
              </summary>

              <div className={styles.summaryBody}>
              <p>
                <strong>Z čeho se obchvat skládá.</strong> Ze šesti úseků. Králův Dvůr má dva hotové a lidé po nich
                jezdí. Zbývají čtyři: tři vedou od Králova Dvora k dálnici D5 a jeden vede od vlakového nádraží přes
                nový most přes Berounku k Hostímské ulici.
              </p>
              <p>
                <strong>Proč se nestaví ta část u dálnice.</strong> Povolení má, ale tři úseky se mají postavit
                najednou jako jedna zakázka a soutěž na stavební firmu nejde vypsat, dokud není připravené úplně
                všechno. Na jaře 2026 zbývalo asi dvanáct věcí: finální verze projektu, dořešení pozemků, přeložky
                elektřiny a kabelů, několik smluv. Stavební povolení na křižovatku u dálnice mezitím bude nutné
                prodloužit, protože se za dva roky nezačalo stavět.
              </p>
              <p>
                <strong>Proč se nestaví most přes Berounku.</strong> Projekt není hotový -
                z 24 částí stavby jich podle města zbývá dopracovat 14. Žádost o stavební povolení město dosud
                nepodalo. Pozemky pod budoucí silnicí nejsou všechny vykoupené. 
                V
                červnu 2026 přibylo další tříměsíční zpoždění, protože Správa železnic si vyžádala změnu projektu.
              </p>
              <p>
                <strong>Kdy se má začít stavět.</strong> Město má předat hotové podklady kraji zhruba v květnu 2027 a
                teprve pak začne kraj stavbu zajišťovat. V projektové dokumentaci je jako předpokládaný rok zahájení
                uveden rok 2028.
              </p>
              <p>
                <strong>Proč kvůli tomu stojí most TGM.</strong> Most se nedá opravovat za provozu —
                doprava by musela jinudy. A jinudy zatím není. Kraj proto opravu odkládá už od roku 2014, kdy se s
                Berounem a Královým Dvorem dohodl na stavbě obchvatu. Podle současných předpokladů přijde na řadu
                nejdřív v roce 2029, a jen pokud všechno předtím proběhne včas.
              </p>
              </div>
            </details>
          </div>
        </section>

        {/* ---------- SPOLEČNÝ ZAČÁTEK ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <span className={styles.num}>01</span>
              <h2>Společný začátek</h2>
            </div>
            <p className={styles.secNote}>
              Než se jednotlivé úseky rozešly každý svým tempem, měly společný start.
            </p>

            <div className={styles.shared}>
              <div className={styles.row}>
                <span className={styles.yr}>2011 → 2017</span>
                <div>
                  <h4>Příprava obchvatu běží už od roku 2011</h4>
                  <p>
                    Studie obchvatu, zaměření pozemků a podklady pro plánovací smlouvu vznikají od roku 2011. V roce
                    2017 město uzavírá smlouvu se sousední průmyslovou firmou, která má jako jeho zmocněnec zajistit
                    dokumentaci a vyřídit územní rozhodnutí i stavební povolení. K tomu ale nakonec nikdy nedošlo.
                  </p>
                  <a className={styles.doc} href="#">Smlouva o spolupráci · 0521/2017/SPO/OMI</a>
                </div>
              </div>
              <div className={styles.row}>
                <span className={styles.yr}>2014</span>
                <div>
                  <h4>Memorandum o jižním obchvatu</h4>
                  <p>
                    Beroun, Králův Dvůr a Středočeský kraj se dohodli na společné stavbě obchvatu obou měst včetně
                    nového mostu přes Berounku. Kraj kvůli tomu odložil opravu mostu TGM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- DVĚ ČÁSTI ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <span className={styles.num}>02</span>
              <h2>Jak šel čas v každé části</h2>
            </div>
            <p className={styles.secNote}>
              Přípravu úseků 1 až 3 na západě i úseku 4 na východě vede z velké části město Beroun. Rozdíl je v tom,
              jak daleko se dostaly.
            </p>

            <div className={styles.tracks}>
              {/* ZÁPAD */}
              <div className={`${styles.track} ${styles.west}`} id="zapad">
                <header>
                  <h3>Západ — směr Králův Dvůr</h3>
                  <div className={styles.sub}>
                    Tři navazující úseky <b>1 – 2 – 3</b> z mapy: dodělávka Králova Dvora, berounský úsek C1 s mostem
                    přes Litavku a okružní křižovatka u dálnice. Kraj a obě města je postaví najednou, jedním
                    zhotovitelem.
                  </div>
                  <span className={styles.status}>Povolení vydaná</span>
                </header>
                <div className={styles.steps}>
                  <div className={styles.ev}>
                    <div className={styles.date}>2017 → 2023</div>
                    <h4>Křižovatku u dálnice zdržela kolize s D5</h4>
                    <p>
                      Výstavbu okružní křižovatky schválila Rada kraje už v roce 2017. Práce se ale musely pozastavit,
                      protože kvůli plánovanému rozšíření dálnice D5 by křižovatka výškově nevyhovovala přemostění.
                      Kraj hledal nového projektanta a s přepracovanou dokumentací počítal až na konec roku 2023.
                      Křižovatku projektuje kraj, ne město.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/mesto-zajistilo-potrebne-kroky-ke-stavbe-obchvatu-8480cs.html"
                    >
                      Web města Beroun · 25. 8. 2023
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.kd}`}>
                    <div className={styles.date}>2018 → 2020</div>
                    <h4>Králův Dvůr má povolení na své úseky</h4>
                    <p>Tři pravomocná stavební povolení — v roce 2018, 2019 a 2020.</p>
                    <a className={styles.doc} href="#">Poskytnutí informací · INF/49/2022</a>
                  </div>

                  <div className={`${styles.ev} ${styles.kd}`}>
                    <div className={styles.date}>do 2020</div>
                    <h4>Králův Dvůr dokončil dvě etapy</h4>
                    <p>
                      Dvě etapy obchvatu jsou hotové a lidé je už několik let využívají.
                    </p>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>10/2020</div>
                    <h4>Beroun má povolení na úsek u dálnice</h4>
                    <p>
                      Město získává stavební povolení na úsek C1 včetně mostu přes Litavku. Povolení pozbývá platnosti,
                      pokud se do dvou let nezačne stavět.
                    </p>
                    <a className={styles.doc} href="#">Rozhodnutí MBE/61529/2020 · PM 10. 11. 2020</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>2022</div>
                    <h4>Stavba „zahájena&quot; archeologickým výkopem</h4>
                    <p>
                      V roce, kdy by povolení propadlo, město stavbu formálně zahajuje zemními pracemi pro zjišťovací
                      archeologický průzkum a práce vzápětí přerušuje. Podle informací zveřejněných na webu města se
                      tak stalo proto, aby povolení z roku 2020 nepropadlo. Skutečná stavba nezačíná.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/mesto-zajistilo-potrebne-kroky-ke-stavbe-obchvatu-8480cs.html"
                    >
                      Web města Beroun · 25. 8. 2023
                    </a>
                    <a className={styles.doc} href="#">Odpověď města · INF/72/2023</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>03/2024</div>
                    <h4>Město hlásí: vše jde podle harmonogramu</h4>
                    <p>
                      Podle webu města se stavba křižovatky a úseku do Králova Dvora plánuje na začátek roku 2025,
                      práce mají začít na přelomu 2024/25. Ani tento termín nevyšel.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/realizace-jizniho-obchvatu-jiz-probiha-v-souladu-s-harmonogramem-9253cs.html"
                    >
                      Web města Beroun · 6. 3. 2024
                    </a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>10/2024 → 04/2026</div>
                    <h4>Povolení na křižovatku je nutné prodloužit</h4>
                    <p>
                      Okružní křižovatka u OMV má pravomocné stavební povolení od října 2024. Do dubna 2026 se nezačala
                      stavět a povolení bude nutné prodloužit.
                    </p>
                    <span className={styles.src}>Zdroj: zápis koordinační schůzky</span>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>09/2025 → 06/2026</div>
                    <h4>Objednávka dopravního opatření trvala půl roku</h4>
                    <p>
                      Beroun měl zajistit dopravně inženýrské opatření za všechny tři úseky. Požadavek kraje zazněl v
                      září 2025, Králův Dvůr v březnu přislíbil úhradu poloviny nákladů, objednávka za zhruba 88 tisíc
                      korun byla zadána až v červnu 2026.
                    </p>
                    <span className={styles.src}>Zdroj: Petr Vychodil, starosta Králova Dvora, Facebook, 7/2026</span>
                  </div>

                  <div className={`${styles.ev} ${styles.kd}`}>
                    <div className={styles.date}>04/2026</div>
                    <h4>Králův Dvůr má odevzdáno vše</h4>
                    <p>
                      Ze společné koordinace vyplývá, že úsek Králova Dvora je připraven a zbývající kroky se týkají
                      berounské části.
                    </p>
                    <span className={styles.src}>Zdroj: Petr Vychodil, starosta Králova Dvora, Facebook, 7/2026</span>
                  </div>
                </div>

                <div className={styles.blockers}>
                  <div className={styles.bt}>Stav 07/2026</div>
                  <p className={styles.blockersLead}>Nevíme, co vše chybí k zahájení stavby.</p>
                  <p className={styles.blockersNote}> Na jaře 2026 zbývalo asi dvanáct věcí: finální verze projektu, dořešení pozemků, přeložky elektřiny a kabelů, několik smluv. Stavební povolení na křižovatku u dálnice mezitím bude nutné prodloužit, protože se za dva roky nezačalo stavět.</p>

                  <p className={styles.why}>
                    Tři úseky se budou stavět jako <b>jedna zakázka s jedním zhotovitelem</b>. Dokud není hotové
                    všechno, nelze vypsat výběrové řízení.
                  </p>
                  <span className={styles.src} style={{ marginTop: '10px' }}>
                    Zdroj: zápis koordinační schůzky 7. 4. 2026, zveřejněný starostou Králova Dvora
                  </span>
                </div>
              </div>

              {/* VÝCHOD */}
              <div className={`${styles.track} ${styles.east}`} id="vychod">
                <header>
                  <h3>Východ — most přes Berounku</h3>
                  <div className={styles.sub}>
                    Úsek <b>4</b> z mapy — I. etapa jižní paralelní komunikace: nové autobusové nádraží, most přes
                    Berounku a napojení na Hostímskou ulici. Zajišťuje město Beroun.
                  </div>
                  <span className={styles.status}>Zatím na papíře</span>
                </header>
                <div className={styles.steps}>
                  <div className={styles.ev}>
                    <div className={styles.date}>26. 7. 2023</div>
                    <h4>Beroun teprve podepisuje smlouvu s krajem</h4>
                    <p>
                      Smlouva určuje pořadí prací: kraj zajistí stavbu až poté, co mu Beroun předá hotovou
                      dokumentaci, vykoupené pozemky a pravomocné povolení.
                    </p>
                    <a className={styles.doc} href="#">Smlouva o spolupráci · S-2385/2023</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>02/2025</div>
                    <h4>Projekční práce se rozbíhají o rok později</h4>
                    <p>
                      Mezi podpisem smlouvy na dokumentaci a rozběhem prací na další fázi uplynul zhruba rok — čekalo
                      se na schválení varianty mostu ze strany kraje.
                    </p>
                    <span className={styles.src}>Zdroj: zápis koordinační schůzky</span>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>09/2025</div>
                    <h4>Z 69 pozemků je vykoupen jeden</h4>
                    <p>
                      Na zastupitelstvu zaznělo, že pozemky nutné ke směně s vlastníky město teprve musí získat. Bez
                      vypořádaných pozemků nemůže kraj stavbu zahájit.
                    </p>
                    <a className={styles.doc} href="#">Zápis ZM · 10. 9. 2025</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>03/2026</div>
                    <h4>Rozbíhá se vykupování pozemků</h4>
                    <p>Zastupitelstvo schvaluje první výkupy pozemků pod budoucí stavbou.</p>
                    <a className={styles.doc} href="#">Zápis ZM · 4. 3. 2026</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>04/2026</div>
                    <h4>Zastupitelstvo schvaluje další balík pozemků</h4>
                    <p>Zastupitelstvo schvaluje další výkupy pozemků pod budoucí stavbou.</p>
                    <a className={styles.doc} href="#">Zápis ZM · 04/2026</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>05/2026</div>
                    <h4>Dokumentace není hotová — chybí 14 z 24 objektů</h4>
                    <p>
                      Stavba se člení na 24 stavebních objektů. Na žádost o informace jich město poskytlo deset. K
                      ostatním uvedlo, že souvisejí s rozpracovaností dokumentace, dosud nebyly plně odsouhlaseny
                      krajem a teprve budou dopracovány. Mezi chybějícími je i dopravně inženýrské opatření, veřejné
                      osvětlení, přeložky plynu a CETIN nebo kácení zeleně.
                    </p>
                    <a className={styles.doc} href="#">Odpověď města · MBE/63648/2026</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>06/2026</div>
                    <h4>Zastupitelstvo schvaluje další balík pozemků</h4>
                    <p>
                      Mezi vykoupenými jsou pozemky od Českých drah za 2,1 milionu korun a několik podílů od soukromých
                      vlastníků.
                    </p>
                    <a className={styles.doc} href="#">Zápis ZM · 16. 6. 2026</a>
                  </div>

                  <div className={styles.ev}>
                    <div className={styles.date}>06/2026</div>
                    <h4>Žádost o povolení stále nepodána</h4>
                    <p>
                      Dokumentace se od února upravuje podle připomínek kraje a v červnu přibývá tříměsíční skluz kvůli
                      požadavku Správy železnic na změnu trasy. Na zastupitelstvu zaznělo, že se stále teprve pracuje na
                      krocích směřujících k podání žádosti.
                    </p>
                    <a className={styles.doc} href="#">Zápis ZM · 16. 6. 2026</a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>05/2027</div>
                    <h4>Předpokládané předání všech podkladů kraji</h4>
                    <p>
                      Teprve poté začne kraj stavbu zajišťovat. Termín je v odpovědi města označen jako orientační.
                    </p>
                    <a className={styles.doc} href="#">Odpověď města · §106</a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>2028</div>
                    <h4>Předpokládané zahájení stavby</h4>
                    <p>
                      Rok uvedený v souhrnné technické zprávě projektové dokumentace. Jde o předpoklad, který se může
                      posunout.
                    </p>
                    <a className={styles.doc} href="#">Souhrnná technická zpráva DÚSP</a>
                  </div>
                </div>

                <div className={styles.blockers}>
                  <div className={styles.bt}>Co ještě chybí — stav 06/2026</div>
                  <ul>
                    <li>
                      Dokumentace není kompletní — z 24 stavebních objektů jich podle města zbývá dopracovat a s krajem
                      odsouhlasit 14
                    </li>
                    <li>Zapracování připomínek kraje a změny trasy podle Správy železnic</li>
                    <li>Podání žádosti o stavební povolení — zatím nepodána</li>
                    <li>Výkup zbývajících pozemků — výkupy běží od března 2026</li>
                    <li>Předání kompletních podkladů kraji — orientačně 05/2027</li>
                  </ul>
                  <p className={styles.why}>
                    Teprve po předání podkladů začne kraj zajišťovat stavbu. Zahájení se podle dokumentace{' '}
                    <b>předpokládá v roce 2028</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- KDE JSME DNES ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <span className={styles.num}>03</span>
              <h2>Kde jsme dnes</h2>
            </div>

            <div className={styles.shared}>
              <div className={styles.row}>
                <span className={styles.yr}>07/2026</span>
                <div>
                  <h4>Stavba berounského úseku nezačala</h4>
                  <p>Stav ke dni sestavení této osy.</p>
                </div>
              </div>
              <div className={styles.row}>
                <span className={styles.yr}>2027 → 2029</span>
                <div>
                  <h4>Co nás čeká podle dokumentů</h4>
                  <p>
                    Předání podkladů městem: orientačně 05/2027. Zahájení stavby: předpoklad 2028. Rekonstrukce mostu
                    TGM: nejdříve 2029 — a jen pokud vše výše proběhne včas.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.impact}>
              <div className={styles.eyebrow}>Proč to spolu souvisí</div>
              <p>
                Dokud nebude kudy odvést dopravu, <em>nezačne ani</em> oprava mostu TGM.
              </p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <p className={styles.note}>
              Zdroje: smlouvy z registru, rozhodnutí stavebního úřadu, zápisy zastupitelstva, odpovědi na žádosti dle
              §106, koordinační jednání a veřejné příspěvky starosty Králova Dvora.
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
