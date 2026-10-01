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
  /** Chybí u položky, která jen rozbaluje podmenu (má children). */
  link?: string;
  name: string;
  badge?: string;
  external?: boolean;
  /** Podpoložky rozbalovacího menu. */
  children?: { link: string; name: string }[];
}

const LINKS: NavLink[] = [
  { link: "#kdojsme", name: "kdo jsme" },
  { link: "program", name: "program", badge: "2026" },
  { link: "jakvolit", name: "jak volit" },
  { link: "podcast", name: "podcast" },
  { link: MERCH_URL, name: "merch", external: true },
  { link: "#informujeme", name: "informujeme" },
  // { link: "podpisy", name: "podpisy" },
  { link: "newsletter", name: "newsletter" },
  {
    name: "most & obchvat",
    children: [
      { link: "most", name: "most TGM" },
      { link: "obchvat", name: "obchvat" },
    ],
  },
  { link: "#napistenam", name: "napište nám" },
]

export const Header = () => {
  const [open, setOpen] = useState(false);
  // Rozbalené podmenu v desktopové liště („most & obchvat“).
  const [stavbyOpen, setStavbyOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const dropdownNode = useRef<HTMLLIElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (node.current && !node.current.contains(target)) {
      setOpen(false);
    }
    if (dropdownNode.current && !dropdownNode.current.contains(target)) {
      setStavbyOpen(false);
    }
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
              {LINKS.map(({ name, link, badge, external, children }, index) => {
                const label = (
                  <>
                    {name}
                    {badge && <span className={styles.programBadge}>{badge}</span>}
                  </>
                );
                if (children) {
                  return (
                    <li key={index} ref={dropdownNode} className={styles.navDropdown}>
                      <button
                        type="button"
                        className={styles.navDropdownToggle}
                        aria-expanded={stavbyOpen}
                        aria-controls="nav-stavby"
                        onClick={() => setStavbyOpen((prev) => !prev)}
                      >
                        {name}
                        <span className={`${styles.navChevron} ${stavbyOpen ? styles.navChevronOpen : ''}`} aria-hidden="true">▾</span>
                      </button>
                      <ul id="nav-stavby" className={styles.navDropdownMenu} hidden={!stavbyOpen}>
                        {children.map((child) => (
                          <li key={child.link}>
                            <Link href={`/${child.link}`}>
                              <a onClick={() => setStavbyOpen(false)}>{child.name}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
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
