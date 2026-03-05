import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Mobil.module.css';

const PREVIEW_KEY = 'berounsobe2026'; // URL: /mobil?preview=berounsobe2026

const MODULES = [
  { id: 'karta', name: 'Moje Karta' },
  { id: 'platby', name: 'Městské platby' },
  { id: 'parkovani', name: 'Parkování' },
  { id: 'kultura', name: 'Kultura' },
  { id: 'slevy', name: 'Slevy & Corrency' },
  { id: 'knihovna', name: 'Knihovna' },
  { id: 'komunikace', name: 'Komunikace' },
  { id: 'rezervace', name: 'Rezervace úřad' },
];

const Mobil = () => {
  const router = useRouter();
  const [activeModule, setActiveModule] = useState('karta');
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (router.isReady) {
      setAuthorized(router.query.preview === PREVIEW_KEY);
    }
  }, [router.isReady, router.query.preview]);

  if (!router.isReady || authorized === null) {
    return (
      <div className={styles.container} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '50vh', display: 'flex' }}>
        <p style={{ color: '#666' }}>Načítání…</p>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className={styles.container} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <Head><title>Stránka není dostupná | Beroun sobě</title></Head>
        <p style={{ color: '#666', textAlign: 'center' }}>Tato stránka není veřejně dostupná.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Beroun v mobilu | Beroun sobě</title>
        <meta name="description" content="Vizualizace mobilní aplikace Beroun – Karta Berouňáka, městské platby, parkování, kultura a další služby v jednom." />
      </Head>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Beroun v kapse</h1>
        <p className={styles.heroSubtitle}>
          Představujeme vizualizaci městské mobilní aplikace – vše od Karty Berouňáka přes parkování a platby až po rezervaci na úřad. 
          Jeden telefon, celé město.
        </p>
      </section>

      <div className={styles.moduleNav}>
        {MODULES.map((m) => (
          <button
            key={m.id}
            className={`${styles.moduleTab} ${activeModule === m.id ? styles.moduleTabActive : ''}`}
            onClick={() => setActiveModule(m.id)}
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

            {activeModule === 'karta' && (
              <>
                <div className={styles.appHeader}>
                  <div className={styles.appHeaderTitle}>Moje Karta Berouňáka</div>
                  <div className={styles.appHeaderSubtitle}>Digitální průkazka</div>
                </div>
                <div className={styles.screenContent}>
                  <div className={styles.qrCard}>
                    <div className={styles.userName}>Pan Marek</div>
                    <div className={styles.qrCode}>
                      <div className={styles.qrCodeInner}>
                        <div className={styles.qrPattern} />
                      </div>
                    </div>
                    <div>Předložte načtení u pokladny</div>
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
                    <button className={styles.payButton}>Zaplatit přes Apple Pay</button>
                  </div>
                  <div className={styles.paymentItem}>
                    <div className={styles.paymentRow}>
                      <span className={styles.paymentLabel}>Poplatek za psa – Rex</span>
                      <span className={styles.paymentAmount}>500 Kč</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#28a745' }}>Zaplaceno</span>
                  </div>
                  <div className={styles.paymentItem}>
                    <div className={styles.paymentRow}>
                      <span className={styles.paymentLabel}>Historie plateb</span>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>Účtenky ke stažení</span>
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
                    <div style={{ fontSize: '0.9rem', marginTop: 4 }}>Sousedský tarif: 15 Kč/h</div>
                    <div className={styles.parkingAction}>
                      <button className={`${styles.parkingBtn} ${styles.parkingBtnPrimary}`}>Zaparkovat zde</button>
                      <button className={`${styles.parkingBtn} ${styles.parkingBtnSecondary}`}>Prodloužit o hodinu</button>
                    </div>
                  </div>
                  <div className={styles.parkingCard}>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Aktuálně parkujete</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>Zóna B – do 14:30</div>
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
                        <span><span className={styles.priceOld}>180 Kč</span></span>
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
                  <div className={styles.appHeaderSubtitle}>Corrency</div>
                </div>
                <div className={styles.screenContent}>
                  <div className={styles.correncyBalance}>
                    <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Váš zůstatek</div>
                    <div className={styles.correncyAmount}>245 CR</div>
                    <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Historie plateb</div>
                  </div>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Partneři slevy</div>
                  <div className={styles.partnerItem}>
                    <div className={styles.partnerIcon} />
                    <span>Kavárna Na Rynku −10 %</span>
                  </div>
                  <div className={styles.partnerItem}>
                    <div className={styles.partnerIcon} />
                    <span>Restaurace U Zlatého lva −15 %</span>
                  </div>
                  <div className={styles.partnerItem}>
                    <div className={styles.partnerIcon} />
                    <span>Knihkupectví Beroun −5 %</span>
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
                    <div style={{ fontSize: '0.8rem', marginBottom: 4 }}>Číslo průkazky</div>
                    <div className={styles.barcodeLines} />
                    <div style={{ fontSize: '0.75rem' }}>123456789</div>
                  </div>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Půjčené knihy</div>
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
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Vyfoťte a odešlete – nesvítící lampa, díra v silnici...</div>
                  </div>
                  <div className={styles.calendarReminder}>
                    <strong>Zítra ráno</strong><br />
                    Vyvážejí plasty – dejte popelnici před dům
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 8 }}>Úřední deska / Novinky</div>
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
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Volné termíny – 10. 3. 2026</div>
                  <div className={styles.calendarGrid}>
                    {['9:00', '9:30', '10:00', '10:30', '11:00', '14:00', '14:30'].map((t, i) => (
                      <div key={t} className={`${styles.calendarDay} ${i < 3 ? styles.calendarDayFree : ''}`}>
                        {t}
                      </div>
                    ))}
                  </div>
                  <button className={styles.confirmBtn}>Potvrdit termín</button>
                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: 12 }}>
                    Připomínka + Lístek v mobilu
                  </div>
                </div>
              </>
            )}

            <nav className={styles.bottomNav}>
              <div className={`${styles.navIcon} ${activeModule === 'karta' ? styles.navIconActive : ''}`}>
                <span>🔲</span> Karta
              </div>
              <div className={`${styles.navIcon} ${activeModule === 'platby' ? styles.navIconActive : ''}`}>
                <span>💳</span> Platby
              </div>
              <div className={`${styles.navIcon} ${activeModule === 'parkovani' ? styles.navIconActive : ''}`}>
                <span>🅿️</span> Parkování
              </div>
              <div className={`${styles.navIcon} ${activeModule === 'kultura' ? styles.navIconActive : ''}`}>
                <span>🎭</span> Kultura
              </div>
              <div className={styles.navIcon}>
                <span>⋯</span> Více
              </div>
            </nav>
          </div>
        </div>
      </section>

      <footer className={styles.pageFooter}>
        Vizualizace konceptu městské aplikace Beroun – Beroun sobě
      </footer>
    </div>
  );
};

export default Mobil;
