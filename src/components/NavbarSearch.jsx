import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const API = "https://admin.maksan-group.ru/api/v1/products/";

function SearchResults({ results, loading, query, onSelect }) {
    if (!query.trim()) return null;

    if (loading) {
        return (
            <div className="p-4 text-center text-[14px] text-gray-400">Поиск...</div>
        );
    }

    if (results.length === 0) {
        return (
            <div className="p-4 text-center text-[14px] text-gray-400">
                Ничего не найдено
            </div>
        );
    }

    return (
        <ul className="py-2">
            {results.map((item) => (
                <li key={item.id}>
                    <Link
                        to={`/catalog/${item.id}`}
                        onClick={onSelect}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#F5F5F5] active:bg-[#EEF3F8] transition-colors"
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] bg-[#F5F5F5] overflow-hidden shrink-0">
                            {item.thumbnail ? (
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                                    —
                                </div>
                            )}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="font-semibold text-[13px] sm:text-[14px] uppercase leading-tight line-clamp-2 text-black">
                                {item.name}
                            </p>
                            {item.artikul && (
                                <p className="text-[12px] text-gray-400 mt-0.5">Арт: {item.artikul}</p>
                            )}
                            {item.price != null && (
                                <p className="text-[13px] font-medium text-[#355094] mt-1">
                                    {Number(item.price).toLocaleString("ru-RU")}₽
                                </p>
                            )}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export function NavbarSearchDesktop({ className = "" }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const wrapRef = useRef(null);

    const showDropdown = focused && query.trim().length > 0;

    useEffect(() => {
        const q = query.trim();
        if (!q) {
            setResults([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const controller = new AbortController();
        const timer = setTimeout(() => {
            const params = new URLSearchParams({
                name: q,
                page: "1",
                page_size: "20",
            });
            fetch(`${API}?${params}`, { signal: controller.signal })
                .then((res) => res.json())
                .then((data) => setResults(data.results || []))
                .catch((err) => {
                    if (err.name !== "AbortError") setResults([]);
                })
                .finally(() => setLoading(false));
        }, 300);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = useCallback(() => {
        setQuery("");
        setFocused(false);
        setResults([]);
    }, []);

    return (
        <div ref={wrapRef} className={`relative flex-1 min-w-0 max-w-[614px] ${className}`}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                placeholder="Поиск товара по названию, артиклу"
                className="text-[#111111] placeholder:text-[#11111133] outline-none px-[34px] pr-[90px] w-full h-[90px] rounded-[69px] bg-white"
                type="text"
                autoComplete="off"
            />
            <div className="pointer-events-none absolute top-[7px] right-[7px] w-[76px] h-[76px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
                <CiSearch size={22} className="text-black/60" />
            </div>

            {showDropdown && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[200] bg-white rounded-[25px] shadow-xl border border-black/5 max-h-[min(420px,60vh)] overflow-y-auto">
                    <SearchResults
                        results={results}
                        loading={loading}
                        query={query}
                        onSelect={handleSelect}
                    />
                </div>
            )}
        </div>
    );
}

export function NavbarSearchMobile({ onClose, inMenu = false }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const delay = inMenu ? 300 : 80;
        const t = setTimeout(() => inputRef.current?.focus(), delay);
        return () => clearTimeout(t);
    }, [inMenu]);

    useEffect(() => {
        const q = query.trim();
        if (!q) {
            setResults([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const controller = new AbortController();
        const timer = setTimeout(() => {
            const params = new URLSearchParams({
                name: q,
                page: "1",
                page_size: "20",
            });
            fetch(`${API}?${params}`, { signal: controller.signal })
                .then((res) => res.json())
                .then((data) => setResults(data.results || []))
                .catch((err) => {
                    if (err.name !== "AbortError") setResults([]);
                })
                .finally(() => setLoading(false));
        }, 300);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [query]);

    const handleSelect = () => {
        setQuery("");
        onClose?.();
    };

    const wrapperClass = inMenu
        ? "px-4 pb-2"
        : "p-4 border-b border-black/5 bg-[#ECF0F5] shrink-0";

    return (
        <div className={wrapperClass}>
            <div className="relative">
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Поиск товара..."
                    className="w-full h-[52px] rounded-full bg-white outline-none px-5 pr-12 text-[14px] text-[#111111] placeholder:text-[#11111166]"
                    type="text"
                    autoComplete="off"
                />
                {query ? (
                    <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center"
                        aria-label="Очистить"
                    >
                        <IoClose size={18} />
                    </button>
                ) : (
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                        <CiSearch size={18} />
                    </div>
                )}
            </div>

            {query.trim() && (
                <div className="mt-2 bg-white rounded-[20px] shadow-sm border border-black/5 max-h-[50vh] overflow-y-auto">
                    <SearchResults
                        results={results}
                        loading={loading}
                        query={query}
                        onSelect={handleSelect}
                    />
                </div>
            )}
        </div>
    );
}
