import NewsDetail from "../../components/news/newsDetail";
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

      <div className="w-[1400px] h-[435px] rounded-lg bg-white shadow-lg mt-[150px]">
        <div className="grid grid-cols-2 ">
          <div className="mt-10 ml-10     ">
            <h1 className="font-semibold text-6xl mb-[15px] ">
              Остались вопросы?
            </h1>
            <h3 className="text-[#11111166] font-normal text-lg">
              Свяжитесь с нами — подберём запчасти <br /> и проконсультируем
            </h3>
          </div>
          <img
            src="/quvonch/Siroj/1780.png"
            alt=""
            className=" mt-[-100px] ml-[200px] "
          />
        </div>

        <div className="flex gap-[11px] mt-[30px] ">
          <button className="w-[352px] h-[101px]  ml-[11px] rounded-3xl bg-[#F4F7FF]">
            <h1 className="text-[#848B8C] text-base font-nor">Имя</h1>
            <h2 className="text-lg font-medium">Александр</h2>
          </button>
          <button className="w-[353px] h-[101px]  rounded-3xl bg-[#F4F7FF]">
            <h1 className="text-[#848B8C] font-normal text-lg">
              Электронный адрес
            </h1>
          </button>
          <button className="w-[352px] h-[101px]  rounded-3xl bg-[#F4F7FF]">
            <div className="flex gap-3 ml-[25px]">
              {" "}
              <img src="/quvonch/Siroj/image0.png" alt="" />
              <h2>+7</h2>
              <h3 className="text-[#848B8C]">(___) ___-__-__</h3>
            </div>
          </button>
          <button className="w-[263px] h-[101px]  rounded-3xl bg-[#355094]">
            <h1 className="text-white">Отправить</h1>
          </button>
        </div>
      </div>

      <NewsDetail />
    </div>
  );
}
