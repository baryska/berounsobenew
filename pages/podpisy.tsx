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
          <p>Váš podpis pod kandidátní listinou <strong>neznamená, že nás musíte volit</strong>. Jen nám umožníte kandidovat.</p>
          <h2 className={programmeStyles.subheading}>Jak nám můžete pomoci:</h2>
          <p className={programmeStyles.bulletItem}>
            <span className={`${programmeStyles.blueDot} ${programmeStyles.bulletDot}`} />
            <span>Stáhněte si podpisový arch, vyplňte ho za sebe, dejte ho podepsat i svým blízkým nebo přátelům a napište nám na email <a href="mailto:info@berounsobe.eu?subject=Podpisový%20arch%20VOLBY%202026" className={programmeStyles.emailLink}>info@berounsobe.eu</a>. Rádi si pro váš arch přijedeme.</span>
          </p>
          <p className={programmeStyles.bulletItem}>
            <span className={`${programmeStyles.blueDot} ${programmeStyles.bulletDot}`} />
            <span>Můžete nám pomoci i se sběrem podpisů. Pokud byste se k nám chtěli přidat jako <strong>dobrovolníci pro sběr podpisů</strong> v ulicích Berouna, <a href="mailto:info@berounsobe.eu?subject=Podpisový%20arch%20VOLBY%202026" className={programmeStyles.emailLink}>ozvěte se nám</a>, rádi vás vezmeme mezi sebe.</span>
          </p>
          <p className={programmeStyles.bulletItem}>
            <span className={`${programmeStyles.blueDot} ${programmeStyles.bulletDot}`} />
            <span>Pokud vlastníte v Berouně podnik, kam chodí veřejnost (obchod, restaurace, kavárna apod.), a byli byste ochotni mít u vás na přístupném místě <strong>vystavený podpisový arch</strong>, prosíme <a href="mailto:info@berounsobe.eu?subject=Podpisový%20arch%20VOLBY%202026" className={programmeStyles.emailLink}>napište nám</a>!</span>
          </p>
          <p>Petiční archy <strong>nečíslujte</strong>!</p>
          <h2 className={programmeStyles.subheading}>Kdo může podpisový arch podepsat?</h2>
          <p>Všichni dospělí obyvatelé Berouna, kteří mají v Berouně <strong>trvalé bydliště</strong>.</p>
          <p>Petiční archy je třeba vyplnit <strong>ČITELNĚ HŮLKOVÝM písmem modrou či černou propiskou</strong>.</p>
          <p>Na petičním archu musí být vyplněny <strong>všechny údaje</strong>, jinak je arch neplatný.</p>
        </div>
      </div>

      <h2 className={programmeStyles.emailHeading}>
        <a href="mailto:info@berounsobe.eu?subject=Podpisový%20arch%20VOLBY%202026" className={programmeStyles.emailLink}>
          info@berounsobe.eu
        </a>
      </h2>

      <div className={styles.buttonDiv}>
        <a
          href="/Podpisovy arch BS.pdf"
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
