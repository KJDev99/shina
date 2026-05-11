import Badge from "../../components/ui/Badge";
import CantactForm from "../../components/ui/cantactform";
import CatalogCart from "../../components/ui/CatalogCart";
import Datacard from "../../components/ui/datacard";

export default function Catalog() {
    return (<div>
        <div className="ml-11 mt-[50px]">

            <Badge text={'Каталог запчастей'} />
        </div>
        <div className=" max-w-[1436px] flex justify-between items-center  m-auto">
            <h1 className="font-semibold text-[85px] leading-none tracking-normal uppercase  mt-[20px]">Каталог запчастей</h1>
            <div className="w-[221px] h-[60px] rounded-[52px] flex justify-center items-center bg-[#FFFFFF]">Сортировать по:</div>
        </div>
        <div className="Grid max-w-[1436px] m-auto mt-[50px] mb-[100px]  ">


            <div className="w-[344px] shrink-0 flex flex-col gap-4 self-stretch">

                <div className="bg-[#FFFFFF] p-5 rounded-[25px]">
                    <h1 className="font-semibold text-[16px] mb-[11px] leading-none tracking-normal uppercase">Caterpillar</h1>
                    <div className=" bg-[#F5F5F5] h-[75px] rounded-[20px] flex items-center justify-between px-4">
                        <h1 className="font-semibold text-[16px] leading-none tracking-normal uppercase ">Caterpillar</h1>
                        <img src="/sarvar/caterpillar-logo 1.svg" alt="" />
                    </div>
                    <div className=" bg-[#F5F5F5] h-[75px] rounded-[20px] mt-[5px] flex items-center justify-between px-4">
                        <h1 className="font-semibold text-[16px] leading-none tracking-normal uppercase ">Caterpillar</h1>
                        <img src="/sarvar/caterpillar-logo 1.svg" alt="" />
                    </div>
                    <div className=" bg-[#F5F5F5] h-[75px] rounded-[20px] mt-[5px] flex items-center justify-between px-4">
                        <h1 className="font-semibold text-[16px] leading-none tracking-normal uppercase ">Caterpillar</h1>
                        <img src="/sarvar/caterpillar-logo 1.svg" alt="" />
                    </div>
                    <div className=" bg-[#F5F5F5] h-[75px] rounded-[20px] mt-[5px] flex items-center justify-between px-4">
                        <h1 className="font-semibold text-[16px] leading-none tracking-normal uppercase ">Caterpillar</h1>
                        <img src="/sarvar/caterpillar-logo 1.svg" alt="" />
                    </div>
                </div>



                <div className="w-[344px] bg-[#FFFFFF] p-[18px] rounded-[25px]">
                    <h1 className="font-semibold text-[16px] mb-[11px] leading-none tracking-normal uppercase">Фильтры</h1>
                    <div className="mt-6">
                        <p className="font-medium text-[15px] leading-none tracking-normal mb-[10px]">Цена</p>
                        <div className="flex ">
                            <div className="w-[144px] h-[72px] rounded-[15px] bg-[#F5F5F5] flex justify-center items-center">0₽</div>
                            <p className="flex items-center mr-1 ml-1">-</p>
                            <div className="w-[144px] h-[72px] rounded-[15px] bg-[#F5F5F5] flex justify-center items-center">20 500 171₽</div>
                        </div>
                    </div>

                </div>


                <div className="flex gap-[10px]">
                    <button className="flex-1 bg-[#355094] text-white border-none rounded-[25px] w-[239px] h-[96px] font-bold text-[14px] cursor-pointer">
                        ПРИМЕНИТЬ
                    </button>
                    <button className="w-[94px] bg-[#111] text-white border-none rounded-[25px] cursor-pointer text-[18px]">
                        ✕
                    </button>
                </div>



                <div className="flex flex-col gap-[10px]">
                    <Datacard />
                    <Datacard />
                    <Datacard />
                    <Datacard />
                </div>
                <button className="flex-1 bg-[white]  border-none rounded-[25px] max-h-[96px] font-bold text-[14px] cursor-pointer">
                    Смотреть больше
                </button>

            </div>


            <div className="flex-1 flex flex-col gap-8">


                <div className="grid grid-cols-3 gap-2">
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                    <CatalogCart />
                </div>


                <div className="flex justify-center items-center gap-2 mt-4">

                    <button className="w-12 h-12 flex items-center justify-center bg-[#355094] text-white rounded-[10px] font-semibold border-none cursor-pointer">
                        1
                    </button>


                    {[2, 3, 4].map((num) => (
                        <button key={num} className="w-12 h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px] font-semibold border-none cursor-pointer">
                            {num}
                        </button>
                    ))}


                    <div className="w-12 h-12 flex items-end justify-center pb-3 text-[#888] font-bold">
                        ...
                    </div>


                    {[12, 13].map((num) => (
                        <button key={num} className="w-12 h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px] font-semibold border-none cursor-pointer">
                            {num}
                        </button>
                    ))}


                    <button className="w-12 h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px] border-none cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

            </div>

        </div>
        <CantactForm />
    </div>
    );
}