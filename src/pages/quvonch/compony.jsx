import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <section className="overflow-hidden mt-[60px] lg:mt-[100px] mb-[60px] lg:mb-[100px]">
            <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 mb-[30px]">
                    <h2 className="font-semibold text-[36px] sm:text-[60px] lg:text-[85px] leading-none uppercase">
                        Новости компании
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
                    {news.map((item) => (
                        <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[320px] lg:!w-[351px]">
                            <NewsCart item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center mt-8 px-4">
                <Link
                    to="/news"
                    className="w-full sm:w-auto px-10 h-[72px] sm:h-[96px] rounded-[25px] bg-white text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    Все новости
                </Link>
            </div>
        </section>
    );
}
