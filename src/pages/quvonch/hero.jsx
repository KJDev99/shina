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
            <div className="max-w-[1430px] m-auto mt-[25px]">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={banners.length > 1}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                    className="rounded-[35px] overflow-hidden"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="bg-[#FFFFFF] p-10 flex justify-between relative h-[517px]">
                                <div className="w-[580px]">
                                    <h1 className="font-semibold text-[60px] leading-[70px] uppercase">
                                        {banner.title}
                                    </h1>
                                    <p className="text-[#00000066] font-normal text-[17px] mt-[10px] leading-[100%] tracking-normal">
                                        {banner.description}
                                    </p>
                                    <button
                                        onClick={() => setOpen(true)}
                                        className="w-[228px] h-[96px] mt-[30px] font-medium text-[14px] text-white rounded-[25px] cursor-pointer bg-gradient-to-b from-[#355094] to-[#5A80C7]"
                                    >
                                        Подробнее
                                    </button>
                                </div>
                                <div>
                                    <h2 className="text-[#0000000D] font-semibold text-[100px] leading-[100%]">
                                        {banner.type}
                                    </h2>
                                </div>
                                <div className="absolute bottom-0 w-[700px] right-0">
                                    <img src={banner.image} alt={banner.title} className="w-full h-full object-contain" />
                                </div>

                                {/* Dots */}
                                <div className="absolute bg-[#F5F5F5] rounded-[48px] left-1/2 -translate-x-1/2 bottom-[29px] flex gap-[5px] p-[7px] z-10">
                                    {banners.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${i === activeIndex ? "bg-[#355094]" : "bg-white"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Marquee */}
            <div className="overflow-hidden mt-11 mb-11">
                <div className="flex animate-marquee min-w-max gap-10">
                    {Array(8)
                        .fill("При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!")
                        .map((text, index) => (
                            <h2 key={index} className="font-semibold text-[20px] leading-[100%] uppercase text-gray-500 shrink-0">
                                | {text}
                            </h2>
                        ))}
                    {Array(8)
                        .fill("При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!")
                        .map((text, index) => (
                            <h2 key={`copy-${index}`} className="font-semibold text-[20px] leading-[100%] uppercase text-gray-500 shrink-0">
                                | {text}
                            </h2>
                        ))}
                </div>
            </div>

            {open && <ModalExample setOpen={setOpen} />}
        </div>
    );
}