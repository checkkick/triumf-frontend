import React from 'react';
import styles from './vendors.module.scss';
import { VendorsItem } from './VendorsItem';
import getVendorsData from '@/api/getVendorsData';

interface IVendorsProps {
  title: string
  description: string
}

export async function Vendors({ title, description }: IVendorsProps) {
  const { vendorsData } = await getVendorsData()

  return (
    <section className={styles.wrapper} style={{ marginBottom: `${Math.ceil(vendorsData.length / 3) * 20}rem` }}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ВЕНДОРЫ</h2>
          <h3 className={styles.subtitle}>{title}</h3>
          <p className={styles.text}>{description}</p>

          <div className={styles.list}>
            {vendorsData.map((item, index) =>
              <VendorsItem key={index} image={item.vendors_photo} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
