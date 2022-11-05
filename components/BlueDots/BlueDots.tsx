import React from 'react';
import styles from './BlueDots.module.css';


const BlueDots = () => {
    return (
        <div className={styles.blueDots} >
            <div className={styles.blueDot}/> <div className={styles.blueDot} /> 
        </div>
    )
}

export default BlueDots