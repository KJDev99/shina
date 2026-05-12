import { Link } from "react-router-dom";


export default function CatalogCart() {
    return (
        <Link to={'/catalog/1'} className="w-[351px] bg-[#FFFFFF] rounded-[25px] px-[10px] py-2 ">
            <div className="flex justify-between">
                <div className="text-[14px] font-medium w-[93px] h-[39px] rounded-[15px] flex justify-center items-center bg-[#F5F5F5]">В наличии</div>
                <div className="w-[43px] h-[43px] rounded-full bg-[#F5F5F5] flex justify-center items-center"><img src="/quvonch/icon/arrow.svg" alt="" /></div>
            </div>
            <div className="w-[332px] h-[257px] rounded-[25px] overflow-hidden mt-[10px]">
                <img src="/quvonch/img/catalog.png" alt="" />
            </div>
            <div className="px-[14px]">
                <h2 className="text-[#11111166] font-medium text-[14px] leading-none tracking-normal mt-[10px]">Caterpillar</h2>
                <h2 className=" font-semibold text-[22px] leading-none tracking-normal uppercase mt-2">9Y7573 Плата крепления компрессора CAT</h2>
                <div className="flex items-center justify-between mt-[35px]">
                    <span className=" flex items-center gap-[10px]">
                        <h2 className=" text-[22px] font-semibold">28 600₽</h2>
                        <p className="text-[14px] text-[#11111166]">Цена с НДС</p>
                    </span>
                    <div className="flex items-center justify-center w-[59px] h-[59px] rounded-full bg-[#F5F5F5]"><img src="/quvonch/icon/shopicon.svg" alt="" /></div>
                </div>
            </div>
        </Link>
    )
}
