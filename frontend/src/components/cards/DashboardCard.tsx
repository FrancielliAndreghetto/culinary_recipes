'use client'

import { useSession } from "next-auth/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";
import pizza from "@assets/pizza.jpg";
import lasanha from "@assets/lasanha.jpg";
import massa from "@assets/massa.jpg";
import bolo from "@assets/bolo.jpg";
import { useEffect, useState } from "react";

export default function DashboardCard() {
  const { status } = useSession();
  const [slides, setSlides] = useState(3);
  const [spacing, setSpacing] = useState(30);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const isMobile = window.innerWidth < 768;
      setSpacing(isMobile ? 5 : 30);
      setSlides(isMobile ? 1 : 3);
    };

    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <div className="w-full z-1 h-96 mt-16 bg-[rgb(255,255,255,0.50)] backdrop-blur-md rounded-2xl">
      <div className="px-12 h-full py-6 flex gap-12 justify-center items-center">
        <div className="w-2/5 max-md:w-4/6 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold text-black max-xl:text-3xl max-sm:text-xl">As receitas mais deliciosas em um só lugar</h1>
            <p className="text-base max-xl:text-sm font-normal text-[#12103DCC]">Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit.</p>
          </div>
          <div className="flex gap-4">
            <a className="px-6 py-3 max-xl:px-3 max-lg:text-xs max-lg:px-3 max-lg:py-1 text-center bg-[#FFA14AB2] hover:bg-[#ffa14a93] rounded-3xl text-white cursor-pointer">Ver receitas</a>
            {status === "authenticated" && (
              <a className="px-6 py-3 text-center max-lg:text-xs max-lg:px-3 max-lg:py-1 bg-[#FF4A2226] hover:bg-[#ff4a221c] rounded-3xl text-[#FFA14AB2] cursor-pointer">Adicionar receita</a>
            )}
          </div>
        </div>
        <div className="w-3/5 max-md:w-2/6 h-full">
          <Swiper
            slidesPerView={slides}
            spaceBetween={spacing}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full w-full"
          >
            <SwiperSlide className="w-52 h-80">
              <Image className="rounded-3xl w-full h-full object-cover" src={pizza} loading="lazy" alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="w-52 h-80">
              <Image className="rounded-3xl w-full h-full object-cover" src={lasanha} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="w-52 h-80">
              <Image className="rounded-3xl w-full h-full object-cover" src={massa} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="w-52 h-80">
              <Image className="rounded-3xl w-full h-full object-cover" src={bolo} alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}