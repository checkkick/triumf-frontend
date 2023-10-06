import React from 'react';
import styles from './aboutbanner.module.scss';
import { AboutBannerItem } from './AboutBannerItem';

export function AboutBanner() {
  const OurSuperiorityList = [
    {
      title: '9',
      text: 'лет на IT-рынке'
    },
    {
      title: '20',
      text: 'иностранных партнеров'
    },
    {
      title: '150',
      text: 'выполненных проектов'
    },
    {
      title: '50к',
      text: 'инновационных решений'
    },
  ]

  return (
    <div className={styles.wrapper}>
      {OurSuperiorityList.map((item, index) =>
        <AboutBannerItem key={index} title={item.title} text={item.text} />)}
    </div>
  );
}
