import { FaTelegramPlane } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="bg-black">
            <div className="max-w-[1437px] m-auto flex justify-center  gap-[50px] pt-[42px]">
                <div>
                    <img src="/quvonch/img/footer.png" alt="" />
                </div>
                <div className="flex gap-[191px]">
                    <div>
                        <h1 className="font-semibold text-[22px] leading-[100%] uppercase text-white mb-[18px]">Страницы</h1>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Шины для спецтехники</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Контакты</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Официальный дилер WOLF</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Новости</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Каталог</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Производитель</p>
                    </div>
                    <div>
                        <h1 className="font-semibold text-[22px] leading-[100%] uppercase text-white mb-[18px]">Производитель</h1>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Caterpillar</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Atlas Copco</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Epiroc</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Sandvik</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">Cummins</p>
                        <p className="font-normal text-base leading-none tracking-normal text-[#FFFFFF99] mb-[14px]">DEUTZ</p>
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-[22px] leading-[100%] uppercase text-white mb-[18px]">Контакты</h1>
                        <div className="flex flex-col gap-[25px]">

                            <span className="">
                                <p className="font-normal text-sm leading-none tracking-normal text-[#FFFFFF99]">Номер менеджера</p>
                                <h2 className="text-white font-semibold text-lg leading-none tracking-normal mt-[6px] ">+7 (921) 905-70-21</h2>
                            </span>
                            <span className="">
                                <p className="font-normal text-sm leading-none tracking-normal text-[#FFFFFF99]">Продажа шин для спецтехники</p>
                                <h2 className="text-white font-semibold text-lg leading-none tracking-normal mt-[6px] ">+7 (921) 306-51-25</h2>
                            </span>
                            <span className="">
                                <p className="font-normal text-sm leading-none tracking-normal text-[#FFFFFF99]">Электронный адрес</p>
                                <h2 className="text-white font-semibold text-lg leading-none tracking-normal mt-[6px] ">Info@mail.ru</h2>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[49px]">
                <div className="w-[120px] h-[56px] rounded-[25px] text-white items-center justify-center flex gap-5 bg-[#FFFFFF1A]">
                    <FaTelegramPlane size={26} />
                    <div className="h-[31px] w-[2px] bg-[#FFFFFF33]"></div>
                    <img src="/quvonch/icon/per.png" alt="" />
                </div>
            </div>
            <div className="max-w-[1437px] m-auto flex justify-between mt-[49px] pb-[32px]">
                <h2 className="font-medium text-[15px] leading-none tracking-normal align-middle lining-nums proportional-nums text-[#FFFFFF66]">© 2025 «Максан групп». Все права защищены.</h2>
                <h2 className="font-medium text-[15px] leading-none tracking-normal align-middle lining-nums proportional-nums text-[#FFFFFF66]">Политика конфиденциальности</h2>
                <h2 className="font-medium text-[15px] leading-none tracking-normal align-middle lining-nums proportional-nums text-[#FFFFFF66]">Сделано в UserTech</h2>
            </div>
        </div>
    )
}
