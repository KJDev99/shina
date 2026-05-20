import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ModalExample from "./modal";

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [banners, setBanners] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://adent-admin.migfastkg.ru/api/v1/banners/")
            .then((res) => res.json())
            .then((data) => {
                setBanners(data);
                setLoading(false);
                data.forEach((banner) => {
                    const img = new Image();
                    img.src = banner.image;
                    img.onload = () => {
                        setLoadedImages((prev) => ({ ...prev, [banner.id]: true }));
                    };
                });
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);


    // Backend kelguncha skeleton
    if (loading) {
        return (
            <div>
                <div className="max-w-[1430px] mx-auto mt-4 sm:mt-[25px] px-4 sm:px-6 lg:px-0">
                    <div className="rounded-[20px] sm:rounded-[35px] overflow-hidden bg-white min-h-[420px] sm:min-h-[480px] lg:h-[517px] flex flex-col lg:flex-row justify-between relative p-6 sm:p-8 lg:p-10">
                        {/* Desktop skeleton */}
                        <div className="hidden sm:block w-full lg:w-[580px] z-10 space-y-4">
                            <div className="h-12 sm:h-16 lg:h-20 w-3/4 bg-gray-200 animate-pulse rounded-xl" />
                            <div className="h-4 w-full bg-gray-100 animate-pulse rounded-lg" />
                            <div className="h-4 w-5/6 bg-gray-100 animate-pulse rounded-lg" />
                            <div className="h-4 w-4/6 bg-gray-100 animate-pulse rounded-lg" />
                            <div className="w-full sm:w-[228px] h-[64px] sm:h-[80px] lg:h-[96px] mt-5 bg-gray-200 animate-pulse rounded-[20px] sm:rounded-[25px]" />
                        </div>

                        {/* Mobile skeleton */}
                        <div className="sm:hidden flex flex-col justify-between h-full min-h-[420px]">
                            <div className="space-y-3">
                                <div className="h-10 w-3/4 bg-gray-200 animate-pulse rounded-lg" />
                                <div className="h-12 w-5/6 bg-gray-200 animate-pulse rounded-lg" />
                                <div className="space-y-2 mt-2">
                                    <div className="h-3 w-full bg-gray-100 animate-pulse rounded" />
                                    <div className="h-3 w-11/12 bg-gray-100 animate-pulse rounded" />
                                    <div className="h-3 w-10/12 bg-gray-100 animate-pulse rounded" />
                                </div>
                                <div className="w-full h-14 bg-gray-200 animate-pulse rounded-[20px] mt-4" />
                            </div>
                            <div className="w-full mt-4">
                                <div className="w-full h-[240px] bg-gray-200 animate-pulse rounded-xl" />
                            </div>
                            <div className="flex justify-center gap-2 py-3">
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-full sm:w-[55%] lg:w-[700px] h-[200px] sm:h-[280px] lg:h-full">
                            <img
                                src="/quvonch/img/shina.png"
                                alt="placeholder"
                                className="w-full h-full object-contain object-bottom"
                                style={{ filter: "blur(6px) brightness(1.1) grayscale(0.3)", opacity: 0.0 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 sm:mt-11 mb-6 sm:mb-11">
                    <div className="h-6 sm:h-8 bg-gray-100 animate-pulse mx-4 rounded-full" />
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-[1430px] mx-auto mt-4 sm:mt-[25px] px-4 sm:px-6 lg:px-0">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 400000, disableOnInteraction: false }}
                    loop={banners.length > 1}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                    className="rounded-[20px] sm:rounded-[35px] overflow-hidden mobile-swiper"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="bg-white max-sm:px-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row justify-between relative min-h-[420px] sm:min-h-[480px] lg:h-[517px] md:min-h-[480px] mobile-slider">
                                <div className="w-full lg:w-[580px] z-10 relative mobile-content">
                                    <h1 className="font-semibold text-[36px] sm:text-[44px] lg:text-[50px] leading-tight sm:leading-[60px] lg:leading-[70px] uppercase max-sm:line-clamp-3 mobile-title">
                                        {banner.title}
                                    </h1>
                                    <p className="text-[#00000066] font-normal text-[14px] sm:text-[16px] lg:text-[17px] mt-2 sm:mt-[10px] leading-snug line-clamp-3 sm:line-clamp-none mobile-description">
                                        {banner.description}
                                    </p>
                                    <button
                                        onClick={() => setOpen(true)}
                                        className="w-full sm:w-[228px] h-[64px] sm:h-[80px] lg:h-[96px] mt-5 sm:mt-[30px] font-medium text-[14px] text-white rounded-[20px] sm:rounded-[25px] cursor-pointer mobile-button"
                                        style={{
                                            background: 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)',
                                            transition: 'background 0.3s ease',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(180deg, #151515 0%, #676767 100%)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)'}
                                    >
                                        Подробнее
                                    </button>
                                </div>

                                <h2 className="hidden sm:block text-[#0000000D] font-semibold text-[48px] lg:text-[100px] leading-none absolute top-6 right-6 lg:static lg:shrink-0 pointer-events-none">
                                    {banner.type}
                                </h2>

                                {/* Rasm */}
                                <div className="relative sm:absolute lg:absolute bottom-0 right-0 w-full sm:w-[55%] lg:w-[700px] mt-4 sm:mt-0 mobile-image-wrapper">
                                    <img
                                        src={banner.image}
                                        alt={banner.title}
                                        className="w-full object-contain object-bottom transition-opacity duration-500 mobile-image md:max-h-[458px]"
                                        style={{ opacity: loadedImages[banner.id] ? 1 : 0 }}
                                    />
                                </div>

                                {banners.length > 1 && (
                                    <div className="absolute bg-[#F5F5F5] rounded-[48px] left-1/2 -translate-x-1/2 bottom-4 sm:bottom-[29px] flex gap-[5px] p-[7px] z-10 mobile-pagination">
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
                            <h2 key={index} className="font-semibold text-[14px] sm:text-[20px] leading-[100%] uppercase text-gray-500 shrink-0">
                                | {text}
                            </h2>
                        ))}
                    {Array(8)
                        .fill("При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!")
                        .map((text, index) => (
                            <h2 key={`copy-${index}`} className="font-semibold text-[14px] sm:text-[20px] leading-[100%] uppercase text-gray-500 shrink-0">
                                | {text}
                            </h2>
                        ))}
                </div>
            </div>

            {open && <ModalExample setOpen={setOpen} />}

            <style jsx>{`
                @media (max-width: 640px) {
                    .mobile-swiper,
                    .mobile-slider {
                        height: calc(100vh - 160px) !important;
                    }
                    
                    .mobile-slider {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 24px 20px 0px 20px !important;
                    }
                    
                    .mobile-content {
                        flex-shrink: 0;
                    }
                    
                    .mobile-title {
                        font-size: 40px !important;
                        line-height: 1.25 !important;
                        margin-bottom: 16px !important;
                    }
                    
                    .mobile-description {
                        font-size: 18px !important;
                        line-height: 1.4 !important;
                        margin-top: 16px !important;
                        margin-bottom: 25px !important;
                    }
                    
                    .mobile-button {
                        width: 100% !important;
                        height: 56px !important;
                        margin-top: 20px !important;
                        font-size: 14px !important;
                    }
                    
                    .mobile-image-wrapper {
                        position: relative !important;
                        width: 100% !important;
                        height: auto !important;
                        min-height: 240px !important;
                        flex-shrink: 0;
                        margin-top: 16px !important;
                    }
                    
                    .mobile-image {
                        width: 100% !important;
                        height: 100% !important;
                        max-height: 280px !important;
                        object-fit: contain !important;
                    }
                    
                    .mobile-pagination {
                        bottom: 16px !important;
                    }
                }
            `}</style>
        </div>
    );
}