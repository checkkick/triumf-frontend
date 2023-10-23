import { getFetch } from "@/utils/getFetch"

export interface IVendorsData {
   id: number
   vendors_photo: string
}

export default async function getVendorsData() {
   const vendorsData: IVendorsData[] = await getFetch('vendors')

   return { vendorsData }
}