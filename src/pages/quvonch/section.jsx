export default function Section() {
    return (
        <div className="relative mt-[100px] h-[760px] bg-[url('/quvonch/img/car.png')] bg-cover bg-center overflow-hidden">
            <div className=" max-w-[1491px] m-auto">

                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img className="absolute top-0 left-0 w-full h-full object-cover z-20" src="/quvonch/img/darkcar.png" alt="" />
                <div className="relative z-30  h-full">
                    <h1 className="font-semibold mt-[36px] text-[50px] md:text-[70px] lg:text-[100px] leading-[100%] uppercase text-white text-center">
                        О нашей
                    </h1>
                    <p className="font-semibold mt-[10px] text-[50px] md:text-[70px] lg:text-[100px] leading-[100%] uppercase text-white text-center">
                        Компании
                    </p>
                    <p className=" text-white  mt-[25px] font-normal text-[17px] leading-[100%] tracking-normal text-center">ООО "МАКСАН ГРУПП" — ваш надежный партнер в поставках оборудования и запасных частей для горно-шахтной отрасли. Мы сотрудничаем с мировыми лидерами: CATERPILLAR,  ATLAS COPCO, EPIROC, SANDVIK, CUMMINS, DEUTZ, ALLISON, DANA, KESSLER. Наша цель — предлагать лучшие решения, обеспечивая надежность и эффективность вашей работы.  Профессиональная команда всегда готова поддержать вас на каждом этапе сотрудничества.</p>
                    <div className="flex justify-center mt-[25px] mb-[262px]">

                        <button className="w-[380px] h-[96px] rounded-[25px] bg-[white] text-[14px] font-medium  ">Подробнее о компании</button>
                    </div>
                </div>
            </div>
        </div>
    );
}