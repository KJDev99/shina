"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import Datacard from "../../components/ui/datacard";

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
                   <Datacard/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}