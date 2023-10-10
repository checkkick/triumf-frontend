/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './contacts.module.scss';
import { ContactsForm } from './ContactsForm';

export function Contacts() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>СВЯЖИТЕСЬ С НАМИ</h2>

            <ContactsForm />

            <div className={styles.qr}>
              <p className={styles.qrText}>Если у вас возникли вопросы, отсканируйте QR-код, чтобы обратиться в техподдержку</p>
              <img className={styles.qrImage} src="/contacts-qr.png" alt="contacts qr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
