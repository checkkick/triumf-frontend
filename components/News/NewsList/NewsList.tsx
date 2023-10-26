'use client'
import React, { useState } from 'react';
import styles from './newslist.module.scss';
import { INewsData } from '@/api/getNewsData';
import { NewsItem } from './NewsItem';
import { ButtonMore } from '@/components/ButtonMore';

export function NewsList({ newsData }: { newsData: INewsData[] }) {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {newsData.map((item, index) => {
          if (index < 3) {
            return (
              <li className={styles.listItem} key={index}>
                <NewsItem
                  news_title={item.news_title}
                  news_description={item.news_description}
                  news_photo={item.news_photo} />
              </li>
            )
          } else if (index >= 3 && show) {
            return (
              <li className={styles.listItem} key={index}>
                <NewsItem
                  news_title={item.news_title}
                  news_description={item.news_description}
                  news_photo={item.news_photo} />
              </li>
            )
          }
        })}
      </ul>

      <ButtonMore click={() => setShow(true)} />
    </div>
  );
}
