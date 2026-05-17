"use client";

import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Toast({ message, type, onClose }) {
    useEffect(() => {
        const t = setTimeout(onClose, 3000);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 z-[100] text-white px-6 py-4 rounded-[20px] shadow-lg flex items-center gap-3 ${type === "success" ? "bg-[#355094]" : "bg-red-500"
            }`}>
            {type === "success" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            )}
            <span className="font-medium text-[15px]">{message}</span>
        </div>
    );
}

export default function ModalExample({ setOpen }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const formatPhone = (value) => {
        let numbers = value.replace(/\D/g, "");
        numbers = numbers.slice(0, 11);
        let formatted = "+7 ";
        if (numbers.length > 1) formatted += "(" + numbers.slice(1, 4);
        if (numbers.length >= 4) formatted += ") " + numbers.slice(4, 7);
        if (numbers.length >= 7) formatted += "-" + numbers.slice(7, 9);
        if (numbers.length >= 9) formatted += "-" + numbers.slice(9, 11);
        return formatted;
    };

    const handleSubmit = async () => {
        if (!name.trim()) return setToast({ message: "Введите имя", type: "error" });
        if (!email.trim()) return setToast({ message: "Введите email", type: "error" });
        if (phone.length < 16) return setToast({ message: "Введите номер телефона", type: "error" });
        if (!agreed) return setToast({ message: "Примите согласие на обработку данных", type: "error" });

        setLoading(true);
        try {
            const res = await fetch("https://adent-admin.migfastkg.ru/api/v1/messages/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ full_name: name, email, phone }),
            });

            if (res.ok) {
                setToast({ message: "Заявка успешно отправлена!", type: "success" });
                setName("");
                setEmail("");
                setPhone("");
                setAgreed(false);
                setTimeout(() => setOpen(false), 1500);
            } else {
                setToast({ message: "Ошибка при отправке. Попробуйте снова.", type: "error" });
            }
        } catch {
            setToast({ message: "Ошибка сети. Попробуйте снова.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
                <div className="w-[698px] h-[697px] rounded-[35px] bg-[#FFFFFF] p-[30px]">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-[60px] leading-[100%] uppercase">оставить заявку</h1>
                        <div
                            onClick={() => setOpen(false)}
                            className="w-[64px] h-[64px] rounded-[25px] bg-[#355094] flex justify-center items-center text-white cursor-pointer hover:bg-[#2a4180] transition-colors"
                        >
                            <IoCloseOutline size={30} />
                        </div>
                    </div>

                    <div>
                        <input
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="outline-none w-[638px] h-[101px] rounded-[25px] bg-[#F4F7FF] px-[25px] text-[18px] mt-[38px] text-[#848B8C]"
                            type="text"
                        />
                        <input
                            placeholder="Электронный адрес"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="outline-none w-[638px] h-[101px] rounded-[25px] bg-[#F4F7FF] px-[25px] text-[18px] mt-[11px] text-[#848B8C]"
                            type="email"
                        />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(formatPhone(e.target.value))}
                            placeholder="+7 (___) ___-__-__"
                            className="outline-none w-[638px] h-[101px] rounded-[25px] bg-[#F4F7FF] px-[25px] text-[18px] mt-[11px]"
                            type="text"
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="outline-none w-[638px] h-[101px] rounded-[25px] bg-[linear-gradient(180deg,#355094_0%,#5A80C7_100%)] text-white text-[14px] font-medium mt-[11px] hover:opacity-90 transition-opacity disabled:opacity-60"
                        >
                            {loading ? "Отправка..." : "Отправить"}
                        </button>
                        <div className="flex gap-[10px] mt-[30px]">
                            <input
                                className="w-[19px] h-[19px] cursor-pointer accent-[#355094]"
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <p className="font-normal text-[14px] leading-[100%]">
                                Я даю свое согласие на обработку персональных данных в соответствии с ФЗ №152-ФЗ "О персональных данных" на условиях и для целей, определенных Политикой Конфиденциальности.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}