import NewsDetail from "../../components/news/newsDetail";

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
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
        <div className="w-[351px] h-[428px] rounded-[25px] bg-white p-6 shadow-sm border border-gray-100">
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
        </div>
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
