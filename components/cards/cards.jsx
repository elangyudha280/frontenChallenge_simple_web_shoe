'use client'
// import component
import Image from 'next/image'
import Link from 'next/link'


import { FaMinus,FaPlus } from "react-icons/fa6";

import { formatToDollar } from '@/modules/dolar';

export function CardSkeletonImgDetailShoes(){
    return (
        <div className="relative w-full min-[962px]:w-[530px]h-[450px] overflow-hidden rounded-[2em] animate-pulse flex space-x-4 bg-slate-300">
           
        </div>
    )
}

export function CardOrderDetailShoes({title,subTitle,price}){
    return (
        <div className="flex-1 w-full h-auto bg-white shadow-[0_4.5px_20px_0px_rgba(0,0,0,0.1)]  rounded-[1.5em] flex flex-col"> 
                 {/* section desc */}
                 <div className="pb-6 border-b-2 border-b-slate-300 p-8">
                    {/* title shoes */}
                    <h2 className="m-0 p-0 font-semibold text-custom-black-800 text-[1.7em]">
                      {title}
                    </h2>
                    {/* subtitle */}
                    <h2 className="m-0 p-0 font-medium text-slate-400 text-[1.1em] line-clamp-3">
                  {subTitle}
                    </h2>
                    {/* price */}
                    <p className="mt-2 p-0 line-clamp-1 text-[1.5em] font-medium text-custom-black-800">
                      {formatToDollar(price)}
                    </p>
                 </div>

                   {/* section order */}
                   <div className="pb-6  p-8 flex-1 h-full flex flex-col">
                    {/* title  */}
                    <h2 className="m-0 p-0 font-semibold text-custom-black-800 text-[1.3em]">
                      Quanity
                    </h2>

                    {/* button count */}
                    <div className="flex-1 h-full">
                      <div className="w-[150px] h-[40px] mt-2 flex rounded-md border-[1px] border-slate-300">
                          {/* button decrement */}
                          <button className="w-[40px]  text-slate-400 grid place-items-center ">
                          <FaMinus/>
                          </button>
                          {/* count */}
                          <p className="flex-1 m-0 p-0 font-medium line-clamp-1 grid place-items-center">
                            1
                          </p>
                          {/* button increment */}
                          <button className="w-[40px] text-slate-400 grid place-items-center ">
                          <FaPlus/>
                          </button>
                      </div>
                    </div>

                    {/* button add to card */}
                    <div className="relative w-full flex mt-5 min-[962px]:mt-2">
                      <button type='button' className="w-full flex gap-2 flex-wrap justify-center items-center px-2 py-3 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full text-white bg-custom-black-800 ring-0 hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800">
                          <p className="m-0 p-0 text-[17px] mt-[1px]">Add to Cart</p>
                      </button>
                    </div>
                   </div>
              </div>
    )
}