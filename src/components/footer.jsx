import { useState } from "react";
import { Link } from "react-router-dom";
import ModalExample from "../pages/quvonch/modal";

const pages = [
    { label: "Шины для спецтехники", path: "/equipment" },
    { label: "Двигатели", path: "/engines" },
    { label: "Контакты", path: "/contact" },
    { label: "Официальный дилер WOLF", path: "/manufacturer/1" },
    { label: "Новости", path: "/news" },
    { label: "Запчасти", path: "/catalog" },
    { label: "О нас", path: "/about" },
];

const contacts = [
    { label: "Запчасти для спецтехники", phoneDisplay: "+7 (921) 905-70-21", phoneRaw: "79219057021" },
    { label: "Шины для спецтехники", phoneDisplay: "+7 (921) 306-51-25", phoneRaw: "79213065125" },
];

const EMAIL = "info@maksan-group.ru";
const TELEGRAM_URL = "https://t.me/+79219057021";
const MAX_URL = "https://max.ru/u/f9LHodD0cOJ4erYW8Q4KRK1pyz3ew3Nr5xQ0wGKsJG-rClhgV-fYvhQ0UGY";

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <footer className="bg-black mt-10 lg:mt-0">
            <div className="max-w-[1437px] mx-auto px-4 sm:px-6 pt-8 sm:pt-[42px] pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_2fr] gap-10 lg:gap-[40px]">
                    {/* 1fr — Logo + tagline */}
                    <div className="flex flex-col items-center lg:items-start gap-5 max-md:text-center">
                        <img
                            src="/flogo.svg"
                            alt="Максан групп"
                            loading="lazy"
                            decoding="async"
                            width="180"
                            height="60"
                            className="w-[170px] h-auto object-contain"
                        />
                        <p className="font-normal text-sm text-[#FFFFFF99] leading-relaxed">
                            Всё необходимое для обслуживания и ремонта спецтехники
                        </p>
                    </div>

                    {/* 2fr — Страницы + Контакты */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
                        <div className="max-md:text-center">
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

                        {/* Контакты */}
                        <div className="max-md:text-center">
                            <h2 className="font-semibold text-lg sm:text-[22px] uppercase text-white mb-4 sm:mb-[18px]">
                                Контакты
                            </h2>
                            <div className="flex flex-col gap-5 sm:gap-[25px]">
                                {contacts.map((c) => (
                                    <div key={c.phoneRaw} className="flex flex-col gap-1.5">
                                        <p className="font-normal text-sm text-[#FFFFFF99]">{c.label}</p>
                                        <a
                                            href={`tel:+${c.phoneRaw}`}
                                            className="text-white font-semibold text-base sm:text-lg hover:text-[#9db4e8] transition-colors"
                                        >
                                            {c.phoneDisplay}
                                        </a>
                                    </div>
                                ))}
                                <div className="flex flex-col gap-1.5">
                                    <p className="font-normal text-sm text-[#FFFFFF99]">Электронный адрес</p>
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className="text-white font-semibold text-base sm:text-lg hover:text-[#9db4e8] transition-colors break-all"
                                    >
                                        {EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2fr — CTA — Оставить заявку */}
                    <div className="bg-[#FFFFFF0D] border border-white/5 rounded-[25px] p-6 sm:p-8 flex flex-col justify-center">
                        <h3 className="font-semibold text-2xl sm:text-[32px] leading-tight uppercase text-white">
                            Нужна консультация специалиста?
                        </h3>
                        <p className="font-normal text-sm sm:text-base text-[#FFFFFF99] mt-3 sm:mt-4 leading-relaxed">
                            Поможем с подбором запчастей и комплектующих для спецтехники. Оставьте заявку — ответим в кратчайшие сроки.
                        </p>
                        <button
                            type="button"
                            onClick={() => setModalOpen(true)}
                            className="mt-6 sm:mt-8 h-[60px] sm:h-[72px] w-full sm:w-fit sm:px-12 bg-white text-black rounded-[20px] font-semibold text-[14px] uppercase tracking-wide hover:bg-[#ECF0F5] active:scale-[0.98] transition-all"
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>

                {/* Ijtimoiy havolalar */}
                <div className="flex justify-center mt-10 sm:mt-[49px]">
                    <div className="h-[56px] w-fit px-5 rounded-[25px] flex items-center gap-5 bg-[#FFFFFF1A]">
                        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <img src="/quvonch/icon/tg.png" alt="Telegram" className="w-[26px] h-[22px] object-contain cursor-pointer" />
                        </a>
                        <div className="h-[31px] w-[2px] bg-[#FFFFFF33]" />
                        <a href={MAX_URL} target="_blank" rel="noopener noreferrer" aria-label="MAX">
                            <img src="/quvonch/icon/icon1.png" alt="MAX" className="w-[24px] h-[24px] object-contain cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Pastki qator */}
                <div className="max-w-[1437px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mt-8 sm:mt-[40px] pt-6 border-t border-white/10 text-center">
                    <p className="font-medium text-[13px] sm:text-[15px] text-[#FFFFFF66]">
                        © 2025 «Максан групп». Все права защищены.
                    </p>
                    <p className="font-medium text-[13px] sm:text-[15px] text-[#FFFFFF66]">Политика конфиденциальности</p>
                    <a
                        href="https://usertech.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[13px] sm:text-[15px] text-[#FFFFFF66] hover:text-white transition-colors"
                    >
                        Сделано в UserTech
                    </a>
                </div>
            </div>

            {modalOpen && <ModalExample setOpen={setModalOpen} />}
        </footer>
    );
}
