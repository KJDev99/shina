"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Detail() {
    const [manufacturers, setManufacturers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://adent-admin.migfastkg.ru/api/v1/manufacturers/")
            .then((res) => res.json())
            .then((data) => setManufacturers(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="overflow-hidden mt-[60px] lg:mt-[100px]">
            <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                <h2 className="font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase text-center">
                    ЗАПЧАСТИ,
                </h2>
                <h2 className="text-[#0000001A] font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase text-center mt-1">
                    КОТОРЫЕ РАБОТАЮТ!
                </h2>
                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-center mt-5 leading-relaxed max-w-[900px] mx-auto md:text-nowrap">
                    Мы привезем запасные части, узлы и агрегаты крупнейших
                    надежных мировых производителей.
                    <br className="hidden sm:block" />
                    Гарантируем качество, скорость поставки, надежность и оригинальность
                </p>
            </div>

            <div className="mt-[39px] lg:pl-[calc((100vw-1400px)/2)] pl-4 sm:pl-6 overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    slidesPerView="auto"
                    className="!overflow-visible"
                >
                    {manufacturers.map((item, i) => (
                        <SwiperSlide
                            key={item.id}
                            className="!w-[270px] sm:!w-[300px] lg:!w-[335px]"
                        >
                            <div
                                data-aos="fade-up" data-aos-delay={i * 150}
                                onClick={() => navigate(`/manufacturer/${item.id}`)}
                                className="h-[260px] relative sm:h-[290px] lg:h-[319px] bg-white p-5 lg:p-6 rounded-[25px] flex flex-col  justify-end cursor-pointer border border-gray-100"
                            >
                                <div className="flex justify-center items-center h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        loading="lazy"
                                        decoding="async"
                                        width="244"
                                        height="104"
                                        className="object-contain max-w-[244px] max-h-[104px]"
                                    />
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-black">
                                        {item.name}
                                    </h3>
                                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-[#355094] duration-300 group">
                                        <svg className="group-hover:[&_path]:fill-white" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.72173 2.26242V1.13121V0L9.98415 0V2.26242H7.72173Z" fill="#111111" />
                                            <path d="M0 9.98415L0 8.85294L0 7.72173H2.26242V9.98415H0Z" fill="#111111" />
                                            <path d="M15.4435 9.98415V8.85294V7.72173H17.7059V9.98415L15.4435 9.98415Z" fill="#111111" />
                                            <path d="M7.72173 17.7059V16.5747V15.4435H9.98415L9.98415 17.7059H7.72173Z" fill="#111111" />
                                            <path d="M10.3365 4.78723C10.3252 4.77592 10.3129 4.27523 10.3092 3.67446L10.3024 2.58211L12.5417 2.58211V3.66413C12.5417 4.5932 12.5365 4.75132 12.5048 4.78305C12.4731 4.81477 12.3235 4.8192 11.4124 4.81379C10.8321 4.81034 10.3479 4.79854 10.3365 4.78723Z" fill="#111111" />
                                            <path d="M12.8842 6.28485C12.8825 5.34791 12.8864 5.23774 12.9228 5.20282C12.9582 5.16913 13.0893 5.16422 13.982 5.16422C14.6039 5.16422 15.0247 5.17381 15.1238 5.2134V7.40204H14.0417C13.1127 7.40204 12.9546 7.39688 12.9228 7.36516C12.8914 7.33368 12.8857 7.17801 12.8842 6.28485Z" fill="#111111" />
                                            <path d="M2.58211 9.98415L2.58137 8.85294L2.58088 7.72173H4.81625L4.81993 9.98415H2.58211Z" fill="#111111" />
                                            <path d="M5.16397 9.98415L5.1652 8.85294L5.16643 7.72173H7.40008L7.4018 9.98415H5.16397Z" fill="#111111" />
                                            <path d="M7.72149 9.98415V8.85294L7.72149 7.72173L9.9839 7.72173V9.98415H7.72149Z" fill="#111111" />
                                            <path d="M10.3036 9.98415L10.3033 8.85294L10.3031 7.72173H12.5431L12.5414 9.98415H10.3036Z" fill="#111111" />
                                            <path d="M12.8857 9.98415L12.8872 8.85294L12.8884 7.72173H15.1218L15.1235 9.98415H12.8857Z" fill="#111111" />
                                            <path d="M12.9228 12.5048C12.8911 12.4731 12.8862 12.3162 12.8874 11.3859L12.8889 10.3038H15.1238L15.1248 12.5048L15.0443 12.5235C15.0001 12.5338 14.5129 12.5422 13.9618 12.5419C13.1041 12.5417 12.9543 12.5365 12.9228 12.5048Z" fill="#111111" />
                                            <path d="M10.3021 13.9943C10.3004 13.0687 10.3043 12.9592 10.3407 12.9246C10.3761 12.8909 10.5094 12.8859 11.4245 12.8859C12.3191 12.8859 12.4731 12.8914 12.5048 12.9228C12.5363 12.9546 12.5417 13.1087 12.5417 14.0049C12.5417 14.9231 12.537 15.0544 12.5031 15.0869C12.4699 15.1186 12.3135 15.1238 11.4087 15.1238C10.3776 15.1238 10.3523 15.1228 10.3284 15.0746C10.3132 15.0443 10.3031 14.629 10.3021 13.9943Z" fill="#111111" />
                                        </svg>

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