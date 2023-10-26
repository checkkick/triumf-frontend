/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import styles from './partnersswiper.module.scss';
import { IPartnersData } from '@/api/getPartnersData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

export function PartnersSwiper({ partnersData }: { partnersData: IPartnersData[] }) {
  const partnersSwiperBreakpoints: SwiperOptions["breakpoints"] = {
    1300: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 35
    },
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay, Scrollbar]}
      navigation
      breakpoints={partnersSwiperBreakpoints}
      scrollbar
      slidesPerView={1}
      spaceBetween={20}
      className={styles.swiper}
      autoplay={{
        delay: 4000,
      }}
    >
      {
        partnersData.map((item, index) =>
          <SwiperSlide key={index} className={styles.slide} style={{ backgroundImage: `url(${item.partners_back_photo})` }}>
            <img className={styles.image} src={item.partners_front_photo} alt="partner image" />
          </SwiperSlide>
        )
      }
    </Swiper>
  );
}
