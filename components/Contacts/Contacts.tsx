/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './contacts.module.scss';
import { ContactsForm } from './ContactsForm';

interface IContactsProps {
  title: string
}

export function Contacts({ title }: IContactsProps) {
  return (
    <section className={styles.wrapper}>
      <div id='contacts' className={styles.anchor}></div>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>СВЯЖИТЕСЬ С НАМИ</h2>

            <ContactsForm />

            <div className={styles.qr}>
              <p className={styles.qrText}>{title}</p>
              <img className={styles.qrImage} src="/contacts-qr.png" alt="contacts qr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
