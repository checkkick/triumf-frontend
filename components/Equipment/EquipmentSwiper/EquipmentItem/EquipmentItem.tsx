/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './equipmentitem.module.scss';
import Image from 'next/image';

interface IEquipmentItem {
  image: string
  title: string
  text: string
  price: string
}

export function EquipmentItem({ image, title, text, price }: IEquipmentItem) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt={title} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}