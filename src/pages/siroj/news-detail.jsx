// NewsDetail.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CantactForm from "../../components/ui/cantactform";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://adent-admin.migfastkg.ru/api/v1/news/${id}/`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>;
  if (!news) return null;

  const day = news.published_at?.slice(8, 10);
  const monthYear = news.published_at?.slice(4, 10).replace("-", ".");

  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[14px]">
        <Link to="/" className="text-black hover:text-[#355094] transition-colors">
          Главная
        </Link>
        <span className="text-[#999999] text-[10px]">❯</span>
        <Link to="/news" className="text-black hover:text-[#355094] transition-colors">
          Новости
        </Link>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">{news.title}</span>
      </div>

      <div className="mt-[20px]">
        <div className="mb-12 flex gap-[300px]">
          <h1 className="text-6xl font-semibold uppercase text-black">
            {news.title}
          </h1>
          <div className="flex mr-5 mt-[60px] ">
            <h2 className="font-semibold text-6xl">{day}</h2>
            <h3 className="text-3xl font-semibold text-[#11111133] mt-[23px] text-nowrap">
              {monthYear}
            </h3>
          </div>
        </div>
      </div>

      {/* Swiper slider */}
      {news.images?.length > 0 && (
        <div className="mt-[20px] mb-[55px] relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={news.images.length > 1}
            className="rounded-[25px] overflow-hidden"
          >
            {news.images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={img.image}
                  alt={news.title}
                  className="w-full h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}

            {/* Custom nav buttons */}
            <button className="swiper-btn-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#355094" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="swiper-btn-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[50px] h-[50px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#355094" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </Swiper>

          <style>{`
            .swiper-pagination-bullet { background: #355094; opacity: 0.4; }
            .swiper-pagination-bullet-active { background: #355094; opacity: 1; }
          `}</style>
        </div>
      )}

      <div>
        {news.description?.split("\n").map((para, i) =>
          para.trim() ? (
            <p key={i} className="text-lg font-normal mb-[20px]">{para}</p>
          ) : null
        )}
      </div>

      <CantactForm />
    </div>
  );
}