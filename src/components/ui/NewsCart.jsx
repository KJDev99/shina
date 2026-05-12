import { Link } from "react-router-dom";


export default function NewsCart() {
    return (
        <Link to={'/news/1'} className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
            <div className="w-[110px] h-[40px] bg-[#F3F3F3] rounded-2xl flex items-center justify-center">
                <p className="text-sm font-medium">Полезное</p>
            </div>

            <div className="mt-4 mb-4">
                <h2
                    className="font-semibold text-[18px] leading-[100%] uppercase tracking-normal"
                    style={{ fontFamily: "Onest, sans-serif" }}
                >
                    Запчасти для спецтехники Санкт-Петербург
                </h2>
            </div>
            <div className="w-[43px] h-[43px] bg-[#F3F3F3] rounded-4xl mb-[135px]">
                <img src="/quvonch/Siroj/men.png" alt="" className="px-2 py-2" />
            </div>

            <img src="/group-1.png" alt="" className="w-full object-cover" />
            <div className="flex gap-2">
                <h3 className="font-semibold text-6xl uppercase">24</h3>
                <h4 className="text-[#11111133] font-semibold text-3xl mt-[20px]">
                    .03.2026
                </h4>
            </div>
        </Link>
    )
}
