import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Badge from "../../components/ui/Badge";
import CantactForm from "../../components/ui/cantactform";

const API = "https://adent-admin.migfastkg.ru/api/v1";
const fixUrl = (u) => (u ? String(u).replace(/^http:\/\//, "https://") : u);

export default function Engines() {
    const [manufacturers, setManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API}/engines/manufacturers/`)
            .then((res) => res.json())
            .then((data) => setManufacturers(Array.isArray(data) ? data : []))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Двигатели для спецтехники в СПБ – МАКСАН ГРУПП</title>
                <meta
                    name="description"
                    content="Поставки двигателей для спецтехники от ведущих брендов горно-шахтного направления. Для заявок звоните: +7 (999) 035-27-17."
                />
            </Helmet>

            <div className="mt-[30px] md:mt-[50px] max-w-[1436px] mx-auto max-md:px-4">
                <Badge text={"Двигатели"} />
            </div>

            <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-5">
                <h1 className="font-semibold text-[36px] sm:text-[48px] md:text-[85px] leading-none tracking-normal uppercase">
                    Двигатели
                </h1>
            </div>

            <div className="max-w-[1436px] m-auto px-4 md:px-0 mt-[30px] md:mt-[50px] mb-[100px]">
                {loading ? (
                    <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>
                ) : manufacturers.length === 0 ? (
                    <div className="py-20 text-center text-gray-400 text-[16px]">Производители не найдены</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[10px]">
                        {manufacturers.map((m) => (
                            <Link
                                key={m.id}
                                to={`/engines/${m.slug}`}
                                className="group bg-white rounded-[20px] md:rounded-[25px] p-5 md:p-6 flex items-center justify-between gap-4 hover:bg-[#355094] transition-colors"
                            >
                                <h2 className="font-semibold text-[20px] md:text-[24px] uppercase text-[#111111] group-hover:text-white transition-colors">
                                    {m.name}
                                </h2>
                                {m.logo ? (
                                    <img
                                        src={fixUrl(m.logo)}
                                        alt={m.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-[44px] md:h-[56px] w-auto max-w-[140px] object-contain shrink-0"
                                    />
                                ) : (
                                    <span className="w-10 h-10 rounded-full bg-[#F5F5F5] group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#355094] group-hover:text-white">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="max-md:px-5">
                <CantactForm />
            </div>
        </div>
    );
}
