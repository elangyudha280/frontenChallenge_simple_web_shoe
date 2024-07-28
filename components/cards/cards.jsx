'use client'

import React,{Suspense, useState,useEffect} from 'react'

// import component
import Image from 'next/image'
import Link from 'next/link'


import { FaMinus,FaPlus } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { formatToDollar } from '@/modules/dolar';
import useInvoice from '@/utils/dataInvoice'

export function CardSkeletonImgDetailShoes(){
    return (
        <div className="relative w-full min-[962px]:w-[530px]h-[450px] overflow-hidden rounded-[2em] animate-pulse flex space-x-4 bg-slate-300">
           
        </div>
    )
}
export function CardOrderDetailShoesSkeleton(){
  return (
    <div  className="relative inline-block w-[98%] min-[665px]:w-[95%] min-[1151px]:w-[270px] animate-pulse">
    {/* card header list shoes */}
    <div className="card_header_list_shoes relative w-full h-auto min-[665px]:h-[300px] overflow-hidden rounded-2xl bg-slate-300">
        {/* <Image alt='' src={el.poster} className='w-full h-full object-cover object-center' /> */}
    </div>

    {/* card body list shoes */}
    <div className="relative w-full py-3">
        <h2 className="title font-semibold w-full h-[20px] line-clamp-2 text-[16px] bg-slate-300 rounded-sm"></h2>
        <p className="m-0 p-0 line-clamp-3 w-full h-[20px] font-medium text-slate-500 bg-slate-300 rounded-sm"></p>
        <p className="mt-2 p-0 line-clamp-1 w-full h-[20px] font-medium text-custom-black-800 bg-slate-300 rounded-s"></p>
    </div>
  </div>
  )
}

//!CARD DETAIL SHOES
export function CardOrderDetailShoes({title,subTitle,price,detail}){
  let setDataInvoice = useInvoice(state => state.setDataInvoice)
  let dataInvoice = useInvoice(state => state.dataInvoice)
  
  let [orderCount,setOrderCount] = useState(0);

  // handle order count
  const handleOrderCount = (type,event)=>{
    if(type === 'incrementCount'){
    
      setOrderCount(state => state+1)
      return
    }
    setOrderCount(state => state < 1 ? 0 :state-1)
  }

  // handle order
  const handleOrder = ()=>{
    setDataInvoice(detail,orderCount)
    setOrderCount(0)
  }
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
                          <button
                          onClick={handleOrderCount.bind(this,'decrementCount')}
                          className={`w-[40px]   grid place-items-center 
                          ${orderCount < 1 ? 'text-slate-400' : 'text-custom-black-800' }
                          `}>
                          <FaMinus/>
                          </button>
                          {/* count */}
                          <p className="flex-1 m-0 p-0 font-medium line-clamp-1 grid place-items-center">
                            {orderCount}
                          </p>
                          {/* button increment */}
                          <button
                          onClick={handleOrderCount.bind(this,'incrementCount')}
                          className="w-[40px] text-custom-black-800 grid place-items-center ">
                          <FaPlus/>
                          </button>
                      </div>
                    </div>

                    {/* button add to card */}
                    <div 
                    className="relative w-full flex mt-5 min-[962px]:mt-2"
                    >
                      <button type='button' 
                      disabled={orderCount === 0 ? true : false}
                      onClick={handleOrder}
                      className={`w-full flex gap-2 flex-wrap justify-center items-center px-2 py-3 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full text-white bg-custom-black-800 ring-0
                      ${orderCount !== 0 && ' hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800'}
                      `}>
                          <p className="m-0 p-0 text-[17px] mt-[1px]">Add to Cart</p>
                      </button>
                    </div>
                   </div>
              </div>
    )
}

//! CARD DETAIL ORDER SHOES
export function CardDetailOrderShoes({detailData}){
  let [setRemoveShoesInvoice,setIncrementOrderShoes] = useInvoice(state => [state.setRemoveShoesInvoice,state.setIncrementOrderShoes])

  // event handle remove order shoes
  const handleRemoveHanldeShoes = ()=>{
    setRemoveShoesInvoice(detailData)
  }

  // handle count order
  const handleCountOrder = (type)=>{
      setIncrementOrderShoes(detailData,1,type)
  }
  return (
    <div className="relative w-full pb-[2em] border-b-2 border-b-slate-200 flex gap-2 flex-col min-[500px]:flex-row">
        {/* img content */}
        <div className="w-full h-[300px] overflow-hidden rounded-[1.5em] select-none min-[500px]:h-[200px]  min-[500px]:w-[200px]">
          {/* image  */}
          <Suspense fallback={
            <div className="animate-pulse w-full h-full  overflow-hidden rounded-[1.5em] select-none bg-slate-200"></div>
          }>
            <Image alt='' src={detailData?.poster} sizes='any' className='w-full h-full object-center object-cover'/>
          </Suspense>
        </div>
        
          {/* right content */}
          <div className="relative flex-1  w-full h-auto   px-4 flex flex-col  ">
            {/* section title */}
            <div className="header_right relative w-full flex gap-2 items-center">
              {/* title shoes */}
              <h2 className="text-[1.5em] font-medium  text-custom-black-800 flex-1 line-clamp-2">{detailData?.title}</h2>
              {/* price */}
              <h2 className="m-0 p-0 text-[1em] font-bold  ">{formatToDollar(detailData?.normalPrice)}</h2>
            </div>
              {/* section description */}
             <div className="flex-1">
             <p className="w-full line-clamp-3 text-slate-500 ">{detailData?.description}</p> 
             </div>

             {/* button count */}
             <div className="flex items-center gap-y-3 gap-x-5 max-[500px]:mt-4">
                    <div className="w-[120px] h-[40px]  flex rounded-md border-[1px] border-slate-200">
                          {/* button decrement */}
                          <button 
                          disabled={detailData?.totalOrder === 1 ? true :false}
                          onClick={handleCountOrder.bind(this,'decrement')}
                          className="w-[40px]  text-slate-400 grid place-items-center ">
                          <FaMinus/>
                          </button>
                          {/* count */}
                          <p className="flex-1 m-0 p-0 font-medium line-clamp-1 grid place-items-center">
                            {detailData?.totalOrder}
                          </p>
                          {/* button increment */}
                          <button
                          onClick={handleCountOrder.bind(this,'increment')}
                          className="w-[40px] text-slate-400 grid place-items-center ">
                          <FaPlus/>
                          </button>
                    </div>

                    {/* button remove */}
                    <button
                    onClick={handleRemoveHanldeShoes}
                    className="decoration-slate-600 underline text-slate-600 font-semibold ">Remove</button>
             </div>
          </div>  
    </div>
  )
}

//! CARD DEFAULT SUMMARY ORDER
export function CardDefaultSummary(){
 return (
  <div className="relative w-full p-5 grid place-items-center bg-white rounded-[1em] shadow-[0_4.5px_20px_0px_rgba(0,0,0,0.1)]">
  <CiShoppingCart className='text-[9em]'/>
</div>
 )
}