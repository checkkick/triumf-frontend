export interface IEquipmentData {
   id: number
   devices_photo: string
   devices_title: string
   devices_description: string
   devices_price: string
}

async function getData() {
   const res = await fetch(`${process.env.API}/devices/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch equipment data')
   }


   return await res.json()
}

export default async function getEquipmentData() {
   const data: IEquipmentData[] = await getData()

   return { data }
}