import { getFetch } from "@/utils/getFetch"

export interface IPartnersData {
   id: number
   partners_front_photo: string
   partners_back_photo: string
}

export default async function getPartnersData() {
   const partnersData: IPartnersData[] = await getFetch('partners')

   return { partnersData }
}