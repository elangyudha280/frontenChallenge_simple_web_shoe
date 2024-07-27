import React from 'react'

// import component
import { SectionOrderPage } from '@/components/section/section'

export const metadata = {
    title:'Order Shoes',
    description:'Page Order shoes'
  }

function PageOrder() {
  return (
    <section className="relative w-full">
        <SectionOrderPage/>
    </section>
  )
}

export default PageOrder