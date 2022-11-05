import React from 'react';
import Image from 'next/image';
import Group from '../../public/vsichni_small.jpeg';
import Typewriter from 'typewriter-effect';
import whiteLogo from '../../public/BerounsobeLogo.png'
import styles from './IntroPicture.module.css';
import useDelayedState from 'use-delayed-state';


function IntroPicture() {
  const [logoVisible, setLogoVisible] = useDelayedState(false);

  return (
    <div className={styles.introPicture}>
      <Image src={Group} alt="group"  placeholder="blur"/>
      <div className={styles.typewriterWrapper}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Nestojí za námi žádná strana, ani skrytí sponzoři.')
              .pauseFor(500)
              .deleteAll(20)
              .pauseFor(300)
              .typeString('V Berouně nás trápí stejné věci jako vás.')
              .pauseFor(500)
              .deleteAll(20)
              .pauseFor(300)
              .typeString('Přijďte <strong>23.-24. září</strong> k volbám a volte')
              .callFunction(() => setLogoVisible(true, 500))
              .start();
          }}
          options={{
            delay: 30,
            wrapperClassName: styles.typewriter,
            cursorClassName: styles.cursor,
            skipAddStyles: true
          }}
        />
        {logoVisible ? (
          <div className={styles.whiteLogo}>
            <Image src={whiteLogo} alt="logo" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default IntroPicture