import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#E9EEF4] min-h-screen font-sans">
      <div className="max-w-[1436px] m-auto py-10 px-4">
        <div className="flex items-center gap-2 mb-6 text-[14px]">
          <span className="text-black">Главная</span>
          <span className="text-[#999999] text-[10px]">❯</span>
          <span className="text-[#999999]">Контакты</span>
        </div>

        <div className="mb-12">
          <h1 className="text-[120px] font-bold uppercase tracking-tighter leading-[0.9] text-black">
            Контакты
          </h1>
        </div>

        <div className="flex gap-[11px] ">
          <div className="w-[471px] h-[262px] bg-white rounded-[30px] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-[16px]">Наш адрес</span>
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>
            <div className="text-[24px] font-semibold leading-tight text-black max-w-[300px]">
              г. Санкт-Петербург <br />
              Невский проспект, д. 30, <br />
              офисы 5.4 и 6.5
            </div>
          </div>

          <div className="w-[471px] h-[262px] bg-white rounded-[30px] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-[16px]">
                Контактные телефоны
              </span>
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#999999] text-[12px] mb-1">
                    Запчасти для спецтехники:
                  </p>
                  <p className="text-[22px] font-bold text-black">
                    +7 (921) 905-70-21
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <img
                      src="/quvonch/Siroj/path.png"
                      alt="telegram"
                      className="w-[36px] h-[28px] object-contain"
                    />

                    <img
                      src="/quvonch/Siroj/icon2.png"
                      alt="chat"
                      className="w-[36px] h-[28px] object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#999999] text-[12px] mb-1">
                    Шины для спецтехники:
                  </p>
                  <p className="text-[22px] font-bold text-black">
                    +7 (921) 306-51-25
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <img
                      src="/quvonch/Siroj/path.png"
                      alt="telegram"
                      className="w-[36px] h-[28px] object-contain"
                    />

                    <img
                      src="/quvonch/Siroj/icon2.png"
                      alt="chat"
                      className="w-[36px] h-[28px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[471px] h-[262px] bg-white rounded-[30px] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-[16px]">
                Электронная почта
              </span>
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[#999999] text-[12px] mb-1">Запчасти:</p>
                <p className="text-[22px] font-bold text-black underline underline-offset-4">
                  info@maksan-group.ru
                </p>
              </div>
              <div>
                <p className="text-[#999999] text-[12px] mb-1">Шины:</p>
                <p className="text-[22px] font-bold text-black underline underline-offset-4">
                  andrey.ivanov@maksan-group.ru
                </p>
              </div>
            </div>
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
    </div>
  );
}
