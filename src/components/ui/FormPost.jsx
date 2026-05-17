import { useState, useEffect } from "react";

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 text-white px-6 py-4 rounded-[20px] shadow-lg flex items-center gap-3 transition-all ${type === "success" ? "bg-[#355094]" : "bg-red-500"
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

export default function FormPost() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handlePhone = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("7")) value = value.slice(1);
    value = value.slice(0, 10);
    let formatted = "+7 ";
    if (value.length > 0) formatted += "(" + value.slice(0, 3);
    if (value.length >= 3) formatted += ") " + value.slice(3, 6);
    if (value.length >= 6) formatted += "-" + value.slice(6, 8);
    if (value.length >= 8) formatted += "-" + value.slice(8, 10);
    setPhone(formatted);
  };

  const handleSubmit = async () => {
    if (!name.trim()) return setToast({ message: "Введите имя", type: "error" });
    if (!email.trim()) return setToast({ message: "Введите email", type: "error" });
    if (phone.length < 16) return setToast({ message: "Введите номер телефона", type: "error" });

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
        setPhone("+7 ");
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

      <div className="max-w-[1400px] w-full rounded-[25px] bg-white mt-[30px] md:mt-[50px] px-2 md:px-5 pb-10">
        <div className="flex flex-col md:flex-row gap-[11px] mt-[10px]">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full md:w-[352px] h-[70px] md:h-[101px] md:ml-[11px] rounded-2xl md:rounded-3xl bg-[#F4F7FF] px-5 outline-none text-lg"
          />

          <input
            type="email"
            placeholder="Электронный адрес"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-[353px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#F4F7FF] px-5 outline-none text-lg"
          />

          <div className="w-full md:w-[352px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#F4F7FF] flex items-center px-5 gap-3">
            <img src="/quvonch/Siroj/image0.png" alt="" className="w-6 h-auto" />
            <input
              type="text"
              value={phone}
              onChange={handlePhone}
              className="bg-transparent outline-none text-gray-900 text-lg w-full"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full md:w-[263px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#355094] hover:bg-[#2a4180] transition-colors disabled:opacity-60"
          >
            <h1 className="text-white font-medium">
              {loading ? "Отправка..." : "Отправить"}
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}