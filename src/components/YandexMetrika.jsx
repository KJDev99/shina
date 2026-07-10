import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const YM_ID = 110576341;

// SPA (react-router) da har bir sahifa o'tishini Yandex.Metrika'ga 'hit' qilib yuboradi.
// Metrika sanog'i index.html <head> da ishga tushiriladi; bu komponent faqat
// keyingi navigatsiyalarni (route almashuvi) hisobga qo'shadi.
export default function YandexMetrika() {
    const { pathname, search } = useLocation();
    const firstLoad = useRef(true);

    useEffect(() => {
        // Birinchi yuklanish index.html dagi 'init' (url: location.href) bilan allaqachon
        // hisobga olingan — uni ikki marta yubormaymiz.
        if (firstLoad.current) {
            firstLoad.current = false;
            return;
        }
        if (typeof window.ym === "function") {
            window.ym(YM_ID, "hit", pathname + search);
        }
    }, [pathname, search]);

    return null;
}
