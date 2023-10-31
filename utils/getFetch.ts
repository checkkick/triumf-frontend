export async function getFetch(url: string) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API}/${url}/`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json"
      },
      next: { revalidate: 60 }
   })

   if (!res.ok) {
      throw new Error(`Failed to fetch data ${url} company`)
   }

   return await res.json()
}