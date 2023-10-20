export interface IfooterData {
   footer_email_blank: string
   footer_qr: string
   footer_tg: string
   footer_whatsapp: string
   footer_email: string
   footer_number: string
   footer_street: string
}

async function getData() {
   const res = await fetch(`${process.env.API}/footer/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch footer data')
   }

   return await res.json()
}

export default async function getFooterData() {
   const [data]: IfooterData[] = await getData()

   return data
}