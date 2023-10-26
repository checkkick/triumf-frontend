import React from 'react'
import styles from './header.module.scss'
import MenuMobile from './MenuMobile/MenuMobile'

export default function Header() {
   return (
      <header className={styles.wrapper}>
         <div className="container">
            <ul className={styles.list}>
               <MenuMobile />
               <li className={styles.listItem}>
                  <a href="#" className={styles.logo}>
                     <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4636 19.8748L9.51929 9.53998L10.7061 15.0377L10.714 15.0609C10.9019 15.6157 11.3035 16.0878 11.8129 16.3766L11.8144 16.3775L26.5891 24.8906L26.592 24.8923C26.8771 25.0504 27.2245 25.1171 27.5474 25.1171C27.8702 25.1171 28.2177 25.0504 28.5025 24.8923L28.5054 24.8906L43.1925 16.4321L43.1938 16.4313C43.7034 16.1425 44.105 15.6704 44.2928 15.1156L44.3007 15.0924L45.4864 9.60021L27.4636 19.8748Z" fill="#A7B5BD" />
                        <path d="M11.7488 19.8834L12.9498 25.308L12.9573 25.3302C13.1451 25.8845 13.5464 26.3564 14.0552 26.6452L21.2606 30.8436V39.764C21.2606 40.3081 21.5555 40.806 22.0268 41.0766L22.0286 41.0776L25.9911 43.3015L25.9877 29.2324L25.9869 29.2197C25.9381 28.3926 25.4423 27.6898 24.7426 27.33L11.7488 19.8834Z" fill="#A7B5BD" />
                        <path d="M42.0543 25.3217L42.0469 25.3439C41.8591 25.8983 41.4577 26.3702 40.9487 26.659L40.9463 26.6603L33.7437 30.8571V39.7778C33.7437 40.3219 33.4486 40.8198 32.9774 41.0904L32.9756 41.0912L29.0132 43.3151V29.2454L29.014 29.2327C29.0629 28.404 29.5632 27.7026 30.2615 27.3438L43.2553 19.897L42.0543 25.3217Z" fill="#A7B5BD" />
                     </svg>
                  </a>
               </li>
               <li className={styles.listItemNav}>
                  <nav className={styles.nav}>
                     <ul className={styles.navList}>
                        <li className={styles.navItem}>
                           <a href="#about" className={styles.navLink}>О нас</a>
                        </li>
                        <li className={styles.navItem}>
                           <a href="#equipment" className={styles.navLink}>Оборудование</a>
                        </li>
                        <li className={styles.navItem}>
                           <a href="#partners" className={styles.navLink}>Партнеры</a>
                        </li>
                        <li className={styles.navItem}>
                           <a href="#news" className={styles.navLink}>Новости</a>
                        </li>
                        <li className={styles.navItem}>
                           <a href="#contacts" className={styles.navLink}>Контакты</a>
                        </li>
                     </ul>
                  </nav>
               </li>
               <li className={styles.listItem}>
                  <a href="#" className={styles.profile}>
                     <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.625 32.0834C30.625 25.64 25.3364 20.4167 18.8125 20.4167H16.1875C9.66364 20.4167 4.375 25.64 4.375 32.0834M17.5 16.0417C14.2783 16.0417 11.6667 13.43 11.6667 10.2084V8.75002C11.6667 5.52836 14.2783 2.91669 17.5 2.91669C20.7217 2.91669 23.3333 5.52836 23.3333 8.75002V10.2084C23.3333 13.43 20.7217 16.0417 17.5 16.0417Z" stroke="#A7B5BD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </a>
               </li>
            </ul>
         </div>
      </header>
   )
}
