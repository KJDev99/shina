"use client";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function ModalExample({ setOpen }) {
    const [phone, setPhone] = useState("");

    const formatPhone = (value) => {
        // faqat raqamlar
        let numbers = value.replace(/\D/g, "");

        // limit: 11 ta raqam (UZ/RU formatga o‘xshash)
        numbers = numbers.slice(0, 11);

        // format: +7 (___) ___-__-__
        let formatted = "+7 ";

        if (numbers.length > 1) {
            formatted += "(" + numbers.slice(1, 4);
        }
        if (numbers.length >= 4) {
            formatted += ") " + numbers.slice(4, 7);
        }
        if (numbers.length >= 7) {
            formatted += "-" + numbers.slice(7, 9);
        }
        if (numbers.length >= 9) {
            formatted += "-" + numbers.slice(9, 11);
        }

        return formatted;
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">

            <div className="w-[698px] h-[697.0415649414062px] rounded-[35px] bg-[#FFFFFF] p-[30px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-[60px] leading-[100%] uppercase">оставить заявку</h1>
                    <div onClick={() => setOpen(false)} className="w-[64px] h-[64px] rounded-[25px] bg-[#355094] flex justify-center items-center text-white cursor-pointer"><IoCloseOutline size={30} /></div>
                </div>
                <div>
                    <input placeholder="Имя" className="outline-none font-normal text-[15px] leading-[100%] text-[#848B8C] w-[638px] h-[101px] rounded-[25px] bg-[#F4F7FF] px-[25px] text-[18px] mt-[38px]" type="text" />
                    <input placeholder="Электронный адрес" className="outline-none font-normal text-[15px] leading-[100%] text-[#848B8C] w-[638px] h-[101px] rounded-[25px] bg-[#F4F7FF] px-[25px] text-[18px] mt-[11px]" type="text" />
                    <input
                        value={phone}
                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                        placeholder="+7 (___) ___-__-__"
                        className="outline-none w-[638px] h-[101px] rounded-[25px] bg-[#F4F7FF] px-[25px] text-[18px] mt-[11px]"
                        type="text"
                    />
                    <button className="outline-none font-normal text-[15px] leading-[100%] text-white w-[638px] h-[101px] rounded-[25px] bg-[linear-gradient(180deg,#355094_0%,#5A80C7_100%)]  text-[14px] mt-[11px]" >Отправить</button>
                    <div className="flex gap-[10px] mt-[30px]">
                        <input className="w-[19px] h-[19px]" type="checkbox" name="" id="" />
                        <p className="font-normal text-[14px] leading-[100%]">Я даю свое согласие на обработку персональных данных в соответствии с ФЗ №152-ФЗ “О персональных данных” на условиях и для целей, определенных Политикой Конфиденциальности.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}