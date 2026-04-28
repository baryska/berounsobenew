import { useState, useEffect, useRef, useCallback } from 'react';
import { ALL_SEKCE } from '../../data/program-new-data';
import styles from './ProgramNew.module.css';

export function SidebarNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const checkOverlap = useCallback(() => {
    const vh = window.innerHeight;
    const sidebarTop = vh * 0.35;
    const sidebarBottom = vh * 0.65;

    let overlapsHero = false;
    let anyContentVisible = false;

    for (const s of ALL_SEKCE) {
      const hero = document.getElementById(`${s.id}-hero`);
      if (hero) {
        const r = hero.getBoundingClientRect();
        if (r.bottom > sidebarTop && r.top < sidebarBottom) {
          overlapsHero = true;
        }
      }

      const content = document.getElementById(`${s.id}-content`);
      if (content) {
        const r = content.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) {
          anyContentVisible = true;
        }
      }
    }

    setVisible(anyContentVisible && !overlapsHero);
  }, []);

  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      entries => {
        const vis = entries.filter(e => e.isIntersecting);
        if (vis.length > 0) {
          setActiveId(vis[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    ALL_SEKCE.forEach(s => {
      const section = document.getElementById(s.id);
      if (section) activeObserver.observe(section);
    });

    checkOverlap();
    window.addEventListener('scroll', checkOverlap, { passive: true });

    return () => {
      activeObserver.disconnect();
      window.removeEventListener('scroll', checkOverlap);
    };
  }, [checkOverlap]);

  const navClass = [
    styles.sideNav,
    visible ? styles.sideNavVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass}>
      {ALL_SEKCE.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={[styles.sideNavItem, activeId === s.id ? styles.sideNavItemActive : ''].filter(Boolean).join(' ')}
          onClick={e => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className={styles.sideNavDot} />
          <span className={styles.sideNavLabel}>{s.eyebrow}</span>
        </a>
      ))}
    </nav>
  );
}
