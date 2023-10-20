export interface IVendorsData {
   id: number
   vendors_photo: string
}

async function getData() {
   const res = await fetch(`${process.env.API}/vendors/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch vendors data')
   }


   return await res.json()
}

export default async function getVendorsData() {
   const vendorsData: IVendorsData[] = await getData()

   return { vendorsData }
}