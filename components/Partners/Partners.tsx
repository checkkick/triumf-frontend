import React from 'react';
import styles from './partners.module.scss';
import { PartnersSwiper } from './PartnersSwiper';
import getPartnersData from '@/api/getPartnersData';

interface IPartnersProps {
  title: string
  description: string
}

export async function Partners({ title, description }: IPartnersProps) {
  const { partnersData } = await getPartnersData()

  return (
    <section id='partners' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ПАРТНЕРЫ</h2>
          <h3 className={styles.subtitle}>{title}</h3>
          <p className={styles.text}>{description}</p>

          <PartnersSwiper partnersData={partnersData} />
        </div>
      </div>
    </section>
  );
}
