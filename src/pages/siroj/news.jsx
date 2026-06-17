// News.jsx
import { useState, useEffect } from "react";
import CantactForm from "../../components/ui/cantactform";
import NewsCart from "../../components/ui/NewsCart";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FILTERS = [
  { label: "ВСЕ", value: "" },
  { label: "ПОЛЕЗНОЕ", value: "useful" },
  { label: "НОВОСТИ КОМПАНИИ", value: "company" },
];

export default function News() {
  const [news, setNews] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: 1, page_size: 12 });
    if (activeFilter) params.set("news_type", activeFilter);

    fetch(`https://adent-admin.migfastkg.ru/api/v1/news/?${params}`)
      .then((res) => res.json())
      .then((data) => setNews(data.results || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [activeFilter]);

  return (
    <div className="max-w-[1436px] mx-auto py-6 md:py-10 px-4">
      <Helmet>
        <title>Новости МАКСАН ГРУПП – спецтехника и запчасти в СПБ</title>
        <meta name="description" content="Новости компании, обзоры запчастей, шин и решений для спецтехники. Полезная информация для владельцев и сервисов промышленной техники в СПБ." />
      </Helmet>
      <div className="flex items-center gap-2 mb-6 text-[12px] sm:text-[14px]">
        <Link to="/" className="text-black hover:text-[#355094] transition-colors">
          Главная
        </Link>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Новости</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-semibold uppercase tracking-tighter leading-[100%] text-black">
          Новости
        </h1>

        <div className="bg-white rounded-[40px] md:rounded-full p-1 flex flex-wrap md:flex-nowrap items-center gap-1 w-full lg:w-auto h-auto lg:h-[76px] border border-gray-100 lg:border-none">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`flex-1 md:flex-none px-4 md:px-8 py-3 h-[50px] md:h-[66px] min-w-[80px] rounded-full text-xs md:text-base font-normal uppercase transition-colors ${activeFilter === f.value
                ? "bg-[#355094] text-white"
                : "text-black px-3 py-3 "
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[10px]">
          {news.map((item) => (
            <NewsCart key={item.id} item={item} />
          ))}
        </div>
      )}

      <CantactForm />
    </div>
  );
}