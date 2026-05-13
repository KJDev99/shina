import React from "react";

export default function Sirojcard() {
  return (
    <div className="w-[829px] h-[149px] rounded-[20px] bg-white flex items-center p-[10px] gap-[20px]">
      <div className="w-[129px] h-[129px] rounded-[20px] overflow-hidden flex-shrink-0">
        <img
          src="/quvonch/Siroj/hi.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center flex-1">
        <p className="text-[15px] font-normal text-gray-400">Название:</p>
        <h2 className="text-[20px] font-semibold leading-tight">
          9Y7573 ПЛАТА КРЕПЛЕНИЯ КОМПРЕССОРА CAT
        </h2>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <div className="flex items-center gap-[11px] ">
          <button className="w-[30px] h-[30px] rounded-md border">-</button>
          <span className="text-[16px]">1</span>
          <button className="w-[30px] h-[30px] rounded-md border">+</button>
          <input type="checkbox" className="ml-[41px] w-[18px] h-[18px]" />
        </div>

        <div className="flex items-center gap-[15px]">
          <div className="text-right">
            <p className="text-[20px] font-semibold">28 600₽</p>
            <p className="text-[12px] text-gray-400">Цена с НДС</p>
          </div>
          <img
            src="/quvonch/Siroj/bye.png"
            alt=""
            className="w-[20px] h-[20px] ml-[48px]"
          />
        </div>
      </div>
    </div>
  );
}
