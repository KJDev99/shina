import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Badge from "../../components/ui/Badge";
import CantactForm from "../../components/ui/cantactform";
import CatalogCart from "../../components/ui/CatalogCart";
import NewsCart from "../../components/ui/NewsCart";
import { Helmet } from "react-helmet-async";

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState(
    searchParams.get("manufacturer") ? Number(searchParams.get("manufacturer")) : null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sidebarNews, setSidebarNews] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appliedMin, setAppliedMin] = useState("");
  const [appliedMax, setAppliedMax] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const visibleNewsCount = products.length <= 6 ? 0 : Math.floor((products.length - 4) / 3);
  const visibleNews = sidebarNews.slice(0, visibleNewsCount);

  const PAGE_SIZE = 15;

  // URL param o'zgarganda selectedManufacturer yangilansin
  useEffect(() => {
    const mId = searchParams.get("manufacturer");
    setSelectedManufacturer(mId ? Number(mId) : null);
    setCurrentPage(1);
  }, [searchParams]);

  // Sidebar news
  useEffect(() => {
    fetch("https://adent-admin.migfastkg.ru/api/v1/news/?page=1&page_size=4")
      .then((res) => res.json())
      .then((data) => setSidebarNews(data.results || []));
  }, []);

  // Barcha manufacturerlarni bir marta, filtersiz yuklash
  useEffect(() => {
    fetch("https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=1000&type=spare_parts")
      .then((res) => res.json())
      .then((data) => {
        const unique = [];
        const seen = new Set();
        (data.results || []).forEach((p) => {
          if (p.manufacturer && !seen.has(p.manufacturer.id)) {
            seen.add(p.manufacturer.id);
            unique.push(p.manufacturer);
          }
        });
        setManufacturers(unique);
      })
      .catch((err) => console.error(err));
  }, []);

  // Mahsulotlarni yuklash (filter bilan)
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: currentPage, page_size: PAGE_SIZE });
    if (selectedManufacturer) params.set("manufacturer", selectedManufacturer);
    if (appliedMin) params.set("min_price", appliedMin);
    if (appliedMax) params.set("max_price", appliedMax);
    if (orderPrice) params.set("order_price", orderPrice);

    fetch(`https://adent-admin.migfastkg.ru/api/v1/products/?${params}&type=spare_parts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results || []);
        setTotalPages(data.total_pages || 1);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [currentPage, selectedManufacturer, appliedMin, appliedMax, orderPrice]);

  const handleManufacturer = (id) => {
    const newId = id === selectedManufacturer ? null : id;
    setCurrentPage(1);
    if (newId) {
      setSearchParams({ manufacturer: newId });
    } else {
      setSearchParams({});
    }
    // QO'SHILGAN QISM:
    setTimeout(() => {
      const grid = document.querySelector(".flex-1.flex.flex-col.gap-8");
      if (grid) {
        const top = grid.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };
  useEffect(() => {
    if (selectedManufacturer) {
      setTimeout(() => {
        const grid = document.querySelector(".flex-1.flex.flex-col.gap-8");
        if (grid) {
          const top = grid.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const handleApply = () => {
    setAppliedMin(minPrice);
    setAppliedMax(maxPrice);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setAppliedMin("");
    setAppliedMax("");
    setOrderPrice("");
    setCurrentPage(1);
    setSearchParams({});
  };

  const getPaginationPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1, 2, 3, 4);
    if (currentPage > 5) pages.push("...");
    if (currentPage > 4 && currentPage < totalPages - 3) pages.push(currentPage);
    if (totalPages - 3 > 4) pages.push("...");
    pages.push(totalPages - 1, totalPages);
    return [...new Set(pages)];
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Каталог запчастей для спецтехники в СПБ – МАКСАН ГРУПП</title>
        <meta name="description" content="Каталог запчастей, агрегатов, шин и комплектующих для спецтехники в Санкт-Петербурге. Caterpillar, Atlas Copco, Epiroc, Cummins и другие бренды." />
      </Helmet>
      <div className="mt-[30px] md:mt-[50px] max-w-[1436px] mx-auto max-md:px-4">
        <Badge text={"Каталог запчастей"} />
      </div>

      <div className="max-w-[1436px] flex flex-col md:flex-row justify-between items-start md:items-center m-auto px-4 md:px-0">
        <h1 className="font-semibold text-[36px] sm:text-[48px] md:text-[85px] leading-none tracking-normal uppercase mt-[20px]">
          Каталог запчастей
        </h1>

        <div className="relative w-full md:w-[221px] mt-5 md:mt-0">
          <select
            value={orderPrice}
            onChange={(e) => { setOrderPrice(e.target.value); setCurrentPage(1); }}
            className="w-full h-[55px] md:h-[60px] rounded-[52px] bg-[#FFFFFF] px-5 text-[14px] md:text-[16px] outline-none appearance-none cursor-pointer"
          >
            <option value="">Сортировать по: Цене</option>
            <option value="asc">Сначала дешевле</option>
            <option value="desc">Сначала дороже</option>
          </select>
        </div>
      </div>

      <div className="max-w-[1436px] m-auto mt-[30px] md:mt-[50px] mb-[100px] flex flex-col md:flex-row gap-8 px-4 md:px-0">
        {/* Sidebar */}
        <div className="w-full md:w-[344px] shrink-0 flex flex-col gap-4">

          {/* Производители */}
          <div className="bg-[#FFFFFF] p-5 rounded-[25px]">
            <h2 className="font-semibold text-[16px] mb-[11px] leading-none tracking-normal uppercase">
              Производители
            </h2>
            <div className="flex flex-col gap-[5px]">
              {manufacturers.map((m) => (
                <div
                  key={m.id}
                  onClick={() => handleManufacturer(m.id)}
                  className={`h-[75px] rounded-[20px] flex items-center justify-between px-4 cursor-pointer transition-colors ${selectedManufacturer === m.id ? "bg-[#355094] text-white" : "bg-[#F5F5F5]"}`}
                >
                  <h3 className="font-semibold text-[16px] leading-none tracking-normal uppercase">
                    {m.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Narx filtri */}
          <div className="w-full bg-[#FFFFFF] p-[18px] rounded-[25px] hidden">
            <h2 className="font-semibold text-[16px] mb-[11px] leading-none tracking-normal uppercase">
              Фильтры
            </h2>
            <div className="mt-6">
              <p className="font-medium text-[15px] leading-none tracking-normal mb-[10px]">Цена</p>
              <div className="flex items-center gap-2">
                <div className={`flex-1 h-[72px] rounded-[15px] flex items-center px-3 transition-colors ${minPrice ? "bg-[#EEF3FF] border border-[#355094]" : "bg-[#F5F5F5]"}`}>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] text-[#848B8C]">от</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="0"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value.replace(/\D/g, ""))}
                      className="bg-transparent outline-none text-[14px] font-medium w-full"
                    />
                  </div>
                  <span className="text-[13px] text-[#11111166] ml-1">₽</span>
                </div>

                <p className="text-[#111]">—</p>

                <div className={`flex-1 h-[72px] rounded-[15px] flex items-center px-3 transition-colors ${maxPrice ? "bg-[#EEF3FF] border border-[#355094]" : "bg-[#F5F5F5]"}`}>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] text-[#848B8C]">до</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="∞"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value.replace(/\D/g, ""))}
                      className="bg-transparent outline-none text-[14px] font-medium w-full"
                    />
                  </div>
                  <span className="text-[13px] text-[#11111166] ml-1">₽</span>
                </div>
              </div>

              {(appliedMin || appliedMax) && (
                <div className="mt-3 flex items-center gap-2 text-[13px] text-[#355094] font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#355094" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Фильтр применён:
                  {appliedMin && <span> от {Number(appliedMin).toLocaleString("ru-RU")}₽</span>}
                  {appliedMax && <span> до {Number(appliedMax).toLocaleString("ru-RU")}₽</span>}
                </div>
              )}
            </div>
          </div>

          {/* Tugmalar */}
          <div className="flex gap-[10px] hidden">
            <button
              onClick={handleApply}
              className="flex-1 bg-[#355094] text-white border-none rounded-[25px] h-[80px] md:h-[96px] font-bold text-[14px] cursor-pointer active:scale-95 transition-transform hover:bg-[#2a4180]"
            >
              ПРИМЕНИТЬ
            </button>
            <button
              onClick={handleReset}
              className="w-[80px] md:w-[94px] bg-[#111] text-white border-none rounded-[25px] cursor-pointer text-[18px] flex justify-center items-center hover:bg-[#333] transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Sidebar news */}
          {visibleNews.length > 0 && (
            <div className="flex flex-col gap-[10px] max-md:hidden">
              {visibleNews.map((item) => (
                <NewsCart key={item.id} item={item} />
              ))}
              <Link
                to="/news"
                className="w-full bg-white border-none rounded-[25px] py-9 font-medium text-[14px] cursor-pointer mt-2 shadow-sm flex justify-center items-center hover:bg-gray-50 transition-colors"
              >
                Смотреть больше
              </Link>
            </div>
          )}
        </div>

        {/* Products grid */}
        <div className="flex-1 flex flex-col gap-8">
          {loading ? (
            <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center py-20 gap-3 text-gray-400">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p className="text-[16px]">Товары не найдены</p>
              <button onClick={handleReset} className="text-[#355094] font-medium text-[14px] hover:underline">
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
              {products.map((item) => (
                <CatalogCart key={item.id} item={item} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
              {getPaginationPages().map((page, i) =>
                page === "..." ? (
                  <div key={`dot-${i}`} className="w-8 flex justify-center items-end pb-3 text-[#888] font-bold">...</div>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] font-semibold transition-colors ${currentPage === page ? "bg-[#355094] text-white" : "bg-white text-[#111]"}`}
                  >
                    {page}
                  </button>
                )
              )}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-md:px-5">
        <CantactForm />
      </div>
    </div>
  );
}