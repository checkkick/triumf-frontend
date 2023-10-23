import { getFetch } from "@/utils/getFetch"

export interface IfooterData {
   footer_email_blank: string
   footer_qr: string
   footer_tg: string
   footer_whatsapp: string
   footer_email: string
   footer_number: string
   footer_street: string
}

export default async function getFooterData() {
   const [data]: IfooterData[] = await getFetch('footer')

   return data
}