/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './vendorsitem.module.scss';

export function VendorsItem({ image }: { image: string }) {
  return (
    <div className={styles.block}>
      <img className={styles.image} src={image} alt="vendor logo" />
    </div>
  );
}
