"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function Sertifikat() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const cards = Array(6).fill(0);

    return (
        <div className="max-w-[1436px] mx-auto mt-[100px] overflow-hidden mb-[100px]">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-[30px]">
                <h2 className="font-semibold text-[85px] uppercase">
                    Наши сертификаты
                </h2>

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

                            <h2 className="text-[22px] mb-[10px] font-semibold">
                                Сертификат доверия от 20.04.2026
                            </h2>

                            <img src="/quvonch/img/ser.png" alt="" />

                            <div className="flex items-center justify-between mt-[24px]">
                                <h2 className="text-[#848B8C]">
                                    PDF 0.774 Mb
                                </h2>

                                <div className="w-[48px] h-[48px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
                                    <img src="/quvonch/icon/down.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}