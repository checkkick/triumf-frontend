import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
   return (
      <footer className={styles.wrapper}>
         <div className="container">
            <ul className={styles.list}>
               <li className={styles.listItem}>
                  <a href="#" className={styles.logo}>
                     <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4635 19.8749L9.51923 9.54004L10.706 15.0378L10.7139 15.061C10.9018 15.6157 11.3034 16.0878 11.8128 16.3767L11.8143 16.3775L26.5891 24.8906L26.592 24.8923C26.877 25.0505 27.2245 25.1172 27.5473 25.1172C27.8702 25.1172 28.2176 25.0505 28.5024 24.8923L28.5053 24.8907L43.1924 16.4322L43.1938 16.4314C43.7033 16.1426 44.105 15.6704 44.2927 15.1157L44.3006 15.0924L45.4863 9.60027L27.4635 19.8749Z" fill="#A7B5BD" />
                        <path d="M11.7488 19.8833L12.9498 25.308L12.9573 25.3301C13.1451 25.8845 13.5464 26.3563 14.0552 26.6451L21.2606 30.8435V39.764C21.2606 40.308 21.5555 40.806 22.0268 41.0765L22.0286 41.0776L25.9911 43.3015L25.9877 29.2323L25.9869 29.2196C25.9381 28.3926 25.4423 27.6898 24.7426 27.3299L11.7488 19.8833Z" fill="#A7B5BD" />
                        <path d="M42.0544 25.3217L42.047 25.3438C41.8592 25.8982 41.4578 26.3701 40.9488 26.659L40.9465 26.6603L33.7438 30.8571V39.7778C33.7438 40.3218 33.4487 40.8198 32.9775 41.0903L32.9757 41.0911L29.0133 43.315V29.2454L29.0141 29.2326C29.063 28.404 29.5633 27.7025 30.2616 27.3437L43.2554 19.897L42.0544 25.3217Z" fill="#A7B5BD" />
                     </svg>
                  </a>
               </li>
               <li className={styles.item}>
                  <ul className={styles.socials}>
                     <li className={styles.socialsItem}>
                        <a href="#" className={styles.socialsLink}>
                           <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8384 0.100098C7.97242 0.100098 0.776855 7.29567 0.776855 16.1616C0.776855 25.0276 7.97242 32.2232 16.8384 32.2232C25.7044 32.2232 32.8999 25.0276 32.8999 16.1616C32.8999 7.29567 25.7044 0.100098 16.8384 0.100098ZM24.2909 11.0219C24.05 13.5597 23.006 19.7273 22.476 22.5702C22.2511 23.7748 21.8014 24.1763 21.3838 24.2245C20.4522 24.3048 19.7455 23.6142 18.8461 23.0199C17.4327 22.0883 16.6296 21.5101 15.2644 20.6107C13.6743 19.5667 14.7022 18.9885 15.6177 18.0569C15.8586 17.816 19.9704 14.0736 20.0507 13.7363C20.0619 13.6853 20.0604 13.6322 20.0464 13.5818C20.0324 13.5315 20.0063 13.4853 19.9704 13.4472C19.874 13.3669 19.7455 13.3991 19.6331 13.4151C19.4885 13.4472 17.2399 14.941 12.8551 17.8963C12.2127 18.3299 11.6345 18.5548 11.1205 18.5387C10.5423 18.5227 9.45009 18.2175 8.63095 17.9445C7.61907 17.6232 6.83206 17.4466 6.8963 16.8844C6.92842 16.5953 7.32996 16.3062 8.08486 16.001C12.7748 13.9612 15.8908 12.612 17.4487 11.9696C21.9138 10.1064 22.8293 9.7852 23.4397 9.7852C23.5682 9.7852 23.8733 9.81733 24.0661 9.97794C24.2267 10.1064 24.2749 10.2831 24.2909 10.4116C24.2749 10.508 24.307 10.7971 24.2909 11.0219Z" fill="#A7B5BD" />
                           </svg>
                        </a>
                     </li>
                     <li className={styles.socialsItem}>
                        <a href="#" className={styles.socialsLink}>
                           <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24.7739 4.21957C23.4378 2.87677 21.8464 1.8121 20.0925 1.08766C18.3386 0.363215 16.4573 -0.00649615 14.5583 8.63757e-05C6.60151 8.63757e-05 0.116583 6.45257 0.116583 14.3695C0.116583 16.907 0.786935 19.372 2.0402 21.547L0 29L7.65075 26.999C9.76382 28.1445 12.1392 28.7535 14.5583 28.7535C22.5151 28.7535 29 22.301 29 14.384C29 10.5416 27.499 6.93107 24.7739 4.21957ZM14.5583 26.3175C12.4015 26.3175 10.2884 25.7375 8.43769 24.65L8.0005 24.389L3.45377 25.578L4.66332 21.17L4.37186 20.7205C3.1736 18.8166 2.53734 16.6159 2.53568 14.3695C2.53568 7.78656 7.92764 2.42158 14.5437 2.42158C17.7497 2.42158 20.7663 3.66858 23.0251 5.93057C24.1436 7.03831 25.0299 8.35592 25.6328 9.80702C26.2357 11.2581 26.5431 12.8139 26.5372 14.384C26.5663 20.967 21.1744 26.3175 14.5583 26.3175ZM21.1452 17.3855C20.7809 17.2115 19.003 16.3415 18.6824 16.211C18.3472 16.095 18.1141 16.037 17.8663 16.385C17.6186 16.7475 16.9337 17.5595 16.7296 17.7915C16.5256 18.038 16.307 18.067 15.9427 17.8785C15.5784 17.7045 14.4126 17.313 13.0427 16.095C11.9643 15.138 11.2502 13.9635 11.0317 13.601C10.8276 13.2385 11.0025 13.05 11.192 12.8615C11.3523 12.702 11.5563 12.441 11.7312 12.238C11.906 12.035 11.9789 11.8756 12.0955 11.6436C12.2121 11.3971 12.1538 11.1941 12.0663 11.0201C11.9789 10.8461 11.2502 9.07706 10.9588 8.35206C10.6673 7.65606 10.3613 7.74306 10.1427 7.72856H9.44322C9.19548 7.72856 8.81658 7.81556 8.48141 8.17806C8.1608 8.54056 7.22814 9.41056 7.22814 11.1796C7.22814 12.9485 8.52513 14.6595 8.7 14.8915C8.87487 15.138 11.2503 18.763 14.8643 20.3145C15.7241 20.6915 16.3945 20.909 16.9191 21.0685C17.7789 21.344 18.5658 21.3005 19.1925 21.2135C19.892 21.112 21.3347 20.3435 21.6261 19.5025C21.9322 18.6615 21.9322 17.951 21.8302 17.7915C21.7281 17.632 21.5095 17.5595 21.1452 17.3855Z" fill="#A7B5BD" />
                           </svg>
                        </a>
                     </li>
                     <li className={styles.socialsItem}>
                        <a href="#" className={styles.socialsLink}>
                           <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.78133 0H27.5522C28.7194 0 29.6667 0.947333 29.6667 2.11458V19.0312C29.6667 19.5921 29.444 20.1299 29.0474 20.5265C28.6508 20.923 28.113 21.1458 27.5522 21.1458H2.78133C2.22051 21.1458 1.68266 20.923 1.2861 20.5265C0.889534 20.1299 0.666748 19.5921 0.666748 19.0312L0.666748 2.11458C0.666748 0.947333 1.61408 0 2.78133 0ZM2.47925 5.33117V19.0312C2.47925 19.198 2.61458 19.3333 2.78133 19.3333H27.5522C27.6323 19.3333 27.7091 19.3015 27.7658 19.2449C27.8224 19.1882 27.8542 19.1114 27.8542 19.0312V5.33117L16.3509 13.1044C15.6356 13.5877 14.6979 13.5877 13.9826 13.1044L2.47925 5.33117ZM2.47925 2.11458V3.14408L14.9976 11.6024C15.0475 11.6362 15.1065 11.6542 15.1667 11.6542C15.227 11.6542 15.286 11.6362 15.3359 11.6024L27.8542 3.14408V2.11458C27.8542 2.03447 27.8224 1.95763 27.7658 1.90098C27.7091 1.84433 27.6323 1.8125 27.5522 1.8125H2.78133C2.70121 1.8125 2.62438 1.84433 2.56773 1.90098C2.51107 1.95763 2.47925 2.03447 2.47925 2.11458Z" fill="#A7B5BD" />
                           </svg>
                        </a>
                     </li>
                  </ul>
               </li>
               <li className={styles.listItem}>
                  <a href="#" className={styles.text}>+7 (900) 000-00-00</a>
                  <a href="#" className={styles.text}>г. Москва, ул. Уличная, 1</a>
               </li>
            </ul>
         </div>
      </footer>
   )
}
