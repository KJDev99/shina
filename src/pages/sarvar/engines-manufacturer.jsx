import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Badge from "../../components/ui/Badge";
import CatalogCart from "../../components/ui/CatalogCart";
import CantactForm from "../../components/ui/cantactform";

const API = "https://admin.maksan-group.ru/api/v1";
const PAGE_SIZE = 12;

// Backend media URL'lari http:// bilan kelishi mumkin -> https saytda mixed-content bo'lmasligi uchun
const fixUrl = (u) => (u ? String(u).replace(/^http:\/\//, "https://") : u);

export default function EnginesManufacturer() {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [orderPrice, setOrderPrice] = useState("");

    useEffect(() => {
        setPage(1);
    }, [slug]);

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams({ page, page_size: PAGE_SIZE });
        if (orderPrice) params.set("order_price", orderPrice);
        fetch(`${API}/engines/manufacturers/slug/${slug}/?${params}`)
            .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
            .then((d) => setData(d))
            .catch((err) => {
                console.error(err);
                setData(null);
            })
            .finally(() => setLoading(false));
    }, [slug, page, orderPrice]);

    if (loading && !data) {
        return <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>;
    }
    if (!data) {
        return <div className="flex justify-center py-20 text-gray-400">Производитель не найден</div>;
    }

    const m = data.manufacturer || {};
    const products = data.products || {};
    const results = (products.results || []).map((p) => ({ ...p, thumbnail: fixUrl(p.thumbnail) }));
    const totalPages = products.total_pages || 1;
    const title = `Оригинальные двигатели ${m.name}`;
    const features = (m.features || []).slice().sort((a, b) => (a.ordering || 0) - (b.ordering || 0));

    const getPaginationPages = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }
        pages.push(1, 2, 3, 4);
        if (page > 5) pages.push("...");
        if (page > 4 && page < totalPages - 3) pages.push(page);
        if (totalPages - 3 > 4) pages.push("...");
        pages.push(totalPages - 1, totalPages);
        return [...new Set(pages)];
    };

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{m.seo_title || `${title} – МАКСАН ГРУПП`}</title>
                <meta
                    name="description"
                    content={m.seo_description || `${title} в Санкт-Петербурге. Подбор, цена и наличие двигателей ${m.name}.`}
                />
            </Helmet>

            {/* Breadcrumb */}
            <div className="mt-[30px] max-w-[1436px] mx-auto max-md:px-4">
                <Badge text={title} />
            </div>

            {/* H1 */}
            <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-0">
                <h1 className="font-semibold text-[34px] sm:text-[56px] md:text-[60px] leading-[1.05] uppercase text-[#111111]">
                    {title}
                </h1>
            </div>

            {/* Hero banner */}
            {m.hero_image && (
                <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-4 md:mt-[20px]">
                    <img
                        src={fixUrl(m.hero_image)}
                        alt={m.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[1436/517] object-cover rounded-[16px] md:rounded-[25px]"
                    />
                </div>
            )}

            {/* Description */}
            {m.description && (
                <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-4 md:mt-[20px]">
                    <p className="font-normal text-[15px] md:text-[18px] leading-[1.4] text-[#111111] whitespace-pre-line">
                        {m.description}
                    </p>
                </div>
            )}

            {/* Преимущества (features) */}
            {features.length > 0 && (
                <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-10 md:mt-[60px]">
                    {m.features_heading && (
                        <h2 className="font-semibold text-[20px] md:text-[24px] text-[#111111] mb-5 md:mb-[23px]">
                            {m.features_heading}
                        </h2>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
                        {features.map((f) => (
                            <div
                                key={f.id}
                                className="bg-white rounded-[15px] p-[22px] md:py-[37px] md:px-[22px] flex flex-col md:max-h-[559px]"
                            >
                                {f.icon && (
                                    <img src={fixUrl(f.icon)} alt="" className="w-12 h-12 mb-4 object-contain" />
                                )}
                                <h3 className="font-medium text-[20px] md:text-[25px] leading-[1.28] text-black uppercase">
                                    {f.title}
                                </h3>
                                <p className="font-normal text-[15px] md:text-[17px] leading-[1.3] text-[#848B8C] mt-4 md:mt-auto md:pt-10">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Mahsulotlar */}
            <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-10 md:mt-[60px] mb-[100px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                    <h2 className="font-semibold text-[22px] md:text-[32px] uppercase text-[#111111]">
                        Двигатели {m.name}
                    </h2>
                    <div className="relative w-full sm:w-[221px]">
                        <select
                            value={orderPrice}
                            onChange={(e) => {
                                setOrderPrice(e.target.value);
                                setPage(1);
                            }}
                            className="w-full h-[55px] md:h-[60px] rounded-[52px] bg-white px-5 text-[14px] md:text-[16px] outline-none appearance-none cursor-pointer"
                        >
                            <option value="">Сортировать по: Цене</option>
                            <option value="asc">Сначала дешевле</option>
                            <option value="desc">Сначала дороже</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>
                ) : results.length === 0 ? (
                    <div className="py-20 text-center text-gray-400 text-[16px]">Двигатели не найдены</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2">
                        {results.map((item) => (
                            <CatalogCart key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                        {getPaginationPages().map((p, i) =>
                            p === "..." ? (
                                <div key={`dot-${i}`} className="w-8 flex justify-center items-end pb-3 text-[#888] font-bold">
                                    ...
                                </div>
                            ) : (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] font-semibold transition-colors ${page === p ? "bg-[#355094] text-white" : "bg-white text-[#111]"}`}
                                >
                                    {p}
                                </button>
                            )
                        )}
                        {page < totalPages && (
                            <button
                                onClick={() => setPage((v) => v + 1)}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px]"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        )}
                    </div>
                )}
            </div>

            <div className="max-md:px-5">
                <CantactForm />
            </div>
        </div>
    );
}
