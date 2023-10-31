import React from 'react';
import styles from './vendorsitem.module.scss';
import Image from 'next/image';

export function VendorsItem({ image }: { image: string }) {
  return (
    <div className={styles.block}>
      <Image
        className={styles.image}
        width={400}
        height={400}
        loading='lazy'
        src={image}
        alt="vendor logo" />
    </div>
  );
}
