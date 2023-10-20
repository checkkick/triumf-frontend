import styles from './page.module.scss'
import { Banner } from '@/components/Banner'
import { About } from '@/components/About'
import { Company } from '@/components/Company'
import { Equipment } from '@/components/Equipment'
import { Partners } from '@/components/Partners'
import { Vendors } from '@/components/Vendors'
import { News } from '@/components/News'
import { Contacts } from '@/components/Contacts'
import getPageData from '@/api/getPageData'

export default async function Home() {
  const { pageData } = await getPageData()

  return (
    <main className={styles.main}>
      <Banner
        title={pageData.basic_title} />
      <About />
      <Company
        title={pageData.company_title}
        descriptionTop={pageData.company_description1}
        descriptionBottom={pageData.company_description2}
        presentationLink={pageData.company_presentation} />
      <Equipment
        title={pageData.devices_title} />
      <Partners
        title={pageData.partners_title}
        description={pageData.partners_description} />
      <Vendors
        title={pageData.vendors_title}
        description={pageData.vendors_description} />
      <News
        title={pageData.news_title} />
      <Contacts
        title={pageData.qr_title} />
    </main>
  )
}
