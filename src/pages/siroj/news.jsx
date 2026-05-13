import NewsDetail from "../../components/news/newsDetail";
import CantactForm from "../../components/ui/cantactform";
import NewsCart from "../../components/ui/NewsCart";

export default function News() {
  return (
    <div className="max-w-[1436px] mx-auto py-6 md:py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[12px] md:text-[14px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[8px] md:text-[10px]">❯</span>
        <span className="text-[#999999]">Новости</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-semibold uppercase tracking-tighter leading-[100%] text-black">
          Новости
        </h1>

        <div className="bg-white rounded-[40px] md:rounded-full p-1 flex flex-wrap md:flex-nowrap items-center gap-1 w-full lg:w-auto h-auto lg:h-[76px] border border-gray-100 lg:border-none">
          <button className="flex-1 md:flex-none px-4 md:px-8 py-3 h-[50px] md:h-[66px] min-w-[80px] bg-[#355094] text-white rounded-full text-xs md:text-base font-normal uppercase">
            ВСЕ
          </button>
          <button className="flex-1 md:flex-none px-3 py-3 md:py-7 text-black font-normal text-[10px] md:text-base uppercase whitespace-nowrap">
            ПОЛЕЗНОЕ
          </button>
          <button className="flex-1 md:flex-none px-3 py-3 md:py-7 text-black font-normal text-[10px] md:text-base uppercase whitespace-nowrap">
            НОВОСТИ КОМПАНИИ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[10px]">
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
      </div>
      <CantactForm />
    </div>
  );
}