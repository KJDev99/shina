"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Detail() {
    const cards = Array(8).fill({
        title: "Caterpillar",
        logo: "/quvonch/icon/logo.svg",
    });

    return (
        <div className="px-4 overflow-hidden ">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h1 className="font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase text-center mt-[60px] lg:mt-[100px]">
                    ЗАПЧАСТИ
                </h1>

                <h2 className="text-[#0000001A] font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase text-center mt-1">
                    КОТОРЫЕ РАБОТАЮТ!
                </h2>

                {/* Description */}
                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-center mt-5 leading-relaxed">
                    Мы привезем запасные части, узлы и агрегаты крупнейших
                    надежных мировых производителей.
                    <br className="hidden sm:block" />
                    Гарантируем качество, скорость поставки,
                    надежность и оригинальность
                </p>
                <div className="mt-[39px]  w-[1400px]">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {cards.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full  h-[319px] bg-white p-6 rounded-[25px] flex flex-col justify-between cursor-pointer border border-gray-100">

                                    {/* Logo */}
                                    <div className="flex justify-center items-center h-full">
                                        <img
                                            src={item.logo}
                                            alt="logo"
                                            className="object-contain w-[120px] sm:w-auto"
                                        />
                                    </div>

                                    {/* Bottom */}
                                    <div className="flex justify-between items-center mt-6">
                                        <h1 className="text-[18px] font-semibold text-black">
                                            {item.title}
                                        </h1>

                                        <div className="w-11 h-11 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-black duration-300 group">
                                            <img
                                                src="/quvonch/icon/arrow1.svg"
                                                alt="arrow"
                                                className="rotate-3 group-hover:rotate-45 duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}