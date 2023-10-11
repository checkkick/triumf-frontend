import React from 'react';
import styles from './buttonmore.module.scss';

export function ButtonMore() {
  return (
    <button className={styles.btn}>
      <p className={styles.btnText}>Подробнее</p>
      <div className={styles.circle}>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L15.0711 10.3431C15.4616 9.95262 15.4616 9.31946 15.0711 8.92893C14.6805 8.53841 14.0474 8.53841 13.6569 8.92893L8 14.5858L2.34315 8.92893C1.95262 8.53841 1.31946 8.53841 0.928932 8.92893C0.538408 9.31946 0.538408 9.95262 0.928932 10.3431L7.29289 16.7071ZM7 1L7 16H9L9 1L7 1Z" fill="black" />
        </svg>
      </div>
    </button>
  );
}