import { Link } from "react-router-dom";

export default function Section() {
    return (
        <section className="relative mt-[60px] lg:mt-[100px] min-h-[500px] sm:min-h-[600px] lg:h-[760px] bg-[url('/quvonch/img/car.png')] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
                className="absolute top-0 left-0 w-full h-full object-cover z-20"
                src="/quvonch/img/darkcar.png"
                alt=""
            />
            <div className="relative z-30 max-w-[1491px] mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                <h1 className="font-semibold text-[32px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-tight uppercase text-white">
                    О нашей
                </h1>
                <p className="font-semibold mt-2 sm:mt-[10px] text-[32px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-tight uppercase text-white">
                    Компании
                </p>
                <p className="text-white mt-5 sm:mt-[25px] font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed max-w-[900px] px-2">
                    ООО "МАКСАН ГРУПП" — ваш надежный партнер в поставках оборудования и запасных частей для
                    горно-шахтной отрасли. Мы сотрудничаем с мировыми лидерами: CATERPILLAR, ATLAS COPCO, EPIROC,
                    SANDVIK, CUMMINS, DEUTZ, ALLISON, DANA, KESSLER.
                </p>
                <Link
                    to="/about"
                    className="w-full max-w-[380px] h-[72px] sm:h-[96px] mt-6 sm:mt-[25px] rounded-[20px] sm:rounded-[25px] bg-white text-[14px] font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    Подробнее о компании
                </Link>
            </div>
        </section>
    );
}
