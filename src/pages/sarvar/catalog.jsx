import Badge from "../../components/ui/Badge";
import CantactForm from "../../components/ui/cantactform";
import CatalogCart from "../../components/ui/CatalogCart";
import Datacard from "../../components/ui/datacard";

export default function Catalog() {
    return (
        <div className="bg-[#f4f7f9] min-h-screen">
          
            <div className="ml-4 md:ml-11 mt-[30px] md:mt-[50px]">
                <Badge text={'Каталог запчастей'} />
            </div>

          
            <div className="max-w-[1436px] flex flex-col md:flex-row justify-between items-start md:items-center m-auto px-4 md:px-0">
                <h1 className="font-semibold text-[36px] sm:text-[48px] md:text-[85px] leading-none tracking-normal uppercase mt-[20px]">
                    Каталог запчастей
                </h1>
                <div className="w-full md:w-[221px] h-[55px] md:h-[60px] rounded-[52px] flex justify-center items-center bg-[#FFFFFF] mt-5 md:mt-0 text-[14px] md:text-[16px]">
                    Сортировать по:
                </div>
            </div>

           
            <div className="max-w-[1436px] m-auto mt-[30px] md:mt-[50px] mb-[100px] flex flex-col md:flex-row gap-8 px-4 md:px-0">

            
                <div className="w-full md:w-[344px] shrink-0 flex flex-col gap-4">

                    <div className="bg-[#FFFFFF] p-5 rounded-[25px]">
                        <h1 className="font-semibold text-[16px] mb-[11px] leading-none tracking-normal uppercase">Производители</h1>
                        <div className="flex flex-col gap-[5px]">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-[#F5F5F5] h-[75px] rounded-[20px] flex items-center justify-between px-4">
                                    <h1 className="font-semibold text-[16px] leading-none tracking-normal uppercase">Caterpillar</h1>
                                    <img src="/sarvar/caterpillar-logo 1.svg" alt="logo" className="h-[25px]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Narx filtri */}
                    <div className="w-full bg-[#FFFFFF] p-[18px] rounded-[25px]">
                        <h1 className="font-semibold text-[16px] mb-[11px] leading-none tracking-normal uppercase">Фильтры</h1>
                        <div className="mt-6">
                            <p className="font-medium text-[15px] leading-none tracking-normal mb-[10px]">Цена</p>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-[72px] rounded-[15px] bg-[#F5F5F5] flex justify-center items-center">0₽</div>
                                <p className="text-[#111]">-</p>
                                <div className="flex-1 h-[72px] rounded-[15px] bg-[#F5F5F5] flex justify-center items-center text-[13px] md:text-[15px]">20 500 171₽</div>
                            </div>
                        </div>
                    </div>

                
                    <div className="flex gap-[10px]">
                        <button className="flex-1 bg-[#355094] text-white border-none rounded-[25px] h-[80px] md:h-[96px] font-bold text-[14px] cursor-pointer active:scale-95 transition-transform">
                            ПРИМЕНИТЬ
                        </button>
                        <button className="w-[80px] md:w-[94px] bg-[#111] text-white border-none rounded-[25px] cursor-pointer text-[18px] flex justify-center items-center">
                            ✕
                        </button>
                    </div>

                  
                    <div className="flex flex-col gap-[10px]">
                        <Datacard />
                        <Datacard />
                        <Datacard />
                    </div>

                    <button className="w-full bg-white border-none rounded-[25px] py-6 font-bold text-[14px] cursor-pointer mt-2 shadow-sm">
                        Смотреть больше
                    </button>
                </div>

            
                <div className="flex-1 flex flex-col gap-8">
                   
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
                       
                        {Array.from({ length: 15 }).map((_, index) => (
                            <CatalogCart key={index} />
                        ))}
                    </div>

                  
                    <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
                        <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#355094] text-white rounded-[10px] font-semibold">
                            1
                        </button>
                        {[2, 3, 4].map((num) => (
                            <button key={num} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px] font-semibold">
                                {num}
                            </button>
                        ))}
                        <div className="w-8 flex justify-center items-end pb-3 text-[#888] font-bold">...</div>
                        {[12, 13].map((num) => (
                            <button key={num} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px] font-semibold">
                                {num}
                            </button>
                        ))}
                        <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-[#111] rounded-[10px]">
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