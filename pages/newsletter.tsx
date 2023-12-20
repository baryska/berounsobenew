// @ts-ignore
import Mailchimp from 'react-mailchimp-form';
import styles from '../styles/Home.module.css';

const archiveItems = [
  {
    title: 'Prosinec 2023',
    link: "https://us21.campaign-archive.com/?e=[UNIQID]&u=ccdb159ab05877f01c61c9e47&id=232faa452e"
  }
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
      {archiveItems.map((item) => (
        <a href={item.link} key={item.title} target="_blank" rel="noreferrer">
          <p className={styles.archiveItem}>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default MailChimpForm;
