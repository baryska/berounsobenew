import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Logo from '../../public/nove_logo.png';
import Facebook from '../../public/Facebook.png';
import Instagram from '../../public/Instagram.png'
import BurgerMenu from '../Layout/BurgerMenu/BurgerMenu';
import SideMenu from '../Layout/SideMenu/Sidemenu'
import styles from './Header.module.css';

const LINKS = [
  { link: "#kdojsme", name: "kdo jsme" },
  { link: "program", name: "program" },
  { link: "podcast", name: "podcast" },
  { link: "#informujeme", name: "informujeme" },
  // { link: "podpisy", name: "podpisy" },
  { link: "newsletter", name: "newsletter" },
  { link: "most", name: "most" },
  { link: "#napistenam", name: "napište nám" },
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
      <header>
        <nav className={styles.navPanel}>
          <div ref={node} className={styles.sidemenuVisible}>
            <BurgerMenu onBurgerClick={() => setOpen(!open)} open={open} />
            <SideMenu open={open} onClose={() => setOpen(false)}/>
          </div>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={Logo} alt="Beroun sobě" width={220} height={220} className={styles.logoImage} />
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
                      <a>
                        {name}
                        {name === "program" && <span className={styles.programBadge}>2026</span>}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="https://www.instagram.com/beroun_sobe/" className={styles.socialIcon} target="_blank" rel="noreferrer">
            <Image src={Instagram} alt="instagram" width={53} height={53} />
          </a>
          <a href="https://www.facebook.com/BEROUN-SOB%C4%9A-220079674674602" className={styles.socialIcon} target="_blank" rel="noreferrer">
            <Image src={Facebook} alt="facebook" width={53} height={53} />
          </a>
        </nav>

      </header>
    </>
  );
};
