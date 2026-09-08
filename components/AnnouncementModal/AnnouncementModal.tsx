import { useEffect, useState } from 'react';
import styles from './AnnouncementModal.module.css';

/* Verzi zvyš, když chceš oknem ukázat nové sdělení – uživatelé ho pak uvidí znovu. */
const STORAGE_KEY = 'bs-announcement-v1';

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      /* privátní režim / zablokované úložiště – okno raději neukazujeme opakovaně */
      seen = true;
    }
    if (!seen) setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* nevadí, jen se okno může příště ukázat znovu */
    }
  };

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-title"
      className={styles.root}
      onClick={handleBackdropClick}
    >
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.card}>
        <button type="button" onClick={close} className={styles.close} aria-label="Zavřít">
          &times;
        </button>

        <h2 id="announcement-title" className={styles.title}>
          Vyjádření Václava Kováře k dehonestačnímu článku
        </h2>

        <div className={styles.body}>
          <p>
            Měsíc před volbami vyšel v Našem regionu článek, který tvrdí, že jsem vyvedl peníze ze
            spolku Berounská zeleň pro osobní účely. Napsala ho „redakce“ a stojí na třech chybných
            platbách z našeho transparentního účtu. Všechny tři jsem spolku vrátil v plné výši.
            Článek o tom nepíše ani slovo, ačkoliv všechny tři vratky jsou na transparentním účtu
            vidět.
          </p>
          <p>
            Autor článku se díval na transparentní účet, vratky viděl a rozhodl se je nezmínit.
            Lživé články o tunelování spolku se nepíšou samy a nevycházejí náhodou měsíc před
            volbami. Kdo si tenhle článek objednal, ať se k němu přihlásí. Beroun sobě dělá politiku
            jinak a tohle je přesně důvod, proč kandidujeme.
          </p>
          <p>
            Vydavatele Našeho regionu jsem dnes vyzval k uveřejnění odpovědi podle tiskového zákona
            a k označení zadavatele článku. Redakci posílám předžalobní výzvu k omluvě, a pokud
            nepřijde, následuje žaloba na ochranu osobnosti a pověsti spolku. Tvrzení, že jsem
            vyvedl peníze pro osobní účely, když byly do koruny vrácené, není novinařina, ale
            pomluva, a jako pomluvu to také předávám našim právníkům.
          </p>
        </div>
      </div>
    </div>
  );
}
