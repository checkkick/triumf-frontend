import React from 'react';
import styles from './newsitem.module.scss';
import { INewsData } from '@/api/getNewsData';
import { preventDefault } from '@/utils/preventDefault';
import Image from 'next/image';

export function NewsItem({ news_title, news_description, news_photo }: Pick<INewsData, 'news_title' | 'news_description' | 'news_photo'>) {
  return (
    <a onClick={preventDefault((e) => e)} href='#' className={styles.card}>
      <Image
        className={styles.image}
        fill
        loading='lazy'
        src={news_photo || 'banner-logo.svg'}
        alt="contacts background image" />

      <div className={styles.content}>
        <h4 className={styles.title}>{news_title}</h4>
        <p className={styles.text}>{news_description}</p>
      </div>

      <span className={styles.logo}>
        <svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.2076 20.6248L10.2846 9.8999L11.5361 15.6051L11.5444 15.6292C11.7426 16.2049 12.1661 16.6948 12.7033 16.9945L12.7048 16.9954L28.2855 25.8298L28.2885 25.8315C28.5891 25.9957 28.9555 26.0648 29.296 26.0648C29.6365 26.0648 30.0029 25.9957 30.3032 25.8315L30.3063 25.8298L45.7945 17.0521L45.7959 17.0513C46.3332 16.7516 46.7568 16.2616 46.9548 15.6859L46.9631 15.6618L48.2135 9.96241L29.2076 20.6248Z" fill="#21242C" />
          <path d="M12.6357 20.6338L13.9022 26.2631L13.9102 26.2861C14.1082 26.8614 14.5314 27.3511 15.068 27.6508L22.6663 32.0076V41.2647C22.6663 41.8292 22.9774 42.346 23.4744 42.6267L23.4763 42.6278L27.6549 44.9356L27.6513 30.3356L27.6505 30.3224C27.5991 29.4641 27.0761 28.7348 26.3383 28.3614L12.6357 20.6338Z" fill="#21242C" />
          <path d="M44.5943 26.2773L44.5865 26.3003C44.3886 26.8757 43.9653 27.3653 43.4285 27.6651L43.426 27.6665L35.8305 32.0216V41.279C35.8305 41.8435 35.5193 42.3603 35.0224 42.641L35.0204 42.6419L30.8419 44.9497V30.3491L30.8428 30.3359C30.8944 29.476 31.4219 28.748 32.1584 28.3757L45.8609 20.6479L44.5943 26.2773Z" fill="#21242C" />
        </svg>
      </span>
    </a>
  );
}
