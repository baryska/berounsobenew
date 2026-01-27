import React from 'react';
import styles from '../styles/Home.module.css';
import programmeStyles from '../components/Programme/Programme.module.css';

const PodpisyPage = () => {
  
  return (
    <>
      <h1 className={programmeStyles.whatWeWant}>
        <strong>PODPISY PRO KANDIDÁTKU</strong>
        <div>
          <div className={programmeStyles.blueDot} />
          <div className={programmeStyles.blueDot} />
        </div>
      </h1>
      
      <div className={programmeStyles.container}>
        <div className={programmeStyles.text}>
          <p>
            Milí sousedé,
          </p>
          <p>
            jistě už nás dobře znáte - jsme <strong>nejsilnější opoziční strana</strong> v Berouně, v minulých volbách jste nám dali skoro 26 % hlasů, ale na změnu ve vedení města to nestačilo.
            Abychom mohli kandidovat v <strong>komunálních volbách 2026</strong> a znovu se pokusit o vítězství, potřebujeme pod naši kandidátní listinu posbírat dostatečné množství podpisů vás, obyvatel Berouna. 
            Jsme sdružení nezávislých kandidátů, <strong>nikdo z nás není členem žádné politické strany</strong>, a proto potřebujeme vaši pomoc.
          </p>
          <h2 className={programmeStyles.subheading}>Jak nám můžete pomoci:</h2>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span className={programmeStyles.blueDot} style={{ flexShrink: 0, marginTop: '0.4rem' }} />
            <span>Stáhněte si podpisový arch, vyplňte ho za sebe, dejte ho podepsat i svým blízkým nebo přátelům a napište nám na email info@berounsobe.eu. Rádi si pro váš arch přijedeme.</span>
          </p>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span className={programmeStyles.blueDot} style={{ flexShrink: 0, marginTop: '0.4rem' }} />
            <span>Můžete nám pomoci i se sběrem podpisů. Pokud byste se k nám chtěli přidat jako <strong>dobrovolníci pro sběr podpisů</strong> v ulicích Berouna, ozvěte se nám, rádi vás vezmeme mezi sebe.</span>
          </p>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span className={programmeStyles.blueDot} style={{ flexShrink: 0, marginTop: '0.4rem' }} />
            <span>Pokud vlastníte v Berouně podnik, kam chodí veřejnost (obchod, restaurace, kavárna apod.), a byli byste ochotni mít u vás na přístupném místě <strong>vystavený podpisový arch</strong>, prosíme napište nám!</span>
          </p>
          <h2 className={programmeStyles.subheading}>Kdo může podpisový arch podepsat?</h2>
          <p>Všichni dospělí obyvatelé Berouna, kteří mají v Berouně <strong>trvalé bydliště</strong>, včetně cizinců.</p>
        </div>
      </div>

      <h2 className={programmeStyles.emailHeading}>
        info@berounsobe.eu
      </h2>

      <div className={styles.buttonDiv}>
        <a
          href="/Podpsiovy arch.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Stáhnout podpisový arch
        </a>
      </div>

    </>
  );
};

export default PodpisyPage;
