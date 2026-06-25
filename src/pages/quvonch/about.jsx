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
                <meta name="description" content="ООО «МАКСАН ГРУПП» — эксперт в поставке оборудования и запчастей для горно-шахтного оборудования. Мы сотрудничаем с топ-производителями. Звоните: +7 (999) 035-27-17." />
            </Helmet>
            <Aboutehero />
            <Detail />
            <Homenew />
            <Sertifikat />
        </div>
    )
}
