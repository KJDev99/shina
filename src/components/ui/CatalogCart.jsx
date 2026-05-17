import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Toast({ message, onClose }) {
    useEffect(() => {
        const t = setTimeout(onClose, 2500);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 bg-[#355094] text-white px-6 py-4 rounded-[20px] shadow-lg flex items-center gap-3">
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
    const price = item?.price
        ? Number(item.price).toLocaleString("ru-RU") + "₽"
        : "";

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
                <Toast
                    message="Товар добавлен в корзину"
                    onClose={() => setToast(false)}
                />
            )}
            <Link to={`/catalog/${item?.id}`} className="">
                <div className="flex justify-between">
                    <div className="text-[14px] font-medium w-[93px] h-[39px] rounded-[15px] flex justify-center items-center bg-[#F5F5F5]">
                        {item?.is_stock ? "В наличии" : "Под заказ"}
                    </div>
                    <div className="w-[43px] h-[43px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
                        <img src="/quvonch/icon/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="w-[332px] h-[257px] rounded-[25px] overflow-hidden mt-[10px]">
                    <img src={item?.thumbnail} alt={item?.name} className="w-full h-full object-cover" />
                </div>
                <div className="px-[14px] flex flex-col">
                    <h2 className="text-[#11111166] font-medium text-[14px] leading-none tracking-normal mt-[10px]">
                        {item?.manufacturer?.name}
                    </h2>
                    <h2 className="font-semibold text-[22px] leading-none tracking-normal uppercase mt-2 h-[44px] line-clamp-2">
                        {item?.name}
                    </h2>
                    <div className="flex items-center justify-between mt-[35px]">
                        <span className="flex items-center gap-[10px]">
                            <h2 className="text-[22px] font-semibold">{price}</h2>
                            <p className="text-[14px] text-[#11111166]">Цена с НДС</p>
                        </span>
                        <button
                            onClick={handleAddToCart}
                            className={`flex items-center justify-center w-[59px] h-[59px] rounded-full transition-colors relative ${isInCart
                                ? "bg-[#355094] cursor-default"
                                : "bg-[#F5F5F5] hover:bg-[#e0e0e0]"
                                }`}
                        >
                            {isInCart ? (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            ) : (
                                <img src="/quvonch/icon/shopicon.svg" alt="" />
                            )}
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
}