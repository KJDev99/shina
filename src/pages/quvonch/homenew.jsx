export default function Homenew() {
    const cards = [
        { num: "01", title: "Стабильность", img: "/quvonch/icon/sas.svg", text: "Выстраиваем надёжные и долгосрочные отношения с клиентами" },
        { num: "02", title: "Лучшие цены", img: "/quvonch/icon/sas1.svg", text: "Предлагаем выгодные условия и специальные предложения для покупателей" },
        { num: "03", title: "Широкий ассортимент", img: "/quvonch/icon/sas2.svg", text: "Большой выбор запчастей и материалов в наличии и под заказ" },
        { num: "04", title: "Качество", img: "/quvonch/icon/sas3.svg", text: "Поставляем только проверенные и надёжные комплектующие" },
        { num: "05", title: "Всегда онлайн", img: "/quvonch/icon/sas4.svg", text: "Оперативно отвечаем на запросы и помогаем в кратчайшие сроки" },
    ];

    return (
        <>
            <section className="overflow-hidden mt-[60px] lg:mt-[100px] mb-[60px] lg:mb-[100px] md:hidden">
                <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                    <h1 className="font-semibold text-[36px] sm:text-[60px] lg:text-[100px] leading-none uppercase">
                        Наши
                    </h1>
                    <h2 className="text-[#0000001A] font-semibold text-[36px] sm:text-[60px] lg:text-[85px] leading-none uppercase mt-1 mb-8 sm:mb-10">
                        сильные стороны
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
                        {cards.map((card, i) => (
                            <div
                                key={card.num}
                                className="w-full rounded-[25px] sm:rounded-[35px] flex flex-col items-center min-h-[380px] sm:min-h-[450px] lg:h-[507px] bg-white p-4 sm:p-6"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                <p className="text-[#00000066] text-[15px] sm:text-[17px] mt-2">{card.num}</p>
                                <h3 className="font-semibold mt-3 sm:mt-[14px] text-[28px] sm:text-[40px] lg:text-[50px] leading-none uppercase text-center">
                                    {card.title}
                                </h3>
                                <img
                                    className="mt-3 h-[180px] sm:h-[240px] lg:h-[290px] w-auto object-contain"
                                    src={card.img}
                                    alt={card.title}
                                />
                                <p className="font-normal text-[15px] sm:text-[17px] leading-snug tracking-normal text-center mt-auto px-2 pb-4">
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="overflow-hidden mt-[60px] lg:mt-[100px] max-md:hidden">
                <div className="max-w-[1436px] mx-auto px-4">

                    <div className="relative grid grid-cols-3 gap-[10px]">
                        <div className="absolute">
                            <h1 className="font-semibold text-[42px] sm:text-[60px] lg:text-[100px] leading-none uppercase ">
                                Наши
                            </h1>

                            <h2 className="text-[#0000001A] font-semibold text-[42px] sm:text-[60px] lg:text-[85px] leading-none uppercase  mt-1">
                                сильные стороны
                            </h2>
                        </div>
                        <div></div>
                        <div  className="flex flex-col justify-center gap-[10px]">
                            <div data-aos="fade-up"
                            data-aos-delay={300} className="w-full rounded-[35px] flex flex-col items-center h-[507px] bg-white ">
                                <p className=" text-[#00000066] text-[17px] mt-[15px]">02</p>
                                <h1 className="font-semibold mt-[14px] text-[50px] leading-[100%] tracking-normal uppercase">Лучшие цены</h1>
                                <img className="mt-3 h-[290px]" src="/quvonch/icon/sas1.svg" alt="" />
                                <p className="font-normal text-[17px] leading-[100%] tracking-normal text-center">Предлагаем выгодные условия и специальные предложения для покупателей</p>
                            </div>
                            <div data-aos="fade-up"
                            data-aos-delay={600} className="w-full rounded-[35px] flex flex-col items-center h-[507px] bg-white ">
                                <p className=" text-[#00000066] text-[17px] mt-[15px]">04</p>
                                <h1 className="font-semibold mt-[14px] text-[50px] leading-[100%] tracking-normal uppercase"> Качество</h1>
                                <img className="mt-3 h-[290px]" src="/quvonch/icon/sas3.svg" alt="" />
                                <p className="font-normal text-[17px] leading-[100%] tracking-normal text-center">Поставляем только проверенные и надёжные комплектующие</p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center gap-[10px]">
                            <div data-aos="fade-up"
                            data-aos-delay={150} className="w-full rounded-[35px] flex flex-col items-center h-[507px] bg-white ">
                                <p className=" text-[#00000066] text-[17px] mt-[15px]">01</p>
                                <h1 className="font-semibold mt-[14px] text-[50px] leading-[100%] tracking-normal uppercase">Стабильность</h1>
                                <img className="mt-3 h-[290px]" src="/quvonch/icon/sas.svg" alt="" />
                                <p className="font-normal text-[17px] leading-[100%] tracking-normal text-center">Выстраиваем надёжные и долгосрочные <br /> отношения с клиентами</p>
                            </div>
                            <div data-aos="fade-up"
                            data-aos-delay={450} className="w-full rounded-[35px] flex flex-col items-center h-[507px] bg-white ">
                                <p className=" text-[#00000066] text-[17px] mt-[15px]">03</p>
                                <h1 className="font-semibold mt-[14px] text-[50px] leading-[100%] tracking-normal uppercase text-center">Широкий ассортимент</h1>
                                <img className="mt-3 h-[290px]" src="/quvonch/icon/sas2.svg" alt="" />
                                <p className="font-normal text-[17px] leading-[100%] tracking-normal text-center">Большой выбор запчастей и материалов в наличии и под заказ</p>
                            </div>
                            <div data-aos="fade-up"
                            data-aos-delay={750} className="w-full rounded-[35px] flex flex-col items-center h-[507px] bg-white ">
                                <p className=" text-[#00000066] text-[17px] mt-[15px]">05</p>
                                <h1 className="font-semibold mt-[14px] text-[50px] leading-[100%] tracking-normal uppercase">Всегда онлайн</h1>
                                <img className="mt-[25px] h-[290px]" src="/quvonch/icon/sas4.svg" alt="" />
                                <p className="font-normal text-[17px] leading-[100%] tracking-normal text-center">Оперативно отвечаем на запросы
                                    и помогаем в кратчайшие сроки</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
