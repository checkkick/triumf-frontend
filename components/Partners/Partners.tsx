import React from 'react';
import styles from './partners.module.scss';
import { PartnersSwiper } from './PartnersSwiper';

export function Partners() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ПАРТНЕРЫ</h2>
          <h2 className={styles.subtitle}>Наши партнеры - крупные организации и корпорации</h2>
          <p className={styles.text}>Компания TRIUMF предоставляет широкий спектр возможностей для клиентов и обеспечивает индивидуальный подход к каждой бизнес-задаче.</p>

          <PartnersSwiper />
        </div>
      </div>
    </div>
  );
}
