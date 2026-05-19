import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCart } from "../../context/CartContext";
import SimilarProduct from "./similar-product";

function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#355094] text-white px-6 py-4 rounded-[20px] shadow-lg flex items-center gap-3 animate-fade-in">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="font-medium text-[15px]">{message}</span>
    </div>
  );
}

export default function CatalogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(null);

  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  useEffect(() => {
    fetch(`https://adent-admin.migfastkg.ru/api/v1/products/${id}/`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>;
  if (!product) return null;

  const isInCart = cart.some((i) => i.id === product?.id);
  const images = product.images || [];
  const price = Number(product.price).toLocaleString("ru-RU") + " ₽";

  const handleThumbClick = (i) => {
    setActiveThumb(i);
    desktopSwiperRef.current?.slideTo(i);
    mobileSwiperRef.current?.slideTo(i);
  };

  const handleAddToCart = () => {
    if (isInCart) return;
    addToCart(product, qty);
    setToast("Товар добавлен в корзину");
  };

  const handleQuickOrder = () => {
    addToCart(product, qty);
    navigate("/basket");
  };

  const InfoBlock = () => (
    <>
      <span className={`inline-block text-sm font-medium px-4 py-1 rounded-full mb-4 ${product.is_stock ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
        }`}>
        {product.is_stock ? "В наличии" : "Под заказ"}
      </span>
      <h1 className="text-[22px] font-bold uppercase leading-snug tracking-wide text-black mb-2">
        {product.name}
      </h1>
      <p className="text-sm text-gray-400 mb-4">Артикул: {product.artikul}</p>
      <p className="text-[32px] font-bold text-black mb-1">{price}</p>
      <p className="text-sm text-gray-400 mb-6">Цена с НДС</p>
      <hr className="border-gray-200 mb-5" />
      <p className="text-sm text-black mb-3">Количество</p>
      <div className="flex items-center border border-gray-200 rounded-lg w-fit overflow-hidden mb-5">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-10 text-xl flex items-center justify-center hover:bg-gray-100 transition">−</button>
        <div className="w-11 h-10 flex items-center justify-center text-base font-medium border-x border-gray-200">{qty}</div>
        <button onClick={() => setQty((q) => q + 1)} className="w-10 h-10 text-xl flex items-center justify-center hover:bg-gray-100 transition">+</button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`flex-1 text-white font-semibold text-sm py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition ${isInCart
            ? "bg-[#355094] opacity-70 cursor-default"
            : "bg-[#355094] hover:bg-[#2a4180]"
            }`}
        >
          {isInCart ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              В КОРЗИНЕ
            </>
          ) : (
            "В КОРЗИНУ"
          )}
        </button>
        <button
          onClick={handleQuickOrder}
          className="flex-1 font-semibold text-sm py-3 px-6 rounded-lg flex items-center justify-center border border-[#355094] text-[#355094] hover:bg-[#f0f4ff] transition"
        >
          БЫСТРЫЙ ЗАКАЗ
        </button>
      </div>
    </>
  );

  return (
    <div className="max-w-[1436px] mx-auto px-4 py-5">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">
        <Link to="/" className="text-base font-medium text-black hover:text-[#355094] transition-colors">Главная</Link>
        <span className="text-gray-400 text-xs">❯</span>
        <Link to="/catalog" className="text-black hover:text-[#355094] transition-colors">Каталог запчастей</Link>
        <span className="text-gray-400 text-xs">❯</span>
        <span className="text-gray-400 hidden sm:inline">{product.name?.slice(0, 25)}...</span>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-5 gap-8 items-start">
        <div className="flex gap-3 col-span-3">
          <div className="flex flex-col gap-2">
            {images.map((img, i) => (
              <div
                key={img.id}
                onClick={() => handleThumbClick(i)}
                className={`w-[103px] h-[103px] rounded-md border cursor-pointer bg-gray-100 overflow-hidden transition-all ${activeThumb === i ? "border-2 border-[#355094]" : "border-gray-200"
                  }`}
              >
                <img src={img.image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="w-full h-[550px] rounded-xl border border-gray-200 bg-gray-100 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={false}
              onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
              onSlideChange={(s) => setActiveThumb(s.activeIndex)}
              className="w-full h-full"
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  <img src={img.image} alt={product.name} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex-1 col-span-2">
          <InfoBlock />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col md:hidden">
        <div className="w-full h-[300px] rounded-xl border border-gray-200 bg-gray-100 overflow-hidden mb-3">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={false}
            onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
            onSlideChange={(s) => setActiveThumb(s.activeIndex)}
            className="w-full h-full"
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <img src={img.image} alt={product.name} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-2 mb-5">
          {images.map((img, i) => (
            <div
              key={img.id}
              onClick={() => handleThumbClick(i)}
              className={`flex-1 h-[70px] rounded-md border cursor-pointer bg-gray-100 overflow-hidden ${activeThumb === i ? "border-2 border-[#355094]" : "border-gray-200"
                }`}
            >
              <img src={img.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <InfoBlock />
      </div>

      <div className="mt-2 md:mt-10">
        <p className="text-sm font-bold uppercase tracking-wide text-black mb-3">ОПИСАНИЕ</p>
        <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
      </div>

      <SimilarProduct id={id} />

    </div>
  );
}