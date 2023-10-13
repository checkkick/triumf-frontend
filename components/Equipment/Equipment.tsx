import React from 'react';
import styles from './equipment.module.scss';
import { EquipmentItem } from './EquipmentItem';
import { ButtonMore } from '../ButtonMore';

export function Equipment() {
  const exapmle = [
    {
      image: '/equipment-1.png',
      title: 'Lenovo ThinkSystem SN550',
      text: 'Новейший двухпроцессорный сервер, который занимает почетное место среди самых надежных серверов мира (x86)‡. Являясь новейшим структурным элементом в семействе Flex System, SN550 V2 оптимизирован для обеспечения высокой производительности, эффективности и безопасности.',
      price: '3 000 000 руб.'
    },
    {
      image: '/equipment-2.png',
      title: 'TP-Link JetStream T1600G-52PS',
      text: 'Новейший двухпроцессорный сервер, который занимает почетное место среди самых надежных серверов мира (x86)‡. Являясь новейшим структурным элементом в семействе Flex System, SN550 V2 оптимизирован для обеспечения высокой производительности, эффективности и безопасности.',
      price: '2 000 000 руб.'
    },
    {
      image: '/equipment-3.png',
      title: 'Dell EMC Unity 350F',
      text: 'Новейший двухпроцессорный сервер, который занимает почетное место среди самых надежных серверов мира (x86)‡. Являясь новейшим структурным элементом в семействе Flex System, SN550 V2 оптимизирован для обеспечения высокой производительности, эффективности и безопасности.',
      price: '4 000 000 руб.'
    },
  ]

  return (
    <section id='equipment' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ОБОРУДОВАНИЕ</h2>
          <h2 className={styles.subtitle}>Доставка оборудования в течение 24 часов</h2>

          <ul className={styles.list}>
            {exapmle.map((item, index) =>
              <EquipmentItem image={item.image} title={item.title} text={item.text} price={item.price} key={index} />)}
          </ul>

          <ButtonMore />
        </div>
      </div>
    </section>
  );
}
