"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function Sertifikat() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const cards = Array(5).fill(0);

    return (
        <section className="w-full overflow-hidden mt-[60px] lg:mt-[100px] mb-[60px] lg:mb-[100px]">
            <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">

                {/* HEADER */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 mb-[30px]">

                    <h2 className="font-semibold text-[42px] sm:text-[60px] lg:text-[85px] leading-[100%] uppercase">
                        Наши сертификаты
                    </h2>

                    <div className="flex gap-[6px] items-center sm:self-end">
                        <button
                            ref={prevRef}
                            className="w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white flex justify-center items-center shrink-0"
                        >
                            <img
                                src="/quvonch/icon/arrowleft.svg"
                                alt=""
                                className="w-4 lg:w-auto"
                            />
                        </button>

                        <button
                            ref={nextRef}
                            className="w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white flex justify-center items-center shrink-0"
                        >
                            <img
                                src="/quvonch/icon/arrowright1.svg"
                                alt=""
                                className="w-4 lg:w-auto"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* SWIPER */}
            <div className="lg:pl-[calc((100vw-1436px)/2)] pl-4 sm:pl-6 overflow-hidden">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    className="!overflow-visible"
                >
                    {cards.map((_, i) => (
                        <SwiperSlide
                            key={i}
                            className="!w-[280px] sm:!w-[320px] lg:!w-[351px]"
                        >
                            <div className="w-full p-[18px] lg:p-[25px] rounded-[25px] bg-white">
                                
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[10px] font-semibold leading-[110%]">
                                    Сертификат доверия от 20.04.2026
                                </h2>

                                <img
                                    src="/quvonch/img/ser.png"
                                    alt=""
                                    className="w-full rounded-[12px]"
                                />

                                <div className="flex items-center justify-between mt-[20px] lg:mt-[24px]">
                                    <h2 className="text-[#848B8C] text-[12px] sm:text-[14px]">
                                        PDF • 0.774 Mb
                                    </h2>

                                    <div className="w-[42px] h-[42px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#F5F5F5] flex justify-center items-center shrink-0">
                                        <img
                                            src="/quvonch/icon/down.png"
                                            alt=""
                                            className="w-4 lg:w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}