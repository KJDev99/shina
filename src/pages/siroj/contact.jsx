import { ArrowUpRight } from "lucide-react";
import FormPost from "../../components/ui/FormPost";
import CantactForm from "../../components/ui/cantactform";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU";
    script.type = "text/javascript";
    script.onload = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("yandex-map", {
          center: [59.934216, 30.327122],
          zoom: 16,
        });
        const placemark = new window.ymaps.Placemark(
          [59.934216, 30.327122],
          {
            balloonContent: "г. Санкт-Петербург, Невский проспект, д. 30",
          },
          {
            preset: "islands#blueDotIcon",
          }
        );
        map.geoObjects.add(placemark);
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#E9EEF4] min-h-screen font-sans">
      <Helmet>
        <title>Контакты МАКСАН ГРУПП в Санкт-Петербурге</title>
        <meta name="description" content="Свяжитесь с МАКСАН ГРУПП в Санкт-Петербурге для подбора запчастей, агрегатов и шин для спецтехники. Консультация по срокам и стоимости." />
      </Helmet>
      <div className="max-w-[1436px] m-auto py-10 px-4">
        <div className="flex items-center gap-2 mb-6 text-[12px] sm:text-[14px]">
          <span className="text-black">Главная</span>
          <span className="text-[#999999] text-[10px]">❯</span>
          <span className="text-[#999999]">Контакты</span>
        </div>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-[42px] sm:text-[120px] font-bold uppercase tracking-tighter leading-[1] sm:leading-[0.9] text-black">
            Контакты
          </h1>
        </div>

        {/* Адрес */}
        <div className="flex flex-col sm:flex-row gap-[11px]">
          <a
            data-aos="fade-up" data-aos-delay={150}
            href="https://yandex.ru/maps/?text=Санкт-Петербург+Невский+проспект+30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[471px] h-auto sm:h-[262px] bg-white rounded-[20px] sm:rounded-[30px] p-5 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-sm sm:text-lg font-medium">
                Наш адрес
              </span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.05986 8.65963L6.25997 7.85975L5.46009 7.05986L7.05986 5.46009L8.65963 7.05986L7.05986 8.65963Z" fill="#111111" />
                <path d="M7.05986 19.5798L6.25997 18.7799L5.46009 17.98L7.05986 16.3803L8.65963 17.98L7.05986 19.5798Z" fill="#111111" />
                <path d="M17.98 8.65963L17.1802 7.85975L16.3803 7.05986L17.98 5.46009L19.5798 7.05986L17.98 8.65963Z" fill="#111111" />
                <path d="M17.98 19.5798L17.1802 18.7799L16.3803 17.98L17.98 16.3803L19.5798 17.98L17.98 19.5798Z" fill="#111111" />
                <path d="M10.6941 8.59599C10.6781 8.59599 10.3154 8.25065 9.88798 7.82845L9.1107 7.0609L10.6941 5.47748L11.4592 6.24259C12.1162 6.89954 12.2243 7.015 12.2243 7.05986C12.2243 7.10472 12.1217 7.21358 11.4737 7.85401C11.0609 8.26195 10.7101 8.59599 10.6941 8.59599Z" fill="#111111" />
                <path d="M13.5546 7.85349C12.8909 7.19219 12.8157 7.11151 12.8168 7.06108C12.818 7.01222 12.9072 6.91605 13.5384 6.28484C13.9782 5.84508 14.2825 5.55434 14.3806 5.51226L15.9282 7.05986L15.1631 7.82497C14.5061 8.48192 14.3906 8.59008 14.3458 8.59008C14.3013 8.59008 14.1872 8.48401 13.5546 7.85349Z" fill="#111111" />
                <path d="M8.88569 17.754L8.08528 16.9546L7.28505 16.1551L8.86569 14.5744L10.4681 16.1716L8.88569 17.754Z" fill="#111111" />
                <path d="M10.7113 15.9283L9.91232 15.1276L9.11331 14.3268L10.6927 12.7474L12.2937 14.346L10.7113 15.9283Z" fill="#111111" />
                <path d="M12.5198 14.1199L11.7199 13.32L10.92 12.5201L12.5198 10.9204L14.1195 12.5201L12.5198 14.1199Z" fill="#111111" />
                <path d="M14.3456 12.2941L13.5455 11.4944L12.7455 10.6946L14.3294 9.1107L15.928 10.7117L14.3456 12.2941Z" fill="#111111" />
                <path d="M16.1714 10.4682L15.3726 9.66731L14.5736 8.86656L16.1528 7.28731L17.7538 8.88586L16.1714 10.4682Z" fill="#111111" />
                <path d="M17.98 12.2243C17.9352 12.2243 17.8208 12.1169 17.1638 11.4582L16.3997 10.692L17.98 9.11174L19.537 10.6673L19.4934 10.7374C19.4694 10.776 19.1308 11.1264 18.741 11.5159C18.1343 12.1223 18.0247 12.2245 17.98 12.2243Z" fill="#111111" />
                <path d="M17.1802 15.1307C16.5244 14.4774 16.4498 14.3972 16.451 14.347C16.4523 14.2981 16.543 14.2004 17.1901 13.5534C17.8227 12.9208 17.9353 12.8157 17.98 12.8156C18.0247 12.8157 18.1376 12.9209 18.7712 13.5546C19.4205 14.2039 19.5101 14.3 19.509 14.347C19.508 14.3929 19.4011 14.5071 18.7613 15.1469C18.0322 15.876 18.0136 15.8932 17.9626 15.876C17.9305 15.8654 17.6297 15.5788 17.1802 15.1307Z" fill="#111111" />
              </svg>

            </div>
            <div className="text-[18px] sm:text-[24px] font-semibold leading-tight text-black mt-4 sm:mt-0">
              г. Санкт-Петербург <br />
              Невский проспект, д. 30, <br />
              офисы 5.4 и 6.5
            </div>
          </a>

          {/* Телефоны */}
          <div data-aos="fade-up" data-aos-delay={300} className="w-full sm:w-[471px] h-auto sm:h-[262px] bg-white rounded-[20px] sm:rounded-[30px] p-5 sm:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-sm sm:text-lg font-medium">
                Контактные телефоны
              </span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.05986 8.65963L6.25997 7.85975L5.46009 7.05986L7.05986 5.46009L8.65963 7.05986L7.05986 8.65963Z" fill="#111111" />
                <path d="M7.05986 19.5798L6.25997 18.7799L5.46009 17.98L7.05986 16.3803L8.65963 17.98L7.05986 19.5798Z" fill="#111111" />
                <path d="M17.98 8.65963L17.1802 7.85975L16.3803 7.05986L17.98 5.46009L19.5798 7.05986L17.98 8.65963Z" fill="#111111" />
                <path d="M17.98 19.5798L17.1802 18.7799L16.3803 17.98L17.98 16.3803L19.5798 17.98L17.98 19.5798Z" fill="#111111" />
                <path d="M10.6941 8.59599C10.6781 8.59599 10.3154 8.25065 9.88798 7.82845L9.1107 7.0609L10.6941 5.47748L11.4592 6.24259C12.1162 6.89954 12.2243 7.015 12.2243 7.05986C12.2243 7.10472 12.1217 7.21358 11.4737 7.85401C11.0609 8.26195 10.7101 8.59599 10.6941 8.59599Z" fill="#111111" />
                <path d="M13.5546 7.85349C12.8909 7.19219 12.8157 7.11151 12.8168 7.06108C12.818 7.01222 12.9072 6.91605 13.5384 6.28484C13.9782 5.84508 14.2825 5.55434 14.3806 5.51226L15.9282 7.05986L15.1631 7.82497C14.5061 8.48192 14.3906 8.59008 14.3458 8.59008C14.3013 8.59008 14.1872 8.48401 13.5546 7.85349Z" fill="#111111" />
                <path d="M8.88569 17.754L8.08528 16.9546L7.28505 16.1551L8.86569 14.5744L10.4681 16.1716L8.88569 17.754Z" fill="#111111" />
                <path d="M10.7113 15.9283L9.91232 15.1276L9.11331 14.3268L10.6927 12.7474L12.2937 14.346L10.7113 15.9283Z" fill="#111111" />
                <path d="M12.5198 14.1199L11.7199 13.32L10.92 12.5201L12.5198 10.9204L14.1195 12.5201L12.5198 14.1199Z" fill="#111111" />
                <path d="M14.3456 12.2941L13.5455 11.4944L12.7455 10.6946L14.3294 9.1107L15.928 10.7117L14.3456 12.2941Z" fill="#111111" />
                <path d="M16.1714 10.4682L15.3726 9.66731L14.5736 8.86656L16.1528 7.28731L17.7538 8.88586L16.1714 10.4682Z" fill="#111111" />
                <path d="M17.98 12.2243C17.9352 12.2243 17.8208 12.1169 17.1638 11.4582L16.3997 10.692L17.98 9.11174L19.537 10.6673L19.4934 10.7374C19.4694 10.776 19.1308 11.1264 18.741 11.5159C18.1343 12.1223 18.0247 12.2245 17.98 12.2243Z" fill="#111111" />
                <path d="M17.1802 15.1307C16.5244 14.4774 16.4498 14.3972 16.451 14.347C16.4523 14.2981 16.543 14.2004 17.1901 13.5534C17.8227 12.9208 17.9353 12.8157 17.98 12.8156C18.0247 12.8157 18.1376 12.9209 18.7712 13.5546C19.4205 14.2039 19.5101 14.3 19.509 14.347C19.508 14.3929 19.4011 14.5071 18.7613 15.1469C18.0322 15.876 18.0136 15.8932 17.9626 15.876C17.9305 15.8654 17.6297 15.5788 17.1802 15.1307Z" fill="#111111" />
              </svg>

            </div>

            <div className="space-y-5 sm:space-y-6 mt-4 sm:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#999999] text-xs sm:text-sm mb-1">
                    Запчасти для спецтехники:
                  </p>
                  <a
                    href="tel:+79219057021"
                    className="text-lg sm:text-2xl font-semibold text-black hover:text-[#355094] transition-colors"
                  >
                    +7 (921) 905-70-21
                  </a>
                </div>
                <div className="flex gap-2">
                  <a href="https://t.me/+79219057021" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/quvonch/Siroj/path.png"
                      alt="telegram"
                      className="w-[28px] h-[22px] sm:w-[36px] sm:h-[28px] object-contain hover:opacity-70 transition-opacity cursor-pointer"
                    />
                  </a>
                  <a href="https://wa.me/79219057021" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/quvonch/Siroj/icon2.png"
                      alt="whatsapp"
                      className="w-[28px] h-[22px] sm:w-[36px] sm:h-[28px] object-contain hover:opacity-70 transition-opacity cursor-pointer"
                    />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#999999] text-xs sm:text-sm mb-1">
                    Шины для спецтехники:
                  </p>
                  <a
                    href="tel:+79213065125"
                    className="text-lg sm:text-2xl font-semibold text-black hover:text-[#355094] transition-colors"
                  >
                    +7 (921) 306-51-25
                  </a>
                </div>
                <div className="flex gap-2">
                  <a href="https://t.me/+79213065125" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/quvonch/Siroj/path.png"
                      alt="telegram"
                      className="w-[28px] h-[22px] sm:w-[36px] sm:h-[28px] object-contain hover:opacity-70 transition-opacity cursor-pointer"
                    />
                  </a>
                  <a href="https://wa.me/79213065125" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/quvonch/Siroj/icon2.png"
                      alt="whatsapp"
                      className="w-[28px] h-[22px] sm:w-[36px] sm:h-[28px] object-contain hover:opacity-70 transition-opacity cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div data-aos="fade-up" data-aos-delay={450} className="w-full sm:w-[471px] h-auto sm:h-[262px] bg-white rounded-[20px] sm:rounded-[30px] p-5 sm:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[#999999] text-sm sm:text-lg font-medium">
                Электронная почта
              </span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.05986 8.65963L6.25997 7.85975L5.46009 7.05986L7.05986 5.46009L8.65963 7.05986L7.05986 8.65963Z" fill="#111111" />
                <path d="M7.05986 19.5798L6.25997 18.7799L5.46009 17.98L7.05986 16.3803L8.65963 17.98L7.05986 19.5798Z" fill="#111111" />
                <path d="M17.98 8.65963L17.1802 7.85975L16.3803 7.05986L17.98 5.46009L19.5798 7.05986L17.98 8.65963Z" fill="#111111" />
                <path d="M17.98 19.5798L17.1802 18.7799L16.3803 17.98L17.98 16.3803L19.5798 17.98L17.98 19.5798Z" fill="#111111" />
                <path d="M10.6941 8.59599C10.6781 8.59599 10.3154 8.25065 9.88798 7.82845L9.1107 7.0609L10.6941 5.47748L11.4592 6.24259C12.1162 6.89954 12.2243 7.015 12.2243 7.05986C12.2243 7.10472 12.1217 7.21358 11.4737 7.85401C11.0609 8.26195 10.7101 8.59599 10.6941 8.59599Z" fill="#111111" />
                <path d="M13.5546 7.85349C12.8909 7.19219 12.8157 7.11151 12.8168 7.06108C12.818 7.01222 12.9072 6.91605 13.5384 6.28484C13.9782 5.84508 14.2825 5.55434 14.3806 5.51226L15.9282 7.05986L15.1631 7.82497C14.5061 8.48192 14.3906 8.59008 14.3458 8.59008C14.3013 8.59008 14.1872 8.48401 13.5546 7.85349Z" fill="#111111" />
                <path d="M8.88569 17.754L8.08528 16.9546L7.28505 16.1551L8.86569 14.5744L10.4681 16.1716L8.88569 17.754Z" fill="#111111" />
                <path d="M10.7113 15.9283L9.91232 15.1276L9.11331 14.3268L10.6927 12.7474L12.2937 14.346L10.7113 15.9283Z" fill="#111111" />
                <path d="M12.5198 14.1199L11.7199 13.32L10.92 12.5201L12.5198 10.9204L14.1195 12.5201L12.5198 14.1199Z" fill="#111111" />
                <path d="M14.3456 12.2941L13.5455 11.4944L12.7455 10.6946L14.3294 9.1107L15.928 10.7117L14.3456 12.2941Z" fill="#111111" />
                <path d="M16.1714 10.4682L15.3726 9.66731L14.5736 8.86656L16.1528 7.28731L17.7538 8.88586L16.1714 10.4682Z" fill="#111111" />
                <path d="M17.98 12.2243C17.9352 12.2243 17.8208 12.1169 17.1638 11.4582L16.3997 10.692L17.98 9.11174L19.537 10.6673L19.4934 10.7374C19.4694 10.776 19.1308 11.1264 18.741 11.5159C18.1343 12.1223 18.0247 12.2245 17.98 12.2243Z" fill="#111111" />
                <path d="M17.1802 15.1307C16.5244 14.4774 16.4498 14.3972 16.451 14.347C16.4523 14.2981 16.543 14.2004 17.1901 13.5534C17.8227 12.9208 17.9353 12.8157 17.98 12.8156C18.0247 12.8157 18.1376 12.9209 18.7712 13.5546C19.4205 14.2039 19.5101 14.3 19.509 14.347C19.508 14.3929 19.4011 14.5071 18.7613 15.1469C18.0322 15.876 18.0136 15.8932 17.9626 15.876C17.9305 15.8654 17.6297 15.5788 17.1802 15.1307Z" fill="#111111" />
              </svg>

            </div>

            <div className="space-y-5 sm:space-y-6 mt-4 sm:mt-0">
              <div>
                <p className="text-[#999999] text-xs sm:text-sm mb-1">
                  Запчасти:
                </p>
                <a
                  href="mailto:info@maksan-group.ru"
                  className="text-lg sm:text-2xl font-semibold text-black underline underline-offset-4 break-all hover:text-[#355094] transition-colors"
                >
                  info@maksan-group.ru
                </a>
              </div>

              <div>
                <p className="text-[#999999] text-xs sm:text-sm mb-1">Шины:</p>
                <a
                  href="mailto:andrey.ivanov@maksan-group.ru"
                  className="text-lg sm:text-2xl font-semibold text-black underline underline-offset-4 break-all hover:text-[#355094] transition-colors"
                >
                  andrey.ivanov@maksan-group.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Yandex Maps */}
        <div data-aos="fade-up" data-aos-delay={600} className="mt-[11px] w-full h-[300px] sm:h-[480px] rounded-[20px] sm:rounded-[30px] overflow-hidden">
          <div id="yandex-map" className="w-full h-full" />
        </div>
      </div>

      <CantactForm />
    </div>
  );
}