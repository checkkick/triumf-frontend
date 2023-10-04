import React from 'react';
import styles from './banner.module.scss';

export function Banner() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>TRIUMF</h1>
        <h2 className={styles.subtitle}>Ваша возможность сделать свой бизнес высокотехнологичным</h2>
        <button className={styles.btn}>Связаться с нами</button>
      </div>
    </section>
  );
}
