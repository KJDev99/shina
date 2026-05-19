import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Toast({ message, onClose }) {
    useEffect(() => {
        const t = setTimeout(onClose, 2500);
        return () => clearTimeout(t);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 bg-[#355094] text-white px-6 py-4 rounded-[20px] shadow-lg flex items-center gap-3 max-w-sm sm:max-w-none ml-auto">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-medium text-[15px]">{message}</span>
        </div>
    );
}

export default function CatalogCart({ item }) {
    const { cart, addToCart } = useCart();
    const [toast, setToast] = useState(false);

    const isInCart = cart.some((i) => i.id === item?.id);
    const price = item?.price ? Number(item.price).toLocaleString("ru-RU") + "₽" : "";

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isInCart) return;
        addToCart(item, 1);
        setToast(true);
    };

    return (
        <>
            {toast && (
                <Toast message="Товар добавлен в корзину" onClose={() => setToast(false)} />
            )}
            <Link data-aos="fade-up" data-aos-delay={item?.id * 150} to={`/catalog/${item?.id}`} className="block w-full bg-white rounded-[20px] sm:rounded-[25px] p-3 ">
                <div className="flex justify-between items-start">
                    <div className="text-[12px] sm:text-[14px] font-medium min-w-[80px] h-[32px] sm:h-[39px] px-3 sm:w-[93px] rounded-[12px] sm:rounded-[15px] flex justify-center items-center bg-[#F5F5F5] text-nowrap">
                        {item?.is_stock ? "В наличии" : "Под заказ"}
                    </div>
                    <div className="w-[36px] h-[36px] sm:w-[43px] sm:h-[43px] group rounded-full bg-[#F5F5F5] flex justify-center items-center shrink-0 translate-all hover:bg-[#355094]">
                        <svg className="group-hover:[&_path]:fill-white" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <div className="w-full aspect-[332/257] rounded-[16px] sm:rounded-[25px] overflow-hidden mt-2 sm:mt-[10px] bg-[#F5F5F5]">
                    <img src={item?.thumbnail} alt={item?.name} className="w-full h-full object-cover" />
                </div>
                <div className="px-1 sm:px-[14px] flex flex-col pb-2 sm:pb-0">
                    <h2 className="text-[#11111166] font-medium text-[12px] sm:text-[14px] mt-2 sm:mt-[10px]">
                        {item?.manufacturer?.name}
                    </h2>
                    <h2 className="font-semibold text-[16px] sm:text-[22px] uppercase mt-1 sm:mt-2 min-h-[40px] sm:h-[64px] line-clamp-2">
                        {item?.name}
                    </h2>
                    <div className="flex items-center justify-between mt-4 sm:mt-[35px] gap-2">
                        <span className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-[10px] min-w-0">
                            <h2 className="text-[18px] sm:text-[22px] font-semibold">{price}</h2>
                            <p className="text-[12px] sm:text-[14px] text-[#11111166]">Цена с НДС</p>
                        </span>
                        <button
                            onClick={handleAddToCart}
                            className={`flex items-center justify-center w-[48px] h-[48px] sm:w-[59px] sm:h-[59px] rounded-full transition-colors relative shrink-0 ${isInCart ? "bg-[#355094] cursor-default" : "bg-[#F5F5F5] hover:bg-[#e0e0e0]"
                                }`}
                        >
                            {isInCart ? (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            ) : (
                                <img src="/quvonch/icon/shopicon.svg" alt="" className="w-5 sm:w-auto" />
                            )}
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
}
