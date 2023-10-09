import Image from 'next/image'
import styles from './page.module.scss'
import { Banner } from '@/components/Banner'
import { About } from '@/components/About'
import { Company } from '@/components/Company'
import { Equipment } from '@/components/Equipment'
import { Partners } from '@/components/Partners'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <About />
      <Company />
      <Equipment />
      <Partners />
    </main>
  )
}
