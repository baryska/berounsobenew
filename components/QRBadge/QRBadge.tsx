import { useState } from 'react';
import Image from 'next/image';
import styles from './QRBadge.module.css';

const QRBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
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
