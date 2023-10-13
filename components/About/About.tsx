import React from 'react';
import styles from './about.module.scss';
import { AboutItem } from './AboutItem';
import { AboutBanner } from './AboutBanner';

export function About() {
  const AboutList = [
    {
      title: 'Поддержка  специалистов',
      text: 'Аккаунт менеджер будет сопровождать сделку от момента заказа до установки и конфигурирования оборудования в Вашей компании'
    },
    {
      title: 'Офисы в ключевых точках Мира',
      text: 'Офисы компании расположены в  Москве, Пекине и Стамбуле, что позволяет контролировать процесс Вашей покупки на всех этапах сделки.'
    },
    {
      title: 'Быстрый и точный расчет DDP',
      text: 'Наши специалисты рассчитают все расходы связанные с доставкой оборудования из-за рубежа, а также уладят все таможенные вопросы'
    },
  ]

  return (
    <section className={styles.wrapper}>
      <div className={styles.anchor} id='about'></div>
      <div className="container">
        <div className={styles.content}>
          {AboutList.map((item, index) => <AboutItem key={index} index={index} title={item.title} text={item.text} />)}

          <AboutBanner />
        </div>
      </div>
    </section>
  );
}
