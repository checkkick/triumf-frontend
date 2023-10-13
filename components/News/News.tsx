import React from 'react';
import styles from './news.module.scss';
import { NewsItem } from './NewsItem';
import { ButtonMore } from '../ButtonMore';

export function News() {
  const example = [
    {
      title: 'Российские компании взыскали с иностранных IT-вендоров 4,7 млрд рублей',
      text: 'Российские дистрибуторы и интеграторы, обеспечивающие оптовые поставки софта и «железа» российским заказчикам, добились взысканий с ушедших из страны иностранных производителей на сумму более 4,7 млрд руб. по 43 искам. ',
      bgImage: '/news-1.png'
    },
    {
      title: 'Panasonic выпустила лёгкий 12,4" ноутбук Let’s Note SR 12.4 меньше листа А4',
      text: 'Panasonic выпустила почти килограммовый (заявлено до 979 грамм) 12,4" ноутбук с портами HDMI, D-Sub, RJ-45, 2хUSB-C, 3хUSB-A и размером меньше листа A4. Толщина устройства составляет 19,9 мм. Время автономной работы в Windows 11 Pro до 16 часов.',
      bgImage: '/news-2.png'
    },
    {
      title: 'Samsung представила умную метку Galaxy SmartTag 2 со сроком службы батареи до 700 дней',
      text: 'SmartTag 2 получила улучшенную функциональность Compass View. Эта опция работает с любым смартфоном Galaxy с поддержкой UWB и, подобно компасу, показывает направление расположения SmartTag 2 и расстояния до метки.',
      bgImage: '/news-3.png'
    },
  ]

  return (
    <div id='news' className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>НОВОСТИ</h2>
          <h2 className={styles.subtitle}>Наша компания активно принимает участие в различных мероприятиях</h2>

          <ul className={styles.list}>
            {example.map((item, index) =>
              <li className={styles.listItem} key={index}>
                <NewsItem title={item.title} text={item.text} bgImage={item.bgImage} />
              </li>
            )}
          </ul>

          <ButtonMore />
        </div>
      </div>
    </div>
  );
}
