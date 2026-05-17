"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Sertifikat() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        fetch("https://adent-admin.migfastkg.ru/api/v1/certificates/")
            .then((res) => res.json())
            .then((data) => setCertificates(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="w-full overflow-hidden mt-[60px] lg:mt-[100px] mb-[60px] lg:mb-[100px]">
            <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 mb-[30px]">
                    <h2 className="font-semibold text-[42px] sm:text-[60px] lg:text-[85px] leading-[100%] uppercase">
                        Наши сертификаты
                    </h2>

                    <div className="flex gap-[6px] items-center sm:self-end">
                        <button
                            ref={prevRef}
                            className="w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white flex justify-center items-center shrink-0"
                        >
                            <img src="/quvonch/icon/arrowleft.svg" alt="" className="w-4 lg:w-auto" />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white flex justify-center items-center shrink-0"
                        >
                            <img src="/quvonch/icon/arrowright1.svg" alt="" className="w-4 lg:w-auto" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:pl-[calc((100vw-1436px)/2)] pl-4 sm:pl-6 overflow-hidden">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView="auto"
                    spaceBetween={10}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    className="!overflow-visible"
                >
                    {certificates.map((cert) => (
                        <SwiperSlide
                            key={cert.id}
                            className="!w-[280px] sm:!w-[320px] lg:!w-[351px]"
                        >
                            <div className="w-full p-[18px] lg:p-[25px] rounded-[25px] bg-white">
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[10px] font-semibold leading-[110%] line-clamp-1">
                                    {cert.name}
                                </h2>

                                <img
                                    src={cert.thumbnail_image}
                                    alt={cert.name}
                                    className="w-full rounded-[12px]"
                                />

                                <div className="flex items-center justify-between mt-[20px] lg:mt-[24px]">
                                    <h2 className="text-[#848B8C] text-[12px] sm:text-[14px]">
                                        PDF • {cert.pdf_size_mb} Mb
                                    </h2>

                                    <a
                                        href={cert.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="w-[42px] h-[42px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#F5F5F5] flex justify-center items-center shrink-0 hover:bg-gray-200 transition-colors"
                                    >
                                        <img src="/quvonch/icon/down.png" alt="" className="w-4 lg:w-auto" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}