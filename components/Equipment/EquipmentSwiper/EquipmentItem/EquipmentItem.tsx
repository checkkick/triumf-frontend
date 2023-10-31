import React from 'react';
import styles from './equipmentitem.module.scss';
import Image from 'next/image';
import { preventDefault } from '@/utils/preventDefault';

interface IEquipmentItem {
  image: string
  title: string
  text: string
  price: string
}

export function EquipmentItem({ image, title, text, price }: IEquipmentItem) {
  return (
    <a href='#' className={styles.item} onClick={preventDefault((e) => e)}>

      <Image
        className={styles.image}
        width={500}
        height={150}
        loading='lazy'
        src={image}
        alt={title} />

      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
    </a>
  );
}
