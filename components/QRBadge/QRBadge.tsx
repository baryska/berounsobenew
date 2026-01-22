import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './QRBadge.module.css';

const QRBadge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (badgeRef.current && !badgeRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={badgeRef}
      className={`${styles.badge} ${isOpen ? styles.open : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.collapsed}>
        <span>Podpořte nás</span>
      </div>
      <div className={styles.expanded}>
        <div className={styles.imageWrapper}>
          <Image src="/QR.png" alt="QR kód" width={150} height={150} />
        </div>
        <p className={styles.text}>
          Pomozte nám změnit Beroun ❤️
        </p>
        <p className={styles.text}>
          Přispějte na kampaň jediné <strong>nezávislé</strong> kandidátky v Berouně.
        </p>
        <p className={styles.volby}>VOLBY 2026</p>
      </div>
    </div>
  );
};

export default QRBadge;
