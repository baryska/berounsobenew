import { useState, type FormEvent } from 'react';
import styles from './ProgramNew.module.css';

export function FeedbackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await fetch('https://formspree.io/f/xaqzpepy', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <section className={styles.feedbackSection}>
        <div className={styles.feedbackInner}>
          <h2 className={styles.feedbackHeadline}>Děkujeme!</h2>
          <p className={styles.feedbackPerex}>Vaši zprávu jsme přijali. Pokud jste uvedli e-mail, ozveme se.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.feedbackInner}>
        <h2 className={styles.feedbackHeadline}>Máte na srdci něco dalšího?</h2>
        <p className={styles.feedbackPerex}>
          Nápady na ta nejdrobnější zlepšení vítáme s otevřenou náručí. Stejně jako konstruktivní zpětnou vazbu.
        </p>
        <form className={styles.feedbackForm} onSubmit={handleSubmit}>
          <textarea
            className={styles.feedbackTextarea}
            name="message"
            placeholder="Vaše zpráva"
            rows={4}
            required
          />
          <div className={styles.feedbackRow}>
            <input
              className={styles.feedbackInput}
              type="text"
              name="name"
              placeholder="Jméno"
            />
            <input
              className={styles.feedbackInput}
              type="email"
              name="email"
              placeholder="E-mail (nepovinné, pokud nečekáte odpověď)"
            />
          </div>
          <label className={styles.feedbackCheckboxLabel}>
            <input type="checkbox" name="newsletter" className={styles.feedbackCheckbox} />
            <span>Přeji si odebírat newsletter Beroun sobě</span>
          </label>
          {error && <p style={{ color: '#ef4444', fontSize: '0.9rem' }}>Něco se pokazilo, zkuste to prosím znovu.</p>}
          <button type="submit" className={styles.feedbackSubmit}>
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}
