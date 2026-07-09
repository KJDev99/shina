import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CatalogCart from "../../components/ui/CatalogCart";

export default function CatalogComponents() {
    const [active, setActive] = useState(null);
    const [manufacturers, setManufacturers] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://admin.maksan-group.ru/api/v1/products/?page=1&page_size=80")
            .then((res) => res.json())
            .then((data) => {
                const all = data.results || [];
                setProducts(all.slice(0, 8));

                const unique = [];
                const seen = new Set();
                all.forEach((p) => {
                    if (p.manufacturer && !seen.has(p.manufacturer.id)) {
                        seen.add(p.manufacturer.id);
                        unique.push({
                            ...p.manufacturer,
                            count: all.filter((x) => x.manufacturer?.id === p.manufacturer.id).length,
                        });
                    }
                });
                setManufacturers(unique);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setLoading(true);
        if (active === null) {
            fetch(`https://admin.maksan-group.ru/api/v1/products/?page=1&page_size=80`)
                .then((res) => res.json())
                .then((data) => setProducts((data.results || []).slice(0, 8)))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        } else {
            fetch(`https://admin.maksan-group.ru/api/v1/products/?page=1&page_size=80&manufacturer=${active}`)
                .then((res) => res.json())
                .then((data) => setProducts((data.results || []).slice(0, 8)))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [active]);

    return (
        <section className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-0">
            <h2 className="font-semibold text-[36px] sm:text-[60px] lg:text-[85px] leading-none uppercase mb-4 sm:mb-[20px]">
                каталог запчастей
            </h2>

            <div className="flex gap-2 overflow-x-auto pb-2 bg-[#EEF3F8] p-2 sm:p-3 rounded-[20px] sm:rounded-[30px] w-full sm:w-fit max-w-full scrollbar-hide">
                <button
                    onClick={() => setActive(null)}
                    className={`shrink-0 px-4 sm:px-5 py-3 sm:py-5 rounded-full font-semibold text-[13px] sm:text-[15px] transition ${active === null ? "bg-white text-black" : "bg-white text-gray-400 hover:text-black"
                        }`}
                >
                    Все
                </button>
                {manufacturers.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => setActive(m.id)}
                        className={`shrink-0 px-4 sm:px-5 py-3 sm:py-5 rounded-full font-semibold text-[13px] sm:text-[15px] whitespace-nowrap transition ${active === m.id ? "bg-white text-black" : "bg-white text-gray-400 hover:text-black"
                            }`}
                    >
                        {m.name} <span className="text-gray-500">({m.count})</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-[10px] mt-6 sm:mt-10">
                {loading ? (
                    <div className="col-span-full flex justify-center py-10 text-gray-400">Загрузка...</div>
                ) : (
                    products.map((item) => <CatalogCart key={item.id} item={item} />)
                )}
            </div>

            <div className="flex justify-center mt-6 sm:mt-[30px]">
                <Link
                    to="/catalog"
                    className="w-full sm:w-[299px] h-[72px] sm:h-[96px] rounded-[20px] sm:rounded-[25px] text-[14px] font-medium flex justify-center items-center transition-all"
                    style={{ background: '#ffffff', color: '#111111' }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)'
                        e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = '#ffffff'
                        e.currentTarget.style.color = '#111111'
                    }}
                >
                    Смотреть все
                </Link>
            </div>
        </section>
    );
}
