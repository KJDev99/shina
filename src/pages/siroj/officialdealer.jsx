import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CantactForm from '../../components/ui/cantactform'

export default function Officialdealer() {
    return (
        <div className="max-w-[1436px] m-auto py-10 px-4">
            <Helmet>
                <title>Официальный дилер WOLF в СПБ – МАКСАН ГРУПП</title>
                <meta name="description" content="Поставка оборудования, запасных частей, агрегатов, Санкт-Петербург, Невский проспект д. 30 офис 5.4" />
            </Helmet>
            <div className="flex items-center gap-2 mb-6 text-[12px] sm:text-[14px]">
                <Link to="/" className="text-black hover:text-[#355094] transition-colors">Главная</Link>
                <span className="text-[#999999] text-[10px]">❯</span>
                <span className="text-[#999999]">Официальный дилер в WOLF</span>
            </div>
            <h2 className="font-semibold text-[45px] sm:text-[90px] lg:text-[150px] leading-none tracking-normal uppercase">
                Официальный
            </h2>

            <h2 className="font-semibold text-[45px] sm:text-[90px] lg:text-[150px] leading-none tracking-normal uppercase text-[#0000001A] flex justify-end">
                Дилер Wolf
            </h2>
            <div className="flex max-w-[895px] mx-auto justify-center mt-16 mb-25 max-md:mb-0 max-md:mt-10">
                <img src="/ser.png" alt="" className='w-full' />
            </div>
            <div className="mt-10 sm:mt-16">
                <CantactForm />
            </div>
        </div>
    )
}
