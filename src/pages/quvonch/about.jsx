import { Helmet } from "react-helmet-async";
import Aboutehero from "./aboutehero";
import Detail from "./detail";
import Homenew from "./homenew";
import Sertifikat from "./sertifikat";


export default function About() {
    return (
        <div>
            <Helmet>
                <title>Поставщик запчастей в Санкт-Петербурге – МАКСАН ГРУПП</title>
                <meta name="description" content="МАКСАН ГРУПП более 10 лет поставляет оборудование, агрегаты, запчасти и шины для спецтехники в СПБ. Работаем с техникой для сложных условий эксплуатации." />
            </Helmet>
            <Aboutehero />
            <Detail />
            <Homenew />
            <Sertifikat />
        </div>
    )
}
