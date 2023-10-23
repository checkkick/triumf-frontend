import { getFetch } from "@/utils/getFetch"

export interface IEquipmentData {
   id: number
   devices_photo: string
   devices_title: string
   devices_description: string
   devices_price: string
}

export default async function getEquipmentData() {
   const data: IEquipmentData[] = await getFetch('devices')

   return { data }
}