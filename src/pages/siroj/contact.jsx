import { ArrowUpRight } from "lucide-react";
import FormPost from "../../components/ui/FormPost";
import CantactForm from "../../components/ui/cantactform";

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
              <span className="text-[#999999] text-lg font-medium ">Наш адрес</span>
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>
            <div className="text-[24px] font-semibold leading-tight text-black max-w-[319px]">
              г. Санкт-Петербург <br />
              Невский проспект, д. 30, <br />
              офисы 5.4 и 6.5
            </div>
          </div>

          <div className="w-[471px] h-[262px] bg-white rounded-[30px] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-lg font-medium">
                Контактные телефоны
              </span>
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#999999] text-sm mb-1 font-normal ">
                    Запчасти для спецтехники:
                  </p>
                  <p className="text-2xl font-semibold text-black">
                    +7 (921) 905-70-21
                  </p>
                </div>
                <div className="flex gap-2">
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
                  <p className="text-[#999999] text-sm mb-1 font-normal">
                    Шины для спецтехники:
                  </p>
                  <p className="text-2xl font-semibold text-black">
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
              <span className="text-[#999999] text-lg font-medium">
                Электронная почта
              </span>
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[#999999] text-sm font-normal mb-1">Запчасти:</p>
                <p className="text-2xl font-semibold text-black underline underline-offset-4">
                  info@maksan-group.ru
                </p>
              </div>
              <div>
                <p className="text-[#999999] text-sm mb-1 font-normal">Шины:</p>
                <p className="text-2xl font-semibold text-black underline underline-offset-4">
                  andrey.ivanov@maksan-group.ru
                </p>
              </div>
            </div>
          </div>
        </div>
<CantactForm/>  
      </div>
    </div>
  );
}
