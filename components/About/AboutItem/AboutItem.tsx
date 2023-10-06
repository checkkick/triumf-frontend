import React from 'react';
import styles from './aboutitem.module.scss';

interface IAboutItem {
  index: number
  title: string
  text: string
}

export function AboutItem({ index, title, text }: IAboutItem) {
  return (
    <div className={styles.item}>
      <span className={styles.position}>0{index + 1}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
