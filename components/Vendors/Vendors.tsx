import React from 'react';
import styles from './vendors.module.scss';
import { VendorsItem } from './VendorsItem';

interface IVendorsProps {
  title: string
  description: string
}

export function Vendors({ title, description }: IVendorsProps) {
  const example = [
    {
      image: '/vendors-1.svg'
    },
    {
      image: '/vendors-2.svg'
    },
    {
      image: '/vendors-3.svg'
    },
    {
      image: '/vendors-1.svg'
    },
    {
      image: '/vendors-2.svg'
    },
    {
      image: '/vendors-3.svg'
    },
  ]

  return (
    <section className={styles.wrapper} style={{ marginBottom: `${Math.ceil(example.length / 3) * 20}rem` }}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ВЕНДОРЫ</h2>
          <h3 className={styles.subtitle}>{title}</h3>
          <p className={styles.text}>{description}</p>

          <div className={styles.list}>
            {example.map((item, index) => <VendorsItem key={index} image={item.image} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
