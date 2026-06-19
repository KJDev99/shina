import { Link } from "react-router-dom";

export default function Section() {
    return (
        <section className="relative mt-[60px] lg:mt-[100px] min-h-[500px] sm:min-h-[600px] lg:h-[760px] bg-[url('/quvonch/img/car.png')] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(180deg, #05082A 12.1%, rgba(5, 8, 42, 0) 136.03%)" }} />
            <img
                className="absolute top-0 left-0 w-full h-full object-cover z-20"
                src="/quvonch/img/darkcar.png"
                alt=""
                loading="lazy"
                decoding="async"
                width="1491"
                height="760"
            />
            <div className="relative z-30 max-w-[1491px] mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-start pt-9  text-center">
                <h2 className="font-semibold text-[32px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-tight uppercase text-white">
                    О нашей
                </h2>
                <p className="font-semibold text-[32px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-tight uppercase text-white " style={{ fontFamily: "Tektur, sans-serif" }}>
                    Компании
                </p>
                <p className="text-white mt-5 sm:mt-[25px] font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[100%] max-w-[1490px] px-2">
                    ООО "МАКСАН ГРУПП" — ваш надежный партнер в поставках оборудования и запасных частей для горно-шахтной отрасли. Мы сотрудничаем с мировыми лидерами: CATERPILLAR, ATLAS COPCO, EPIROC, SANDVIK, CUMMINS, DEUTZ, ALLISON, DANA, KESSLER. Наша цель — предлагать лучшие решения, обеспечивая надежность и эффективность вашей работы. Профессиональная команда всегда готова поддержать вас на каждом этапе сотрудничества.
                </p>
                <Link
                    to="/about"
                    className="w-full max-w-[380px] h-[72px] sm:h-[96px] mt-6 sm:mt-[25px] rounded-[20px] sm:rounded-[25px] text-[14px] font-medium flex items-center justify-center"
                    style={{ background: '#ffffff', color: '#111111' }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)'
                        e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = '#ffffff'
                        e.currentTarget.style.color = '#111111'
                    }}
                >
                    Подробнее о компании
                </Link>
            </div>
        </section>
    );
}
