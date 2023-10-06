import Image from 'next/image'
import styles from './page.module.scss'
import { Banner } from '@/components/Banner'
import { About } from '@/components/About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <About />
    </main>
  )
}
