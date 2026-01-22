import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Profile from '../components/Profile/Profile';
import { Profiles, Helpers } from '../data/index';
import ContactForm from '../components/ContactForm/ContactForm';
import FacebookFeed from '../components/FacebookFeed/FacebookFeed';
import QRBadge from '../components/QRBadge/QRBadge';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const activeProfiles = Profiles.filter((profile) => profile.title !== 'Václav Roztočil');
  const passiveProfile = Profiles.filter((profile) => profile.title === 'Václav Roztočil');

  return (
    <div className={styles.container}>
      <Head>
        <title>Beroun sobě</title>
        <meta name="description" content="Beroun sobě - Beroun má na víc!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer" />
        <meta property="og:image" content="https://www.berounsobe.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvsichni_small.793a465f.jpeg&w=1920&q=75" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:title" content="Beroun sobě" />
        <meta name="og:description" content="Beroun sobě - Beroun má na víc!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.berounsobe.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvsichni_small.793a465f.jpeg&w=1920&q=75" />
        <meta name="twitter:title" content="Beroun sobě" />
        <meta name="twitter:description" content="Beroun sobě - Beroun má na víc!" />
      </Head>

      <main>
        <QRBadge />
        <section className={styles.home}>
          <video autoPlay muted loop className={styles.video}>
            <source src="/beroun4.mp4" type="video/mp4" />
          </video>
          <div className={styles.logo}>
            <Image src="/BerounsobeLogo_small.png" alt="logo" width={2001} height={629} />
          </div>
          <div className={styles.statement}>Chceme moderní město, které patří do 21. století</div>
          <button onClick={handleScrollTop} className={styles.arrow}>
            <Image src="/up.svg" width={40} height={40} alt="arrow" />
          </button>
        </section>
        <section id="kdojsme" >
          <div className={styles.whoWeAre}>
            <h2 className={styles.aboutUs}><strong>NAŠI ZASTUPITELÉ</strong>
              <div>
                <div className={styles.blueDot} />
                <div className={styles.blueDot} />
              </div>
            </h2>
            {activeProfiles.map((profile) => {
              const { title, profession, text, photo, topic, email, nomination } = profile;
              return (
                <Profile
                  title={title}
                  profession={profession}
                  text={text}
                  photo={photo}
                  topic={topic}
                  email={email}
                  key={title}
                  nomination={nomination}
                  withEmail
                />
              )
            })}
            <Profile
              title={passiveProfile[0].title}
              profession={passiveProfile[0].profession}
              text={passiveProfile[0].text}
              photo={passiveProfile[0].photo}
              topic={passiveProfile[0].topic}
              email={passiveProfile[0].email}
              key={passiveProfile[0].title}
              nomination={passiveProfile[0].nomination}
              withEmail={false}
            />
            <h2 className={styles.coworkers}><strong>NAŠI SPOLUPRACOVNÍCI</strong>
              <div>
                <div className={styles.blueDot} />
                <div className={styles.blueDot} />
              </div>
            </h2>
            {Helpers.map((profile) => {
              const { title, profession, text, photo, topic, email, nomination } = profile;
              return (
                <Profile
                  title={title}
                  profession={profession}
                  text={text}
                  photo={photo}
                  topic={topic}
                  email={email}
                  nomination={nomination}
                  key={title} 
                  withEmail
                  />
              )
            })}
          </div>
        </section>
        <div className={styles.experts}>
          <p>Na naši práci nejsme sami - víme, že nemůžeme být odborníky na vše, proto se často obracíme na <strong>experty</strong>.
            Chcete se také zařadit do našeho <strong>týmu odborných konzultantů</strong>?
          </p>
          <p className={styles.letUsKnow}>
            <strong><Link href="/#napistenam">Dejte nám vědět!</Link></strong>
          </p>

          <Link href="/experti">
            <a className={styles.allNews}>
              <span className={styles.displayAll}>S kým se radíme</span>
              <span style={{ marginTop: "8px" }}><Image src="/double-arrow.svg" alt="šipka" width={25} height={25} /></span>
            </a>
          </Link>
        </div>
        <section id="informujeme" className={styles.aktualityContainer}>
          <div className={styles.aktuality}>
            <h2 className={styles.aboutUs}><strong>SLEDUJTE NÁS NA FACEBOOKU</strong>
              <div>
                <div className={styles.blueDot} />
                <div className={styles.blueDot} />
              </div>
            </h2>
            <FacebookFeed />
          </div>
        </section>
        <section id="napistenam" className={styles.contact}>
          <ContactForm />
        </section>
        <footer className={styles.footer}>© 2025 BEROUN SOBĚ | Barbora Skálová</footer>
      </main>
    </div>
  )
}

export default Home
