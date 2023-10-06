import React from 'react';
import styles from './banner.module.scss';
export function Banner() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>TRIUMF</h1>
          <h2 className={styles.subtitle}>Ваша возможность сделать свой бизнес высокотехнологичным</h2>
          <div className={styles.btnRow}>
            <button className={styles.btnContact}>Связаться с нами</button>
            <button className={styles.btnAbout}>О компании</button>
          </div>
        </div>
      </div>
    </section>
  );
}
