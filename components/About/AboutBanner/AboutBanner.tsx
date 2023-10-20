import React from 'react';
import styles from './aboutbanner.module.scss';
import { AboutBannerItem } from './AboutBannerItem';
import { IOurSuperiority } from '@/api/getCompanyData';

export function AboutBanner({ ourSuperiority }: { ourSuperiority: IOurSuperiority[] }) {
  return (
    <div className={styles.wrapper}>
      {ourSuperiority.map((item, index) =>
        <AboutBannerItem key={index} title={item.title} text={item.text} />)}
    </div>
  );
}
