import React from 'react';
import styles from './equipment.module.scss';
import { EquipmentItem } from './EquipmentItem';
import { ButtonMore } from '../ButtonMore';

export function Equipment() {
  const exapmle = [
    {
      image: '/equipment-1.png',
      title: 'Lenovo ThinkSystem SN550'
    },
    {
      image: '/equipment-2.png',
      title: 'TP-Link JetStream T1600G-52PS'
    },
    {
      image: '/equipment-3.png',
      title: 'Dell EMC Unity 350F'
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ОБОРУДОВАНИЕ</h2>
          <h2 className={styles.subtitle}>Доставка оборудования в течение 24 часов</h2>

          <ul className={styles.list}>
            {exapmle.map((item, index) => <EquipmentItem image={item.image} title={item.title} key={index} />)}
          </ul>

          <ButtonMore />
        </div>
      </div>
    </div>
  );
}
