'use client'
import React from 'react';
import styles from './newswiper.module.scss';
import { INewsData } from '@/api/getNewsData';
import { NewsItem } from './NewsItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

export function NewsSwiper({ newsData }: { newsData: INewsData[] }) {
  const newsSwiperBreakpoints: SwiperOptions["breakpoints"] = {
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
      modules={[Navigation, Scrollbar]}
      navigation
      breakpoints={newsSwiperBreakpoints}
      scrollbar
      slidesPerView={1}
      spaceBetween={20}
      className={styles.swiper}
    >
      {
        newsData.map((item, index) =>
          <SwiperSlide key={index} className={styles.slide}>
            <NewsItem
              news_title={item.news_title}
              news_description={item.news_description}
              news_photo={item.news_photo} />
          </SwiperSlide>
        )
      }
    </Swiper>
  );
}
