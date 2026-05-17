// NewsCart.jsx
import { Link } from "react-router-dom";

export default function NewsCart({ item }) {
    const day = item.published_at?.slice(8, 10);
    const monthYear = item.published_at?.slice(4, 10).replace("-", ".");

    return (
        <Link
            to={`/news/${item.id}`}
            className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100 flex flex-col"
        >
            <div className="w-max h-[40px] px-4 bg-[#F3F3F3] rounded-2xl flex items-center justify-center">
                <p className="text-sm font-medium">{item.news_type_label}</p>
            </div>

            <div className="mt-4 mb-4">
                <h2
                    className="font-semibold text-[18px] leading-[100%] uppercase tracking-normal"
                    style={{ fontFamily: "Onest, sans-serif" }}
                >
                    {item.title}
                </h2>
            </div>

            <div className="grow">
                <div className="w-[43px] h-[43px] bg-[#F3F3F3] rounded-4xl ">
                    <img src="/quvonch/Siroj/men.png" alt="" className="px-2 py-2" />
                </div>
            </div>

            <div className="flex gap-2 ">
                <h3 className="font-semibold text-6xl uppercase">{day}</h3>
                <h4 className="text-[#11111133] font-semibold text-3xl mt-[20px]">
                    {monthYear}
                </h4>
            </div>
        </Link>
    );
}