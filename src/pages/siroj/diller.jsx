import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CantactForm from "../../components/ui/cantactform";
import { Helmet } from "react-helmet-async";

export default function Diller() {
  const { id } = useParams();
  const [manufacturer, setManufacturer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://adent-admin.migfastkg.ru/api/v1/manufacturers/${id}/`)
      .then((res) => res.json())
      .then((data) => setManufacturer(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="flex justify-center py-20 text-gray-400">Загрузка...</div>;
  if (!manufacturer) return null;

  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      <Helmet>
        <title>Официальный дилер WOLF в СПБ – МАКСАН ГРУПП</title>
        <meta name="description" content="МАКСАН ГРУПП – официальный дилер WOLF в Санкт-Петербурге. Поставка продукции WOLF для техники и оборудования, консультация по подбору и заказу." />
      </Helmet>
      <div className="flex items-center gap-2 mb-6 text-[12px] sm:text-[14px]">
        <Link to="/" className="text-black hover:text-[#355094] transition-colors">Главная</Link>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">{manufacturer.name}</span>
      </div>

      <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-[42px] sm:text-[120px] font-bold uppercase tracking-tighter leading-[1] sm:leading-[0.9] text-black">
          {manufacturer.name}
        </h1>
        <img
          src={manufacturer.logo}
          alt={manufacturer.name}
          className="w-[120px] sm:w-[180px] object-contain"
        />
      </div>

      <div>
        <p className="font-normal text-[14px] sm:text-lg mb-[12px] sm:mb-[15px] whitespace-pre-line">
          {manufacturer.description}
        </p>

        {manufacturer.hero_image && (
          <div className="mt-6 sm:mt-8">
            <img
              src={manufacturer.hero_image}
              alt={manufacturer.name}
              className="w-full h-auto rounded-[16px] sm:rounded-[24px]"
            />
          </div>
        )}

        <div className="mt-10 sm:mt-16">
          <CantactForm />
        </div>
      </div>
    </div>
  );
}