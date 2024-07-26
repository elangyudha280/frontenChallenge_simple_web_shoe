'use client'
import React,{useState,useEffect,useRef} from 'react'

// import component
import Image from 'next/image'

// imoprt pkg
import Slider from 'react-slick'

// import img
import iconShoes from '@/assets/images/shoes_1.svg'


export function SectionCardListHome() {
    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="relative w-full mt-3">
        <div className="slider-container">
        <Slider
            ref={slider => {
            sliderRef = slider;
            }}
            {...settings}
        >
             {/* card list shoes */}
            <div key={1} className="relative w-[270px] px-3">
                {/* card header list shoes */}
                <div className="card_header_list_shoes relative w-full h-[300px] overflow-hidden rounded-2xl">
                    <Image alt='' src={iconShoes} className='w-full h-full object-cover object-center' />
                </div>

                {/* card body list shoes */}
                <div className="relative w-full py-3">
                    <h2 className="title font-semibold line-clamp-2 text-[16px]">
                        Off-white
                    </h2>
                    <p className="m-0 p-0 line-clamp-3 font-medium text-slate-500">
                        Out Of Office "Ooo" sneakers
                    </p>
                    <p className="mt-2 p-0 line-clamp-1 font-medium text-custom-black-800">
                        $775
                    </p>
                </div>
            </div>
            <div key={2}>
            <h3>2</h3>
            </div>
            <div key={3}>
            <h3>3</h3>
            </div>
            <div key={4}>
            <h3>4</h3>
            </div>
            <div key={5}>
            <h3>5</h3>
            </div>
            <div key={6}>
            <h3>6</h3>
            </div>
        </Slider>
        </div>
    </div>
  )
}
  