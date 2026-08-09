import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import styles from '../styles/Obchvat.module.css';

// Přístupový klíč – stránka se zobrazí jen s ?klic=<tato hodnota>, jinak vrací 404.
// Až půjde stránka veřejně, smaž getServerSideProps na konci souboru a odkomentuj odkaz v menu.
const OBCHVAT_PREVIEW_KEY = 'nahled-obchvat-2026';

/* ---------- DATA ---------- */

// Tři důvody, proč se nestaví. Toto je jádro stránky — vejde se na první obrazovku.
const REASONS = [
  {
    id: 'dokumentace',
    label: 'Dokumentace',
    state: 'Není hotová',
    text:
      'Úsek s novým mostem přes Berounku se člení na 24 stavebních objektů - u 14 z nich město uvádí, že jsou rozpracované a neodsouhlasené krajem. Na úsek ke Královu Dvoru byl v dubnu 2026 hotový jen návrh projektu, finální verzi měl projektant odevzdat v květnu 2026.',
  },
  {
    id: 'pozemky',
    label: 'Pozemky',
    state: 'Vykoupené jen zčásti',
    text:
      'Pod úsekem s mostem je 69 pozemků. Loni v září byl vykoupený jediný, výkupy se ve velkém rozjely až na jaře 2026. Stále ale nejsou všechny pozemky vykoupené.'
  },
  {
    id: 'povoleni',
    label: 'Stavební povolení',
    state: 'Nepodáno',
    text:
      'Bez stavebního povolení se nesmí začít stavět. Beroun o něj pro úsek s mostem přes Berounku k létu 2026 nepožádal - žádá se totiž na celou stavbu najednou a dokud není hotová dokumentace, podat ji nelze.',
  },
];

// Čísla z dokumentů — bez rétoriky, každé dohledatelné.
// tone řídí barvu karty: problem = oranžová (zdržení), good = zelená (hotovo),
// big = tmavá dominantní karta (nejsilnější číslo), future = ztlumená (výhled).
const STATS = [
  { n: '15 let', l: 'se obchvat připravuje — první studie vznikly v roce 2011', tone: 'problem' },
  { n: '2014', l: 'memorandum Berouna, Králova Dvora a kraje; kraj odkládá opravu mostu TGM', tone: 'problem' },
  { n: '2020', l: 'Králův Dvůr má dvě etapy své části hotové a v provozu', tone: 'good' },
  { n: '17 840', l: 'aut denně projede centrem Berouna a přes most TGM', tone: 'big' },
  { n: '2023', l: 'Beroun teprve podepisuje s krajem smlouvu na úsek s mostem přes Berounku', tone: 'problem' },
  { n: '05/2027', l: 'Beroun má předat hotové podklady kraji — teprve pak může kraj zahájit stavbu', tone: 'future' },
  { n: '2028', l: 'předpokládaný rok zahájení stavby podle projektu', tone: 'future' },
  { n: '2029', l: 'nejdřívější možná oprava mostu TGM — patnáct let po memorandu', tone: 'problem' },
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
    chip: 'Odevzdáno',
    chipType: 'done',
  },
  {
    id: 's2',
    role: 'beroun',
    n: '2',
    title: 'Úsek C1 s mostem přes Litavku',
    from: 'hranice katastru → Koněpruská',
    who: 'Beroun',
    chip: 'Projekt v pracovní verzi',
    chipType: 'open',
  },
  {
    id: 's3',
    role: 'beroun',
    n: '3',
    title: 'Okružní křižovatka u D5',
    from: 'napojení na Koněpruskou',
    who: 'projektuje kraj',
    chip: 'Povolení nutno prodloužit',
    chipType: 'open',
  },
  {
    id: 's4',
    role: 'beroun',
    n: '4',
    title: 'Most přes Berounku a autobusové nádraží',
    from: 'nádraží → most přes Berounku → Hostímská',
    who: 'Beroun',
    chip: 'Povolení nepodáno',
    chipType: 'open',
  },
];

const Obchvat = () => {
  return (
    <>
      <Head>
        <title>Proč stojí obchvat Berouna — a proč kvůli tomu stojí i most TGM | Beroun sobě</title>
        <meta
          name="description"
          content="Most TGM se nedá opravit, dokud nebude obchvat. Kraj kvůli tomu odkládá opravu od roku 2014. Přehled z úředních dokumentů: co je hotové a co ještě chybí."
        />
      </Head>

      <div className={styles.page}>
        {/* ---------- HERO: titulek + tři důvody ---------- */}
        <header className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Beroun sobě · dopravní stavby · aktualizováno 08/2026</div>

            <h1>
              Proč se v Berouně nestaví <em>obchvat</em>
              <sup className={styles.starMark}>*</sup> a proč kvůli tomu stojí i <em>rekonstrukce mostu TGM</em>
            </h1>
            <p className={styles.heroNote}>
              <span className={styles.starMark}>*</span> Oficiálně se tato stavba nazývá Jižní paralelní komunikace.
            </p>
            <p className={styles.subtitle}>
              Kraj kvůli obchvatu odkládá opravu mostu TGM <strong>od roku 2014</strong>. Králův Dvůr má svou část hotovou, berounská část stále není připravená. Co ještě chybí?
            </p>

            <div className={styles.reasons}>
              {REASONS.map((r) => (
                <div key={r.id} className={styles.reason}>
                  <div className={styles.reasonHead}>
                    <span className={styles.reasonLabel}>{r.label}</span>
                    <span className={styles.reasonState}>{r.state}</span>
                  </div>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>

            <p className={styles.trust}>
              <span className={styles.trustDot} aria-hidden="true" />
              Každý údaj na této stránce vychází z <b>úředních dokumentů</b> — smlouvy, rozhodnutí úřadu, zápisy
              zastupitelstva a odpovědi na žádosti dle §106.
            </p>
          </div>
        </header>

        {/* ---------- ČÍSLA ---------- */}
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <h2>Přípravy v číslech</h2>
            </div>
            <div className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.n + s.l} className={`${styles.stat} ${styles[s.tone]}`}>
                  <div className={styles.statN}>{s.n}</div>
                  <div className={styles.statL}>{s.l}</div>
                </div>
              ))}
            </div>
            <p className={styles.statsNote}>
              Zdroje: memorandum 2014 · odpovědi města dle §106 · souhrnná technická zpráva projektu · zápisy
              zastupitelstva a koordinačních schůzek · veřejné vyjádření starosty Králova Dvora · sčítání dopravy
            </p>
          </div>
        </section>

        {/* ---------- SCHÉMA ÚSEKŮ ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <h2>Z čeho se obchvat skládá</h2>
            </div>
            <p className={styles.secNote}>
              Obchvat není jedna stavba. Tři úseky na západě se mají postavit najednou jako jedna zakázka, čtvrtý na
              východě jde vlastním tempem. Schéma není v měřítku.
            </p>

            <div className={styles.mapwrap}>
              <svg
                className={styles.corridor}
                viewBox="0 0 900 96"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Schéma úseků obchvatu od Králova Dvora k Hostímské ulici: hotová část v Králově Dvoře, tři západní úseky a jeden východní úsek s mostem přes Berounku."
              >
                <text className={styles.seglabel} x="34" y="22">Hotovo a v provozu</text>
                <text className={styles.seglabel} x="186" y="22">Západní část — tři úseky, jedna zakázka</text>
                <text className={styles.seglabel} x="626" y="22">Východní část</text>

                <rect x="34" y="36" width="146" height="20" rx="10" fill="var(--m3)" />
                <text className={styles.segnum} x="107" y="50" textAnchor="middle">HOTOVO</text>

                <rect x="186" y="36" width="132" height="20" rx="10" fill="var(--kd)" />
                <text className={styles.segnum} x="252" y="50" textAnchor="middle">1</text>

                <rect x="324" y="36" width="140" height="20" rx="10" fill="var(--beroun)" />
                <text className={styles.segnum} x="394" y="50" textAnchor="middle">2</text>

                <rect x="470" y="36" width="96" height="20" rx="10" fill="var(--beroun)" />
                <text className={styles.segnum} x="518" y="50" textAnchor="middle">3</text>

                <rect x="626" y="36" width="234" height="20" rx="10" fill="var(--beroun)" />
                <text className={styles.segnum} x="743" y="50" textAnchor="middle">4</text>

                <text className={styles.segfrom} x="34" y="78">Králův Dvůr</text>
                <text className={styles.segfrom} x="470" y="78">Koněpruská, D5</text>
                <text className={styles.segfrom} x="760" y="78">Hostímská</text>
              </svg>

              {/* Karty úseků — vždy viditelné, žádný hover */}
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

            <div className={styles.handoff}>
              Než kraj začne stavět, musí od města Beroun dostat: <b>hotovou dokumentaci</b> ·{' '}
              <b>vykoupené pozemky</b> · <b>stavební povolení</b>.
            </div>
          </div>
        </section>

        {/* ---------- DVĚ OSY: KRÁLŮV DVŮR vs BEROUN ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <h2>Jak šel čas u obou měst</h2>
            </div>
            <p className={styles.secNote}>
              Stejná stavba, dvě radnice. Vlevo kroky Králova Dvora, vpravo kroky Berouna.
            </p>

            <div className={styles.tracks}>
              {/* KRÁLŮV DVŮR */}
              <div className={`${styles.track} ${styles.kd}`} id="kdvur">
                <header>
                  <h3>Králův Dvůr</h3>
                  <div className={styles.sub}>Svou část obchvatu dokončil a zbytek odevzdal.</div>
                  <span className={styles.status}>Hotovo / odevzdáno</span>
                </header>
                <div className={styles.steps}>
                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>2018 → 2020</div>
                    <h4>Tři pravomocná stavební povolení</h4>
                    <p>Králův Dvůr získává povolení na své úseky postupně v letech 2018, 2019 a 2020.</p>
                    <a className={styles.doc} href="#">Poskytnutí informací · INF/49/2022</a>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>do 2020</div>
                    <h4>Dvě etapy hotové a v provozu</h4>
                    <p>
                      Dvě etapy obchvatu jsou dokončené a lidé je podle starosty Králova Dvora už několik let
                      běžně využívají.
                    </p>
                    <span className={styles.src}>Zdroj: Petr Vychodil, starosta Králova Dvora, Facebook, 7/2026</span>
                  </div>

                  <div className={`${styles.ev} ${styles.m3}`}>
                    <div className={styles.date}>04/2026</div>
                    <h4>„Projekt připraven“ — odevzdáno vše</h4>
                    <p>
                      V zápise ze společné koordinace má Králův Dvůr u své části poznámku, že je připravena.
                      Zbývající kroky se týkají berounské části.
                    </p>
                    <span className={styles.src}>Zdroj: zápis koordinační schůzky 7. 4. 2026</span>
                  </div>
                </div>
              </div>

              {/* BEROUN */}
              <div className={`${styles.track} ${styles.beroun}`} id="beroun">
                <header>
                  <h3>Beroun</h3>
                  <div className={styles.sub}>
                    Odpovídá za úsek C1 s mostem přes Litavku i za východní most přes Berounku.
                  </div>
                  <span className={styles.status}>Ve fázi přípravy</span>
                </header>
                <div className={styles.steps}>
                  <div className={`${styles.ev} ${styles.m2}`}>
                    <div className={styles.date}>10/2020</div>
                    <h4>Povolení na úsek u dálnice (C1)</h4>
                    <p>
                      Město získává stavební povolení na úsek C1 včetně mostu přes Litavku. Povolení propadá,
                      pokud se do dvou let nezačne stavět.
                    </p>
                    <a className={styles.doc} href="#">Rozhodnutí MBE/61529/2020 · PM 10. 11. 2020</a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>2022</div>
                    <h4>Stavba „zahájena“ archeologickým výkopem</h4>
                    <p>
                      V roce, kdy by povolení propadlo, město stavbu formálně zahajuje zemními pracemi pro
                      zjišťovací archeologický průzkum a práce vzápětí přerušuje. Podle webu města se tak stalo
                      proto, aby povolení z roku 2020 nepropadlo.
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
                    <a className={styles.doc} href="#">Smlouva o spolupráci · S-2385/2023</a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>03/2024</div>
                    <h4>Město hlásí: vše jde podle harmonogramu</h4>
                    <p>
                      Podle webu města se stavba křižovatky a úseku do Králova Dvora plánuje na přelom 2024/25.
                      Ani tento termín nevyšel.
                    </p>
                    <a
                      className={styles.doc}
                      href="https://www.mesto-beroun.cz/pro-obcany/aktualne/aktuality/realizace-jizniho-obchvatu-jiz-probiha-v-souladu-s-harmonogramem-9253cs.html"
                    >
                      Web města Beroun · 6. 3. 2024
                    </a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>09/2025</div>
                    <h4>Z 69 pozemků je vykoupen jeden</h4>
                    <p>
                      Na zastupitelstvu zaznělo, že pozemky pod stavbu město teprve musí získat. Bez vypořádaných
                      pozemků nemůže kraj stavbu zahájit.
                    </p>
                    <a className={styles.doc} href="#">Zápis ZM · 10. 9. 2025</a>
                  </div>

                  <div className={`${styles.ev} ${styles.m1}`}>
                    <div className={styles.date}>03 → 06/2026</div>
                    <h4>Výkup pozemků se rozbíhá</h4>
                    <p>
                      Zastupitelstvo od jara 2026 schvaluje první balíky výkupů — mimo jiné pozemky od Českých
                      drah za 2,1 milionu korun a podíly od soukromých vlastníků.
                    </p>
                    <a className={styles.doc} href="#">Zápisy ZM · 4. 3. a 16. 6. 2026</a>
                  </div>

                  <div className={`${styles.ev} ${styles.m1}`}>
                    <div className={styles.date}>05/2026</div>
                    <h4>Dokumentace není hotová — 14 z 24 objektů</h4>
                    <p>
                      Stavba se člení na 24 stavebních objektů. Na žádost o informace jich město poskytlo{' '}
                      <b>10</b>; u zbývajících <b>14</b> uvádí, že jsou rozpracované, kraj je dosud neodsouhlasil a
                      teprve budou dopracovány.
                    </p>
                    <a className={styles.doc} href="#">Odpověď města · MBE/63648/2026</a>
                  </div>

                  <div className={`${styles.ev} ${styles.m0}`}>
                    <div className={styles.date}>06/2026</div>
                    <h4>Žádost o povolení stále nepodána</h4>
                    <p>
                      Dokumentace se od února upravuje podle připomínek kraje a v červnu přibývá tříměsíční skluz
                      kvůli požadavku Správy železnic na změnu trasy.
                    </p>
                    <a className={styles.doc} href="#">Zápis ZM · 16. 6. 2026</a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>05/2027</div>
                    <h4>Předpokládané předání všech podkladů kraji</h4>
                    <p>Termín je v odpovědi města označen jako orientační.</p>
                    <a className={styles.doc} href="#">Odpověď města · §106</a>
                  </div>

                  <div className={`${styles.ev} ${styles.future}`}>
                    <div className={styles.date}>2028</div>
                    <h4>Předpokládané zahájení stavby</h4>
                    <p>Rok uvedený v souhrnné technické zprávě projektové dokumentace.</p>
                    <a className={styles.doc} href="#">Souhrnná technická zpráva DÚSP</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CO JEŠTĚ CHYBÍ ----------
        <section className={`${styles.section} ${styles.sectionHighlight}`}>
          <div className={styles.wrap}>
            <div className={styles.secHead}>
              <span className={styles.num}>03</span>
              <h2>Co ještě chybí</h2>
            </div>
            <p className={styles.secNote}>Stav podle dokumentů z jara a léta 2026.</p>

            <div className={styles.blockers}>
              <div className={styles.bgroup}>Dokumentace</div>
              <ul>
                <li>Finální projekt úseku C1 — zatím jen pracovní verze, podle které nelze soutěžit</li>
                <li>Z 24 stavebních objektů východního úseku zbývá dopracovat a s krajem odsouhlasit 14</li>
                <li>Zapracování připomínek kraje a změny trasy podle Správy železnic (tříměsíční skluz)</li>
                <li>Doplnění dokumentace křižovatky podle požadavků Povodí a ŘSD</li>
              </ul>

              <div className={styles.bgroup}>Pozemky a smlouvy</div>
              <ul>
                <li>Výkup zbývajících pozemků — z 69 potřebných byla loni v září vykoupená jediná parcela, výkupy se rozběhly na jaře 2026.</li>
                <li>Dokončení smluv k pozemkům města i u čerpací stanice a trojstranné smlouvy o vedení sítí</li>
              </ul>

              <div className={styles.bgroup}>Povolení a sítě</div>
              <ul>
                <li>Podání žádosti o stavební povolení na východní úsek — dosud nepodáno</li>
                <li>Prodloužení stavebního povolení na křižovatku (za dva roky se nezačalo stavět)</li>
                <li>Přeložky ČEZ a CETIN — smlouvy podepsány, dokumentace se teprve zpracovává</li>
              </ul>

              <p className={styles.why}>
                Tři západní úseky se budou stavět jako <b>jedna zakázka s jedním zhotovitelem</b>. Dokud není hotové
                všechno, nelze vypsat výběrové řízení — a Králův Dvůr má u své části v zápise poznámku „projekt
                připraven".
              </p>
              <span className={styles.src}>
                Zdroje: zápis koordinační schůzky 7. 4. 2026 · odpovědi města dle §106 · zápisy zastupitelstva
              </span>
            </div>
          </div>
        </section> */}


        {/* ---------- CO UDĚLÁME (kampaňový blok až na konci) ---------- */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.plan}>
              <div className={styles.eyebrow}>Náš postoj</div>
              <h3>Dotáhnout přípravu, aby se konečně začalo stavět</h3>
              <p>
                Chceme urychleně dokončit výkupy zbývajících pozemků, uzavřít dokumentaci a podat žádost o stavební povolení.
                Jsou to podmínky, na kterých visí obchvat i rekonstrukce mostu TGM — a jejich splnění je v
                rukou berounské radnice.
              </p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <p className={styles.note}>
              Vše na této stránce vychází z úředních dokumentů: smlouvy z registru, rozhodnutí stavebního úřadu, zápisy
              zastupitelstva, odpovědi na žádosti dle §106, zápisy z koordinačních jednání, sčítání dopravy a veřejné
              příspěvky starosty Králova Dvora.
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