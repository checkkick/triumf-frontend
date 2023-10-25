import React from 'react';
import styles from './about.module.scss';
import { AboutItem } from './AboutItem';
import { AboutBanner } from './AboutBanner';
import getCompanyData from '@/api/getCompanyData';

export async function About() {
  const { about, ourSuperiority } = await getCompanyData()

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.anchor} id='about'></div>
        <div className="container">
          <div className={styles.content}>
            {about.map((item, index) => <AboutItem key={index} index={index} title={item.title} text={item.text} />)}
          </div>
        </div>
      </div>
      <AboutBanner ourSuperiority={ourSuperiority} />
    </section>
  );
}
