/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import styles from './partnersswiper.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';

export function PartnersSwiper() {
  const exapmle = [
    {
      image: '/partner-1.png',
      bgImage: '/bg-partner-1.png'
    },
    {
      image: '/partner-2.png',
      bgImage: '/bg-partner-2.png'
    },
    {
      image: '/partner-3.png',
      bgImage: '/bg-partner-3.png'
    },
    {
      image: '/partner-1.png',
      bgImage: '/bg-partner-1.png'
    },
    {
      image: '/partner-2.png',
      bgImage: '/bg-partner-2.png'
    },
    {
      image: '/partner-3.png',
      bgImage: '/bg-partner-3.png'
    },
  ]

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop
      className={styles.swiper}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay: 4000,
      }}
    >
      {
        exapmle.map((item, index) =>
          <SwiperSlide key={index} className={styles.slide} style={{ backgroundImage: `url(${item.bgImage})` }}>
            <img src={item.image} alt="partner image" />
          </SwiperSlide>
        )
      }
    </Swiper>
  );
}
