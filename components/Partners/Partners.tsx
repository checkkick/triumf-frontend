import React from 'react';
import styles from './partners.module.scss';
import { PartnersSwiper } from './PartnersSwiper';

interface IPartnersProps {
  title: string
  description: string
}

export function Partners({ title, description }: IPartnersProps) {
  return (
    <section id='partners' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ПАРТНЕРЫ</h2>
          <h2 className={styles.subtitle}>{title}</h2>
          <p className={styles.text}>{description}</p>

          <PartnersSwiper />
        </div>
      </div>
    </section>
  );
}
