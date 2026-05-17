import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import NewsCart from "../../components/ui/NewsCart";

export default function Compony() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://adent-admin.migfastkg.ru/api/v1/news/?page=1&page_size=10")
            .then((res) => res.json())
            .then((data) => setNews(data.results || []))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="overflow-hidden mt-[100px] mb-[100px]">

            {/* HEADER */}
            <div className="max-w-[1436px] mx-auto">
                <div className="flex justify-between items-center mb-[30px]">
                    <h2 className="font-semibold text-[85px] leading-[100%] uppercase">
                        Новости компании
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
            </div>

            {/* SWIPER */}
            <div className="pl-[calc((100vw-1436px)/2)] overflow-hidden">
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
                    {news.map((item) => (
                        <SwiperSlide key={item.id} className="!w-[351px]">
                            <NewsCart item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}