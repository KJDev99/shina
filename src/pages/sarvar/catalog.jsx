import CatalogCart from "../../components/ui/CatalogCart";

export default function Catalog() {
    return (
        <div className="flex p-6 gap-6 items-start">

           
            <div className="w-[320px] shrink-0 flex flex-col gap-4 self-stretch">

                
                <div className="bg-[#ffffff] rounded-[20px] p-5">
                    <p className="font-bold text-[16px] mb-4">Производители</p>
                    <div className="flex flex-col gap-[10px]">
                        {["CATERPILLAR", "CUMMINS", "DEUTZ", "KOMATSU"].map((brand) => (
                            <div key={brand} className="flex justify-between items-center bg-white rounded-[14px] px-[18px] py-[14px]">
                                <span className="text-[14px] font-semibold">{brand}</span>
                                <div className="w-[90px] h-[36px] bg-[#eee] rounded-[6px]"/>
                                
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="bg-[#ffffff] rounded-[20px] p-5">
                    <p className="font-bold text-[16px] mb-2">Фильтры</p>
                    <p className="text-[13px] text-[#888] mb-3">Цена</p>
                    <div className="flex items-center gap-[10px]">
                        <div className="bg-white rounded-[12px] px-[14px] py-3 text-[13px] flex-1 text-center">
                            0 ₽
                        </div>
                        <span className="text-[#aaa]">-</span>
                        <div className="bg-white rounded-[12px] px-[14px] py-3 text-[13px] flex-1 text-center">
                            20 500 171 ₽
                        </div>
                    </div>
                </div>

              
                <div className="flex gap-[10px]">
                    <button className="flex-1 bg-[#355094] text-white border-none rounded-[16px] py-[18px] font-bold text-[14px] cursor-pointer">
                        ПРИМЕНИТЬ
                    </button>
                    <button className="w-[60px] bg-[#111] text-white border-none rounded-[16px] cursor-pointer text-[18px]">
                        ✕
                    </button>
                </div>

               
                <div className="bg-[#ffffff] rounded-[20px] p-5 flex-1 flex flex-col">
                    <p className="font-bold text-[16px] mb-4">Новости</p>
                    <div className="flex flex-col gap-3 flex-1">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white rounded-[14px] px-[18px] py-[14px] flex flex-col justify-center flex-1 gap-[6px]">
                                <span className="bg-[#f0f0f0] rounded-full px-3 py-[3px] text-[11px] text-[#555] self-start">
                                    Полезное
                                </span>
                                <p className="text-[13px] font-semibold m-0">
                                    Запчасти для спецтехники Санкт-Петербург
                                </p>
                                <div className="text-[11px] text-[#aaa]">↗</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[64px] font-bold leading-none">24</span>
                                    <span className="text-[14px] text-[#aaa]">.03.2026</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 w-full border border-[#ddd] rounded-[12px] py-[14px] bg-white cursor-pointer text-[13px] font-semibold">
                        СМОТРЕТЬ БОЛЬШЕ
                    </button>
                </div>

            </div>

            
            <div className="flex-1 flex flex-col gap-8">
                
                
                <div className="grid grid-cols-3 gap-5">
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
                    <CatalogCart/>
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
    );
}