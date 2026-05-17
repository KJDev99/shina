import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { NavbarSearchMobile } from "./NavbarSearch";

export default function MobileSearchOverlay({ open, onClose }) {
    const [visible, setVisible] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (open) {
            setVisible(true);
            const t = setTimeout(() => setAnimateIn(true), 20);
            return () => clearTimeout(t);
        }
        setAnimateIn(false);
        const t = setTimeout(() => setVisible(false), 250);
        return () => clearTimeout(t);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!visible) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9998] lg:hidden flex flex-col bg-[#ECF0F5]"
            role="dialog"
            aria-modal="true"
            aria-label="Поиск товаров"
        >
            <div
                className={`flex items-center justify-between px-4 py-3 border-b border-black/5 bg-[#ECF0F5] shrink-0 transition-opacity duration-250 ${
                    animateIn ? "opacity-100" : "opacity-0"
                }`}
            >
                <p className="font-semibold text-[18px] uppercase">Поиск</p>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть поиск"
                    className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center"
                >
                    <IoClose size={26} />
                </button>
            </div>

            <div
                className={`flex-1 overflow-y-auto transition-all duration-250 ${
                    animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
            >
                <NavbarSearchMobile onClose={onClose} />
            </div>
        </div>,
        document.body
    );
}
