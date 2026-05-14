import { useState } from "react";

export default function CatalogDetail() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty, setQty] = useState(1);

  const images = [
    "/quvonch/img/catalog.png",
    "/quvonch/img/catalog.png",
    "/quvonch/img/catalog.png",
    "/quvonch/img/catalog.png",
    "/quvonch/img/catalog.png",
  ];

  return (
    <div className="max-w-[1436px] mx-auto px-4 py-5">
      <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">
        <span className="text-base font-medium text-black">Главная</span>
        <span className="text-gray-400 text-xs">❯</span>
        <span className="text-black">Каталог запчастей</span>
        <span className="text-gray-400 text-xs">❯</span>
        <span className="text-gray-400 hidden sm:inline">
          9Y7573 Плата крепл...
        </span>
      </div>

      <div className="hidden md:grid grid-cols-5  gap-8 items-start">
        <div className="flex gap-3 col-span-3">
          <div className="flex flex-col gap-2">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`w-[103px] h-[103px] rounded-md border cursor-pointer flex items-center justify-center bg-gray-100 overflow-hidden transition-all ${
                  activeThumb === i ? "border-2" : "border-gray-200"
                }`}
                style={activeThumb === i ? { borderColor: "#355094" } : {}}
              >
                <img
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="w-full h-[550px] rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={images[activeThumb]}
              alt="main"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 col-span-2">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            В наличии
          </span>
          <h1 className="text-[22px] font-bold uppercase leading-snug tracking-wide text-black mb-2">
            9Y7573 ПЛАТА КРЕПЛЕНИЯ
            <br />
            КОМПРЕССОРА CAT
          </h1>
          <p className="text-sm text-gray-400 mb-4">Артикул: 20417120</p>
          <p className="text-[32px] font-bold text-black mb-1">28 600 ₽</p>
          <p className="text-sm text-gray-400 mb-6">Цена с НДС</p>
          <hr className="border-gray-200 mb-5" />
          <p className="text-sm text-black mb-3">Количество</p>
          <div className="flex items-center border border-gray-200 rounded-lg w-fit overflow-hidden mb-5">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 text-xl flex items-center justify-center hover:bg-gray-100 transition"
            >
              −
            </button>
            <div className="w-11 h-10 flex items-center justify-center text-base font-medium border-x border-gray-200">
              {qty}
            </div>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-10 text-xl flex items-center justify-center hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
          <div className="flex gap-3">
            <button
              className="flex-1 text-white font-semibold text-sm py-3 px-6 rounded-lg flex items-center justify-center transition"
              style={{ backgroundColor: "#355094" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2a4180")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#355094")
              }
            >
              В КОРЗИНУ
            </button>
            <button
              className="flex-1 font-semibold text-sm py-3 px-6 rounded-lg flex items-center justify-center transition border"
              style={{ borderColor: "#355094", color: "#355094" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f4ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              БЫСТРЫЙ ЗАКАЗ
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <div className="w-full h-[300px] rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden mb-3">
          <img
            src={images[activeThumb]}
            alt="main"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-2 mb-5">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setActiveThumb(i)}
              className={`flex-1 h-[70px] rounded-md border cursor-pointer flex items-center justify-center bg-gray-100 overflow-hidden transition-all ${
                activeThumb === i ? "border-2" : "border-gray-200"
              }`}
              style={activeThumb === i ? { borderColor: "#355094" } : {}}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4 w-fit">
          В наличии
        </span>

        <h1 className="text-[20px] font-bold uppercase leading-snug tracking-wide text-black mb-2">
          9Y7573 ПЛАТА КРЕПЛЕНИЯ КОМПРЕССОРА CAT
        </h1>
        <p className="text-sm text-gray-400 mb-4">Артикул: 20417120</p>

        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[28px] font-bold text-black mb-1">28 600 ₽</p>
            <p className="text-sm text-gray-400">Цена с НДС</p>
          </div>
          <div>
            <p className="text-sm text-black mb-2 text-right">Количество</p>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 text-xl flex items-center justify-center hover:bg-gray-100 transition"
              >
                −
              </button>
              <div className="w-11 h-10 flex items-center justify-center text-base font-medium border-x border-gray-200">
                {qty}
              </div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 text-xl flex items-center justify-center hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 text-white font-semibold text-sm py-3 px-4 rounded-lg flex items-center justify-center transition"
            style={{ backgroundColor: "#355094" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2a4180")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#355094")
            }
          >
            В КОРЗИНУ
          </button>
          <button
            className="flex-1 font-semibold text-sm py-3 px-4 rounded-lg flex items-center justify-center transition border"
            style={{ borderColor: "#355094", color: "#355094" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f4ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            БЫСТРЫЙ ЗАКАЗ
          </button>
        </div>
      </div>

      <div className="mt-2 md:mt-10">
        <p className="text-sm font-bold uppercase tracking-wide text-black mb-3">
          ОПИСАНИЕ
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Предназначен для создания и подачи сжатого воздуха в систему, где
          требуется постоянный или переменный воздушный поток, например, в
          пневматических системах двигателей, компрессорных установках и других
          приложениях. Этот компрессор используется для повышения давления
          воздуха и его доставки в нужные участки системы, обеспечивая
          бесперебойную работу оборудования. Применяемость: ISM CM570, ISM
          CM570/870, ISM CM875, ISM CM876, ISM CM876 E, ISM11 CM876 M103, ISM11
          CM876 SN, M11 CELECT, M11 CELECT PLUS, M11 MECHANICAL, QSM11 CM570,
          QSM11 CM876
        </p>
      </div>
    </div>
  );
}
