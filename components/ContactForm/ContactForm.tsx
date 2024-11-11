import React, { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';
import * as EmailValidator from 'email-validator';
import emailjs from 'emailjs-com';
import { ThreeDots } from 'react-loading-icons';


const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)
  const [errorMessageVisible, setErrorMessageVisible] = useState(false)
  const [validatedFields, setValidatedFields] = useState({
    message: true,
    name: true,
    email: true,
  })
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const message = e.target[0].value.trim() !== '';
    const name = e.target[1].value.trim() !== '';
    const email = EmailValidator.validate(e.target[2].value.trim());
    const canBeSent = message && name && email;
    if (canBeSent) {
      setSent(true)
      setLoading(true)
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current as HTMLFormElement, process.env.NEXT_PUBLIC_PUBLIC_KEY)
        .then(function () {
          setMessageVisible(true)
          setLoading(false)
        }, function () {
          setMessageVisible(false)
          setErrorMessageVisible(true)
          setLoading(false)
        });
      e.target.reset()
    }
    setValidatedFields({ message, name, email })
  }

  const { message, name, email } = validatedFields;

  const handleSentMessage = () => {
    setSent(false)
    setMessageVisible(false)
    setErrorMessageVisible(false)
  }

  return (
    <>
      <div className={`${sent ? styles.sent : ''} ${styles.contactSection}`}>
        <h1 className={styles.contactUs}>
          <strong>DOTAZY & PODNĚTY</strong>
          <div>
            <div className={styles.blueDot} />
            <div className={styles.blueDot} />
          </div>
        </h1>
        <div className={styles.text}>
          <p>V berounském zastupitelstvu jsme v <strong>opozici</strong>, máme proto omezené možnosti, jak věci v Berouně rychle a efektivně zlepšovat.</p>
          <p>I tak ale můžeme <strong>podávat podněty, klást otázky a tlačit vedení radnice k řešení</strong>.</p>
          <div style={{ display: 'flex' }}><div className={styles.blueDot} /><p>Chcete se vedení města na něco zeptat, ale nemůžete přijít osobně na zasedání zastupitelstva?</p></div>
          <div style={{ display: 'flex' }}><div className={styles.blueDot} /><p>Máte návrh na zlepšení?</p></div>
          <div style={{ display: 'flex' }}><div className={styles.blueDot} /><p>Trápí Vás něco, co se v Berouně dlouhodobě neřeší?</p></div>
          <div style={{ display: 'flex' }}><div className={styles.blueDot} /><p>Zajímá Vás, čemu se právě věnujeme?</p></div>
          <h2><strong>Napište nám</strong> a my se Vám co nejdříve ozveme!</h2>
          <h4>Pište na e-mail <strong>info@berounsobe.eu</strong> nebo vyplňte náš kontaktní formulář:</h4>
        </div>
        <div className={`${styles.wrapper} ${styles.centered}`}>
          <article className={styles.letter}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.side}>
                <p className={styles.p}>
                  <textarea className={styles.textarea} name="message" placeholder="Vaše zpráva"></textarea>
                </p>
                <span className={message ? styles.alertHidden : styles.alertVisible}>* Přece jen nám něco napište :)</span>
              </div>
              <div className={styles.side}>
                <p className={styles.p}>
                  <input className={styles.input} type="text" name="user_name" placeholder="Vaše jméno" />
                </p>
                <span className={name ? styles.alertHidden : styles.alertVisible}>* Vyplňte prosím své jméno</span>
                <p className={styles.p}>
                  <input className={styles.input} type="text" name="user_email" placeholder="Váš email" />
                </p>
                <span className={email ? styles.alertHidden : styles.alertVisible}>* Vyplňte prosím email ve správném formátu</span>
                <p className={styles.p}>
                  <button className={styles.button} id="sendLetter">ODESLAT</button>
                </p>
              </div>
            </form>

          </article>
          <div className={`${styles.envelope} ${styles.front}`}></div>
          <div className={`${styles.envelope} ${styles.back}`}></div>
        </div>
        <div>
          <div className={`${styles.resultMessage} ${styles.centered} ${messageVisible ? '' : styles.messageInvisible}`} >
            Děkujeme Vám za zprávu! Pokud obsahuje dotaz, ozveme se Vám co nejdříve!
          </div>
          <div className={`${styles.resultMessage} ${styles.centered} ${errorMessageVisible ? '' : styles.messageInvisible}`}>
            Odeslání zprávy se nezdařilo :( Zkuste to prosím znovu nebo nám napište na info@berounsobe.eu. Děkujeme!
          </div>
        </div>
        {loading ? (
          <div>
            <ThreeDots fill="#4ca4ca80" className={styles.centered} style={{ bottom: '-5rem' }} />
          </div>)
          : ""}
        <button className={`${styles.resend} ${messageVisible || errorMessageVisible ? '' : styles.messageInvisible}`} onClick={() => handleSentMessage()}>
          <Image src="/resend.svg" width="30" height="30" alt="resend" />
        </button>
      </div>
    </>
  )
}

export default ContactForm
