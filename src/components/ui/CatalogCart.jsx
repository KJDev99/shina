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
            <Link to={`/catalog/${item?.id}`} className="block w-full bg-white rounded-[20px] sm:rounded-[25px] p-3 ">
                <div className="flex justify-between items-start">
                    <div className="text-[12px] sm:text-[14px] font-medium min-w-[80px] h-[32px] sm:h-[39px] px-3 sm:w-[93px] rounded-[12px] sm:rounded-[15px] flex justify-center items-center bg-[#F5F5F5] text-nowrap">
                        {item?.is_stock ? "В наличии" : "Под заказ"}
                    </div>
                    <div className="w-[36px] h-[36px] sm:w-[43px] sm:h-[43px] rounded-full bg-[#F5F5F5] flex justify-center items-center shrink-0">
                        <img src="/quvonch/icon/arrow.svg" alt="" className="w-3 sm:w-auto" />
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
                            className={`flex items-center justify-center w-[48px] h-[48px] sm:w-[59px] sm:h-[59px] rounded-full transition-colors relative shrink-0 ${
                                isInCart ? "bg-[#355094] cursor-default" : "bg-[#F5F5F5] hover:bg-[#e0e0e0]"
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
