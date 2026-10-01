import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Sidemenu.module.css'
import { MERCH_URL } from '../../../data/merch'

interface Props {
  open: boolean,
  onClose: () => void;
}


const Sidemenu = ({open, onClose}: Props) => {
  // Podmenu „most & obchvat“ – zavřené, dokud na něj uživatel neklikne.
  const [stavbyOpen, setStavbyOpen] = useState(false);

  return (
    <div className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      <Link href="/#kdojsme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>kdo jsme</button></a></Link>
      <Link href="/program"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>program<span className={styles.programBadge}>2026</span></button></a></Link>
      <Link href="/jakvolit"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>jak volit</button></a></Link>
      <Link href="/podcast"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>podcast</button></a></Link>
      <a className={styles.navItemLink} href={MERCH_URL} target="_blank" rel="noreferrer">
        <button className={styles.navItem} onClick={() => onClose()}>merch</button>
      </a>
      <Link href="/#informujeme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>informujeme</button></a></Link>
      {/* <Link href="/podpisy"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>podpisy</button></a></Link> */}
      <Link href="/newsletter"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>newsletter</button></a></Link>
      {/* Dopravní stavby — rozbalovací položka, pod ní most TGM a obchvat. */}
      <div className={styles.navGroup}>
        <button
          className={`${styles.navItemLink} ${styles.navItem} ${styles.navGroupToggle}`}
          aria-expanded={stavbyOpen}
          aria-controls="menu-stavby"
          onClick={() => setStavbyOpen((prev) => !prev)}
        >
          most &amp; obchvat
          <span className={`${styles.navChevron} ${stavbyOpen ? styles.navChevronOpen : ''}`} aria-hidden="true">▾</span>
        </button>
        <div className={styles.navSub} id="menu-stavby" hidden={!stavbyOpen}>
          <Link href="/most"><a className={styles.navSubLink} onClick={() => onClose()}>most TGM</a></Link>
          <Link href="/obchvat"><a className={styles.navSubLink} onClick={() => onClose()}>obchvat</a></Link>
        </div>
      </div>
      <Link href="/#napistenam"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>napište nám</button></a></Link>
    </div>
  )
}
export default Sidemenu;
