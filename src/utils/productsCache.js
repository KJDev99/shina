// Katalog sahifalari uchun xotiradagi kesh: bir marta yuklangan sahifa qayta so'ralmaydi,
// oldindan yuklangan (prefetch) sahifa esa darhol ko'rsatiladi. Sahifa yangilanganda kesh tozalanadi.
const cache = new Map(); // url -> { promise, data }

export function fetchProductsCached(url) {
    let entry = cache.get(url);
    if (!entry) {
        entry = { data: null, promise: null };
        entry.promise = fetch(url)
            .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
            .then((data) => {
                entry.data = data;
                return data;
            })
            .catch((err) => {
                cache.delete(url);
                throw err;
            });
        cache.set(url, entry);
    }
    return entry.promise;
}

export const getCachedProducts = (url) => cache.get(url)?.data ?? null;
