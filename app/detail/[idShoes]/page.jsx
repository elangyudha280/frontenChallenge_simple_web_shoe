import React from 'react'
import { SectionDetailShoes } from '@/components/section/section'


export const metadata = {
  title:'Detail Shoes',
  description:'Page detail shoes'
}

export default function PageDetailShoes({params,searchParams}) {
  return (
    <section className="relative w-full">
        {/*//! section detail price shoes  */}
        <SectionDetailShoes idShoes={params?.idShoes}/>
    </section>
  )
}
