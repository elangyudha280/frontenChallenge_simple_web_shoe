'use client'
// import compoennt
import Image from 'next/image';
import { SectionCardListHome } from '@/components/section/section';
// import pkg
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';


// import img
import iconShoesJumbotron from '@/assets/images/shoes_container.svg'


export default function Home() {
  return (
    <>
      {/*//! jumbotron  */}
      <section className="relative w-full flex flex-col gap-y-8 gap-x-3 rounded-[2em] p-8 bg-custom-slate-300 md:flex-row md:py-10 md:px-14">
          {/*//! left content */}
          {/* border-2 border-red-500 */}
          <section className="flex-1 w-full flex flex-col gap-2 ">
            {/* title */}
            <div className="">
              {/* title dicount */}
              <h2 className="title_discount m-0 p-0 text-custom-orange-300 font-bold text-[2em] min-[454px]:text-[3em] ">
                25% OFF
              </h2>
              {/* title campaign */}
              <h2 className="font-bold  text-custom-black-800 text-[2.4em] min-[454px]:text-[3.4em]  leading-[1em] capitalize">
                summer sale
              </h2>
            </div>

            {/* desciprtion */}
            <p className="line-clamp-3 flex-1 h-full font-medium text-[15px] text-slate-500 pt-2">
              Discover our summer styles with discount
            </p>

            {/* button */}
            <div className="relative w-full flex mt-2">
              <button type='button' className="w-[200px] flex gap-2 flex-wrap justify-center items-center p-2 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full text-white bg-custom-black-800 ring-0 hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800">
                  <p className="m-0 p-0 text-[13px] mt-[1px]">Shop Now</p>
                  <FaArrowRight className='text-[12px] mt-0.5'/>
              </button>
            </div>
          </section>

          {/*//!  right conent  */}
          <section className="w-full select-none  grid place-items-center  md:w-[470px]">
            <Image alt='' src={iconShoesJumbotron} className='object-center object-cover'/>
          </section>
      </section>

      {/* //! SECTION CONTENT LIST SHOES */}
      <section className="relative w-full  mt-[2em]">
        <h2 className="font-extrabold title_shoes_content text-[1.6em] text-custom-black-800 drop-shadow-2xl">
            Explore our latest drops
        </h2>

        {/* cardlist shoes */}
        <SectionCardListHome/>
      </section>
    </>
  );
}
