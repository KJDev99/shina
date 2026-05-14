export default function FormPost() {
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
          <img src="/quvonch/Siroj/image0.png" alt="" className="w-6 h-auto" />
          <span className="text-lg">+7</span>
          <input
            type="number"
            placeholder="(___) ___--"
            className="bg-transparent outline-none text-gray-900 text-lg w-full"
          />
        </div>

        <button className="w-full md:w-[263px] h-[70px] md:h-[101px] rounded-2xl md:rounded-3xl bg-[#355094]">
          <h1 className="text-white font-medium">Отправить</h1>
        </button>
      </div>
      <div className="mt-[20px] mb-[10px] px-2">
        <label className="custom-checkbox flex items-start">
          <input type="checkbox" className="mt-1" />
          <span className="checkmark"></span>
          <span className="font-normal text-[12px] md:text-[14px] ml-[10px] text-[#97989B] leading-tight">
            Я даю свое согласие на обработку персональных данных в соответствии
            с ФЗ №152-ФЗ “О персональных данных” на условиях и для целей,
            определенных{" "}
            <a href="#" className="underline">
              Политикой Конфиденциальности.
            </a>
          </span>
        </label>
      </div>
    </div>
  );
}
