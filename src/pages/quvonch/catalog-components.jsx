import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CatalogCart from "../../components/ui/CatalogCart";

export default function CatalogComponents() {
    const [active, setActive] = useState(null); // null = hammasi
    const [manufacturers, setManufacturers] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Barcha productlardan manufacturerlarni ajratib olish
    useEffect(() => {
        fetch("https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=80")
            .then((res) => res.json())
            .then((data) => {
                const all = data.results || [];
                setProducts(all.slice(0, 8));

                const unique = [];
                const seen = new Set();
                all.forEach((p) => {
                    if (p.manufacturer && !seen.has(p.manufacturer.id)) {
                        seen.add(p.manufacturer.id);
                        unique.push({ ...p.manufacturer, count: all.filter(x => x.manufacturer?.id === p.manufacturer.id).length });
                    }
                });
                setManufacturers(unique);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    // Filter bosilganda
    useEffect(() => {
        if (active === null) return;
        setLoading(true);
        fetch(`https://adent-admin.migfastkg.ru/api/v1/products/?page=1&page_size=80&manufacturer=${active}`)
            .then((res) => res.json())
            .then((data) => setProducts((data.results || []).slice(0, 8)))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [active]);

    return (
        <div>
            <div className="w-[1436px] m-auto">
                <h1 className="font-semibold text-[85px] leading-[100%] uppercase mb-[20px]">
                    каталог запчастей
                </h1>
                <div className="flex gap-[5px] bg-[#EEF3F8] p-3 rounded-[30px] w-fit">
                    <button
                        onClick={() => setActive(null)}
                        className={`p-5 rounded-full font-semibold text-[15px] leading-none tracking-normal transition ${active === null ? "bg-white text-black" : "bg-white text-gray-400 hover:text-black"
                            }`}
                    >
                        Все
                    </button>
                    {manufacturers.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setActive(m.id)}
                            className={`p-5 rounded-full font-semibold text-[15px] leading-none tracking-normal transition ${active === m.id ? "bg-white text-black" : "bg-white text-gray-400 hover:text-black"
                                }`}
                        >
                            {m.name} <span className="text-gray-500">({m.count})</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-[10px] mt-10">
                    {loading
                        ? <div className="col-span-4 flex justify-center py-10 text-gray-400">Загрузка...</div>
                        : products.map((item) => <CatalogCart key={item.id} item={item} />)
                    }
                </div>

                <div className="flex justify-center">
                    <Link
                        to="/catalog"
                        className="cursor-pointer w-[299px] h-[96px] rounded-[25px] bg-white text-[14px] font-medium mt-[30px] flex justify-center items-center"
                    >
                        Смотреть все
                    </Link>
                </div>
            </div>
        </div>
    );
}