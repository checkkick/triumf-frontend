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
      <div className="container">
        <div id='company' className={styles.about}>
          <h2 className={styles.title}>КОМПАНИЯ</h2>
          <h3 className={styles.subtitle}>{title}</h3>
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
