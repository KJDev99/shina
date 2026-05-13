"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Detail() {
    const cards = Array(5).fill({
        title: "Caterpillar",
        logo: "/quvonch/icon/logo.svg",
    });

    return (
        <section className="overflow-hidden mt-[60px] lg:mt-[100px]">
            <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">

                {/* Title */}
                <h1 className="font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase text-center">
                    ЗАПЧАСТИ
                </h1>

                <h2 className="text-[#0000001A] font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase text-center mt-1">
                    КОТОРЫЕ РАБОТАЮТ!
                </h2>

                {/* Description */}
                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-center mt-5 leading-relaxed max-w-[900px] mx-auto">
                    Мы привезем запасные части, узлы и агрегаты крупнейших
                    надежных мировых производителей.
                    <br className="hidden sm:block" />
                    Гарантируем качество, скорость поставки,
                    надежность и оригинальность
                </p>
            </div>

            {/* Slider */}
            <div className="mt-[39px] lg:pl-[calc((100vw-1400px)/2)] pl-4 sm:pl-6 overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView="auto"
                    className="!overflow-visible"
                >
                    {cards.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[270px] sm:!w-[300px] lg:!w-[335px]"
                        >
                            <div className="h-[260px] sm:h-[290px] lg:h-[319px] bg-white p-5 lg:p-6 rounded-[25px] flex flex-col justify-between cursor-pointer border border-gray-100">

                                {/* Logo */}
                                <div className="flex justify-center items-center h-full">
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        className="object-contain w-[110px] sm:w-[140px] lg:w-auto"
                                    />
                                </div>

                                {/* Bottom */}
                                <div className="flex justify-between items-center mt-6">
                                    <h1 className="text-[16px] sm:text-[18px] font-semibold text-black">
                                        {item.title}
                                    </h1>

                                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-gray-200 duration-300 group">
                                        <img
                                            src="/quvonch/icon/arrow1.svg"
                                            alt="arrow"
                                            className="rotate-3 group-hover:rotate-45 duration-300 w-4 lg:w-auto"
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