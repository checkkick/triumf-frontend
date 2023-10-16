'use client'
import React from 'react'
import styles from './logobackground.module.scss'
import { Player } from '@lottiefiles/react-lottie-player';

export function LogoBackground() {
   return (
      <div className={styles.logo + ' container'}>
         <Player
            autoplay
            loop
            src="/banner-logo.json"
            style={{ height: '60rem', width: '60rem' }}
         />
      </div>
   )
}
