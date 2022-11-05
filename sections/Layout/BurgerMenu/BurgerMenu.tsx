import React from 'react';
import styles from './Burger.module.css';

interface Props {
  onBurgerClick: () => void;
  open: boolean;
}


const Burger = ({ onBurgerClick, open }: Props) => {

  return (
    <div className={styles.button} onClick={() => onBurgerClick()}>
      <div className={!open ? styles.burger : styles.cross}/>
      <div className={!open ? styles.burger : styles.cross}/>
      <div className={!open ? styles.burger : styles.cross}/>
    </div>
  )
}

export default Burger;