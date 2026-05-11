import { useState } from "react";
import ModalExample from "./modal";

export default function Hero() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="max-w-[1430px] m-auto rounded-[35px] bg-[#FFFFFF] p-10 mt-[25px] flex justify-between relative h-[517px] ">
                <div className="w-[580px]">
                    <h1 className="font-semibold text-[60px] leading-[70px] uppercase">Шины для работы без простоев</h1>
                    <p className="  text-[#00000066] font-normal text-[17px] mt-[10px] leading-[100%] tracking-normal">Поставляем шины для спецтехники с оптимальным <br /> ресурсом, сцеплением и устойчивостью к износу</p>
                    <button onClick={() => setOpen(true)} className="w-[228px] h-[96px] mt-[30px] font-medium text-[14px] text-white rounded-[25px] cursor-pointer bg-gradient-to-b from-[#355094] to-[#5A80C7]">Подробнее</button>
                </div>
                <div>
                    <h2 className="text-[#0000000D] font-semibold text-[100px] leading-[100%]">НАДЕЖНОСТЬ</h2>
                </div>
                <div className="absolute bottom-0 w-[700px] right-0">
                    <img src="/quvonch/img/shina.png" alt="" />
                </div>
                <div className="absolute bg-[#F5F5F5] rounded-[48px] left-1/2 -translate-x-1/2 bottom-[29px] flex gap-[5px] p-[7px] ">
                    <div className="w-[8px] h-[8px] bg-[#355094] rounded-full"></div>
                    <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
                    <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
                    <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
                </div>
            </div>

            <div className="overflow-hidden mt-11 mb-11">
                <div className="flex animate-marquee min-w-max gap-10">

                    {Array(8)
                        .fill(
                            "При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!"
                        )
                        .map((text, index) => (
                            <h2
                                key={index}
                                className="font-semibold text-[20px] leading-[100%] uppercase text-gray-500 shrink-0"
                            >
                                | {text}
                            </h2>
                        ))}
                    {Array(8)
                        .fill(
                            " При заказе от 30 000 руб БЕСПЛАТНАЯ доставка по г. Санкт-Петербург!"
                        )
                        .map((text, index) => (
                            <h2
                                key={`copy-${index}`}
                                className="font-semibold text-[20px] leading-[100%] uppercase text-gray-500 shrink-0"
                            >
                                | {text}
                            </h2>
                        ))}
                </div>
            </div>
            {open && <ModalExample setOpen={setOpen} />}

        </div>
    )
}