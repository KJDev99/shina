import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

function Toast({ message, type, onClose }) {
    useEffect(() => {
        const t = setTimeout(onClose, 3000);
        return () => clearTimeout(t);
    }, [onClose]);

    return (
        <div
            className={`fixed bottom-4 left-4 right-4 sm:bottom-6 sm:right-6 sm:left-auto z-[10001] text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-[16px] sm:rounded-[20px] shadow-lg flex items-center gap-3 max-w-md sm:max-w-none ml-auto ${type === "success" ? "bg-[#355094]" : "bg-red-500"}`}
        >
            {type === "success" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            )}
            <span className="font-medium text-[14px] sm:text-[15px]">{message}</span>
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
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateIn(true), 20);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    const handleClose = () => {
        setAnimateIn(false);
        setTimeout(() => setOpen(false), 250);
    };

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [setOpen]);

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
                setTimeout(() => handleClose(), 1500);
            } else {
                setToast({ message: "Ошибка при отправке. Попробуйте снова.", type: "error" });
            }
        } catch {
            setToast({ message: "Ошибка сети. Попробуйте снова.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "outline-none w-full h-[56px] sm:h-[64px] md:h-[72px] rounded-[16px] sm:rounded-[20px] bg-[#F4F7FF] px-4 sm:px-5 text-[15px] md:text-[16px] text-[#1A1A1A] placeholder:text-[#848B8C]";

    return createPortal(
        <>
            {toast && (
                <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
            )}

            <div
                className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-250 ${animateIn ? "opacity-100" : "opacity-0"}`}
                    onClick={handleClose}
                    aria-hidden="true"
                />

                <div
                    className={`relative w-full sm:max-w-[560px] md:max-w-[698px] max-h-[95dvh] sm:max-h-[90vh] flex flex-col bg-white shadow-2xl transition-all duration-250 ease-out
                        rounded-t-[28px] sm:rounded-[30px] md:rounded-[35px]
                        pb-[env(safe-area-inset-bottom)]
                        ${animateIn ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-full opacity-0 sm:translate-y-4 sm:scale-95"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Drag handle — mobile only */}
                    <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
                        <div className="w-10 h-1 rounded-full bg-[#E0E0E0]" />
                    </div>

                    <div className="overflow-y-auto overscroll-contain flex-1 px-4 pt-3 pb-5 sm:px-6 sm:pt-5 sm:pb-6 md:px-[30px] md:pt-[24px] md:pb-[28px]">

                        {/* Header */}
                        <div className="flex justify-between items-center gap-3 mb-4 sm:mb-5 md:mb-6">
                            <h1
                                id="modal-title"
                                className="font-semibold text-[22px] sm:text-[30px] md:text-[38px] uppercase leading-tight"
                            >
                                оставить заявку
                            </h1>
                            <button
                                type="button"
                                onClick={handleClose}
                                aria-label="Закрыть"
                                className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] md:w-[58px] md:h-[58px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] bg-[#355094] flex justify-center items-center text-white shrink-0 hover:bg-[#2a4180] active:scale-95 transition-all"
                            >
                                <IoCloseOutline className="w-6 h-6 sm:w-7 sm:h-7" />
                            </button>
                        </div>

                        {/* Form */}
                        <form
                            className="space-y-2 sm:space-y-2.5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <input
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={inputClass}
                                type="text"
                                autoComplete="name"
                            />
                            <input
                                placeholder="Электронный адрес"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={inputClass}
                                type="email"
                                autoComplete="email"
                            />
                            <input
                                value={phone}
                                onChange={(e) => setPhone(formatPhone(e.target.value))}
                                placeholder="+7 (___) ___-__-__"
                                className={inputClass}
                                type="tel"
                                autoComplete="tel"
                            />

                            {/* Checkbox — перед кнопкой */}
                            <label className="flex gap-2.5 pt-2 sm:pt-3 pb-1 cursor-pointer items-start">
                                <input
                                    className="w-[17px] h-[17px] cursor-pointer accent-[#355094] shrink-0 mt-0.5"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                <span className="font-normal text-[12px] sm:text-[13px] leading-snug text-[#666]">
                                    Я даю свое согласие на обработку персональных данных в соответствии с ФЗ №152-ФЗ
                                    «О персональных данных» на условиях и для целей, определенных Политикой
                                    Конфиденциальности.
                                </span>
                            </label>

                            {/* Кнопка — после галочки */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full h-[56px] sm:h-[64px] md:h-[72px] rounded-[16px] sm:rounded-[20px] text-white text-[15px] font-medium active:scale-[0.99] transition-all disabled:opacity-60"
                                style={{
                                    background: 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)',
                                    transition: 'background 0.3s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(180deg, #151515 0%, #676767 100%)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)'}
                            >
                                {loading ? "Отправка..." : "Отправить"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}