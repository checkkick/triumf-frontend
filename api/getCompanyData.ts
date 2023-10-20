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

async function getData() {
   const res = await fetch(`${process.env.API}/company/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!res.ok) {
      throw new Error('Failed to fetch data')
   }

   return await res.json()
}

export default async function getCompanyData() {
   const [data]: ICompanyData[] = await getData()

   const about: IAbout[] = [
      {
         title: data.aboutUs_headline_one,
         text: data.aboutUs_description_one
      },
      {
         title: data.aboutUs_headline_two,
         text: data.aboutUs_description_two
      },
      {
         title: data.aboutUs_headline_three,
         text: data.aboutUs_description_three
      },
   ]

   const ourSuperiority: IOurSuperiority[] = [
      {
         title: data.block1_int,
         text: data.block1_title
      },
      {
         title: data.block2_int,
         text: data.block2_title
      },
      {
         title: data.block3_int,
         text: data.block3_title
      },
      {
         title: data.block4_int,
         text: data.block4_title
      },
   ]

   return { about, ourSuperiority }
}