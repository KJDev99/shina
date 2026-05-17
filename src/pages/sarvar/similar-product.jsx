"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CatalogCart from "../../components/ui/CatalogCart";

export default function SimilarProduct({ id }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!id) return;
        fetch(`https://adent-admin.migfastkg.ru/api/v1/products/${id}/similar/`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (products.length === 0) return null;

    return (
        <section className="w-full overflow-hidden mt-[60px] lg:mt-[100px] mb-[60px] lg:mb-[100px]">
            <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 mb-[30px]">
                    <h2 className="font-semibold text-[42px] sm:text-[60px] lg:text-[85px] leading-[100%] uppercase">
                        Похожие товары
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
                    {products.map((item) => (
                        <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[320px] lg:!w-[351px] bg-[#FFFFFF] rounded-[25px] px-[10px] py-2 ">
                            <CatalogCart item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}