'use client'
import React, { useEffect, useState } from 'react';
import styles from './equipmentswiper.module.scss';
import { EquipmentItem } from './EquipmentItem';
import { IEquipmentData } from '@/api/getEquipmentData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Keyboard, Mousewheel } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/scss';
import 'swiper/scss/scrollbar';

export function EquipmentSwiper({ equipmentData }: { equipmentData: IEquipmentData[] }) {
  const swiperBreakpoints: SwiperOptions["breakpoints"] = {
    1300: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 25
    },
  }

  return (
    <div className={styles.swiperBlock}>
      <Swiper
        className={styles.swiper}
        breakpoints={swiperBreakpoints}
        modules={[Scrollbar, Keyboard, Mousewheel]}
        scrollbar
        mousewheel
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1}
        spaceBetween={25}
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
