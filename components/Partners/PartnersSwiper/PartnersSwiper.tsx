/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import styles from './partnersswiper.module.scss';
import { IPartnersData } from '@/api/getPartnersData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';

export function PartnersSwiper({ partnersData }: { partnersData: IPartnersData[] }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      className={styles.swiper}
      spaceBetween={35}
      slidesPerView={3}
      autoplay={{
        delay: 4000,
      }}
    >
      {
        partnersData.map((item, index) =>
          <SwiperSlide key={index} className={styles.slide} style={{ backgroundImage: `url(${item.partners_back_photo})` }}>
            <img src={item.partners_front_photo} alt="partner image" />
          </SwiperSlide>
        )
      }
    </Swiper>
  );
}
