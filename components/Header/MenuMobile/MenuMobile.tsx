'use client'
import React, { useRef, useState } from 'react'
import styles from './menumobile.module.scss'
import { CSSTransition } from 'react-transition-group';
import { preventDefault } from '@/utils/preventDefault'

export default function MenuMobile() {
   const [menuShow, setMenuShow] = useState(false)
   const nodeRef = useRef(null);

   function burgerClick(event: React.MouseEvent<HTMLAnchorElement>) {
      event.preventDefault()
      setMenuShow(!menuShow)
   }

   function closeMenu() {
      setMenuShow(!menuShow)
   }

   const burgerLogo = (
      <a onClick={burgerClick} href="#" className={styles.burgerMenuLogo}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10H21M3 6H21M3 14H21M3 18H21" stroke="#A7B5BD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </a>
   )

   const navArrow = (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M8 4.5L16 12.5L8 20.5" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
   )

   return (
      <li className={styles.burgerMenu}>
         {burgerLogo}

         <CSSTransition nodeRef={nodeRef} in={menuShow} timeout={200} classNames={"menu-mobile"} unmountOnExit>
            <div ref={nodeRef} className={styles.menu}>
               {burgerLogo}

               <nav className={styles.nav}>
                  <ul className={styles.navList}>
                     <li className={styles.navItem}>
                        <a onClick={closeMenu} href="#about" className={styles.navLink}>О нас {navArrow}</a>
                     </li>
                     <li className={styles.navItem}>
                        <a onClick={closeMenu} href="#equipment" className={styles.navLink}>Оборудование {navArrow}</a>
                     </li>
                     <li className={styles.navItem}>
                        <a onClick={closeMenu} href="#partners" className={styles.navLink}>Партнеры {navArrow}</a>
                     </li>
                     <li className={styles.navItem}>
                        <a onClick={closeMenu} href="#news" className={styles.navLink}>Новости {navArrow}</a>
                     </li>
                     <li className={styles.navItem}>
                        <a onClick={closeMenu} href="#contacts" className={styles.navLink}>Контакты {navArrow}</a>

                     </li>
                  </ul>

                  <a onClick={closeMenu} href="#" className={styles.profile}>
                     <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.625 32.0834C30.625 25.64 25.3364 20.4167 18.8125 20.4167H16.1875C9.66364 20.4167 4.375 25.64 4.375 32.0834M17.5 16.0417C14.2783 16.0417 11.6667 13.43 11.6667 10.2084V8.75002C11.6667 5.52836 14.2783 2.91669 17.5 2.91669C20.7217 2.91669 23.3333 5.52836 23.3333 8.75002V10.2084C23.3333 13.43 20.7217 16.0417 17.5 16.0417Z" stroke="#A7B5BD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <p className={styles.profileText}>Войти</p>
                  </a>
               </nav>
            </div>
         </CSSTransition>

         {/* {menuShow && (

         )} */}
      </li>
   )
}
