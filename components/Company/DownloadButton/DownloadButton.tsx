'use client'
import React, { useRef } from 'react';
import styles from './downloadbutton.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';

export function DownloadButton() {
  const player = useRef<Player>(null)
  const btn = useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    btn.current?.addEventListener('mouseenter', () => player.current?.play())
    btn.current?.addEventListener('mouseleave', () => player.current?.stop())
  }, []);

  return (
    <button ref={btn} className={styles.btn}>
      <Player
        ref={player}
        src="/download-btn.json"
      />
      <p className={styles.btnText}>Скачать презентацию</p>
    </button>
  );
}
