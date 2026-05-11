"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function Compony() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const cards = Array(6).fill(0);

    return (
        <div className="max-w-[1436px] mx-auto mt-[100px] overflow-hidden">
            <div className="flex justify-between items-center mb-[30px]">
                <h2 className="font-semibold text-[85px] uppercase">
                    Новости компании                </h2>

                <div className="flex gap-[6px] items-center">
                    <button
                        ref={prevRef}
                        className="w-[63px] h-[63px] rounded-full bg-white flex justify-center items-center"
                    >
                        <img src="/quvonch/icon/arrowleft.svg" alt="" />
                    </button>

                    <button
                        ref={nextRef}
                        className="w-[63px] h-[63px] rounded-full bg-white flex justify-center items-center"
                    >
                        <img src="/quvonch/icon/arrowright1.svg" alt="" />
                    </button>
                </div>
            </div>

            {/* SWIPER */}
            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                className="!overflow-visible"
            >
                {cards.map((_, i) => (
                    <SwiperSlide key={i} className="!w-[351px]">
                        <div className="w-[351px] p-[25px] rounded-[25px] bg-white">

                            <div className="w-[93px] h-[39px] rounded-[15px] bg-[#F5F5F5] flex justify-center items-center font-medium text-[14px]">Полезное</div>
                            <h2 className="text-[18px] font-semibold mt-[15px]">Запчасти для спецтехники Санкт-Петербург</h2>
                            <div className="mt-[15px] w-[43px] h-[43px] rounded-full bg-[#F5F5F5] flex items-center justify-center"> <img src="/quvonch/icon/arrow.svg" alt="" /></div>
                            <span className="flex items-end text-[#11111133] mt-[135px]"><h2 className=" text-black font-semibold text-[65px] leading-[100%] uppercase ">24</h2>.03.2026</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}