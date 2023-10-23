interface ICompanyData {
   aboutUs_headline_one: string
   aboutUs_description_one: string
   aboutUs_headline_two: string
   aboutUs_description_two: string
   aboutUs_headline_three: string
   aboutUs_description_three: string
   block1_int: number
   block1_title: string
   block2_int: number
   block2_title: string
   block3_int: number
   block3_title: string
   block4_int: number
   block4_title: string
}

export interface IOurSuperiority {
   title: number
   text: string
}

export interface IAbout {
   title: string
   text: string
}

async function postData(body: string) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API}/feedback/`, {
      method: 'POST',
      body,
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      return false
   }

   return await res.json()
}

export default async function postFeedback(data: string) {
   return await postData(data)
}