import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>© 2026 BEROUN SOBĚ | Barbora Skálová</p>
      <p className={styles.note}>Volební materiál. Zadavatel: BEROUN SOBĚ. Zpracovatel: BEROUN SOBĚ.</p>
    </footer>
  );
};
