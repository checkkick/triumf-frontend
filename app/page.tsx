import Image from 'next/image'
import styles from './page.module.scss'
import { Banner } from '@/components/Banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  )
}
