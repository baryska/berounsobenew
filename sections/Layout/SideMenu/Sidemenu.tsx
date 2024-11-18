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
      <Link href="/#kdojsme" legacyBehavior><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>KDO JSME</button></a></Link>
      <Link href="/#informujeme" legacyBehavior><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>INFORMUJEME</button></a></Link>
      <Link href="/program" legacyBehavior><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>PROGRAM</button></a></Link>
      <Link href="/newsletter" legacyBehavior><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>NEWSLETTER</button></a></Link>
      <Link href="/#napistenam" legacyBehavior><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>NAPIŠTE NÁM</button></a></Link>
    </div>
  )
}
export default Sidemenu;
