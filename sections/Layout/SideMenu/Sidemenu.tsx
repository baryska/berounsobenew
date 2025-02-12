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
      <Link href="/#kdojsme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>KDO JSME</button></a></Link>
      <Link href="/#informujeme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>INFORMUJEME</button></a></Link>
      <Link href="/program"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>PROGRAM</button></a></Link>
      <Link href="/newsletter"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>NEWSLETTER</button></a></Link>
      <Link href="/#napistenam"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>NAPIŠTE NÁM</button></a></Link>
      <Link href="/most"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>MOST</button></a></Link>
    </div>
  )
}
export default Sidemenu;
