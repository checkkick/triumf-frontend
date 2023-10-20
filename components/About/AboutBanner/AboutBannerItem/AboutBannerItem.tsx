import React from 'react';
import styles from './aboutbanneritem.module.scss';
import { IOurSuperiority } from '@/api/getCompanyData';

export function AboutBannerItem({ title, text }: IOurSuperiority) {
  return (
    <div className={styles.advantages}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
