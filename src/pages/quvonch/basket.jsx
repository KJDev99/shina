import { useState } from "react";

export default function Basket() {
  const [phone, setPhone] = useState("+7 ");

  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[14px] max-md:text-[12px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Caterpillar</span>
      </div>

      <div className="flex items-center justify-between py-6 mr-[150px] max-md:mr-0 max-md:flex-col max-md:items-start max-md:gap-4">
        <div className="flex items-end gap-6 max-md:flex-col max-md:items-start max-md:gap-2">
          <h1 className="text-8xl font-semibold uppercase tracking-tight text-black max-md:text-4xl">
            Корзина
          </h1>

          <span className="text-[30px] font-semibold text-[#11111133] mb-3 max-md:text-[18px] max-md:mb-0">
            2 товара
          </span>
        </div>

        <label className="flex items-center gap-3 font-medium text-[15px] text-[#111111] cursor-pointer max-md:text-[13px]">
          <span>Выбрать все</span>
          <input type="checkbox" className="w-5 h-5" />
        </label>
      </div>

      <div className="flex items-start gap-[30px] py-10 font-sans max-md:flex-col">
        <div className="flex flex-col gap-[10px] max-md:w-full">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="w-[829px] h-[149px] rounded-[20px] bg-white flex items-center p-[10px] gap-[20px] shadow-sm max-md:w-full max-md:h-auto max-md:flex-col max-md:items-start"
            >
              <div className="w-[129px] h-[129px] rounded-[20px] overflow-hidden flex-shrink-0 max-md:w-full max-md:h-[200px]">
                <img
                  src="/quvonch/Siroj/hi.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center flex-1 max-md:w-full">
                <p className="text-[14px] font-normal text-[#A1A1A1]">
                  Название:
                </p>

                <h2 className="text-[18px] font-bold leading-tight text-[#1A1A1A] uppercase max-md:text-[14px]">
                  9Y7573 ПЛАТА КРЕПЛЕНИЯ КОМПРЕССОРА CAT
                </h2>
              </div>

              <div className="flex flex-col items-end justify-between h-full py-2 pr-4 max-md:w-full max-md:items-start max-md:gap-3">
                <div className="flex items-center gap-[15px]">
                  <div className="flex items-center border border-[#E0E0E0] rounded-lg overflow-hidden bg-white">
                    <button className="w-[32px] h-[32px] flex items-center justify-center text-gray-500 border-r border-[#E0E0E0]">
                      -
                    </button>

                    <span className="px-4 text-[15px] font-medium">1</span>

                    <button className="w-[32px] h-[32px] flex items-center justify-center text-gray-500 border-l border-[#E0E0E0]">
                      +
                    </button>
                  </div>

                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] rounded border-[#C4C4C4] accent-[#4E6EB3] cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-[40px] max-md:justify-between max-md:w-full">
                  <div className="text-right">
                    <p className="text-[22px] font-bold text-[#1A1A1A] max-md:text-[18px]">
                      28 600₽
                    </p>

                    <p className="text-[15px] font-medium text-[#11111166]">
                      Цена с НДС
                    </p>
                  </div>

                  <button className="p-2 hover:bg-gray-50 rounded-full">
                    <img
                      src="/quvonch/Siroj/bye.png"
                      alt=""
                      className="w-[20px] h-[20px] opacity-40"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[430px] bg-white rounded-[25px] p-8 shadow-sm flex flex-col max-md:w-full max-md:p-4">
          <div className="flex justify-between items-center border-b border-[#E0E0E0] pb-5 mb-6">
            <span className="text-[17px] font-semibold uppercase tracking-tight text-black">
              итого:
            </span>

            <span className="text-[25px] font-semibold text-black">
              57 200₽
            </span>
          </div>

          <div className="flex flex-col gap-6 mb-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col">
                <label className="text-[#A1A1A1] text-[15px] font-normal mb-1">
                  Название:
                </label>

                <p className="text-[#1A1A1A] text-[17px] font-medium leading-tight">
                  9Y7573 Плата крепления компрессора CAT
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-[88px] rounded-[24px] bg-[#F4F7FF] flex flex-col justify-center px-8 max-md:px-4">
              <label className="text-[#848B8C] text-[15px] font-normal mb-0.5">
                Имя
              </label>

              <input
                type="text"
                placeholder="Александр"
                className="bg-transparent text-[#1A1A1A] text-[18px] font-medium outline-none placeholder:text-[#1A1A1A]"
              />
            </div>

            <div className="w-full h-[88px] rounded-[24px] bg-[#F4F7FF] flex items-center px-8 max-md:px-4">
              <div className="flex items-center gap-3 w-full">
                <img
                  src="/quvonch/Siroj/image0.png"
                  alt=""
                  className="w-6 h-4 object-contain"
                />

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");

                    if (value.startsWith("7")) {
                      value = value.slice(1);
                    }

                    value = value.slice(0, 10);

                    let formatted = "+7 ";

                    if (value.length > 0) {
                      formatted += "(" + value.slice(0, 3);
                    }

                    if (value.length >= 3) {
                      formatted += ") " + value.slice(3, 6);
                    }

                    if (value.length >= 6) {
                      formatted += "-" + value.slice(6, 8);
                    }

                    if (value.length >= 8) {
                      formatted += "-" + value.slice(8, 10);
                    }

                    setPhone(formatted);
                  }}
                  className="bg-transparent text-[18px] font-medium outline-none w-full placeholder:text-[#848B8C]"
                />
              </div>
            </div>

            <button className="w-full h-[96px] rounded-[28px] bg-[#4E6EB3] hover:bg-[#3d5a9c] transition-all flex items-center justify-center mt-2">
              <span className="text-white text-[14px] font-medium uppercase tracking-[1px]">
                Отправить заявку
              </span>
            </button>
          </div>

          <div className="mt-6 flex gap-3 px-1">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-[#C4C4C4] mt-1 accent-[#4E6EB3] flex-shrink-0 cursor-pointer"
            />

            <label className="text-[#A1A1A1] text-[14px] font-normal leading-[1.5]">
              Я даю свое согласие на обработку персональных данных в соответствии с ФЗ №152-ФЗ "О персональных данных"
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}