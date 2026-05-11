import CatalogComponents from "./catalog-components";
import Compony from "./compony";
import Detail from "./detail";
import Hero from "./hero";
import Section from "./section";
import Sertifikat from "./sertifikat";

export default function Home() {
    return (
        <div>
            <Hero />
            <CatalogComponents />
            <Detail/>
            <Section/>
            <Sertifikat/>
            <Compony/>
        </div>
    )
}
