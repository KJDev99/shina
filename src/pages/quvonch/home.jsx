import { Helmet } from "react-helmet-async";
import CatalogComponents from "./catalog-components";
import Compony from "./compony";
import Detail from "./detail";
import Hero from "./hero";
import HomeNew from "./homenew";
import Section from "./section";
import Sertifikat from "./sertifikat";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Запчасти и шины для спецтехники в СПБ – МАКСАН ГРУПП</title>
                <meta name="description" content="Поставка запчастей, агрегатов, оборудования и шин для горно-шахтной и спецтехники в Санкт-Петербурге. Подбор по бренду, артикулу и модели." />
            </Helmet>
            <Hero />
            <CatalogComponents />
            <Detail />
            <HomeNew />
            <Section />
            <Sertifikat />
            <Compony />
        </div>
    )
}
