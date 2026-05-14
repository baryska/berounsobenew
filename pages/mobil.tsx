import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Mobil.module.css';

const PREVIEW_KEY = 'berounsobe2026'; // URL: /mobil?preview=berounsobe2026

const FEATURES = [
  {
    icon: '🪪',
    title: 'beroun.ka',
    desc: 'Vaše berounská karta. Jeden QR kód, který otevře výhody po celém městě.',
    color: '#3c96d7',
    link: 'https://www.berounskakarta.cz',
    linkLabel: 'Více na berounskakarta.cz',
  },
  {
    icon: '💳',
    title: 'Platby bez front',
    desc: 'Odpad, pes, poplatky – vše půjde zaplatit z gauče. Platba kartou, účtenka rovnou v mobilu.',
    color: '#ffaf4b',
  },
  {
    icon: '🅿️',
    title: 'Chytré parkování',
    desc: 'Najít volné místo, zaplatit jedním tapnutím, prodloužit parkování na dálku. Počítáme s integrací EasyPark.',
    color: '#00c864',
  },
  {
    icon: '🎭',
    title: 'Kultura na dosah',
    desc: 'Kino, Laguna, MKC – přehled akcí, možnost zvýhodněných vstupenek pro držitele karty a lístky přímo v appce.',
    color: '#3c96d7',
  },
  {
    icon: '🏷️',
    title: 'Slevy u lokálních podniků',
    desc: 'Kavárny, restaurace, obchody – partneři programu by mohli nabízet slevy jen pro Berouňáky. Podpora lokálních podniků, úspora pro vás.',
    color: '#ffaf4b',
  },
  {
    icon: '📚',
    title: 'Knihovna v kapse',
    desc: 'Čtenářský průkaz přímo v telefonu, přehled výpůjček a prodloužení jedním kliknutím. Konec papírových kartiček.',
    color: '#00c864',
  },
  {
    icon: '📢',
    title: 'Město promluví s vámi',
    desc: 'Hlášení závad, svozový kalendář, úřední deska i push notifikace. Budete v obraze.',
    color: '#ffaf4b',
  },
  {
    icon: '🗓️',
    title: 'Úřad bez čekání',
    desc: 'Rezervace termínu na úřadě online. Žádná čísílka, žádné fronty – přijdete přesně na čas.',
    color: '#3c96d7',
  },
];

const MODULES = [
  { id: 'karta', name: 'Berounská karta', icon: '🔲', navName: 'Karta' },
  { id: 'platby', name: 'Městské platby', icon: '💳', navName: 'Platby' },
  { id: 'parkovani', name: 'Parkování', icon: '🅿️', navName: 'Parkování' },
  { id: 'kultura', name: 'Kultura', icon: '🎭', navName: 'Kultura' },
  { id: 'slevy', name: 'Slevy' },
  { id: 'knihovna', name: 'Knihovna' },
  { id: 'komunikace', name: 'Komunikace' },
  { id: 'rezervace', name: 'Rezervace úřad' },
];

const QR_GRID = [
  [1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
  [1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1],
  [0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0],
  [1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1],
  [0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0],
  [1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1],
  [0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0],
  [1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0],
  [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1],
  [1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1],
];

const QRCode = () => {
  const size = 21;
  const cellSize = 5;
  const totalSize = size * cellSize;
  return (
    <svg width={totalSize} height={totalSize} viewBox={`0 0 ${totalSize} ${totalSize}`} className={styles.qrSvg}>
      {QR_GRID.map((row, y) =>
        row.map((cell, x) =>
          cell === 1 ? (
            <rect
              key={`${x}-${y}`}
              x={x * cellSize}
              y={y * cellSize}
              width={cellSize}
              height={cellSize}
              rx={1}
              fill="#161534"
            />
          ) : null
        )
      )}
    </svg>
  );
};

const NAV_ITEMS = MODULES.filter(m => m.icon).slice(0, 4);

const Mobil = () => {
  const router = useRouter();
  const [activeModule, setActiveModule] = useState('karta');
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      setAuthorized(router.query.preview === PREVIEW_KEY);
    }
  }, [router.isReady, router.query.preview]);

  const switchModule = (id: string) => {
    setActiveModule(id);
    setScreenKey(k => k + 1);
  };

  if (!router.isReady || authorized === null) {
    return (
      <div className={styles.container} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '50vh', display: 'flex' }}>
        <p style={{ color: '#64748b' }}>Načítání…</p>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className={styles.container} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <Head><title>Stránka není dostupná | Beroun sobě</title></Head>
        <p style={{ color: '#64748b', textAlign: 'center' }}>Tato stránka není veřejně dostupná.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Beroun v mobilu | Beroun sobě</title>
        <meta name="description" content="Vize mobilní aplikace Beroun – beroun.ka, městské platby, parkování, kultura a další služby v jednom." />
      </Head>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Beroun v kapse</h1>
        <p className={styles.heroSubtitle}>
          Městská mobilní aplikace je jedním z konkrétních projektů, se kterými jdeme do nadcházejících voleb.
          Pokud dostaneme vaši důvěru, začneme ji vyvíjet. Takhle by mohla vypadat.
        </p>
      </section>

      <div className={styles.moduleNav}>
        {MODULES.map((m) => (
          <button
            key={m.id}
            className={`${styles.moduleTab} ${activeModule === m.id ? styles.moduleTabActive : ''}`}
            onClick={() => switchModule(m.id)}
          >
            {m.name}
          </button>
        ))}
      </div>

      <section className={styles.phoneSection}>
        <div className={styles.phoneFrame}>
          <div className={styles.phoneScreen}>
            <div className={styles.statusBar}>
              <span className={styles.statusTime}>9:41</span>
              <div className={styles.statusIcons}>
                <span>📶</span><span>📡</span><span>🔋</span>
              </div>
            </div>

            <div key={screenKey} className={styles.screenFadeIn}>
              {activeModule === 'karta' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Moje beroun.ka</div>
                    <div className={styles.appHeaderSubtitle}>Digitální průkazka</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.qrCard}>
                      <div className={styles.cardChip} />
                      <div className={styles.userName}>Pan Marek</div>
                      <div className={styles.userSub}>berounská karta</div>
                      <div className={styles.qrCode}>
                        <QRCode />
                      </div>
                      <div className={styles.qrHint}>Předložte k načtení u pokladny</div>
                    </div>
                    <div className={styles.discountList}>
                      <div className={styles.discountItem}>
                        <span>Laguna</span>
                        <span className={styles.discountBadge}>−20 %</span>
                      </div>
                      <div className={styles.discountItem}>
                        <span>Kino</span>
                        <span className={styles.discountBadge}>−15 %</span>
                      </div>
                      <div className={styles.discountItem}>
                        <span>Knihovna</span>
                        <span className={styles.discountBadge}>Zdarma</span>
                      </div>
                      <div className={styles.discountItem}>
                        <span>MKC akce</span>
                        <span className={styles.discountBadge}>−10 %</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'platby' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Městské platby</div>
                    <div className={styles.appHeaderSubtitle}>E-shop v kapse</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={`${styles.paymentItem} ${styles.paymentItemUnpaid}`}>
                      <div className={styles.paymentRow}>
                        <span className={styles.paymentLabel}>Odpad 2024</span>
                        <span className={styles.paymentAmount}>900 Kč</span>
                      </div>
                      <span className={styles.paymentStatus}>NEZAPLACENO</span>
                      <button className={styles.payButton}>Zaplatit kartou</button>
                    </div>
                    <div className={styles.paymentItem}>
                      <div className={styles.paymentRow}>
                        <span className={styles.paymentLabel}>Poplatek za psa – Rex</span>
                        <span className={styles.paymentAmount}>500 Kč</span>
                      </div>
                      <span className={styles.paymentPaid}>Zaplaceno</span>
                    </div>
                    <div className={styles.paymentItem}>
                      <div className={styles.paymentRow}>
                        <span className={styles.paymentLabel}>Historie plateb</span>
                      </div>
                      <span className={styles.paymentMeta}>Účtenky ke stažení</span>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'parkovani' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Parkování</div>
                    <div className={styles.appHeaderSubtitle}>Integrace EasyPark</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.mapPlaceholder}>🗺️ Mapa Berouna – parkovací zóny</div>
                    <div className={styles.parkingCard}>
                      <div className={styles.parkingZone}>Zóna A – Husovo náměstí</div>
                      <div className={styles.parkingTariff}>Sousedský tarif: 15 Kč/h</div>
                      <div className={styles.parkingAction}>
                        <button className={`${styles.parkingBtn} ${styles.parkingBtnPrimary}`}>Zaparkovat zde</button>
                        <button className={`${styles.parkingBtn} ${styles.parkingBtnSecondary}`}>Prodloužit o hodinu</button>
                      </div>
                    </div>
                    <div className={styles.parkingCard}>
                      <div className={styles.parkingActive}>Aktuálně parkujete</div>
                      <div className={styles.parkingActiveZone}>Zóna B – do 14:30</div>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'kultura' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Kultura a Volný čas</div>
                    <div className={styles.appHeaderSubtitle}>Laguna, Kino, MKC</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.eventCard}>
                      <div className={styles.eventImage}>🎬 KINO</div>
                      <div className={styles.eventInfo}>
                        <div className={styles.eventTitle}>Dune: Část třetí</div>
                        <div className={styles.eventMeta}>Dnes 19:00 · Kino Beroun</div>
                        <div className={styles.ticketPrice}>
                          <span className={styles.priceOld}>180 Kč</span>
                          <span className={styles.priceNew}>153 Kč (sleva)</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.eventCard}>
                      <div className={styles.eventImage}>🏊 LAGUNA</div>
                      <div className={styles.eventInfo}>
                        <div className={styles.eventTitle}>Plavání</div>
                        <div className={styles.eventMeta}>Otevírací doba: 10–20 h</div>
                        <div className={styles.ticketPrice}>
                          <span></span>
                          <span className={styles.priceNew}>Lístek v aplikaci</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'slevy' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Lokální slevy</div>
                    <div className={styles.appHeaderSubtitle}>Výhody u obchodníků</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.sectionLabel}>Partneři programu</div>
                    <div className={styles.partnerItem}>
                      <div className={styles.partnerIcon}>☕</div>
                      <div className={styles.partnerInfo}>
                        <div className={styles.partnerName}>Kavárna Na Rynku</div>
                        <div className={styles.partnerDesc}>Husovo nám. 15</div>
                      </div>
                      <span className={styles.discountBadge}>−10 %</span>
                    </div>
                    <div className={styles.partnerItem}>
                      <div className={styles.partnerIcon}>🍽️</div>
                      <div className={styles.partnerInfo}>
                        <div className={styles.partnerName}>Restaurace U Zlatého lva</div>
                        <div className={styles.partnerDesc}>Plzeňská 42</div>
                      </div>
                      <span className={styles.discountBadge}>−15 %</span>
                    </div>
                    <div className={styles.partnerItem}>
                      <div className={styles.partnerIcon}>📚</div>
                      <div className={styles.partnerInfo}>
                        <div className={styles.partnerName}>Knihkupectví Beroun</div>
                        <div className={styles.partnerDesc}>Politických vězňů 8</div>
                      </div>
                      <span className={styles.discountBadge}>−5 %</span>
                    </div>
                    <div className={styles.partnerItem}>
                      <div className={styles.partnerIcon}>🏊</div>
                      <div className={styles.partnerInfo}>
                        <div className={styles.partnerName}>Laguna Beroun</div>
                        <div className={styles.partnerDesc}>Sportovní areál</div>
                      </div>
                      <span className={styles.discountBadge}>−20 %</span>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'knihovna' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Knihovna</div>
                    <div className={styles.appHeaderSubtitle}>Čtenářský průkaz</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.libraryBarcode}>
                      <div className={styles.barcodeLabel}>Číslo průkazky</div>
                      <div className={styles.barcodeLines} />
                      <div className={styles.barcodeNumber}>123456789</div>
                    </div>
                    <div className={styles.sectionLabel}>Půjčené knihy</div>
                    <div className={styles.bookItem}>
                      <div style={{ flex: 1 }}>
                        <div className={styles.bookTitle}>Sto roků samoty</div>
                        <div className={styles.bookDue}>Vrátit do: 15. 3. 2026</div>
                        <button className={styles.extendBtn}>Prodloužit výpůjčku</button>
                      </div>
                    </div>
                    <div className={styles.bookItem}>
                      <div style={{ flex: 1 }}>
                        <div className={styles.bookTitle}>Malý princ</div>
                        <div className={styles.bookDue}>Vrátit do: 20. 3. 2026</div>
                        <button className={styles.extendBtn}>Prodloužit výpůjčku</button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'komunikace' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Komunikace a servis</div>
                    <div className={styles.appHeaderSubtitle}>Město na dosah</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.reportCard}>
                      <h4>Hlášení závad</h4>
                      <div className={styles.reportDesc}>Vyfoťte a odešlete – nesvítící lampa, díra v silnici...</div>
                    </div>
                    <div className={styles.calendarReminder}>
                      <div className={styles.reminderTitle}>Zítra ráno</div>
                      <div className={styles.reminderText}>Vyvážejí plasty – dejte popelnici před dům</div>
                    </div>
                    <div>
                      <div className={styles.newsLabel}>Úřední deska / Novinky</div>
                      <div className={styles.newsItem}>Rekonstrukce mostu TGM – aktualizace</div>
                      <div className={styles.newsItem}>Jarní úklid města 12. 4.</div>
                      <div className={styles.newsItem}>Nový program MKC na duben</div>
                    </div>
                  </div>
                </>
              )}

              {activeModule === 'rezervace' && (
                <>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderTitle}>Rezervace na úřad</div>
                    <div className={styles.appHeaderSubtitle}>Virtuální recepce</div>
                  </div>
                  <div className={styles.screenContent}>
                    <div className={styles.officeList}>
                      <div className={`${styles.officeItem} ${styles.officeItemActive}`}>Občanské průkazy</div>
                      <div className={styles.officeItem}>Matrika</div>
                      <div className={styles.officeItem}>Stavební úřad</div>
                    </div>
                    <div className={styles.terminyLabel}>Volné termíny – 10. 3. 2026</div>
                    <div className={styles.calendarGrid}>
                      {['9:00', '9:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00'].map((t, i) => (
                        <div key={t} className={`${styles.calendarDay} ${i < 3 ? styles.calendarDayFree : ''}`}>
                          {t}
                        </div>
                      ))}
                    </div>
                    <button className={styles.confirmBtn}>Potvrdit termín</button>
                    <div className={styles.reservationHint}>
                      Připomínka + Lístek v mobilu
                    </div>
                  </div>
                </>
              )}
            </div>

            <nav className={styles.bottomNav}>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.navItem} ${activeModule === item.id ? styles.navItemActive : ''}`}
                  onClick={() => switchModule(item.id)}
                >
                  <span className={styles.navItemIcon}>{item.icon}</span>
                  {item.navName}
                </div>
              ))}
              <div className={styles.navItem} onClick={() => switchModule('knihovna')}>
                <span className={styles.navItemIcon}>⋯</span>
                Více
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Co by mohla umět?</h2>
        <p className={styles.featuresSubtitle}>
          Jedna aplikace, která nahradí papírové kartičky, fronty na úřadě i hledání parkovacích automatů.
        </p>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon} style={{ background: `${f.color}20` }}>
                <span>{f.icon}</span>
              </div>
              <h3 className={styles.featureCardTitle}>{f.title}</h3>
              <p className={styles.featureCardDesc}>{f.desc}</p>
              {'link' in f && f.link && (
                <a href={f.link} target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
                  {f.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Město, které vám rozumí</h2>
          <p className={styles.ctaDesc}>
            Tohle není sci-fi. Je to směr, kterým chceme Beroun posunout. Moderní město může začít v mobilu – a my víme, jak na to.
          </p>
        </div>
      </section>

      <footer className={styles.pageFooter}>
        Vize konceptu městské aplikace Beroun – Beroun sobě
      </footer>
    </div>
  );
};

export default Mobil;
