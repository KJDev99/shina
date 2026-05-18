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
    { name: "Шины для спецтехники", path: "/equipment" },
    { name: "Производитель", path: null, hasDropdown: true },
    { name: "Каталог", path: "/catalog" },
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

function ManufacturerDropdown({ anchorRef, onClose }) {
    const navigate = useNavigate();
    const [catalogManufacturers, setCatalogManufacturers] = useState([]);
    const [equipmentManufacturers, setEquipmentManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [catRes, eqRes] = await Promise.all([
                    fetch("https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=1000&type=spare_parts"),
                    fetch("https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=1000&type=tires"),
                ]);
                const catData = await catRes.json();
                const eqData = await eqRes.json();
                setCatalogManufacturers(extractUnique(catData.results));
                setEquipmentManufacturers(extractUnique(eqData.results));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    useEffect(() => {
        const handleOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                anchorRef.current &&
                !anchorRef.current.contains(e.target)
            ) {
                onClose();
            }
        };
        const handleKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("keydown", handleKey);
        };
    }, [onClose, anchorRef]);

    const rect = anchorRef.current?.getBoundingClientRect();
    if (!rect) return null;

    const handleSelect = (manufacturerId, type) => {
        navigate(`${type === "catalog" ? "/catalog" : "/equipment"}?manufacturer=${manufacturerId}`);
        onClose();
    };

    return createPortal(
        <div
            ref={dropdownRef}
            style={{
                position: "fixed",
                top: rect.bottom + 8,
                left: rect.left,
                zIndex: 9998,
                minWidth: 320,
                maxWidth: 480,
                maxHeight: "60vh",
                overflowY: "auto",
            }}
            className="bg-white rounded-[20px] shadow-xl border border-black/5"
        >
            {loading ? (
                <div className="p-5 text-[14px] text-gray-400">Загрузка...</div>
            ) : (
                <div className="p-4 flex flex-col gap-4">
                    {equipmentManufacturers.length > 0 && (
                        <div>
                            <p className="text-[11px] uppercase font-semibold text-gray-400 mb-2 px-1 tracking-wider">
                                Шины для спецтехники
                            </p>
                            <div className="flex flex-col gap-[5px]">
                                {equipmentManufacturers.map((m) => (
                                    <button
                                        key={`eq-${m.id}`}
                                        onClick={() => handleSelect(m.id, "equipment")}
                                        className="h-[52px] rounded-[14px] flex items-center px-4 cursor-pointer bg-[#F5F5F5] hover:bg-[#355094] hover:text-white transition-colors text-left w-full"
                                    >
                                        <span className="font-semibold text-[14px] uppercase">{m.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {catalogManufacturers.length > 0 && (
                        <div>
                            <p className="text-[11px] uppercase font-semibold text-gray-400 mb-2 px-1 tracking-wider">
                                Каталог запчастей
                            </p>
                            <div className="flex flex-col gap-[5px]">
                                {catalogManufacturers.map((m) => (
                                    <button
                                        key={`cat-${m.id}`}
                                        onClick={() => handleSelect(m.id, "catalog")}
                                        className="h-[52px] rounded-[14px] flex items-center px-4 cursor-pointer bg-[#F5F5F5] hover:bg-[#355094] hover:text-white transition-colors text-left w-full"
                                    >
                                        <span className="font-semibold text-[14px] uppercase">{m.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {catalogManufacturers.length === 0 && equipmentManufacturers.length === 0 && (
                        <p className="text-[14px] text-gray-400 p-2">Производители не найдены</p>
                    )}
                </div>
            )}
        </div>,
        document.body
    );
}

function MobileManufacturerSection({ onClose }) {
    const navigate = useNavigate();
    const [catalogManufacturers, setCatalogManufacturers] = useState([]);
    const [equipmentManufacturers, setEquipmentManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [catRes, eqRes] = await Promise.all([
                    fetch("https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=1000&type=spare_parts"),
                    fetch("https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=1000&type=tires"),
                ]);
                const catData = await catRes.json();
                const eqData = await eqRes.json();
                setCatalogManufacturers(extractUnique(catData.results));
                setEquipmentManufacturers(extractUnique(eqData.results));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    const handleSelect = (manufacturerId, type) => {
        navigate(`${type === "catalog" ? "/catalog" : "/equipment"}?manufacturer=${manufacturerId}`);
        onClose();
    };

    return (
        <div className="px-4 pb-2">
            <button
                onClick={() => setOpen((v) => !v)}
                className="font-normal text-[14px] uppercase px-5 py-4 rounded-[20px] bg-white w-full flex items-center justify-between"
            >
                <span>Производитель</span>
                <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {open && (
                <div className="mt-1 bg-white rounded-[20px] p-3 flex flex-col gap-3 max-h-[50vh] overflow-y-auto">
                    {loading ? (
                        <p className="text-[13px] text-gray-400 px-2 py-2">Загрузка...</p>
                    ) : (
                        <>
                            {equipmentManufacturers.length > 0 && (
                                <div>
                                    <p className="text-[10px] uppercase font-semibold text-gray-400 mb-1 px-1 tracking-wider">
                                        Шины для спецтехники
                                    </p>
                                    <div className="flex flex-col gap-[4px]">
                                        {equipmentManufacturers.map((m) => (
                                            <button
                                                key={`mob-eq-${m.id}`}
                                                onClick={() => handleSelect(m.id, "equipment")}
                                                className="h-[48px] rounded-[12px] flex items-center px-4 cursor-pointer bg-[#F5F5F5] active:bg-[#355094] active:text-white transition-colors text-left w-full"
                                            >
                                                <span className="font-semibold text-[13px] uppercase">{m.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {catalogManufacturers.length > 0 && (
                                <div>
                                    <p className="text-[10px] uppercase font-semibold text-gray-400 mb-1 px-1 tracking-wider">
                                        Каталог запчастей
                                    </p>
                                    <div className="flex flex-col gap-[4px]">
                                        {catalogManufacturers.map((m) => (
                                            <button
                                                key={`mob-cat-${m.id}`}
                                                onClick={() => handleSelect(m.id, "catalog")}
                                                className="h-[48px] rounded-[12px] flex items-center px-4 cursor-pointer bg-[#F5F5F5] active:bg-[#355094] active:text-white transition-colors text-left w-full"
                                            >
                                                <span className="font-semibold text-[13px] uppercase">{m.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
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
                        <div className="flex justify-center items-center w-[120px] h-[52px] rounded-[40px] bg-white">
                            <img src="/quvonch/icon/navbaricon1.svg" alt="Максан групп" className="h-8 w-auto" />
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
                            if (item.hasDropdown) {
                                return <MobileManufacturerSection key={index} onClose={onClose} />;
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
    const [manufacturerDropdownOpen, setManufacturerDropdownOpen] = useState(false);
    const manufacturerBtnRef = useRef(null);
    const { cartCount } = useCart();
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);
    const closeSearch = () => setSearchOpen(false);

    useEffect(() => {
        setMenuOpen(false);
        setSearchOpen(false);
        setManufacturerDropdownOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
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
                    <div className="hidden lg:flex items-center gap-6">
                        <Link to="/" className="shrink-0">
                            <div className="flex justify-center items-center w-[190px] h-[90px] rounded-[69px] bg-white">
                                <img src="/quvonch/icon/navbaricon1.svg" alt="Максан групп" />
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
                    <nav className="hidden lg:flex mt-[15px] w-full max-w-[1400px] min-h-[88px] px-7 bg-white rounded-[69px] items-center gap-4 overflow-x-auto relative">
                        {navItems.map((item, index) => {
                            if (item.hasDropdown) {
                                return (
                                    <button
                                        key={index}
                                        ref={manufacturerBtnRef}
                                        type="button"
                                        onClick={() => setManufacturerDropdownOpen((v) => !v)}
                                        className={`font-normal text-[16px] uppercase whitespace-nowrap transition-all duration-300 shrink-0 flex items-center gap-2 px-[27px] py-[18px] rounded-full ${manufacturerDropdownOpen ? "bg-[#355094] text-white" : "hover:bg-[#F5F5F5]"}`}
                                    >
                                        {item.name}
                                        <svg
                                            width="14" height="14" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            className={`transition-transform duration-200 ${manufacturerDropdownOpen ? "rotate-180" : ""}`}
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                );
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

            {manufacturerDropdownOpen && (
                <ManufacturerDropdown
                    anchorRef={manufacturerBtnRef}
                    onClose={() => setManufacturerDropdownOpen(false)}
                />
            )}
        </>
    );
}