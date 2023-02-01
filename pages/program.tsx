import React from 'react';
import Programme from '../components/Programme/Programme';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ProgrammePage = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.programme__info}>Program, s kterým jsme šli do komunálních voleb 2022:</div>
      <div className={styles.programme__download}><a
        href="/program_Berounsobe.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >Stáhnout v PDF</a></div>
      <Programme />
      <button onClick={() => router.back()} className={styles.arrowBack__programme}><Image src="/arrow4.svg" alt="sipka" width="40px" height="40px"/></button>
    </>
  )
}

export default ProgrammePage;
