import { getFetch } from "@/utils/getFetch"

export interface INewsData {
   id: number,
   news_title: string,
   news_description: string,
   news_photo: string | null,
   news_date: string
}

export default async function getNewsData() {
   const data: INewsData[] = await getFetch('news')

   return data
}