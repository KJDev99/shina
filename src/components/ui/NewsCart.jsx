import { Link } from "react-router-dom";

export default function NewsCart({ item }) {
    const day = item.published_at?.slice(8, 10);
    const monthYear = item.published_at?.slice(4, 10).replace("-", ".");

    return (
        <Link
            to={`/news/${item.id}`}
            className="w-full max-w-[351px] min-h-[380px] sm:h-[428px] rounded-[20px] sm:rounded-[25px] bg-white p-5 sm:p-6 shadow-sm border border-gray-100 flex flex-col"
        >
            <div className="w-max h-[36px] sm:h-[40px] px-3 sm:px-4 bg-[#F3F3F3] rounded-2xl flex items-center justify-center">
                <p className="text-xs sm:text-sm font-medium">{item.news_type_label}</p>
            </div>

            <div className="mt-3 sm:mt-4 mb-3 sm:mb-4 flex-1">
                <h2 className="font-semibold text-[16px] sm:text-[18px] leading-tight uppercase line-clamp-3">
                    {item.title}
                </h2>
            </div>

            <div className="grow flex items-end">
                <div className="w-[40px] h-[40px] sm:w-[43px] sm:h-[43px] bg-[#F3F3F3] rounded-full overflow-hidden">
                    <img src="/quvonch/Siroj/men.png" alt="" className="w-full h-full object-contain p-1.5" />
                </div>
            </div>

            <div className="flex gap-2 items-end mt-4">
                <h3 className="font-semibold text-4xl sm:text-6xl uppercase leading-none">{day}</h3>
                <h4 className="text-[#11111133] font-semibold text-xl sm:text-3xl mb-1 sm:mb-[20px]">{monthYear}</h4>
            </div>
        </Link>
    );
}
