import { useEffect } from 'react';
import type { StaticImageData } from 'next/image';

// ── Stejné konstanty jako CandidateEditorial — držte je synchronní ──
const NAVY = '#161534';
const BLUE = '#3C96D7';
const BADGE_BG = '#22B573';
const TAG_BG = '#E7ECF2';

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
  const numberLabel =
    candidate.number != null ? String(candidate.number).padStart(2, '0') : null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const pillBase =
    'rounded-full font-bold uppercase tracking-wide whitespace-nowrap';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={handleBackdropClick}
    >
      <style>{`
        @keyframes cmSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cmPanelIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes cmTextIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cm-anim { animation: none !important; }
        }
        .cm-scroll {
          scrollbar-width: thin;
          scrollbar-color: #AFBDCC transparent;
        }
        .cm-scroll::-webkit-scrollbar { width: 8px; }
        .cm-scroll::-webkit-scrollbar-thumb {
          background: #AFBDCC;
          border-radius: 4px;
        }
        .cm-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Wrapper: overflow visible, aby postava mohla vystoupit z modálu */}
      <div className="relative w-full max-w-[680px]">
        {/* Karta */}
        <div className="relative z-10 flex h-[500px] max-h-[75vh] flex-col overflow-hidden rounded-2xl bg-[#F7F9FB] shadow-2xl sm:h-[540px]">
          {/* Nakloněný modrý panel za postavou — oříznutý rohem karty */}
          <div
            aria-hidden="true"
            className="cm-anim pointer-events-none absolute bottom-[-110px] left-[-150px] z-0 h-[470px] w-[470px] rounded-full"
            style={{
              backgroundColor: '#C6E0F5',
              animation: 'cmPanelIn 0.35s ease-out backwards',
            }}
          />

          {/* Číslo bíle skrz panel */}
          {numberLabel ? (
            <span
              aria-hidden="true"
              className="cm-anim pointer-events-none absolute bottom-[-24px] left-[36px] z-[1] select-none whitespace-nowrap text-[190px] font-bold leading-[0.8] text-white/80"
              style={{
                fontFamily: 'var(--font-heading)',
                animation: 'cmTextIn 0.35s ease-out 0.1s backwards',
              }}
            >
              {numberLabel}
            </span>
          ) : null}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-700"
            aria-label="Zavřít"
          >
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
          <div
            className="cm-anim relative z-10 shrink-0 px-6 pb-2 pt-5 sm:px-8"
            style={{ animation: 'cmTextIn 0.3s ease-out 0.08s backwards' }}
          >
            <h2
              id="modal-title"
              className="pr-12 text-[28px] font-bold leading-[1.05] sm:text-[34px]"
              style={{ fontFamily: 'var(--font-heading)', color: NAVY }}
            >
              <span className="relative inline-block">
                <span className="relative z-10">{candidate.name}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 sm:h-4"
                  style={{ backgroundColor: `${BLUE}33` }}
                />
              </span>
            </h2>

            {candidate.titles && candidate.titles.trim() ? (
              <p
                className="mt-1 text-[12px] font-bold tracking-wide"
                style={{ color: BLUE }}
              >
                {candidate.titles}
              </p>
            ) : null}

            <div
              className="mt-2 flex flex-wrap items-center gap-1.5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {candidate.badge ? (
                <span
                  className={`${pillBase} px-2.5 py-[3px] text-[10px] text-white`}
                  style={{ backgroundColor: BADGE_BG }}
                >
                  {candidate.badge}
                </span>
              ) : null}
              {candidate.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${pillBase} px-2.5 py-[3px] text-[10px]`}
                  style={{ backgroundColor: TAG_BG, color: NAVY }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tělo: text scroluje vpravo vedle stojící postavy */}
          <div
            className="cm-anim cm-scroll relative z-10 min-h-0 flex-1 overflow-y-scroll pb-6 pl-[185px] pr-4 pt-2 sm:pl-[265px] sm:pr-7"
            style={{ animation: 'cmTextIn 0.3s ease-out 0.14s backwards' }}
          >
            <div
              className="text-[14px] leading-[1.5] text-gray-700 sm:text-[15px] sm:leading-[1.55]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {candidate.fullText.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Postava: vjede zespoda, rameno přes hranu modálu, nohy uříznuté spodkem */}
        <div
          className="cm-anim pointer-events-none absolute bottom-0 left-[-85px] z-20 h-[calc(100%-135px)] max-h-[390px] w-[250px] sm:left-[-34px] sm:w-[265px]"
          style={{ animation: 'cmSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.05s backwards' }}
        >
          <img
            src={photoSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
            style={{ objectPosition: 'left bottom' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateModal;