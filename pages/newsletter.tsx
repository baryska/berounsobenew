// @ts-ignore
import Mailchimp from 'react-mailchimp-form';
import styles from '../styles/Home.module.css';

const archiveItems = [
  {
    title: 'Prosinec 2023',
    link: "https://mailchi.mp/3326f290576e/jak-se-m-beroune-1-berounsk-newsletter-12676491?e=26bbea4f35"
  },
  {
    title: 'Březen 2024',
    link: "https://mailchi.mp/8092684619fc/jak-se-mas-beroune-2"
  },
  {
    title: 'Květen 2024',
    link: "https://mailchi.mp/96a8edbb3a4e/jak-se-mas-beroune-3"
  },
  {
    title: 'Červenec 2024',
    link: "https://mailchi.mp/13f4526c97d8/jak-se-mas-beroune-12757795?e=26bbea4f35"
  },
  {
    title: 'Září 2024',
    link: "https://mailchi.mp/290eeba21c95/jak-se-mas-beroune-5"
  },
  {
    title: 'Duben 2025',
    link: "https://mailchi.mp/6ee46af4f7eb/jak-se-mas-beroune-12927744"
  },

]

const MailChimpForm = () => {
  return (
    <div className={styles.newsletterWrapper}>
      <div className={styles.subscribeBox}>
        <h2>Přihlašte se k odběru našeho newsletteru!</h2>
        <p>(Newsletter vydáváme cca jednou za dva měsíce)</p>
        <Mailchimp
          action={process.env.NEXT_PUBLIC_NEWSLETTER}
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            },
          ]}
          messages={
            {
              sending: "Odesílání...",
              success: "Děkujeme!",
              error: "Neočekávána chyba :(",
              empty: "Zadejte prosím svůj email",
              duplicate: "Příliš mnoho pokusů se stejnou emailovou adresou",
              button: "ODEBÍRAT"
            }
          }
          className={styles.newsletter}
        />

      </div>
      <h3 className={styles.archiveTitle}>Archiv čísel:</h3>
      {archiveItems.reverse().map((item) => (
        <a href={item.link} key={item.title} target="_blank" rel="noreferrer">
          <p className={styles.archiveItem}>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default MailChimpForm;
