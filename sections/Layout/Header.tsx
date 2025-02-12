import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Logo from '../../public/mainLogo_small.png';
import Facebook from '../../public/Facebook.png';
import Twitter from '../../public/Twitter.png';
import Youtube from '../../public/Youtube.png';
import Instagram from '../../public/Instagram.png'
import BurgerMenu from '../Layout/BurgerMenu/BurgerMenu';
import SideMenu from '../Layout/SideMenu/Sidemenu'
import styles from './Header.module.css';

const LINKS = [
  {
    link: "#kdojsme",
    name: "KDO JSME"
  },
  {
    link: "#informujeme",
    name: "INFORMUJEME"
  },
  {
    link: "program",
    name: "PROGRAM"
  },
  {
    link: "newsletter",
    name: "NEWSLETTER"
  },
  {
    link: "most",
    name: "MOST"
  },
  {
    link: "#napistenam",
    name: "NAPIŠTE NÁM"
  },
]

export const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (!node.current || node.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  
  return (
    <>
      <div ref={node} className={styles.sidemenuVisible}>
        <BurgerMenu onBurgerClick={() => setOpen(!open)} open={open} />
        <SideMenu open={open} onClose={() => setOpen(false)}/>
      </div>
      <header>
        <nav className={styles.navPanel}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={Logo} alt="logo" />
            </a>
          </Link>
          <div className={`${styles.container} ${styles.pullRight}`}>
            <ul>
              {LINKS.map(({ name, link }, index) => {
                return (
                  <li
                    key={index}
                  >
                    <Link href={`/${link}`}>
                      <a>{name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="https://www.instagram.com/beroun_sobe/" className={styles.socialIcon} target="_blank" rel="noreferrer">
            <Image src={Instagram} alt="instagram" width={40} height={40} />
          </a>
          <a href="https://www.facebook.com/BEROUN-SOB%C4%9A-220079674674602" className={styles.socialIcon} target="_blank" rel="noreferrer">
            <Image src={Facebook} alt="facebook" width={40} height={40} />
          </a>
          <a href="https://twitter.com/berounsobe" className={styles.socialIcon} target="_blank" rel="noreferrer">
            <Image src={Twitter} alt="twitter" width={40} height={40} />
          </a>
          <a href="https://www.youtube.com/channel/UCaTXZfzLqp87bN7-mPttypw" className={styles.socialIcon} target="_blank" rel="noreferrer">
            <Image src={Youtube} alt="youtube" width={40} height={40} />
          </a>
        </nav>

      </header>
    </>
  );
};
