import { getFetch } from "@/utils/getFetch"

interface IPageData {
   basic_title: string
   company_title: string
   company_description1: string
   company_description2: string
   company_presentation: string
   devices_title: string
   partners_title: string
   partners_description: string
   vendors_title: string
   vendors_description: string
   news_title: string
   qr_title: string
}

export default async function getPageData() {
   const data: IPageData[] = await getFetch('maintitle')
   const [pageData] = data

   return { pageData }
}