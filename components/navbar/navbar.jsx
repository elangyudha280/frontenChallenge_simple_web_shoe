'use client'
import React,{useState,useEffect} from 'react'

// import component
import Image from 'next/image'
import Link from 'next/link'

// import pakage
import { BiShoppingBag } from "react-icons/bi";

// import img
import iconNav from '@/assets/images/logo.svg'

export function  Navbar() {
  return (
   <nav className="relative w-full p-3 border-b-2 border-b-slate-100">
    <div  className="max-w-6xl relative mx-auto  flex items-center justify-between flex-wrap gap-2  max-[320px]:flex-col">
        {/*//! ICON  */}
        <Link href={'/'} className="relative pr-2  flex gap-2">
        <Image alt='' src={iconNav} className='object-center' />
        <h2 className="font-semibold text-[16px] h-full w-full">SUN CO.</h2>
        </Link>

        {/*//! BUTTON CART */}
        <div className="relative max-[320px]:flex-1 max-[320px]:w-full">
            {/* //! button card */}
            <button type='button' className=" flex gap-2 flex-wrap justify-center items-center py-1.5 px-4 font-semibold border-2 border-custom-black-800 rounded-md transition-all duration-200 max-[320px]:w-full hover:bg-custom-black-800 hover:ring-0 hover:text-white">
                <BiShoppingBag/>
                <p className="m-0 p-0 text-[13px] mt-[1px]">View Cart</p>

                {/* icont count */}
                {/* <div className="p-1 px-2.5 grid place-items-center rounded-full text-white text-[9px] font-bold bg-orange-500 ">
                    <p className="line-clamp-1 ">0</p>
                </div> */}
            </button>
        </div>
    </div>
   </nav>
  )
}

