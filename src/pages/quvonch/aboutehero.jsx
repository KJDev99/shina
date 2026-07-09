import { useState, useEffect } from "react";

export default function Aboutehero() {
    const [data, setData] = useState({
        description: "",
        years_stable: "",
        satisfied_clients: "",
        parts_in_stock: "",
        world_brands: "",
    });

    useEffect(() => {
        fetch("https://admin.maksan-group.ru/api/v1/about/")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error("Failed to fetch about data:", err));
    }, []);

    return (
        <div className="max-w-[1436px] m-auto mt-8 sm:mt-12 lg:mt-[87px] px-4 sm:px-6 lg:px-0">
            <h2 className="font-semibold text-[55px] sm:text-[90px] lg:text-[150px] leading-none tracking-normal uppercase">
                о нашей
            </h2>

            <h2 className="font-semibold text-[55px] sm:text-[90px] lg:text-[150px] leading-none tracking-normal uppercase text-[#0000001A] flex justify-end">
                компании
            </h2>

            <p className="font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-none tracking-normal mt-[30px]">
                {data.description}
            </p>

            <div className="flex max-sm:grid max-sm:grid-cols-2 max-sm:text-[40px] gap-5 mt-[65px] items-center lg:items-start">

                <div data-aos="fade-up" data-aos-delay={150} className="bg-gradient-to-b from-white to-[#ECF0F5] w-full sm:w-[344px] h-[220px] lg:h-[259px] flex flex-col justify-center items-center rounded-[25px]">
                    <h3 className="font-semibold max-sm:text-[43px] text-[50px] sm:text-[65px] lg:text-[80px] leading-none tracking-normal text-center uppercase">
                        {data.years_stable}
                    </h3>
                    <p className="font-normal text-[13px] lg:text-[18px] leading-none tracking-normal text-center mt-[9px]">
                        лет стабильной работы
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay={300} className="bg-gradient-to-b from-white to-[#ECF0F5] w-full sm:w-[344px] h-[220px] lg:h-[259px] mt-0 sm:mt-[20px] lg:mt-[50px] flex flex-col justify-center items-center rounded-[25px]">
                    <h3 className="font-semibold max-sm:text-[40px] text-[50px] sm:text-[65px] lg:text-[80px] leading-none tracking-normal text-center uppercase">
                        {data.satisfied_clients}
                    </h3>
                    <p className="font-normal text-[13px] lg:text-[18px] leading-none tracking-normal text-center mt-[9px]">
                        довольных клиентов
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay={450} className="bg-gradient-to-b from-white to-[#ECF0F5] w-full sm:w-[344px] h-[220px] lg:h-[259px] mt-0 sm:mt-[40px] lg:mt-[100px] flex flex-col justify-center items-center rounded-[25px]">
                    <h3 className="font-semibold max-sm:text-[40px] text-[50px] sm:text-[65px] lg:text-[80px] leading-none tracking-normal text-center uppercase">
                        {data.parts_in_stock}
                    </h3>
                    <p className="font-normal text-[13px] lg:text-[18px] leading-none tracking-normal text-center mt-[9px]">
                        запчастей в наличии
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay={600} className="bg-gradient-to-b from-white to-[#ECF0F5] w-full sm:w-[344px] h-[220px] lg:h-[259px] mt-0 sm:mt-[60px] lg:mt-[150px] flex flex-col justify-center items-center rounded-[25px]">
                    <h3 className="font-semibold max-sm:text-[40px] text-[50px] sm:text-[65px] lg:text-[80px] leading-none tracking-normal text-center uppercase">
                        {data.world_brands}
                    </h3>
                    <p className="font-normal text-[13px] lg:text-[18px] leading-none tracking-normal text-center mt-[9px]">
                        мировых брендов
                    </p>
                </div>
            </div>
        </div>
    );
}