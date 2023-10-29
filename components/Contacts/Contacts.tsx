/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './contacts.module.scss';
import { ContactsForm } from './ContactsForm';
import getFooterData from '@/api/getFooterData';

interface IContactsProps {
  title: string
}

export async function Contacts({ title }: IContactsProps) {
  const footerData = await getFooterData()

  return (
    <section className={styles.wrapper}>
      <div id='contacts' className={styles.anchor}></div>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>СВЯЖИТЕСЬ С НАМИ</h2>

            <ContactsForm footer_email_blank={footerData.footer_email_blank} />

            <div className={styles.qr}>
              <p className={styles.qrText}>{title}</p>
              <img className={styles.qrImage} src={footerData.footer_qr} alt="contacts qr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
