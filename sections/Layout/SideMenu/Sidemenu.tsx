import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Sidemenu.module.css'

interface Props {
  open: boolean,
  onClose: () => void;
}


const Sidemenu = ({open, onClose}: Props) => {
 
  return (
    <div className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      <Link href="/#kdojsme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>kdo jsme</button></a></Link>
      <Link href="/program"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>program<span className={styles.programBadge}>2026</span></button></a></Link>
      <Link href="/podcast"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>podcast</button></a></Link>
      <Link href="/#informujeme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>informujeme</button></a></Link>
      {/* <Link href="/podpisy"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>podpisy</button></a></Link> */}
      <Link href="/newsletter"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>newsletter</button></a></Link>
      <Link href="/most"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>most</button></a></Link>
      <Link href="/#napistenam"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>napište nám</button></a></Link>
    </div>
  )
}
export default Sidemenu;
