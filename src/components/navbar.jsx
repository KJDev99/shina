import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navItems = [
    { name: "О нас", path: "/about" },
    { name: "Шины для спецтехники", path: "/catalog" },
    { name: "Производитель", path: "/catalog" },
    { name: "Каталог", path: "/catalog" },
    { name: "Новости", path: "/news" },
    { name: "Контакты", path: "/contact" },
    { name: "Официальный дилер WOLF", path: "/manufacturer/1" },
];

function MobileMenu({ open, onClose }) {
    const [visible, setVisible] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (open) {
            setVisible(true);
            const timer = setTimeout(() => setAnimateIn(true), 20);
            return () => clearTimeout(timer);
        }
        setAnimateIn(false);
        const timer = setTimeout(() => setVisible(false), 300);
        return () => clearTimeout(timer);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!visible) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Меню навигации"
        >
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                    animateIn ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            <div
                className={`absolute top-0 right-0 h-[100dvh] w-[min(100%,360px)] bg-[#ECF0F5] shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out ${
                    animateIn ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-black/5 shrink-0">
                    <Link to="/" onClick={onClose}>
                        <div className="flex justify-center items-center w-[120px] h-[52px] rounded-[40px] bg-white">
                            <img
                                src="/quvonch/icon/navbaricon1.svg"
                                alt="Максан групп"
                                className="h-8 w-auto"
                            />
                        </div>
                    </Link>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Закрыть меню"
                        className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center"
                    >
                        <IoClose size={26} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto overscroll-contain">
                    <div className="p-4 relative">
                        <input
                            placeholder="Поиск товара..."
                            className="w-full h-[52px] rounded-full bg-white outline-none px-5 pr-14 text-[14px] text-[#11111166]"
                            type="search"
                        />
                        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                            <CiSearch size={18} />
                        </div>
                    </div>

                    <nav className="flex flex-col gap-1 px-4 pb-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={`${item.path}-${index}`}
                                to={item.path}
                                onClick={onClose}
                                className="font-normal text-[14px] uppercase px-5 py-4 rounded-[20px] bg-white active:bg-[#F5F5F5] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 pt-0 space-y-4 border-t border-black/5">
                        <div className="bg-white rounded-[20px] p-4 space-y-3">
                            <div>
                                <p className="text-[12px] text-gray-500">Номер менеджера</p>
                                <a href="tel:+79219057021" className="font-semibold text-[16px]">
                                    +7 (921) 905-70-21
                                </a>
                            </div>
                            <div>
                                <p className="text-[12px] text-gray-500">Продажа шин</p>
                                <a href="tel:+79213065125" className="font-semibold text-[16px]">
                                    +7 (921) 306-51-25
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-2 pb-4">
                            <img className="w-8 h-8" src="/quvonch/icon/tg.png" alt="Telegram" />
                            <img className="w-8 h-8" src="/quvonch/icon/icon1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default function Navbar() {
    const [active, setActive] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [menuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#ECF0F5]/95 backdrop-blur-sm">
                <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0 mt-3 lg:mt-[15px] pb-3 lg:pb-0">
                    {/* Mobile header */}
                    <div className="flex lg:hidden items-center justify-between gap-3">
                        <Link to="/" className="shrink-0">
                            <div className="flex justify-center items-center w-[120px] h-[56px] sm:w-[140px] sm:h-[64px] rounded-[40px] bg-white">
                                <img
                                    src="/quvonch/icon/navbaricon1.svg"
                                    alt="Максан групп"
                                    className="h-8 sm:h-9 w-auto object-contain"
                                />
                            </div>
                        </Link>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link
                                to="/basket"
                                className="relative w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] bg-white flex items-center justify-center rounded-full shrink-0"
                            >
                                <img
                                    src="/quvonch/icon/shopicon.svg"
                                    alt="Корзина"
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 flex items-center justify-center rounded-full text-[11px] font-semibold text-white bg-[#355094] border-2 border-[#ECF0F5]">
                                        {cartCount > 99 ? "99+" : cartCount}
                                    </span>
                                )}
                            </Link>

                            <button
                                type="button"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Открыть меню"
                                aria-expanded={menuOpen}
                                className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] bg-white flex items-center justify-center rounded-full shrink-0"
                            >
                                <HiMenuAlt3 className="text-[22px] sm:text-[24px] text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Desktop top bar */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link to="/" className="shrink-0">
                            <div className="flex justify-center items-center w-[190px] h-[90px] rounded-[69px] bg-white">
                                <img src="/quvonch/icon/navbaricon1.svg" alt="Максан групп" />
                            </div>
                        </Link>

                        <div className="flex-1 relative min-w-0">
                            <input
                                placeholder="Поиск товара по названию, артиклу"
                                className="text-[#11111133] outline-none px-[34px] w-full max-w-[614px] h-[90px] rounded-[69px] bg-white"
                                type="text"
                            />
                            <div className="absolute cursor-pointer top-[7px] right-[7px] w-[76px] h-[76px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
                                <CiSearch size={22} />
                            </div>
                        </div>

                        <div className="flex items-center gap-5 shrink-0">
                            <img className="w-[35px] h-[30px] cursor-pointer" src="/quvonch/icon/tg.png" alt="Telegram" />
                            <img className="w-[30px] h-[30px] cursor-pointer" src="/quvonch/icon/icon1.png" alt="" />
                        </div>

                        <div className="flex items-center shrink-0">
                            <span className="flex flex-col items-end gap-[6px] mr-[25px]">
                                <p className="font-normal text-[14px] text-gray-500">Номер менеджера</p>
                                <a href="tel:+79219057021" className="font-semibold text-[18px] whitespace-nowrap">
                                    +7 (921) 905-70-21
                                </a>
                            </span>
                            <div className="h-[38px] bg-gray-300 w-[2px]" />
                            <span className="flex flex-col items-end gap-[6px] ml-[25px]">
                                <p className="font-normal text-[14px] text-gray-500">Продажа шин</p>
                                <a href="tel:+79213065125" className="font-semibold text-[18px] whitespace-nowrap">
                                    +7 (921) 306-51-25
                                </a>
                            </span>
                        </div>

                        <Link
                            to="/basket"
                            className="w-[59px] h-[59px] bg-white ml-[25px] flex items-center justify-center rounded-full relative shrink-0"
                        >
                            <img src="/quvonch/icon/shopicon.svg" alt="Корзина" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center border-4 border-[#f5ecec] rounded-full text-sm font-semibold text-white bg-[#355094]">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Desktop nav pills */}
                    <nav className="hidden lg:flex mt-[15px] w-full max-w-[1400px] min-h-[88px] px-7 bg-white rounded-[69px] items-center gap-4 overflow-x-auto">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setActive(index)}
                                className={`font-normal text-[16px] uppercase whitespace-nowrap transition-all duration-300 shrink-0 ${
                                    active === index
                                        ? "bg-[#F5F5F5] px-[27px] py-[18px] rounded-full"
                                        : "hover:bg-[#F5F5F5] px-[27px] py-[18px] rounded-full"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <MobileMenu open={menuOpen} onClose={closeMenu} />
        </>
    );
}
