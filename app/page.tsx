import Image from 'next/image'
import styles from './page.module.scss'
import { Banner } from '@/components/Banner'
import { About } from '@/components/About'
import { Company } from '@/components/Company'
import { Equipment } from '@/components/Equipment'
import { Partners } from '@/components/Partners'
import { Vendors } from '@/components/Vendors'
import { News } from '@/components/News'
import { Contacts } from '@/components/Contacts'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <About />
      <Company />
      <Equipment />
      <Partners />
      <Vendors />
      <News />
      <Contacts />
    </main>
  )
}
