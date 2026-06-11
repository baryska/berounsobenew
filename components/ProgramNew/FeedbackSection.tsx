import styles from './ProgramNew.module.css';

export function FeedbackSection() {
  return (
    <section className={styles.feedbackSection}>
      <div className={styles.feedbackInner}>
        <h2 className={styles.feedbackHeadline}>Máte na srdci něco dalšího?</h2>
        <p className={styles.feedbackPerex}>
          Nápady na ta nejdrobnější zlepšení vítáme s otevřenou náručí. Stejně jako konstruktivní zpětnou vazbu.
        </p>
        <form className={styles.feedbackForm} onSubmit={e => e.preventDefault()}>
          <textarea
            className={styles.feedbackTextarea}
            placeholder="Vaše zpráva"
            rows={4}
          />
          <div className={styles.feedbackRow}>
            <input
              className={styles.feedbackInput}
              type="text"
              placeholder="Jméno"
            />
            <input
              className={styles.feedbackInput}
              type="email"
              placeholder="E-mail (nepovinné, pokud nečekáte odpověď)"
            />
          </div>
          <label className={styles.feedbackCheckboxLabel}>
            <input type="checkbox" className={styles.feedbackCheckbox} />
            <span>Přeji si odebírat newsletter Beroun sobě</span>
          </label>
          <button type="submit" className={styles.feedbackSubmit}>
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}
