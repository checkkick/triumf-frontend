import React from 'react';
import styles from './company.module.scss';
import { DownloadButton } from './DownloadButton';

export function Company() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div id='company' className={styles.about}>
          <h2 className={styles.title}>КОМПАНИЯ</h2>
          <h3 className={styles.subtitle}>Комплексные поставки IT-оборудования напрямую от производителей</h3>
          <p className={styles.text}>
            Компания TRIUMF осуществляет комплексные поставки IT-оборудования на рынке IT-инфраструктуры
            с 2015 года, все это время учитывая быстроразвивающийся IT-сектор и потребности клиентов.
          </p>
          <p className={styles.subtext}>
            Помимо оборудования TRIUMF предоставит для Ваc современный и безопасный софт, а также патчи и обновления,
            которые будут поддерживать в актуальном и безопасном состоянии программное обеспечение.
          </p>

          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
