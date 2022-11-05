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
      <Link href="/#cochceme"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>CO CHCEME</button></a></Link>
      <Link href="/#napistenam"><a className={styles.navItemLink}><button className={styles.navItem} onClick={() => onClose()}>NAPIŠTE NÁM</button></a></Link>
    </div>
  )
}
export default Sidemenu;