import React from 'react';
import styles from './news.module.scss';
import { NewsItem } from './NewsItem';
import { ButtonMore } from '../ButtonMore';

export function News() {
  const example = [
    {
      title: 'Российские компании взыскали с иностранных IT-вендоров 4,7 млрд рублей',
      bgImage: '/news-1.png'
    },
    {
      title: 'Panasonic выпустила лёгкий 12,4" ноутбук Let’s Note SR 12.4 меньше листа А4',
      bgImage: '/news-2.png'
    },
    {
      title: 'Samsung представила умную метку Galaxy SmartTag 2 со сроком службы батареи до 700 дней',
      bgImage: '/news-3.png'
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>НОВОСТИ</h2>
          <h2 className={styles.subtitle}>Наша компания активно принимает участие в различных мероприятиях</h2>

          <ul className={styles.list}>
            {example.map((item, index) =>
              <li className={styles.listItem} key={index}>
                <NewsItem title={item.title} bgImage={item.bgImage} />
              </li>
            )}
          </ul>

          <ButtonMore />
        </div>
      </div>
    </div>
  );
}
