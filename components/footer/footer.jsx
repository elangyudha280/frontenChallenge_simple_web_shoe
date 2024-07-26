'use client'
import React from 'react'

// import component
import Link from 'next/link'
import Image from 'next/image'

// import pakage
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import img
import iconNav from '@/assets/images/logo.svg'

export function Footer() {
  return (
    <footer className="relative w-full p-3 bg-custom-black-800">
        <section  className="max-w-6xl relative mx-auto  grid grid-cols-[1fr] min-[300px]:grid-cols-[1fr_auto] sm:grid-cols-[auto_1fr_auto] items-center  flex-wrap gap-2 ">
             {/*//! ICON  */}
            <Link href={'/'} className="relative pr-2  flex gap-2 ">
            <Image alt='' src={iconNav} className='object-center' />
            <h2 className="font-semibold text-[16px] text-white h-full w-full">SUN CO.</h2>
            </Link>   

            {/*//! COPY RIGHT */}
            <div className="flex-1 w-full text-[13px]  text-slate-200 max-sm:order-3 sm:text-center max-[300px]:col-span-1 max-sm:col-span-2">
            © {new Date().getFullYear()} dot.cards text task. All rights reserved
            </div>

            {/*//! MEDIA SOCIAL  */}
            <div className="flex gap-2 justify-start min-[300px]:justify-end  sm:justify-start">
                <Link href={'/'} className="w-[24px] h-[24px] grid place-items-center rounded-full bg-[#2b2d42] text-white font-semibold">
                <FaInstagram />
                </Link>

                <Link href={'/'} className="w-[24px] h-[24px] grid place-items-center rounded-full bg-[#2b2d42] text-white font-semibold">
                <FaTwitter />
                </Link>

                <Link href={'/'} className="w-[24px] h-[24px] grid place-items-center rounded-full bg-[#2b2d42] text-white font-semibold">
                <FaYoutube />
                </Link>
            </div>
        </section>
    </footer>
  )
}

