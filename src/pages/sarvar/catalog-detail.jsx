import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCart } from "../../context/CartContext";
import SimilarProduct from "./similar-product";
import { Helmet } from "react-helmet-async";

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

// Modal komponenti
function ImageModal({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const MIN_SCALE = 1;
  const MAX_SCALE = 3;
  const STEP = 0.25;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + STEP, MAX_SCALE));
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scale - STEP, MIN_SCALE);
    setScale(newScale);
    if (newScale === MIN_SCALE) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    if (scale === MIN_SCALE) return;
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale === MIN_SCALE) return;
    e.preventDefault();
    e.stopPropagation();

    let newX = e.clientX - dragStart.x;
    let newY = e.clientY - dragStart.y;

    if (containerRef.current && imageRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const image = imageRef.current.getBoundingClientRect();

      const maxX = Math.max(0, (image.width - container.width) / 2);
      const maxY = Math.max(0, (image.height - container.height) / 2);

      newX = Math.min(Math.max(newX, -maxX), maxX);
      newY = Math.min(Math.max(newY, -maxY), maxY);
    }

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ESC tugmasi bilan yopish
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handlePrev, handleNext]);

  const isZoomed = scale > MIN_SCALE;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/85 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Yopish tugmasi */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white transition-all"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Zoom tugmalari */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 hidden">
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </button>
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </button>
      </div>

      {/* Chap arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition-all group"
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6279 3.31471V1.65735V0L11.3132 0V3.31471L14.6279 3.31471Z" fill="white" />
          <path d="M25.9412 14.6279V12.9706V11.3132H22.6265V14.6279H25.9412Z" fill="white" />
          <path d="M3.3147 14.6279V12.9706V11.3132H0V14.6279H3.3147Z" fill="white" />
          <path d="M14.6279 25.9412V24.2838V22.6265H11.3132V25.9412H14.6279Z" fill="white" />
          <path d="M10.7969 7.01385C10.8135 6.99727 10.8315 6.26371 10.8369 5.38351L10.847 3.78309H7.56618V5.36838C7.56618 6.72957 7.57374 6.96124 7.62022 7.00772C7.6667 7.0542 7.88576 7.06068 9.22065 7.05276C10.0709 7.04771 10.7804 7.03042 10.7969 7.01385Z" fill="white" />
          <path d="M7.06429 9.20804C7.06681 7.83532 7.06104 7.6739 7.00772 7.62274C6.95584 7.57338 6.7638 7.56618 5.45593 7.56618C4.54475 7.56618 3.92829 7.58023 3.78309 7.63824V10.8449H5.36838C6.72957 10.8449 6.96124 10.8373 7.00772 10.7908C7.05384 10.7447 7.06213 10.5166 7.06429 9.20804Z" fill="white" />
          <path d="M22.1581 14.6279L22.1592 12.9706L22.1599 11.3132H18.8848L18.8794 14.6279H22.1581Z" fill="white" />
          <path d="M18.3754 14.6279L18.3736 12.9706L18.3718 11.3132H15.0992L15.0967 14.6279H18.3754Z" fill="white" />
          <path d="M14.6283 14.6279V12.9706V11.3132H11.3136V14.6279H14.6283Z" fill="white" />
          <path d="M10.8452 14.6279L10.8456 12.9706L10.8459 11.3132L7.56401 11.3132L7.56654 14.6279L10.8452 14.6279Z" fill="white" />
          <path d="M7.06213 14.6279L7.05996 12.9706L7.05816 11.3132H3.78597L3.78345 14.6279H7.06213Z" fill="white" />
          <path d="M7.00772 18.321C7.0542 18.2745 7.06141 18.0446 7.0596 16.6816L7.05744 15.0963H3.78309L3.78165 18.321L3.89946 18.3483C3.96432 18.3635 4.67806 18.3757 5.48548 18.3754C6.74218 18.375 6.9616 18.3674 7.00772 18.321Z" fill="white" />
          <path d="M10.8474 20.5033C10.8499 19.1471 10.8441 18.9868 10.7908 18.936C10.7389 18.8866 10.5436 18.8794 9.20299 18.8794C7.89224 18.8794 7.6667 18.8873 7.62022 18.9335C7.5741 18.9799 7.56618 19.2058 7.56618 20.5188C7.56618 21.8641 7.57302 22.0565 7.62274 22.104C7.67138 22.1505 7.90053 22.1581 9.22605 22.1581C10.7368 22.1581 10.7739 22.1566 10.8088 22.086C10.8312 22.0417 10.8459 21.4332 10.8474 20.5033Z" fill="white" />
        </svg>
      </button>

      {/* O'ng arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 z-10 w-[50px] h-[50px] lg:w-[63px] lg:h-[63px] rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition-all group"
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3132 3.31471V1.65735V0L14.6279 0V3.31471L11.3132 3.31471Z" fill="white" />
          <path d="M0 14.6279L0 12.9706L0 11.3132H3.31471L3.31471 14.6279H0Z" fill="white" />
          <path d="M22.6265 14.6279V12.9706V11.3132H25.9412V14.6279H22.6265Z" fill="white" />
          <path d="M11.3132 25.9412V24.2838V22.6265H14.6279V25.9412H11.3132Z" fill="white" />
          <path d="M15.1442 7.01385C15.1277 6.99727 15.1097 6.26371 15.1043 5.38351L15.0942 3.78309H18.375V5.36838C18.375 6.72957 18.3674 6.96124 18.321 7.00772C18.2745 7.0542 18.0554 7.06068 16.7205 7.05276C15.8702 7.04771 15.1608 7.03042 15.1442 7.01385Z" fill="white" />
          <path d="M18.8769 9.20804C18.8744 7.83532 18.8801 7.6739 18.9335 7.62274C18.9853 7.57338 19.1774 7.56618 20.4852 7.56618C21.3964 7.56618 22.0129 7.58023 22.1581 7.63824V10.8449H20.5728C19.2116 10.8449 18.9799 10.8373 18.9335 10.7908C18.8873 10.7447 18.8791 10.5166 18.8769 9.20804Z" fill="white" />
          <path d="M3.78309 14.6279L3.78201 12.9706L3.78129 11.3132H7.05636L7.06177 14.6279H3.78309Z" fill="white" />
          <path d="M7.56582 14.6279L7.56762 12.9706L7.56942 11.3132H10.842L10.8445 14.6279H7.56582Z" fill="white" />
          <path d="M11.3129 14.6279V12.9706V11.3132H14.6276V14.6279H11.3129Z" fill="white" />
          <path d="M15.096 14.6279L15.0956 12.9706L15.0952 11.3132L18.3772 11.3132L18.3746 14.6279L15.096 14.6279Z" fill="white" />
          <path d="M18.8791 14.6279L18.8812 12.9706L18.883 11.3132H22.1552L22.1577 14.6279H18.8791Z" fill="white" />
          <path d="M18.9335 18.321C18.887 18.2745 18.8798 18.0446 18.8816 16.6816L18.8837 15.0963H22.1581L22.1595 18.321L22.0417 18.3483C21.9769 18.3635 21.2631 18.3757 20.4557 18.3754C19.199 18.375 18.9796 18.3674 18.9335 18.321Z" fill="white" />
          <path d="M15.0938 20.5033C15.0913 19.1471 15.097 18.9868 15.1504 18.936C15.2023 18.8866 15.3975 18.8794 16.7382 18.8794C18.0489 18.8794 18.2745 18.8873 18.321 18.9335C18.3671 18.9799 18.375 19.2058 18.375 20.5188C18.375 21.8641 18.3682 22.0565 18.3184 22.104C18.2698 22.1505 18.0406 22.1581 16.7151 22.1581C15.2044 22.1581 15.1673 22.1566 15.1324 22.086C15.11 22.0417 15.0952 21.4332 15.0938 20.5033Z" fill="white" />
        </svg>
      </button>

      {/* Rasm konteyneri */}
      <div
        ref={containerRef}
        className="w-[80vw] max-md:w-full h-[80vh] overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="transition-transform duration-200 max-md:w-[85%]"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        >
          <img
            ref={imageRef}
            src={images[currentIndex]?.image}
            alt=""
            className="select-none h-[80vh] max-md:h-auto w-auto max-md:w-[100%]"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* Pastdagi indikator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Zoom foiz indikatori */}
      {isZoomed && (
        <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs">
          {Math.round(scale * 100)}%
        </div>
      )}
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const InfoBlock = () => (
    <>
      <Helmet>
        <title>Каталог запчастей для спецтехники в СПБ – МАКСАН ГРУПП</title>
        <meta name="description" content="Каталог запчастей, агрегатов, шин и комплектующих для спецтехники в Санкт-Петербурге. Caterpillar, Atlas Copco, Epiroc, Cummins и другие бренды." />
      </Helmet>
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

      {/* Modal */}
      {modalOpen && (
        <ImageModal
          images={images}
          initialIndex={selectedImageIndex}
          onClose={() => setModalOpen(false)}
        />
      )}

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
          <div
            className="w-full h-[550px] rounded-xl border border-gray-200 bg-gray-100 overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(activeThumb)}
          >
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
        <div
          className="w-full h-[300px] rounded-xl border border-gray-200 bg-gray-100 overflow-hidden mb-3 cursor-pointer"
          onClick={() => handleImageClick(activeThumb)}
        >
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