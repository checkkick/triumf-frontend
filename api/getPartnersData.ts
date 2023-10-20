export interface IPartnersData {
   id: number
   partners_front_photo: string
   partners_back_photo: string
}

async function getData() {
   const res = await fetch(`${process.env.API}/partners/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch partners data')
   }


   return await res.json()
}

export default async function getPartnersData() {
   const partnersData: IPartnersData[] = await getData()

   return { partnersData }
}