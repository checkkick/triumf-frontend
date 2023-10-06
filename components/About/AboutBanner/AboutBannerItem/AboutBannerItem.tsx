import React from 'react';
import styles from './aboutbanneritem.module.scss';

interface IAboutBannerItem {
  title: string
  text: string
}

export function AboutBannerItem({ title, text }: IAboutBannerItem) {
  return (
    <div className={styles.advantages}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
