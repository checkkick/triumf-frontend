import React, { useState } from 'react';
import styles from './news.module.scss';
import getNewsData from '@/api/getNewsData';
import { NewsList } from './NewsItem copy';

interface INewsProps {
  title: string
}

export async function News({ title }: INewsProps) {
  const newsData = await getNewsData()

  return (
    <div id='news' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>НОВОСТИ</h2>
          <h2 className={styles.subtitle}>Наша компания активно принимает участие в различных мероприятиях</h2>

          <NewsList newsData={newsData} />
        </div>
      </div>
    </div>
  );
}
