import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { KANDIDATKY, OPOZICE, VLADY, ROKY_OSY, OSA_OD, OSA_DO } from '../data/kdo-je-kdo';
import { OKRSKY, VYHLEDAVAC_URL, SEZNAM_OKRSKU_URL } from '../data/volebni-okrsky';
import styles from '../styles/JakVolit.module.css';

/* Volby do zastupitelstev obcí — první den voleb, od kterého počítáme odpočet. */
const PRVNI_DEN_VOLEB = new Date('2026-10-09T14:00:00+02:00');

/* ---------- Odpočet do voleb ----------
   Počítá se až v prohlížeči (useEffect), aby se serverem vykreslené HTML
   a klientský render nerozešly. Do té doby se chip nezobrazuje. */
function Odpocet() {
  const [dnu, setDnu] = useState<number | null>(null);

  useEffect(() => {
    const ms = PRVNI_DEN_VOLEB.getTime() - Date.now();
    setDnu(Math.ceil(ms / 86400000));
  }, []);

  if (dnu === null) return null;

  if (dnu < 0) {
    return (
      <p className={styles.chip}>
        <span className={styles.chipDot} aria-hidden="true" />
        Volby už proběhly. Děkujeme všem, kdo přišli.
      </p>
    );
  }

  const slovo = dnu === 1 ? 'den' : dnu >= 2 && dnu <= 4 ? 'dny' : 'dní';

  return (
    <p className={styles.chip}>
      <span className={styles.chipDot} aria-hidden="true" />
      {dnu === 0 ? (
        <>
          Volby jsou <b>dnes</b>
        </>
      ) : (
        <>
          Do voleb zbývá{' '}
          <b>
            {dnu} {slovo}
          </b>
        </>
      )}
    </p>
  );
}

/* ---------- Otázka a odpověď ---------- */
function Otazka({ q, children }: { q: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.faqItem}>
      <button
        type="button"
        className={styles.faqQ}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ''}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
        </svg>
      </button>
      <div className={`${styles.faqA} ${open ? styles.faqAOpen : ''}`}>{children}</div>
    </li>
  );
}

/* ---------- Časová osa „Kdo vládne v Berouně?“ ----------
   Jedna řada na stranu, pruhy sedí na společné škále 2010–2026. Ve svislém
   řezu je tak vidět, kdo spolu v kterém období vládl, a ve vodorovném,
   jak dlouho se ta samá jména drží u moci. */
function podil(rok: number) {
  return ((rok - OSA_OD) / (OSA_DO - OSA_OD)) * 100;
}

function letSlovo(roky: number) {
  if (roky === 1) return 'rok';
  return roky >= 2 && roky <= 4 ? 'roky' : 'let';
}

function Osa() {
  return (
    <div className={styles.osa}>
      <div className={styles.osaSkalaRadek} aria-hidden="true">
        <span className={styles.osaSkala}>
          {ROKY_OSY.map((rok, i) => (
            <span
              key={rok}
              className={`${styles.osaRok} ${i === 0 ? styles.osaRokPrvni : ''} ${
                i === ROKY_OSY.length - 1 ? styles.osaRokPosledni : ''
              }`}
              style={{ left: `${podil(rok)}%` }}
            >
              {rok}
            </span>
          ))}
        </span>
      </div>

      <ul className={styles.osaRady}>
        {VLADY.map((v) => (
          <li key={v.strana} className={styles.osaRadek}>
            <span
              className={`${styles.osaStrana} ${v.kandidujeZnovu ? styles.osaStranaMoc : ''}`}
            >
              {v.strana}
            </span>
            <span className={styles.osaPas}>
              {v.useky.map((u) => (
                <span
                  key={u.od}
                  className={`${styles.osaPruh} ${v.kandidujeZnovu ? styles.osaPruhMoc : ''}`}
                  style={{ left: `${podil(u.od)}%`, width: `${podil(u.do) - podil(u.od)}%` }}
                >
                  <span className={styles.srOnly}>
                    ve vedení města {u.od}–{u.do}
                  </span>
                </span>
              ))}
            </span>
            <span className={styles.osaRoky}>
              {v.roky} {letSlovo(v.roky)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Ukázka hlasovacího lístku ----------
   Fotka skutečného lístku s křížkem u Berouna sobě. */
function Listek() {
  return (
    <figure className={styles.listek}>
      <Image
        src="/krizkujte_listek.png"
        alt="Hlasovací lístek pro volby do zastupitelstva města Beroun s křížkem v poli u kandidátky Beroun sobě, vylosované číslo 1"
        width={1313}
        height={931}
        layout="responsive"
        sizes="(max-width: 800px) 92vw, 380px"
      />
      <figcaption className={styles.listekNote}>
        Jeden křížek u názvu strany = hlas všem 21 kandidátům Berouna sobě.
      </figcaption>
    </figure>
  );
}

const JakVolit: NextPage = () => {
  const [hledani, setHledani] = useState('');

  const dotaz = hledani.trim().toLowerCase();
  const nalezene = dotaz
    ? OKRSKY.filter(
        (o) =>
          String(o.cislo) === dotaz ||
          o.budova.toLowerCase().includes(dotaz) ||
          o.adresa.toLowerCase().includes(dotaz) ||
          o.ulice.some((u) => u.toLowerCase().includes(dotaz))
      )
    : OKRSKY;

  return (
    <div className={styles.page}>
      <Head>
        <title>Jak volit | Beroun sobě</title>
        <meta
          name="description"
          content="Komunální volby v Berouně 9. a 10. října 2026 — kdy a kde se volí, co si vzít s sebou, jak správně odevzdat hlas a kdo za jednotlivými kandidátkami stojí."
        />
      </Head>

      {/* ---------- HERO ---------- */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Beroun sobě · komunální volby 2026</div>
          <h1>
            Jak volit <em>v Berouně</em>
          </h1>
          <p className={styles.lede}>
            Na lístku najdete osm kandidátek. Nejdřív vám ukážeme,{' '}
            <strong>kdo za nimi doopravdy stojí</strong> — ať vás nepřekvapí „lokální názvy“. Pod
            tím je všechno praktické: kdy a kde se volí, co si vzít s sebou a jak lístek vyplnit,
            aby hlas platil.
          </p>
          <Odpocet />

          <nav className={styles.toc} aria-label="Obsah stránky">
            <a href="#kdo-je-kdo">Kdo je kdo</a>
            <a href="#kdy-a-kde">Kdy a kde</a>
            <a href="#jak-podporit">Jak nás podpořit</a>
            <a href="#mistnosti">Volební místnosti</a>
            <a href="#otazky">Nejčastější otázky</a>
            <a href="#in-english">In English</a>
          </nav>
        </div>
      </header>

      {/* ---------- KDO JE KDO ---------- */}
      <section className={`${styles.section} ${styles.sectionHighlight}`} id="kdo-je-kdo">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Kdo je kdo v Berouně?</h2>
          </div>
          <p className={styles.secNote}>
            Vyznejte se v kandidátkách. Nenechte se zmást „lokálními názvy“ — pod nimi často
            kandidují celostátní strany a lidé, kteří město vedou už roky.
          </p>

          <div className={styles.stranyGrid}>
            {KANDIDATKY.map((k) => (
              <article
                key={k.cislo}
                className={`${styles.strana} ${k.nase ? styles.stranaNase : ''}`}
              >
                <div className={styles.stranaLoga} aria-hidden="true">
                  {k.loga.map((logo) => (
                    /* Záměrně <img>, ne next/image: většina log jsou SVG a ta by
                       optimalizátor v Next 12 odmítl bez dangerouslyAllowSVG. */
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={logo} src={logo} alt="" className={styles.stranaLogo} />
                  ))}
                </div>

                <header className={styles.stranaHead}>
                  <span className={styles.stranaCislo}>{k.cislo}</span>
                  <h3 className={styles.stranaNazev}>
                    {k.nazev}
                    {k.drive ? <span className={styles.stranaDrive}>dříve {k.drive}</span> : null}
                  </h3>
                </header>

                <p className={styles.stranaStrana}>
                  <span className={styles.stranaLabel}>Strana</span>
                  {k.strana}
                </p>

                <p className={styles.stranaLabel}>Kdo za nimi stojí?</p>
                <ul className={styles.tvare}>
                  {k.tvare.map((t) => (
                    <li key={t.jmeno}>
                      <b>{t.jmeno}</b>
                      <span>{t.role}</span>
                    </li>
                  ))}
                </ul>

                {k.nase ? (
                  <Link href="/#kdojsme">
                    <a className={styles.stranaLink}>Poznejte celou kandidátku →</a>
                  </Link>
                ) : null}
              </article>
            ))}
          </div>

          <div className={styles.kontextGrid}>
            <div className={styles.kontextCard}>
              <h3>Kdo vládne v Berouně?</h3>
              <Osa />
              <p className={styles.vedeniNote}>
                Plnou barvou jsou strany, které kandidují i letos. Osa zachycuje poslední čtyři
                volební období — ve vedení města jsou tyto strany i déle.
              </p>
            </div>

            <div className={styles.kontextCard}>
              <h3>Kdo tvoří současnou skutečnou opozici?</h3>
              <ul className={styles.opozice}>
                {OPOZICE.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KDY / KDE / CO S SEBOU ---------- */}
      <section className={styles.section} id="kdy-a-kde">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Praktické minimum</h2>
          </div>

          <div className={styles.basics}>
            <article className={styles.basicCard}>
              <h3>Kdy?</h3>
              <ul className={styles.terminy}>
                <li>
                  <b>pátek 9. října 2026</b>
                  <span>14:00 — 22:00</span>
                </li>
                <li>
                  <b>sobota 10. října 2026</b>
                  <span>8:00 — 14:00</span>
                </li>
              </ul>
            </article>

            <article className={styles.basicCard}>
              <h3>Kde?</h3>
              <p>
                Vaše volební místnost je uvedená <b>na obálce s volebními lístky</b>, kterou
                dostanete do schránky. Volit můžete jen v ní.
              </p>
              <a className={styles.cardLink} href="#mistnosti">
                Seznam volebních místností
              </a>
            </article>

            <article className={styles.basicCard}>
              <h3>Co s sebou?</h3>
              <ul className={styles.checklist}>
                <li>občanský průkaz nebo cestovní pas, případně aplikaci eDoklad</li>
                <li>volební lístek — pokud ho nemáte, dostanete ho ve volební místnosti</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- JAK PODPOŘIT ---------- */}
      <section className={`${styles.section} ${styles.sectionHighlight}`} id="jak-podporit">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Jak maximálně podpořím Beroun sobě?</h2>
          </div>
          <p className={styles.secNote}>
            Pohneme s tím, co roky stojí. Pro plnou podporu stačí jediný křížek.
          </p>

          <div className={styles.podporaGrid}>
            <Listek />

            <div className={styles.podporaText}>
              <p className={styles.podporaHlavni}>
                Zakřížkujte pole <em>u názvu strany</em> Beroun sobě — číslo <b>1</b>.
              </p>
              <p className={styles.podporaVedle}>
                 Nejsilnější podporu nám dáte, když zakřížkujete celou naši kandidátku, protože tím od vás dostaneme všechny hlasy, které máte k dispozici. Když zakřížkujete jen některá jména, dostaneme od vás jen jejich zlomek. Na prvních místech kandidátky jsou lidé, kteří chtějí pro město naplno pracovat v zastupitelstvu. 
              </p>

              <div className={styles.pozor}>
                <h3>Na co si dát pozor</h3>
                <ul>
                  <li>
                    Zakřížkovat jde <b>jen jedna strana</b>. Dvě a víc = neplatný hlas.
                  </li>
                  <li>
                    Lístek nesmí být viditelně <b>přetržený ani přeškrtaný</b> a musí být{' '}
                    <b>v úřední obálce</b>.
                  </li>
                </ul>
              </div>

              <Link href="/program">
                <a className={styles.btn}>Přečíst celý program</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VOLEBNÍ MÍSTNOSTI ---------- */}
      <section className={styles.section} id="mistnosti">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Volební místnosti</h2>
          </div>

          {OKRSKY.length > 0 ? (
            <>
              <p className={styles.secNote}>
                Najděte si svůj okrsek podle ulice, adresy nebo čísla okrsku. Závazná je vždy
                obálka s volebními lístky, kterou jste dostali do schránky.
              </p>

              <label className={styles.searchWrap}>
                <span className={styles.srOnly}>Hledat volební místnost</span>
                <input
                  type="search"
                  className={styles.search}
                  placeholder="Zadejte ulici, například Plzeňská…"
                  value={hledani}
                  onChange={(e) => setHledani(e.target.value)}
                />
              </label>

              {nalezene.length > 0 ? (
                <ul className={styles.okrskyList}>
                  {nalezene.map((o) => (
                    <li key={o.cislo} className={styles.okrsek}>
                      <span className={styles.okrsekNum}>{o.cislo}</span>
                      <div className={styles.okrsekBody}>
                        <h3 className={styles.okrsekTitle}>
                          {o.budova}
                          {o.poznamka ? <span className={styles.okrsekTag}>{o.poznamka}</span> : null}
                        </h3>
                        <p className={styles.okrsekAdresa}>
                          {o.adresa}
                          {o.mistnost ? ` · ${o.mistnost}` : ''}
                        </p>
                        {o.ulice.length > 0 ? (
                          <p className={styles.okrsekUlice}>{o.ulice.join(' · ')}</p>
                        ) : null}
                      </div>
                      {o.mapa ? (
                        <a
                          className={styles.okrsekMapa}
                          href={o.mapa}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Mapa
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.empty}>
                  Pro „{hledani}“ jsme nic nenašli. Zkuste jinou ulici, nebo použijte{' '}
                  <a className={styles.inlineLink} href={VYHLEDAVAC_URL} target="_blank" rel="noreferrer">
                    vyhledávač podle adresy
                  </a>
                  .
                </p>
              )}
            </>
          ) : (
            /* Seznam okrsků zatím nemáme — nabídneme aspoň spolehlivé zdroje.
               Jakmile se data/volebni-okrsky.ts naplní, zobrazí se tabulka. */
            <>
              <p className={styles.secNote}>
                Vaše volební místnost je uvedená na obálce s volebními lístky. Úplný seznam okrsků
                zveřejnilo město — najdete ji takto:
              </p>
              <div className={styles.zdrojeGrid}>
                <a className={styles.zdroj} href={VYHLEDAVAC_URL} target="_blank" rel="noreferrer">
                  <h3>Vyhledat podle adresy</h3>
                  <p>Zadáte ulici a číslo popisné, aplikace ukáže příslušnou volební místnost.</p>
                  <span className={styles.zdrojCta}>volby.tmapy.cz →</span>
                </a>
                <a className={styles.zdroj} href={SEZNAM_OKRSKU_URL} target="_blank" rel="noreferrer">
                  <h3>Seznam volebních místností</h3>
                  <p>
                    Závazný seznam
                    všech volebníchmístností v Berouně.
                  </p>
                  <span className={styles.zdrojCta}>mesto-beroun.cz · PDF →</span>
                </a>
                <a className={styles.zdroj} href="tel:+420311654151">
                  <h3>Zeptat se na úřadě</h3>
                  <p>Odbor správní MěÚ Beroun vám místnost sdělí i po telefonu.</p>
                  <span className={styles.zdrojCta}>+420 311 654 151 →</span>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ---------- NEJČASTĚJŠÍ OTÁZKY ---------- */}
      <section className={styles.section} id="otazky">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Nejčastější otázky</h2>
          </div>

          <ul className={styles.faqList}>
            <Otazka q="Kdo může volit?">
              <p>
                Všichni občané, kteří mají trvalý pobyt v Berouně, jsou svéprávní a dosáhnou
                plnoletosti nejpozději v druhý den voleb, tj. 10. října 2026.
              </p>
            </Otazka>

            <Otazka q="Kdy je volba neplatná?">
              <ul>
                <li>Když je volební lístek viditelně přetržený nebo přeškrtaný.</li>
                <li>Když volební lístek není v obálce.</li>
                <li>
                  Když je zakřížkovaná více než jedna strana nebo je uděleno více než 21 křížků.
                </li>
              </ul>
            </Otazka>

            <Otazka q="Jsem cizinec. Mohu volit?">
              <p>
                Ano, můžete, pokud máte trvalý nebo přechodný pobyt v obci a jste občanem členského
                státu EU.
              </p>
              <p>
                Nejpozději dva dny před začátkem voleb, tj. <b>do 7. října 2026</b>, podejte
                písemnou nebo osobní žádost na obecní úřad, na správní odbor. Úřad ověří vaši
                totožnost a dokument o pobytu a dopíše vás do seznamu voličů.
              </p>
            </Otazka>

            <Otazka q="Můžu volit v jiné volební místnosti?">
              <p>
                Volit můžete jen ve volební místnosti, která je uvedena na obálce s volebními
                lístky, která vám byla doručena do schránky.
              </p>
            </Otazka>

            <Otazka q="Mohu volit ze zahraničí?">
              <p>V komunálních volbách to bohužel není možné.</p>
            </Otazka>

            <Otazka q="Chci volit, ale nemůžu se dostavit do volební místnosti. Mohu volit z domu?">
              <p>Ano, v případě závažných zdravotních důvodů je možné volit z domova.</p>
              <p>
                Požádejte obecní úřad nebo volební komisi o využití přenosné volební urny. Žádost je
                možné podat písemně, ústně nebo telefonicky na obecním úřadu, na správním odboru.
                Okrsková volební komise vyšle své členy s přenosnou volební urnou, úřední obálkou a
                sadou hlasovacích lístků.
              </p>
              <p>
                Komise se může dostavit pouze na adresu <b>v rámci daného volebního okrsku</b>.
              </p>
            </Otazka>
          </ul>
        </div>
      </section>

      {/* ---------- IN ENGLISH ---------- */}
      <section className={styles.section} id="in-english">
        <div className={styles.wrap}>
          <div className={styles.english} lang="en">
            <div className={styles.englishFlag}>In English</div>
            <h2>Can I vote if I am not a Czech citizen but I live in Beroun?</h2>
            <p>
              <b>Yes, you can</b>, if you are at least 18 years old, have permanent or temporary
              residence in Beroun and are a citizen of another EU member state.
            </p>
            <p>
              You must submit a written or personal application to the municipal office (see the
              contact details below) no later than two days before the start of the elections,{' '}
              <b>i.e. by October 7, 2026</b>. The office will verify your identity and residence
              documents and will add you to the voter list.
            </p>
            <p>Bring your ID and documents of residency when going to vote.</p>
            <p className={styles.englishDates}>
              Elections: <b>Friday, October 9, 2026, 2 p.m. — 10 p.m.</b> and{' '}
              <b>Saturday, October 10, 2026, 8 a.m. — 2 p.m.</b>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- KONTAKT NA ÚŘAD ---------- */}
      <section className={styles.section} id="kontakt-urad">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <h2>Kontakt na úřad</h2>
          </div>
          <p className={styles.secNote}>
            Odbor správní MěÚ Beroun — sem patří zápis do seznamu voličů i žádost o přenosnou urnu.
          </p>

          <div className={styles.uradGrid}>
            <div className={styles.uradCard}>
              <h3>Adresa</h3>
              <p>
                Husovo náměstí 68
                <br />
                266 01 Beroun
                <br />
                <span className={styles.soft}>přízemí, dveře A111</span>
              </p>
            </div>
            <div className={styles.uradCard}>
              <h3>Telefon</h3>
              <p>
                <a className={styles.inlineLink} href="tel:+420311654151">
                  +420 311 654 151
                </a>
                <br />
                <a className={styles.inlineLink} href="tel:+420311654152">
                  +420 311 654 152
                </a>
              </p>
            </div>
            <div className={styles.uradCard}>
              <h3>Úřední hodiny</h3>
              <ul className={styles.hodiny}>
                <li>
                  <b>pondělí a středa</b>
                  <span>8:00 — 17:00</span>
                </li>
                <li>
                  <b>úterý a čtvrtek</b>
                  <span>8:00 — 14:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ZÁVĚREČNÁ VÝZVA ---------- */}
      <section className={styles.closing}>
        <div className={styles.wrap}>
          <p className={styles.closingBig}>
            Pohneme s tím, <em>co roky stojí.</em>
          </p>
          <p className={styles.closingSub}>
            Volte Beroun sobě — číslo <b>1</b>.
          </p>
          <div className={styles.closingBtns}>
            <Link href="/program">
              <a className={styles.btn}>Celý program</a>
            </Link>
            <Link href="/#napistenam">
              <a className={styles.btnGhost}>Napište nám</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JakVolit;
