import { useState } from "react";

export default function FormPost() {
  const [phone, setPhone] = useState("+7 ");

  return (
    <div className="max-w-[1400px] w-full rounded-[25px] bg-white mt-[30px] md:mt-[50px] px-2 md:px-5 pb-10">
      <div className="flex flex-col md:flex-row gap-[11px] mt-[10px]">

        <input
          type="text"
          placeholder="Имя"
          className="w-full md:w-[352px] h-[70px] md:h-[101px] md:ml-[11px] rounded-2xl md:rounded-3xl bg-[#F4F7FF] px-5 outline-none text-lg"
        />

        <input
          type="email"
          placeholder="Электронный адрес"
          className="w-full md:w-[353px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#F4F7FF] px-5 outline-none text-lg"
        />

        <div className="w-full md:w-[352px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#F4F7FF] flex items-center px-5 gap-3">
          <img
            src="/quvonch/Siroj/image0.png"
            alt=""
            className="w-6 h-auto"
          />

          <input
            type="text"
            value={phone}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");

              if (value.startsWith("7")) {
                value = value.slice(1);
              }

              value = value.slice(0, 10);

              let formatted = "+7 ";

              if (value.length > 0) {
                formatted += "(" + value.slice(0, 3);
              }

              if (value.length >= 3) {
                formatted += ") " + value.slice(3, 6);
              }

              if (value.length >= 6) {
                formatted += "-" + value.slice(6, 8);
              }

              if (value.length >= 8) {
                formatted += "-" + value.slice(8, 10);
              }

              setPhone(formatted);
            }}
            className="bg-transparent outline-none text-gray-900 text-lg w-full"
          />
        </div>

        <button className="w-full md:w-[263px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#355094]">
          <h1 className="text-white font-medium">Отправить</h1>
        </button>
      </div>
    </div>
  );
}