export default function FormPost() {
  return (
    <div className="w-[1400px] h-[435px] rounded-lg bg-white mt-[50px]">
      <div className="flex gap-[11px] mt-[10px]">
        <input
          type="text"
          placeholder="Имя"
          
          className="w-[352px] h-[101px] ml-[11px] rounded-3xl bg-[#F4F7FF] px-5 outline-none text-lg"
        />

        <input
          type="email"
          placeholder="Электронный адрес"
          className="w-[353px] h-[101px] rounded-3xl bg-[#F4F7FF] px-5 outline-none text-lg"
        />

        <div className="w-[352px] h-[101px] rounded-3xl bg-[#F4F7FF] flex items-center px-5 gap-3">
          <img src="/quvonch/Siroj/image0.png" alt="" />
          <span className="text-lg">+7</span>
          <input
            type="number"
            placeholder="(___) ___-__-__"
            className="bg-transparent outline-none text-gray-900 text-lg w-full"
          />
        </div>

        <button className="w-[263px] h-[101px] rounded-3xl bg-[#355094]">
          <h1 className="text-white">Отправить</h1>
        </button>
      </div>
    </div>
  );
}
