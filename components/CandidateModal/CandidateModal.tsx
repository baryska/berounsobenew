import { useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import { renderBold } from '../../lib/renderBold';
import { fixNbsp } from '../../lib/nbsp';
import styles from './CandidateModal.module.css';

export interface CandidateModalData {
  number?: number | string;
  name: string;
  titles?: string;
  tags: string[];
  badge?: string;
  fullText: string;
  photo: string | StaticImageData;
}

interface CandidateModalProps {
  candidate: CandidateModalData | null;
  onClose: () => void;
}

const CandidateModal = ({ candidate, onClose }: CandidateModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (candidate) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [candidate, onClose]);

  if (!candidate) return null;

  const photoSrc =
    typeof candidate.photo === 'string' ? candidate.photo : candidate.photo.src;
  // Bez vodicí nuly – 1–9 je jedna číslice, stejně jako u medailonků
  const numberLabel = candidate.number != null ? String(candidate.number) : null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={styles.root}
      onClick={handleBackdropClick}
    >
      {/* Overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Wrapper: overflow visible, aby postava mohla vystoupit z modálu */}
      <div className={styles.wrapper}>
        {/* Karta */}
        <div className={styles.card}>
          {/* Nakloněný modrý panel za postavou — oříznutý rohem karty */}
          <div aria-hidden="true" className={styles.panel} />

          {/* Číslo bíle skrz panel */}
          {numberLabel ? (
            <span aria-hidden="true" className={styles.number}>
              {numberLabel}
            </span>
          ) : null}

          {/* Close button */}
          <button onClick={onClose} className={styles.closeButton} aria-label="Zavřít">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Hlavička */}
          <div className={styles.header}>
            <h2 id="modal-title" className={styles.title}>
              <span className={styles.titleHighlight}>
                <span className={styles.titleText}>{candidate.name}</span>
                <span aria-hidden="true" className={styles.titleUnderline} />
              </span>
            </h2>

            {candidate.titles && candidate.titles.trim() ? (
              <p className={styles.titles}>{fixNbsp(candidate.titles)}</p>
            ) : null}

            <div className={styles.tags}>
              {candidate.badge ? (
                <span className={`${styles.pill} ${styles.pillBadge}`}>
                  {candidate.badge}
                </span>
              ) : null}
              {candidate.tags.map((tag) => (
                <span key={tag} className={`${styles.pill} ${styles.pillTag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tělo: JEDEN div — scroll, výška, padding i text pohromadě.
              Spodní fade přes mask: posledních ~20px textu mizí do ztracena. */}
          <div className={styles.body}>
            {/* Odstavce odděluje prázdný řádek; tolerujeme mezery z odsazení
                template literalu (řádek s whitespace je pořád „prázdný“). */}
            {candidate.fullText
              .split(/\n\s*\n/)
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{renderBold(para)}</p>
              ))}
          </div>
        </div>

        {/* Postava: sourozenec karty (mimo overflow-hidden), rameno vyčnívá
            přes levou hranu do overlaye. Text uvnitř karty je omezený
            výškou karty, takže pod fotku neteče. */}
        <div className={styles.figure}>
          <img
            src={photoSrc}
            alt=""
            aria-hidden="true"
            className={styles.photo}
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateModal;
