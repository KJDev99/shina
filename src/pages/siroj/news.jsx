import NewsDetail from "../../components/news/newsDetail";
import FormPost from "../../components/ui/FormPost";
import NewsCart from "../../components/ui/NewsCart";

export default function News() {
  return (
    <div className="max-w-[1436px] mx-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[14px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Новости</span>
      </div>

      <div className="flex items-end justify-between mb-12">
        <h1 className="text-[120px] font-semibold uppercase tracking-tighter text-8xl leading-[100%] text-black">
          Новости
        </h1>

        <div className="bg-white rounded-full p-1 flex items-center gap-1 w-[447px] h-[76px]">
          <button className="px-8 py-3 h-[66px] w-[125px]  bg-[#355094] text-white rounded-full text-base font-normal uppercase">
            ВСЕ
          </button>
          <button className="px-3 py-7 text-black font-normal text-base uppercase">
            ПОЛЕЗНОЕ
          </button>
          <button className="px-3 py-7 text-black font-normal text-base uppercase">
            НОВОСТИ КОМПАНИИ
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[10px]">
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
        <NewsCart />
      </div>

      <FormPost />

      <NewsDetail />
    </div>
  );
}
