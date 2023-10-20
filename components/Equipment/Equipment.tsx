import React, { useEffect, useState } from 'react';
import styles from './equipment.module.scss';
import { EquipmentSwiper } from './EquipmentSwiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/scss';
import getEquipmentData from '@/api/getEquipmentData';

interface IEquipmentProps {
  title: string
}

export async function Equipment({ title }: IEquipmentProps) {
  const { data } = await getEquipmentData()

  return (
    <section id='equipment' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>ОБОРУДОВАНИЕ</h2>
          <h2 className={styles.subtitle}>{title}</h2>
          <EquipmentSwiper equipmentData={data} />
        </div>
      </div>
    </section>
  );
}
