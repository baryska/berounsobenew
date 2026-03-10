import { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface CandidateModalData {
  name: string;
  titles?: string;
  tags: string[];
  fullText: string;
  photo: StaticImageData;
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div
        className="relative w-full max-w-[600px] max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          aria-label="Zavřít"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="pt-10 px-8 pb-6 flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0 mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <Image
              src={candidate.photo}
              alt={candidate.name}
              width={120}
              height={120}
              className="object-cover object-center w-[120px] h-[120px]"
            />
          </div>
          <h2 id="modal-title" className="text-2xl font-bold text-[#3C96D7] text-center mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
            {candidate.name}
          </h2>
          {candidate.titles && candidate.titles.trim() && (
            <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{candidate.titles}</p>
          )}
          <div className="flex flex-wrap justify-center gap-2">
            {candidate.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#FFAF4B] text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body - scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto px-8 pb-6">
          <div className="text-gray-700 leading-relaxed space-y-4" style={{ fontFamily: 'var(--font-body)', fontSize: 'calc(15px + 0.1rem)' }}>
            {candidate.fullText.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-4 flex justify-center">
          <button
            onClick={onClose}
            className="py-2 px-6 rounded-full bg-[#3C96D7] text-white font-semibold text-sm hover:bg-[#2c77ad] transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Zavřít
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateModal;
