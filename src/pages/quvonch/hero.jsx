import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ModalExample from "./modal";

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [banners, setBanners] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch("https://adent-admin.migfastkg.ru/api/v1/banners/")
            .then((res) => res.json())
            .then((data) => setBanners(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <div className="max-w-[1430px] mx-auto mt-4 sm:mt-[25px] px-4 sm:px-6 lg:px-0">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={banners.length > 1}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                    className="rounded-[20px] sm:rounded-[35px] overflow-hidden"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="bg-white max-sm:px-5 max-sm:pt-5 max-sm:pb-0 sm:p-8 lg:p-10 flex flex-col lg:flex-row justify-between relative min-h-[420px] sm:min-h-[480px] lg:h-[517px]">
                                <div className="w-full lg:w-[580px] z-10 relative">
                                    <h1 className="font-semibold text-[28px] sm:text-[44px] lg:text-[60px] leading-tight sm:leading-[60px] lg:leading-[70px] uppercase">
                                        {banner.title}
                                    </h1>
                                    <p className="text-[#00000066] font-normal text-[14px] sm:text-[16px] lg:text-[17px] mt-2 sm:mt-[10px] leading-snug line-clamp-4 sm:line-clamp-none">
                                        {banner.description}
                                    </p>
                                    <button
                                        onClick={() => setOpen(true)}
                                        className="w-full sm:w-[228px] h-[64px] sm:h-[80px] lg:h-[96px] mt-5 sm:mt-[30px] font-medium text-[14px] text-white rounded-[20px] sm:rounded-[25px] cursor-pointer bg-gradient-to-b from-[#355094] to-[#5A80C7]"
                                    >
                                        Подробнее
                                    </button>
                                </div>

                                <h2 className="hidden sm:block text-[#0000000D] font-semibold text-[48px] lg:text-[100px] leading-none absolute top-6 right-6 lg:static lg:shrink-0 pointer-events-none">
                                    {banner.type}
                                </h2>

                                <div className="relative sm:absolute lg:absolute bottom-0 right-0 w-full sm:w-[55%] lg:w-[700px] h-[200px] sm:h-[280px] lg:h-auto mt-4 sm:mt-0">
                                    <img
                                        src={banner.image}
                                        alt={banner.title}
                                        className="w-full h-full object-contain object-bottom"
                                    />
                                </div>

                                {banners.length > 1 && (
                                    <div className="absolute bg-[#F5F5F5] rounded-[48px] left-1/2 -translate-x-1/2 bottom-4 sm:bottom-[29px] flex gap-[5px] p-[7px] z-10">
                                        {banners.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${i === activeIndex ? "bg-[#355094]" : "bg-white"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="overflow-hidden mt-6 sm:mt-11 mb-6 sm:mb-11">
                <div className="flex animate-marquee min-w-max gap-6 sm:gap-10">
                    {Array(8)
                        .fill("При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!")
                        .map((text, index) => (
                            <h2
                                key={index}
                                className="font-semibold text-[14px] sm:text-[20px] leading-[100%] uppercase text-gray-500 shrink-0"
                            >
                                | {text}
                            </h2>
                        ))}
                    {Array(8)
                        .fill("При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!")
                        .map((text, index) => (
                            <h2
                                key={`copy-${index}`}
                                className="font-semibold text-[14px] sm:text-[20px] leading-[100%] uppercase text-gray-500 shrink-0"
                            >
                                | {text}
                            </h2>
                        ))}
                </div>
            </div>

            {open && <ModalExample setOpen={setOpen} />}
        </div>
    );
}
