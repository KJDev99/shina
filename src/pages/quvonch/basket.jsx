import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


function Toast({ message, type, onClose }) {
  useState(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  });

  return (
    <div className={`fixed bottom-6 right-6 z-50 text-white px-6 py-4 rounded-[20px] shadow-lg flex items-center gap-3 ${type === "success" ? "bg-[#355094]" : "bg-red-500"
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

export default function Basket() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [phone, setPhone] = useState("+7 ");
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleOrder = async () => {
    if (!name.trim()) return showToast("Имя не заполнено", "error");
    if (phone.length < 10) return showToast("Номер телефона не заполнен", "error");
    if (!agreed) return showToast("Примите согласие на обработку данных", "error");
    if (cart.length === 0) return showToast("Корзина пуста", "error");

    const body = {
      full_name: name,
      phone: phone,
      total_price: totalPrice.toFixed(2),
      items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        total_price: (Number(item.price) * item.quantity).toFixed(2),
      })),
    };

    setLoading(true);
    try {
      const res = await fetch("https://adent-admin.migfastkg.ru/api/v1/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        clearCart();
        setName("");
        setPhone("+7 ");
        setAgreed(false);
        showToast("Заявка успешно отправлена!");
      } else {
        showToast("Ошибка при отправке. Попробуйте снова.", "error");
      }
    } catch {
      showToast("Ошибка сети. Попробуйте снова.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="flex items-center gap-2 mb-6 text-[14px] max-md:text-[12px]">
        <Link to="/" className="text-black hover:text-[#355094] transition-colors">Главная</Link>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Корзина</span>
      </div>

      <div className="flex items-center justify-between py-6 mr-[150px] max-md:mr-0 max-md:flex-col max-md:items-start max-md:gap-4">
        <div className="flex items-end gap-6 max-md:flex-col max-md:items-start max-md:gap-2">
          <h1 className="text-8xl font-semibold uppercase tracking-tight text-black max-md:text-4xl">
            Корзина
          </h1>
          <span className="text-[30px] font-semibold text-[#11111133] mb-3 max-md:text-[18px] max-md:mb-0">
            {cart.length} товара
          </span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center py-20 gap-4">
          <p className="text-gray-400 text-[18px]">Корзина пуста</p>
          <Link to="/catalog" className="px-8 py-4 bg-[#355094] text-white rounded-[25px] font-medium hover:bg-[#2a4180] transition-colors">
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="flex items-start gap-[30px] py-10 font-sans max-md:flex-col">
          {/* Cart items */}
          <div className="flex flex-col gap-[10px] max-md:w-full">
            {cart.map((item, i) => (
              <div
                key={item.id}
                data-aos="fade-up" data-aos-delay={i * 150}
                className="w-[829px] h-[149px] rounded-[20px] bg-white flex items-center p-[10px] gap-[20px] shadow-sm max-md:w-full max-md:h-auto max-md:flex-col max-md:items-start"
              >
                <div className="w-[129px] h-[129px] rounded-[20px] overflow-hidden flex-shrink-0 max-md:w-full max-md:h-[200px]">
                  <img
                    src={item.thumbnail || item.images?.[0]?.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    width="129"
                    height="129"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center flex-1 max-md:w-full">
                  <p className="text-[14px] font-normal text-[#A1A1A1]">Название:</p>
                  <h2 className="text-[18px] font-bold leading-tight text-[#1A1A1A] uppercase max-md:text-[14px]">
                    {item.name}
                  </h2>
                  <p className="text-[13px] text-[#A1A1A1] mt-1">Арт: {item.artikul}</p>
                </div>

                <div className="flex flex-col items-end justify-between h-full py-2 pr-4 max-md:w-full max-md:items-start max-md:gap-3">
                  <div className="flex items-center border border-[#E0E0E0] rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-[32px] h-[32px] flex items-center justify-center text-gray-500 border-r border-[#E0E0E0]"
                    >-</button>
                    <span className="px-4 text-[15px] font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-[32px] h-[32px] flex items-center justify-center text-gray-500 border-l border-[#E0E0E0]"
                    >+</button>
                  </div>

                  <div className="flex items-center gap-[40px] max-md:justify-between max-md:w-full">
                    <div className="text-right">
                      {(Number(item.price) * item.quantity).toLocaleString("ru-RU") == 0
                        ? 'Цена по запросу'
                        : <> <p className="text-[22px] font-bold text-[#1A1A1A] max-md:text-[18px]">
                          {(Number(item.price) * item.quantity).toLocaleString("ru-RU")}₽
                        </p>
                          <p className="text-[15px] font-medium text-[#11111166]">Цена с НДС</p></>}

                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-gray-50 rounded-full"
                    >
                      <img src="/quvonch/Siroj/bye.png" alt="" className="w-[20px] h-[20px] opacity-40" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order form */}
          <div className="w-[430px] bg-white rounded-[25px] p-8 shadow-sm flex flex-col max-md:w-full max-md:p-4">
            <div className="flex justify-between items-center border-b border-[#E0E0E0] pb-5 mb-6">
              <span className="text-[17px] font-semibold uppercase tracking-tight text-black">итого:</span>
              <span className="text-[25px] font-semibold text-black">
                {totalPrice.toLocaleString("ru-RU")}₽
              </span>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <label className="text-[#A1A1A1] text-[15px] font-normal mb-1">Название:</label>
                  <p className="text-[#1A1A1A] text-[17px] font-medium leading-tight">{item.name}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-full h-[88px] rounded-[24px] bg-[#F4F7FF] flex flex-col justify-center px-8 max-md:px-4">
                <label className="text-[#848B8C] text-[15px] font-normal mb-0.5">Имя</label>
                <input
                  type="text"
                  placeholder="Александр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent text-[#1A1A1A] text-[18px] font-medium outline-none placeholder:text-[#1A1A1A]"
                />
              </div>

              <div className="w-full h-[88px] rounded-[24px] bg-[#F4F7FF] flex items-center px-8 max-md:px-4">
                <div className="flex items-center gap-3 w-full">
                  <img src="/quvonch/Siroj/image0.png" alt="" className="w-6 h-4 object-contain" />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.startsWith("7")) value = value.slice(1);
                      value = value.slice(0, 10);
                      let formatted = "+7 ";
                      if (value.length > 0) formatted += "(" + value.slice(0, 3);
                      if (value.length >= 3) formatted += ") " + value.slice(3, 6);
                      if (value.length >= 6) formatted += "-" + value.slice(6, 8);
                      if (value.length >= 8) formatted += "-" + value.slice(8, 10);
                      setPhone(formatted);
                    }}
                    className="bg-transparent text-[18px] font-medium outline-none w-full"
                  />
                </div>
              </div>

              <button
                onClick={handleOrder}
                disabled={loading}
                className="w-full h-[96px] rounded-[28px] text-white text-[14px] font-medium uppercase tracking-[1px] transition-all flex items-center justify-center mt-2 disabled:opacity-60"
                style={{
                  background: 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(180deg, #151515 0%, #676767 100%)'}
                onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(180deg, #355094 0%, #5A80C7 100%)'}
              >
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>
            </div>

            <div className="mt-6 flex gap-3 px-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-[#C4C4C4] mt-1 accent-[#4E6EB3] flex-shrink-0 cursor-pointer"
              />
              <label className="text-[#A1A1A1] text-[14px] font-normal leading-[1.5]">
                Я даю свое согласие на обработку персональных данных в соответствии с ФЗ №152-ФЗ "О персональных данных"
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}