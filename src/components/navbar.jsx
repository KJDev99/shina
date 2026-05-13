import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [active, setActive] = useState(null);


    const navItems = [
        { name: "О нас", path: "/about" },
        { name: "Шины для спецтехники", path: "/catalog" },
        { name: "Производитель", path: "/catalog" },
        { name: "Каталог", path: "/catalog" },
        { name: "Новости", path: "/news" },
        { name: "Контакты", path: "/contact" },
        { name: "Официальный дилер WOLF", path: "/Diller" },
    ];


    return (
        <div>
            <div className="max-w-[1436px] m-auto mt-[15px]">
                <div className="flex ">
                    <Link to={'/'}>
                        <div className="flex justify-center items-center w-[190px] h-[90px] rounded-[69px] bg-[#FFFFFF]">
                            <img src="/quvonch/icon/navbaricon1.svg" alt="" />
                        </div>
                    </Link>
                    <div className="ml-[29px] relative mr-[24px]">
                        <input placeholder="Поиск товара по названию, артиклу " className="text-[#11111133]  outline-none px-[34px] w-[574px] h-[90px] rounded-[69px] bg-[#FFFFFF]" type="text" />
                        <div className="absolute cursor-pointer top-[7px] right-[7px] w-[76px] h-[76px] rounded-full bg-[#F5F5F5] flex justify-center items-center font-normal text-[15px] leading-[100%] tracking-[0]">
                            <CiSearch size={22} />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img className="w-[35px] cursor-pointer h-[30px]" src="/quvonch/icon/tg.png" alt="" />
                        <img className="w-[30px] cursor-pointer h-[30px]" src="/quvonch/icon/icon1.png" alt="" />
                    </div>
                    <div className="flex items-center ml-[25px]">
                        <span className="flex flex-col items-end gap-[6px] mr-[25px]">
                            <p className="font-normal text-[14px] leading-[100%] tracking-[0] text-[gray]">Номер менеджера</p>
                            <h1 className="font-semibold text-[18px] leading-[100%] tracking-[0]">+7 (921) 905-70-21</h1>
                        </span>
                        <div className="h-[38.000000000000036px] bg-[gray] w-[2px]"></div>
                        <span className="flex flex-col items-end gap-[6px] ml-[25px]">
                            <p className="font-normal text-[14px] leading-[100%] tracking-[0] text-[gray]">Номер менеджера</p>
                            <h1 className="font-semibold text-[18px] leading-[100%] tracking-[0]">+7 (921) 905-70-21</h1>
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Link to={'/basket'} className="w-[59px] h-[59px] cursor-pointer bg-[white] ml-[25px] flex items-center justify-center rounded-full">
                            <img src="/quvonch/icon/shopicon.svg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="mt-[15px] w-[1400px] h-[88px] px-7 bg-white rounded-[69px] flex items-center gap-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setActive(index)}
                            className={`font-normal text-[16px] leading-[100%] tracking-[0] uppercase whitespace-nowrap transition-all duration-300
            ${active === index
                                    ? "bg-[#F5F5F5] px-[27px] py-[18px] rounded-full"
                                    : "hover:bg-[#F5F5F5] px-[27px] py-[18px] rounded-full"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
