/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './company.module.scss';
import { DownloadButton } from './DownloadButton';

interface ICompanyProps {
  title: string
  descriptionTop: string
  descriptionBottom: string
  presentationLink: string
}

export function Company({ title, descriptionTop, descriptionBottom, presentationLink }: ICompanyProps) {
  return (
    <section className={styles.wrapper}>
      <div id='company' className={styles.about}>
        <div className={styles.background + ' container'}></div>
        <div className="container">
          <h2 className={styles.title}>КОМПАНИЯ</h2>
          <h3 className={styles.subtitle}>{title}</h3>
        </div>

        <img className={styles.image} src="/company-mobile.png" alt="company about image" />

        <div className="container">
          <p className={styles.text}>
            {descriptionTop}
          </p>
          <p className={styles.subtext}>
            {descriptionBottom}
          </p>

          <DownloadButton link={presentationLink} />
        </div>
      </div>
    </section>
  );
}
