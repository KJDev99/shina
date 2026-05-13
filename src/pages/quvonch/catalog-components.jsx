import { useState } from "react";
import CatalogCart from "../../components/ui/CatalogCart";

export default function CatalogComponents() {g
    const [active, setActive] = useState(0)
    const items = [
        { name: "Caterpillar", count: 81, },
        { name: "CAT/Reman", count: 4 },
        { name: "Deutz", count: 1 },
        { name: "Cummins", count: 20 },
        { name: "GA Ricambi", count: 20 },
        { name: "Rexroth ", count: 1 },
    ];

    return (
        <div>
            <div className="w-[1436px] m-auto">
                <h1 className="font-semibold text-[85px] leading-[100%] uppercase mb-[20px]">каталог запчастей</h1>
                <div className="flex gap-[5px] bg-[#EEF3F8] p-3 rounded-[30px] w-fit">
                    {items.map((item, i) => (
                        <button key={i} onClick={() => setActive(i)} className={`p-5  rounded-full  font-semibold text-[15px] leading-none tracking-normal transition ${active === i ? "bg-white text-black" : "bg-white text-gray-400 hover:text-black"}`}>
                            {item.name}{" "}
                            <span className="text-gray-500">({item.count})</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-[10px] mt-10">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CatalogCart key={index} />
                    ))}
                </div>
                <div className="flex justify-center">

                    <div className="cursor-pointer w-[299px] h-[96px] rounded-[25px] bg-white text-14px font-medium mt-[30px] flex justify-center items-center">
                        Смотреть все
                    </div>
                </div>
            </div>
        </div>
    )
}
