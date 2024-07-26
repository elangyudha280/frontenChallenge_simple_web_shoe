'use client'
import React,{useState,useEffect,useRef} from 'react'

// import component
import Image from 'next/image'

// imoprt pkg
import Slider from 'react-slick'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
// import img
import iconShoes from '@/assets/images/shoes_1.svg'

// import store
import useShoes from '@/utils/dataShoes'

export function SectionCardListHome() {
  let daftarSepatu = useShoes(state => state.daftarSepatu)
  const [currentSlide, setCurrentSlide] = useState(0);
    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    draggable:true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    afterChange: (current) => setCurrentSlide(current),
    responsive:[
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },{
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      },
    ]
  };
  useEffect(() => {
    console.log(currentSlide)
  }, [currentSlide])
  
  return (
    <div className="relative w-full mt-3">
      {/* button nav slide */}
      <div className="relative w-full my-4  flex gap-3 justify-end min-[1151px]:hidden">
            {/* btn previous */}
            <button onClick={previous} type='button' className={`
            flex gap-2 flex-wrap justify-center items-center p-2 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full 
            ${currentSlide === 0 ? ' text-slate-950  bg-transparent ring-2 ring-custom-black-800' : 'text-white bg-custom-black-800 ring-0  hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800'}
              `}>
                  <FaArrowLeft className='text-[12px] mt-0.5'/>
            </button>

            {/* btn next */}
            <button onClick={next} type='button' className={`
              flex gap-2 flex-wrap justify-center items-center p-2 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full
               ${currentSlide ===1 ? ' text-slate-950  bg-transparent ring-2 ring-custom-black-800' : 'text-white bg-custom-black-800 ring-0  hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800'}
              `}>
                  <FaArrowRight className='text-[12px] mt-0.5'/>
            </button>
      </div>

      {/* slider */}
        <div className="slider-container">
        <Slider
            ref={slider => {
            sliderRef = slider;
            }}
            {...settings}
        >
          {
            daftarSepatu?.map((el,i)=>{
              return (
                <React.Fragment key={el.id}>
                    <div className="relative w-[98%] min-[665px]:w-[95%] min-[1151px]:w-[270px] ">
                      {/* card header list shoes */}
                      <div className="card_header_list_shoes relative w-full h-auto min-[665px]:h-[300px] overflow-hidden rounded-2xl">
                          <Image alt='' src={el.poster} className='w-full h-full object-cover object-center' />
                      </div>

                      {/* card body list shoes */}
                      <div className="relative w-full py-3">
                          <h2 className="title font-semibold line-clamp-2 text-[16px]">
                              {el.title}
                          </h2>
                          <p className="m-0 p-0 line-clamp-3 font-medium text-slate-500">
                             {el.description}
                          </p>
                          <p className="mt-2 p-0 line-clamp-1 font-medium text-custom-black-800">
                              ${el.price}
                          </p>
                      </div>
                  </div>
                </React.Fragment>
                )
            })
          }
        </Slider>
        </div>
    </div>
  )
}
  