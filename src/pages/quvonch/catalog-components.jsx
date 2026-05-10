import { useState } from "react";
import CatalogCart from "../../components/ui/CatalogCart";

export default function CatalogComponents() {
    const [active, setActive] = useState(0)
    const items = [
        { name: "Caterpillar", count: 81, },
        { name: "CAT/Reman", count: 4 },
        { name: "Deutz", count: 1 },
        { name: "Cummins", count: 20 },
        { name: "GA Ricambi", count: 20 },
        { name: "Rexroth ", count: 1 },
    ];
    const catalogData = [
        { id: 1, title: "Item 1" },
        { id: 2, title: "Item 2" },
        { id: 3, title: "Item 3" },
    ]
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
                <CatalogCart />
            </div>
        </div>
    )
}
