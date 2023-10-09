import React from 'react';
import styles from './downloadbutton.module.scss';

export function DownloadButton() {
  return (
    <button className={styles.btn}>
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37.5" cy="37.5" r="37" stroke="#D9D9D9" />
        <circle cx="37" cy="38" r="24" fill="#D9D9D9" />
        <path d="M38 28C38 27.4477 37.5523 27 37 27C36.4477 27 36 27.4477 36 28L38 28ZM36.2929 48.7071C36.6834 49.0976 37.3166 49.0976 37.7071 48.7071L44.0711 42.3431C44.4616 41.9526 44.4616 41.3195 44.0711 40.9289C43.6805 40.5384 43.0474 40.5384 42.6569 40.9289L37 46.5858L31.3431 40.9289C30.9526 40.5384 30.3195 40.5384 29.9289 40.9289C29.5384 41.3195 29.5384 41.9526 29.9289 42.3431L36.2929 48.7071ZM36 28L36 48L38 48L38 28L36 28Z" fill="black" />
      </svg>
      <p className={styles.btnText}>Скачать презентацию</p>
    </button>
  );
}
