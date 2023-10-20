'use client'
import React from 'react';
import styles from './equipment.module.scss';
import { EquipmentItem } from './EquipmentItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/scss';

interface IEquipmentProps {
  title: string
}

export function Equipment({ title }: IEquipmentProps) {
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
          <h2 className={styles.subtitle}>{title}</h2>
          <div className={styles.swiperBlock}>
            <Swiper
              className={styles.swiper}
              modules={[FreeMode, Mousewheel]}
              spaceBetween={25}
              slidesPerView={3}
              freeMode
              mousewheel={{ releaseOnEdges: true, eventsTarget: '#equipment' }}
            >
              {exapmle.map((item, index) =>
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <EquipmentItem image={item.image} title={item.title} text={item.text} price={item.price} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
