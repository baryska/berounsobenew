import React from 'react';
import Link from 'next/link';
import BlueDots from '../../components/BlueDots/BlueDots';
import styles from '../Statements/Statements.module.css';

function Statements() {
  return (
    <div className={styles.statements} >
      <div>
        <p className={styles.statement}>Věděli jste, že <strong>v příštích 5 letech</strong> přibude v Berouně kvůli neregulované developerské výstavbě <strong>1&nbsp;800 bytů a 6&nbsp;500 nových obyvatel</strong>?</p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}>Věděli jste, že Beroun nemá na <strong>nárůst obyvatel o 30 %</strong> vůbec připravenou infrastrukturu - <strong>chybí školy, školky, obchvat města i voda</strong>?</p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}>My Beroun developerům <strong>neprodáme</strong>.</p>
      </div>
      <BlueDots />
      <div>
        <p className={styles.statement}>A budeme s vámi mluvit - <strong>bez arogance</strong>.</p>
      </div>
     
      <div className={styles.buttonDiv} >
        <Link href="/#cochceme">
          <a className={styles.button}>Chci vědět víc</a>
        </Link>
      </div>

    </div>
  )
}

export default Statements