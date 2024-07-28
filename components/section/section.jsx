'use client'
import React,{useState,useEffect,useRef} from 'react'
import { Suspense } from 'react'
// import component
import Image from 'next/image'
import Link from 'next/link'
import { CardSkeletonImgDetailShoes,CardOrderDetailShoes,CardDetailOrderShoes } from '@/components/cards/cards'

// imoprt pkg dan utils
import Slider from 'react-slick'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import { formatToDollar } from '@/modules/dolar'


// import img
import iconShoes from '@/assets/images/shoes_1.svg'

// import store
import useShoes from '@/utils/dataShoes'
//! SECTION CARD LIST HOME
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
          infinite: true,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },{
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  
  return (
    <div className="relative w-full mt-3">
      {/* button nav slide */}
      <div className="relative w-full my-4  flex gap-3 justify-end min-[1151px]:hidden">
            {/* btn previous */}
            <button onClick={previous} type='button' className={`
            flex gap-2 flex-wrap justify-center items-center p-2 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full text-white bg-custom-black-800 ring-0  hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800
              `}>
                  <FaArrowLeft className='text-[12px] mt-0.5'/>
            </button>

            {/* btn next */}
            <button onClick={next} type='button' className={`
              flex gap-2 flex-wrap justify-center items-center p-2 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full
             text-white bg-custom-black-800 ring-0  hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800
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
                    <Link href={`/detail/${el.id}`} className="relative inline-block w-[98%] min-[665px]:w-[95%] min-[1151px]:w-[270px] ">
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
                              {formatToDollar(el.price)}
                          </p>
                      </div>
                  </Link>
                </React.Fragment>
                )
            })
          }
        </Slider>
        </div>
    </div>
  )
}
  

//! SECTION DETAIL SHOES
export function SectionDetailShoes({idShoes}){
  let daftarSepatu = useShoes(state => state.daftarSepatu)
  let [detailShoes,setDetailShoes] = useState(undefined)
  useEffect(() => {
    // find detail shoes
    const findShoes = daftarSepatu?.find(el => el.id == idShoes)
    console.log(findShoes)
    setDetailShoes([findShoes])
  }, [])
  
  return (
    <section className="relative w-full flex gap-y-5 gap-x-10 flex-col min-[962px]:flex-row">
      {
        detailShoes?.map(el =>{
          return (
            <React.Fragment key={el.id}>
               {/* img shoes */}
              <Suspense fallback={<CardSkeletonImgDetailShoes/>}>
                <div className="relative w-full  h-[410px] overflow-hidden rounded-[2em] min-[962px]:w-[530px]">
                    <Image alt='' src={el.poster} className='w-full h-full object-center object-cover select-none'/>
                </div>
              </Suspense>

              {/* card price shoes */}
              <CardOrderDetailShoes title={el.title} subTitle={el.description} price={el.price}/>
            </React.Fragment>
          )
        })
      }
     
    </section>
  )
}

//! SECTION PAGE ORDER
export function SectionOrderPage(){
    return (
      <section className="relative w-full flex gap-x-5 gap-y-10 flex-col min-[810px]:flex-row">

        {/* //! left content */}
        <section className="relative flex-1 w-full max-[810px]:order-2">
            <h2 className="text-custom-black-800 font-bold text-4xl">Your Bag</h2>

            {/* list shoes cart */}
            <section className="relative w-full flex flex-col gap-5 mt-5">
                {/* card product shoes */}
                <CardDetailOrderShoes/>
                <CardDetailOrderShoes/> 
                <CardDetailOrderShoes/>
            </section>  
        </section>

        {/*//! right content */}
        <section className="relative w-full max-[810px]:order-1 min-[810px]:w-[400px] ">
          <div className="w-full h-auto  bg-white rounded-[1em] shadow-[0_4.5px_20px_0px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
            {/* info list harga */}
            <div className="relative w-full p-5 border-b-[1px] border-b-slate-300">
              <h2 className="text-custom-black-800 font-semibold text-[1.7em]">
                  Summary
              </h2>

              {/* list price */}
              <div className="relative w-full flex flex-col gap-2 mt-3">
                  {/* subtotal */}
                  <div className="m-0 p-0 w-full  flex gap-2 items-center">
                      <p className="text-custom-black-800 font-semibold flex-1">Subtotal</p>
                      <p className="text-custom-black-800 font-semibold ">{formatToDollar(90.00)}</p>
                  </div>

                  {/* delivery */}
                  <div className="m-0 p-0 w-full  flex gap-2 items-center">
                      <p className="text-custom-black-800 font-semibold flex-1">Shipping and delivery</p>
                      <p className="text-custom-black-800 font-semibold ">{formatToDollar(20.00)}</p>
                  </div>

                  {/* tax */}
                  <div className="m-0 p-0 w-full  flex gap-2 items-center">
                      <p className="text-custom-black-800 font-semibold flex-1">Tax</p>
                      <p className="text-custom-black-800 font-semibold ">{formatToDollar(6.00)}</p>
                  </div>

                  {/* discount */}
                  <div className="m-0 p-0 w-full  flex gap-2 items-center">
                      <p className="text-custom-black-800 font-semibold flex-1">Discount</p>
                      <p className="text-custom-orange-300 font-semibold ">{formatToDollar(6.00)}</p>
                  </div>
              </div>
            </div>

            {/* total price */}
            <div className="relative w-full p-5">
                  {/* total */}
                  <div className="m-0 p-0 w-full  flex gap-2  items-center">
                      <p className="text-custom-black-800 font-semibold flex-1 text-[1.3em]">Total</p>
                      <p className="text-custom-black-800 font-semibold ">{formatToDollar(90.00)}</p>
                  </div>

                  {/* button checkout */}
                  <div className="relative w-full flex mt-5">
                    <button type='button' className="w-full flex gap-2 flex-wrap justify-center items-center p-3 font-semibold  rounded-md transition-all duration-200 max-[320px]:w-full text-white bg-custom-black-800 ring-0 hover:text-slate-950  hover:bg-transparent hover:ring-2 hover:ring-custom-black-800">
                        <p className="m-0 p-0 text-[13px] mt-[1px]">Checkout</p>
                        <FaArrowRight className='text-[12px] mt-0.5'/>
                    </button>
                  </div>
            </div>
          </div>
        </section>
      </section>
    )
}