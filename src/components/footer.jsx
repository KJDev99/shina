import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const pages = [
    { label: "Шины для спецтехники", path: "/catalog" },
    { label: "Контакты", path: "/contact" },
    { label: "Официальный дилер WOLF", path: "/manufacturer/1" },
    { label: "Новости", path: "/news" },
    { label: "Каталог", path: "/catalog" },
    { label: "О нас", path: "/about" },
];

const brands = ["Caterpillar", "Atlas Copco", "Epiroc", "Sandvik", "Cummins", "DEUTZ"];

export default function Footer() {
    return (
        <footer className="bg-black mt-10 lg:mt-0">
            <div className="max-w-[1437px] mx-auto px-4 sm:px-6 pt-8 sm:pt-[42px] pb-6">
                <div className="flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-[50px]">
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/quvonch/img/footer.png"
                            alt="Максан групп"
                            className="w-[180px] sm:w-auto max-w-full h-auto object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-[80px] xl:gap-[191px]">
                        <div>
                            <h2 className="font-semibold text-lg sm:text-[22px] uppercase text-white mb-4 sm:mb-[18px]">
                                Страницы
                            </h2>
                            <ul className="flex flex-col gap-3 sm:gap-[14px]">
                                {pages.map((p) => (
                                    <li key={p.path + p.label}>
                                        <Link
                                            to={p.path}
                                            className="font-normal text-sm sm:text-base text-[#FFFFFF99] hover:text-white transition-colors"
                                        >
                                            {p.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg sm:text-[22px] uppercase text-white mb-4 sm:mb-[18px]">
                                Производитель
                            </h2>
                            <ul className="flex flex-col gap-3 sm:gap-[14px]">
                                {brands.map((b) => (
                                    <li key={b}>
                                        <Link
                                            to="/catalog"
                                            className="font-normal text-sm sm:text-base text-[#FFFFFF99] hover:text-white transition-colors"
                                        >
                                            {b}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg sm:text-[22px] uppercase text-white mb-4 sm:mb-[18px]">
                                Контакты
                            </h2>
                            <div className="flex flex-col gap-5 sm:gap-[25px]">
                                <span>
                                    <p className="font-normal text-sm text-[#FFFFFF99]">Номер менеджера</p>
                                    <a
                                        href="tel:+79219057021"
                                        className="text-white font-semibold text-base sm:text-lg mt-1.5 block"
                                    >
                                        +7 (921) 905-70-21
                                    </a>
                                </span>
                                <span>
                                    <p className="font-normal text-sm text-[#FFFFFF99]">Продажа шин для спецтехники</p>
                                    <a
                                        href="tel:+79213065125"
                                        className="text-white font-semibold text-base sm:text-lg mt-1.5 block"
                                    >
                                        +7 (921) 306-51-25
                                    </a>
                                </span>
                                <span>
                                    <p className="font-normal text-sm text-[#FFFFFF99]">Электронный адрес</p>
                                    <a
                                        href="mailto:Info@mail.ru"
                                        className="text-white font-semibold text-base sm:text-lg mt-1.5 block break-all"
                                    >
                                        Info@mail.ru
                                    </a>
                                </span>
                            </div>
                            </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 sm:mt-[49px]">
                    <div className="w-[120px] h-[56px] rounded-[25px] text-white items-center justify-center flex gap-5 bg-[#FFFFFF1A]">
                        <FaTelegramPlane size={26} />
                        <div className="h-[31px] w-[2px] bg-[#FFFFFF33]" />
                        <img src="/quvonch/icon/per.png" alt="" />
                    </div>
                </div>

                <div className="max-w-[1437px] mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-2 mt-8 sm:mt-[49px] pt-6 border-t border-white/10 sm:border-0 text-center sm:text-left">
                    <p className="font-medium text-[13px] sm:text-[15px] text-[#FFFFFF66]">
                        © 2025 «Максан групп». Все права защищены.
                    </p>
                    <p className="font-medium text-[13px] sm:text-[15px] text-[#FFFFFF66]">Политика конфиденциальности</p>
                    <p className="font-medium text-[13px] sm:text-[15px] text-[#FFFFFF66]">Сделано в UserTech</p>
                </div>
            </div>
        </footer>
    );
}
