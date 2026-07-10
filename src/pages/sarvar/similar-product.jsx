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
        fetch(`https://admin.maksan-group.ru/api/v1/products/${id}/similar/`)
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
                            aria-label="Предыдущий слайд"
                            className="w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white flex justify-center items-center shrink-0 group hover:bg-[#000000]"
                        >
                            <svg className="group-hover:[&_path]:fill-white" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6279 3.31471V1.65735V0L11.3132 0V3.31471L14.6279 3.31471Z" fill="#111111" />
                                <path d="M25.9412 14.6279V12.9706V11.3132H22.6265V14.6279H25.9412Z" fill="#111111" />
                                <path d="M3.3147 14.6279V12.9706V11.3132H0V14.6279H3.3147Z" fill="#111111" />
                                <path d="M14.6279 25.9412V24.2838V22.6265H11.3132V25.9412H14.6279Z" fill="#111111" />
                                <path d="M10.7969 7.01385C10.8135 6.99727 10.8315 6.26371 10.8369 5.38351L10.847 3.78309H7.56618V5.36838C7.56618 6.72957 7.57374 6.96124 7.62022 7.00772C7.6667 7.0542 7.88576 7.06068 9.22065 7.05276C10.0709 7.04771 10.7804 7.03042 10.7969 7.01385Z" fill="#111111" />
                                <path d="M7.06429 9.20804C7.06681 7.83532 7.06104 7.6739 7.00772 7.62274C6.95584 7.57338 6.7638 7.56618 5.45593 7.56618C4.54475 7.56618 3.92829 7.58023 3.78309 7.63824V10.8449H5.36838C6.72957 10.8449 6.96124 10.8373 7.00772 10.7908C7.05384 10.7447 7.06213 10.5166 7.06429 9.20804Z" fill="#111111" />
                                <path d="M22.1581 14.6279L22.1592 12.9706L22.1599 11.3132H18.8848L18.8794 14.6279H22.1581Z" fill="#111111" />
                                <path d="M18.3754 14.6279L18.3736 12.9706L18.3718 11.3132H15.0992L15.0967 14.6279H18.3754Z" fill="#111111" />
                                <path d="M14.6283 14.6279V12.9706V11.3132H11.3136V14.6279H14.6283Z" fill="#111111" />
                                <path d="M10.8452 14.6279L10.8456 12.9706L10.8459 11.3132L7.56401 11.3132L7.56654 14.6279L10.8452 14.6279Z" fill="#111111" />
                                <path d="M7.06213 14.6279L7.05996 12.9706L7.05816 11.3132H3.78597L3.78345 14.6279H7.06213Z" fill="#111111" />
                                <path d="M7.00772 18.321C7.0542 18.2745 7.06141 18.0446 7.0596 16.6816L7.05744 15.0963H3.78309L3.78165 18.321L3.89946 18.3483C3.96432 18.3635 4.67806 18.3757 5.48548 18.3754C6.74218 18.375 6.9616 18.3674 7.00772 18.321Z" fill="#111111" />
                                <path d="M10.8474 20.5033C10.8499 19.1471 10.8441 18.9868 10.7908 18.936C10.7389 18.8866 10.5436 18.8794 9.20299 18.8794C7.89224 18.8794 7.6667 18.8873 7.62022 18.9335C7.5741 18.9799 7.56618 19.2058 7.56618 20.5188C7.56618 21.8641 7.57302 22.0565 7.62274 22.104C7.67138 22.1505 7.90053 22.1581 9.22605 22.1581C10.7368 22.1581 10.7739 22.1566 10.8088 22.086C10.8312 22.0417 10.8459 21.4332 10.8474 20.5033Z" fill="#111111" />
                            </svg>

                        </button>
                        <button
                            ref={nextRef}
                            aria-label="Следующий слайд"
                            className="w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white flex justify-center items-center shrink-0 group hover:bg-[#000000]"
                        >
                            <svg className="group-hover:[&_path]:fill-white" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3132 3.31471V1.65735V0L14.6279 0V3.31471L11.3132 3.31471Z" fill="#111111" />
                                <path d="M0 14.6279L0 12.9706L0 11.3132H3.31471L3.31471 14.6279H0Z" fill="#111111" />
                                <path d="M22.6265 14.6279V12.9706V11.3132H25.9412V14.6279H22.6265Z" fill="#111111" />
                                <path d="M11.3132 25.9412V24.2838V22.6265H14.6279V25.9412H11.3132Z" fill="#111111" />
                                <path d="M15.1442 7.01385C15.1277 6.99727 15.1097 6.26371 15.1043 5.38351L15.0942 3.78309H18.375V5.36838C18.375 6.72957 18.3674 6.96124 18.321 7.00772C18.2745 7.0542 18.0554 7.06068 16.7205 7.05276C15.8702 7.04771 15.1608 7.03042 15.1442 7.01385Z" fill="#111111" />
                                <path d="M18.8769 9.20804C18.8744 7.83532 18.8801 7.6739 18.9335 7.62274C18.9853 7.57338 19.1774 7.56618 20.4852 7.56618C21.3964 7.56618 22.0129 7.58023 22.1581 7.63824V10.8449H20.5728C19.2116 10.8449 18.9799 10.8373 18.9335 10.7908C18.8873 10.7447 18.8791 10.5166 18.8769 9.20804Z" fill="#111111" />
                                <path d="M3.78309 14.6279L3.78201 12.9706L3.78129 11.3132H7.05636L7.06177 14.6279H3.78309Z" fill="#111111" />
                                <path d="M7.56582 14.6279L7.56762 12.9706L7.56942 11.3132H10.842L10.8445 14.6279H7.56582Z" fill="#111111" />
                                <path d="M11.3129 14.6279V12.9706V11.3132H14.6276V14.6279H11.3129Z" fill="#111111" />
                                <path d="M15.096 14.6279L15.0956 12.9706L15.0952 11.3132L18.3772 11.3132L18.3746 14.6279L15.096 14.6279Z" fill="#111111" />
                                <path d="M18.8791 14.6279L18.8812 12.9706L18.883 11.3132H22.1552L22.1577 14.6279H18.8791Z" fill="#111111" />
                                <path d="M18.9335 18.321C18.887 18.2745 18.8798 18.0446 18.8816 16.6816L18.8837 15.0963H22.1581L22.1595 18.321L22.0417 18.3483C21.9769 18.3635 21.2631 18.3757 20.4557 18.3754C19.199 18.375 18.9796 18.3674 18.9335 18.321Z" fill="#111111" />
                                <path d="M15.0938 20.5033C15.0913 19.1471 15.097 18.9868 15.1504 18.936C15.2023 18.8866 15.3975 18.8794 16.7382 18.8794C18.0489 18.8794 18.2745 18.8873 18.321 18.9335C18.3671 18.9799 18.375 19.2058 18.375 20.5188C18.375 21.8641 18.3682 22.0565 18.3184 22.104C18.2698 22.1505 18.0406 22.1581 16.7151 22.1581C15.2044 22.1581 15.1673 22.1566 15.1324 22.086C15.11 22.0417 15.0952 21.4332 15.0938 20.5033Z" fill="#111111" />
                            </svg>

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