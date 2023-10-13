import React from 'react';
import styles from './vendors.module.scss';
import { VendorsItem } from './VendorsItem';

export function Vendors() {
  const example = [
    {
      image: '/vendors-1.png'
    },
    {
      image: '/vendors-2.png'
    },
    {
      image: '/vendors-3.png'
    },
    {
      image: '/vendors-1.png'
    },
    {
      image: '/vendors-2.png'
    },
    {
      image: '/vendors-3.png'
    },
  ]

  return (
    <section className={styles.wrapper} style={{ marginBottom: `${Math.ceil(example.length / 3) * 20}rem` }}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ВЕНДОРЫ</h2>
          <h3 className={styles.subtitle}>Компания TRIUMF сотрудничает с ведущими иностранными компаниями, поставляющими инновации во все уголки Мира.</h3>
          <p className={styles.text}>
            Наши вендоры — это мировые компании и корпорации, лидирующие в разработке современных технологических решений информационной сферы.
          </p>

          <div className={styles.list}>
            {example.map((item, index) => <VendorsItem key={index} image={item.image} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
