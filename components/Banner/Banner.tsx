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
            <a className={styles.btnContact} href='#contacts'>
              <p className={styles.btnText}>
                Связаться с нами
                <svg className={styles.btnArrow} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="si:Arrow_right">
                    <path id="v" d="M23.3333 26.6667L30 20M30 20L23.3333 13.3333M30 20H10" stroke="#21242C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </p>
            </a>
            <a className={styles.btnAbout} href='#company'>
              <p className={styles.btnText}>
                О компании
                <svg className={styles.btnArrow} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="si:Arrow_right">
                    <path id="v" d="M23.3333 26.6667L30 20M30 20L23.3333 13.3333M30 20H10" stroke="#A7B5BD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
