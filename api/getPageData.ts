interface IPageData {
   basic_title: string
   company_title: string
   company_description: string
   company_presentation: string
   devices_title: string
   partners_title: string
   partners_description: string
   vendors_title: string
   vendors_description: string
   news_title: string
   qr_title: string
}

async function getData() {
   const res = await fetch(`${process.env.API}/maintitle/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch data')
   }

   return await res.json()
}

export default async function getCompanyData() {
   const data: IPageData[] = await getData()
   const [pageData] = data

   return { pageData }
}