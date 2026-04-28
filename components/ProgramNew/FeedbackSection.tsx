import styles from './ProgramNew.module.css';

export function FeedbackSection() {
  return (
    <section className={styles.feedbackSection}>
      <div className={styles.feedbackInner}>
        <h2 className={styles.feedbackHeadline}>Něco vám v programu chybí?</h2>
        <p className={styles.feedbackPerex}>
          Napište nám, co vás trápí nebo co byste chtěli zlepšit — každý podnět čteme.
        </p>
        <form className={styles.feedbackForm} onSubmit={e => e.preventDefault()}>
          <textarea
            className={styles.feedbackTextarea}
            placeholder="Váš podnět nebo nápad…"
            rows={4}
          />
          <div className={styles.feedbackRow}>
            <input
              className={styles.feedbackInput}
              type="text"
              placeholder="Jméno (nepovinné)"
            />
            <input
              className={styles.feedbackInput}
              type="email"
              placeholder="E-mail (nepovinné)"
            />
          </div>
          <button type="submit" className={styles.feedbackSubmit}>
            Odeslat podnět
          </button>
        </form>
      </div>
    </section>
  );
}
