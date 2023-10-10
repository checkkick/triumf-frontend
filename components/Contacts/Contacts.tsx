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
          </div>
        </div>
      </div>
    </div>
  );
}
