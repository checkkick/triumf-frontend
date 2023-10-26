import React, { useState } from 'react';
import styles from './news.module.scss';
import getNewsData, { INewsData } from '@/api/getNewsData';
import { NewsSwiper } from './NewsSwiper';

interface INewsProps {
  title: string
  newsData: INewsData[]
}

export async function News({ title, newsData }: INewsProps) {
  return (
    <div id='news' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>НОВОСТИ</h2>
          <h2 className={styles.subtitle}>Наша компания активно принимает участие в различных мероприятиях</h2>

          <NewsSwiper newsData={newsData} />
        </div>
      </div>
    </div>
  );
}
