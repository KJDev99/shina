import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { NavbarSearchDesktop, NavbarSearchMobile } from "./NavbarSearch";
import MobileSearchOverlay from "./MobileSearchOverlay";

const navItems = [
    { name: "О нас", path: "/about" },
    { name: "Шины для спецтехники", path: "/equipment", dropdownType: "tires" },
    { name: "Каталог", path: "/catalog", dropdownType: "spare_parts" },
    { name: "Новости", path: "/news" },
    { name: "Контакты", path: "/contact" },
    { name: "Официальный дилер WOLF", path: "/manufacturer/1" },
];

const extractUnique = (results) => {
    const unique = [];
    const seen = new Set();
    (results || []).forEach((p) => {
        if (p.manufacturer && !seen.has(p.manufacturer.id)) {
            seen.add(p.manufacturer.id);
            unique.push(p.manufacturer);
        }
    });
    return unique;
};

// Manufacturerlarni type bo'yicha bir marta yuklab keshlaymiz
const manufacturerCache = {};
async function fetchManufacturers(type) {
    if (manufacturerCache[type]) return manufacturerCache[type];
    const res = await fetch(
        `https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=1000&type=${type}`
    );
    const data = await res.json();
    const unique = extractUnique(data.results);
    manufacturerCache[type] = unique;
    return unique;
}

/* ----------------------- DESKTOP HOVER DROPDOWN ----------------------- */
function HoverDropdown({ anchorRef, type, onEnter, onLeave, onPick }) {
    const [list, setList] = useState(manufacturerCache[type] || []);
    const [loading, setLoading] = useState(!manufacturerCache[type]);
    const [pos, setPos] = useState(null);

    useEffect(() => {
        const node = anchorRef.current;
        if (node) {
            const rect = node.getBoundingClientRect();
            setPos({ top: rect.bottom + 10, left: rect.left });
        }
    }, [anchorRef]);

    useEffect(() => {
        if (manufacturerCache[type]) return;
        let active = true;
        fetchManufacturers(type)
            .then((d) => { if (active) setList(d); })
            .catch((err) => console.error(err))
            .finally(() => { if (active) setLoading(false); });
        return () => { active = false; };
    }, [type]);

    if (!pos) return null;

    return createPortal(
        <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={{
                position: "fixed",
                top: pos.top,
                left: pos.left,
                zIndex: 9998,
                width: 340,
                maxHeight: "72vh",
                overflowY: "auto",
            }}
            className="bg-white rounded-[28px] shadow-2xl border border-black/5 p-3"
        >
            {loading ? (
                <div className="px-5 py-5 text-[14px] text-gray-400">Загрузка...</div>
            ) : list.length === 0 ? (
                <div className="px-5 py-5 text-[14px] text-gray-400">Не найдено</div>
            ) : (
                <div className="flex flex-col gap-1">
                    {list.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => onPick(m.id)}
                            className="text-left px-6 py-4 rounded-full font-semibold text-[14px] uppercase text-black/80 hover:bg-[#355094] hover:text-white transition-colors w-full"
                        >
                            {m.name}
                        </button>
                    ))}
                </div>
            )}
        </div>,
        document.body
    );
}

function NavDropdownItem({ item }) {
    const navigate = useNavigate();
    const anchorRef = useRef(null);
    const closeTimer = useRef(null);
    const [open, setOpen] = useState(false);

    const handleEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpen(true);
    };
    const handleLeave = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpen(false), 120);
    };

    useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

    const handlePick = (id) => {
        navigate(`${item.path}?manufacturer=${id}`);
        setOpen(false);
    };

    return (
        <div
            ref={anchorRef}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="shrink-0"
        >
            <Link
                to={item.path}
                className={`font-normal text-[16px] uppercase whitespace-nowrap transition-all duration-300 flex items-center gap-2 px-[27px] py-[18px] rounded-full ${open ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]"}`}
            >
                {item.name}
                <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </Link>

            {open && (
                <HoverDropdown
                    anchorRef={anchorRef}
                    type={item.dropdownType}
                    onEnter={handleEnter}
                    onLeave={handleLeave}
                    onPick={handlePick}
                />
            )}
        </div>
    );
}

/* ----------------------- MOBILE DROPDOWN ITEM ----------------------- */
function MobileNavDropdownItem({ item, onClose }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [list, setList] = useState(manufacturerCache[item.dropdownType] || []);
    const [loading, setLoading] = useState(false);

    const toggle = () => {
        const next = !open;
        setOpen(next);
        if (next && list.length === 0) {
            setLoading(true);
            fetchManufacturers(item.dropdownType)
                .then((d) => setList(d))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }
    };

    const handlePick = (id) => {
        navigate(`${item.path}?manufacturer=${id}`);
        onClose();
    };

    return (
        <div className="px-4">
            <div className="flex items-stretch gap-2">
                <Link
                    to={item.path}
                    onClick={onClose}
                    className="flex-1 font-normal text-[14px] uppercase px-5 py-4 rounded-[20px] bg-white active:bg-[#F5F5F5] transition-colors flex items-center"
                >
                    {item.name}
                </Link>
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={`${item.name} — производители`}
                    aria-expanded={open}
                    className="w-[56px] shrink-0 rounded-[20px] bg-white flex items-center justify-center active:bg-[#F5F5F5] transition-colors"
                >
                    <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
            </div>

            {open && (
                <div className="mt-1 bg-white rounded-[20px] p-3 flex flex-col gap-1 max-h-[50vh] overflow-y-auto">
                    {loading ? (
                        <p className="text-[13px] text-gray-400 px-2 py-2">Загрузка...</p>
                    ) : list.length === 0 ? (
                        <p className="text-[13px] text-gray-400 px-2 py-2">Не найдено</p>
                    ) : (
                        list.map((m) => (
                            <button
                                key={`mob-${item.dropdownType}-${m.id}`}
                                onClick={() => handlePick(m.id)}
                                className="text-left px-4 py-3 rounded-[14px] font-semibold text-[13px] uppercase text-black/80 bg-[#F5F5F5] active:bg-[#355094] active:text-white transition-colors w-full"
                            >
                                {m.name}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

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
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!visible) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog" aria-modal="true" aria-label="Меню навигации">
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                className={`absolute top-0 right-0 h-[100dvh] w-[min(100%,360px)] bg-[#ECF0F5] shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out ${animateIn ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-black/5 shrink-0">
                    <Link to="/" onClick={onClose}>
                        <div className="flex justify-center items-center w-[120px] h-[56px] sm:w-[140px] sm:h-[64px] rounded-[40px] bg-white">
                            <img
                                src="/quvonch/icon/navbaricon1.svg"
                                alt="Максан групп"
                                className="h-11 w-auto object-contain"
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
                    <NavbarSearchMobile onClose={onClose} inMenu />

                    <nav className="flex flex-col gap-1 pb-4">
                        {navItems.map((item, index) => {
                            if (item.dropdownType) {
                                return <MobileNavDropdownItem key={index} item={item} onClose={onClose} />;
                            }
                            return (
                                <div key={`${item.path}-${index}`} className="px-4">
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className="font-normal text-[14px] uppercase px-5 py-4 rounded-[20px] bg-white active:bg-[#F5F5F5] transition-colors block"
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    <div className="p-4 pt-0 space-y-4 border-t border-black/5">
                        <div className="bg-white rounded-[20px] p-4 space-y-3">
                            <div>
                                <p className="text-[12px] text-gray-500">Номер менеджера</p>
                                <a href="tel:+79219057021" className="font-semibold text-[16px]">+7 (921) 905-70-21</a>
                            </div>
                            <div>
                                <p className="text-[12px] text-gray-500">Продажа шин</p>
                                <a href="tel:+79213065125" className="font-semibold text-[16px]">+7 (921) 306-51-25</a>
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
    const [searchOpen, setSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);
    const closeSearch = () => setSearchOpen(false);

    // Scroll bo'lganda tepa qismni fixed qilish
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setSearchOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, [menuOpen]);

    return (
        <>
            {/* FIXED TOP SECTION - Scroll qilganda yuqorida qoladi */}
            <div className={`
                fixed top-0 left-0 right-0 z-[60] bg-[#ECF0F5] transition-all duration-300
                ${isScrolled ? 'shadow-md backdrop-blur-sm bg-[#ECF0F5]/95' : ''}
            `}>
                <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                    {/* Mobile header */}
                    <div className="flex lg:hidden items-center justify-between gap-3 py-3">
                        <Link to="/" className="shrink-0">
                            <div className="flex justify-center items-center w-[120px] h-[56px] sm:w-[140px] sm:h-[64px] rounded-[40px] bg-white">
                                <img
                                    src="/quvonch/icon/navbaricon1.svg"
                                    alt="Максан групп"
                                    className="h-11 w-auto object-contain"
                                />
                            </div>
                        </Link>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={() => setSearchOpen(true)}
                                aria-label="Поиск товаров"
                                className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] bg-white flex items-center justify-center rounded-full shrink-0"
                            >
                                <CiSearch className="text-[22px] sm:text-[24px] text-black" />
                            </button>

                            <Link
                                to="/basket"
                                className="relative w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] bg-white flex items-center justify-center rounded-full shrink-0"
                            >
                                <img src="/quvonch/icon/shopicon.svg" alt="Корзина" className="w-5 h-5 sm:w-6 sm:h-6" />
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
                    <div className="hidden lg:flex items-center gap-6 py-3">
                        <Link to="/" className="shrink-0">
                            <div className="flex justify-center items-center w-[190px] h-[90px] rounded-[69px] bg-white">
                                <img src="/quvonch/icon/navbaricon1.svg" alt="Максан групп" className="h-[70px] w-auto" />
                            </div>
                        </Link>

                        <NavbarSearchDesktop />

                        <div className="flex items-center gap-5 shrink-0">
                            <img className="w-[35px] h-[30px] cursor-pointer" src="/quvonch/icon/tg.png" alt="Telegram" />
                            <img className="w-[30px] h-[30px] cursor-pointer" src="/quvonch/icon/icon1.png" alt="" />
                        </div>

                        <div className="flex items-center shrink-0">
                            <span className="flex flex-col items-end gap-[6px] mr-[25px]">
                                <p className="font-normal text-[14px] text-gray-500">Номер менеджера</p>
                                <a href="tel:+79219057021" className="font-semibold text-[18px] whitespace-nowrap">+7 (921) 905-70-21</a>
                            </span>
                            <div className="h-[38px] bg-gray-300 w-[2px]" />
                            <span className="flex flex-col items-end gap-[6px] ml-[25px]">
                                <p className="font-normal text-[14px] text-gray-500">Продажа шин</p>
                                <a href="tel:+79213065125" className="font-semibold text-[18px] whitespace-nowrap">+7 (921) 306-51-25</a>
                            </span>
                        </div>

                        <Link
                            to="/basket"
                            className="w-[55px] h-[55px] bg-white ml-[20px] flex items-center justify-center rounded-full relative shrink-0"
                        >
                            <img src="/quvonch/icon/shopicon.svg" alt="Корзина" className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center border-4 border-[#f5ecec] rounded-full text-sm font-semibold text-white bg-[#355094]">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Placeholder - fixed qism bo'sh joy qoldirmasligi uchun */}
            <div className="hidden mt-3 lg:block" style={{ height: '106px' }}></div>
            <div className="lg:hidden" style={{ height: '80px' }}></div>

            {/* NORMAL HEADER - Linklar qismi (fixed emas) */}
            <header className="bg-[#ECF0F5]">
                <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0">
                    {/* Desktop nav pills - BU QISM FIXED EMAS, normal scroll qiladi */}
                    <nav className="hidden lg:flex w-full max-w-[1400px] min-h-[88px] px-7 bg-white rounded-[69px] items-center justify-between gap-4 relative">
                        {navItems.map((item, index) => {
                            if (item.dropdownType) {
                                return <NavDropdownItem key={index} item={item} />;
                            }
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setActive(index)}
                                    className={`font-normal text-[16px] uppercase whitespace-nowrap transition-all duration-300 shrink-0 ${active === index
                                        ? "bg-[#F5F5F5] px-[27px] py-[18px] rounded-full"
                                        : "hover:bg-[#F5F5F5] px-[27px] py-[18px] rounded-full"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </header>

            <MobileMenu open={menuOpen} onClose={closeMenu} />
            <MobileSearchOverlay open={searchOpen} onClose={closeSearch} />
        </>
    );
}
