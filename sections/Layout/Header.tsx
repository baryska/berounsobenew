import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Logo from '../../public/nove_logo.png';
import Facebook from '../../public/Facebook.png';
import Instagram from '../../public/Instagram.png'
import BurgerMenu from '../Layout/BurgerMenu/BurgerMenu';
import SideMenu from '../Layout/SideMenu/Sidemenu'
import styles from './Header.module.css';
import { MERCH_URL } from '../../data/merch';

interface NavLink {
  link: string;
  name: string;
  badge?: string;
  external?: boolean;
}

const LINKS: NavLink[] = [
  { link: "#kdojsme", name: "kdo jsme" },
  { link: "program", name: "program", badge: "2026" },
  { link: "podcast", name: "podcast" },
  { link: MERCH_URL, name: "merch", external: true },
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
              {LINKS.map(({ name, link, badge, external }, index) => {
                const label = (
                  <>
                    {name}
                    {badge && <span className={styles.programBadge}>{badge}</span>}
                  </>
                );
                return (
                  <li key={index}>
                    {external ? (
                      <a href={link} target="_blank" rel="noreferrer">{label}</a>
                    ) : (
                      <Link href={`/${link}`}>
                        <a>{label}</a>
                      </Link>
                    )}
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
