'use client'
import React, { useEffect, useState } from 'react';
import styles from './equipmentswiper.module.scss';
import { EquipmentItem } from './EquipmentItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/scss';
import { IEquipmentData } from '@/api/getEquipmentData';

export function EquipmentSwiper({ equipmentData }: { equipmentData: IEquipmentData[] }) {
  return (
    <div className={styles.swiperBlock}>
      <Swiper
        className={styles.swiper}
        modules={[FreeMode, Mousewheel]}
        spaceBetween={25}
        slidesPerView={3}
        freeMode
        mousewheel={{ releaseOnEdges: true, eventsTarget: '#equipment' }}
      >
        {equipmentData.map((item, index) =>
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <EquipmentItem
              image={item.devices_photo}
              title={item.devices_title}
              text={item.devices_description}
              price={item.devices_price} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
