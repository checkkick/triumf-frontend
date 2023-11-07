'use client'
import React from 'react';
import styles from './partnersswiper.module.scss';
import { IPartnersData } from '@/api/getPartnersData';
import Image from 'next/image';

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
          <SwiperSlide key={index} className={styles.slide}>
            <Image
              className={styles.bgImage}
              width={400}
              height={400}
              src={item.partners_back_photo}
              alt='partners background photo' />

            <span className={styles.blur}></span>

            <Image
              className={styles.image}
              width={400}
              height={400}
              loading='lazy'
              src={item.partners_front_photo}
              alt="partner image" />
          </SwiperSlide>
        )
      }
    </Swiper>
  );
}
