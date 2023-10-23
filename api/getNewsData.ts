export interface INewsData {
   id: number,
   news_title: string,
   news_description: string,
   news_photo: string | null,
   news_date: string
}

async function getData() {
   const res = await fetch(`${process.env.API}/news/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch news data')
   }


   return await res.json()
}

export default async function getNewsData() {
   const data: INewsData[] = await getData()

   return data
}