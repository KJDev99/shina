export default function CantactForm() {
  return (
    <div className="w-[1400px] m-auto h-[435px] rounded-[25px] mb-[100px] bg-white  mt-[150px]">
      <div className="grid grid-cols-2 ">
        <div className="mt-10 ml-10     ">
          <h1 className="font-semibold text-6xl mb-[15px] ">
            Остались вопросы?
          </h1>
          <h3 className="text-[#11111166] font-normal text-lg">
            Свяжитесь с нами — подберём запчасти <br /> и проконсультируем
          </h3>
        </div>
        <img
          src="/quvonch/Siroj/1780.png"
          alt=""
          className=" mt-[-100px] ml-[200px] "
        />
      </div>

      <div className="flex gap-3 mt-8">
        <div className="w-[352px] h-[101px] rounded-3xl bg-[#F4F7FF] flex flex-col justify-center px-6">
          <label className="text-[#848B8C] text-sm">Имя</label>
          <input
            type="text"
            placeholder="Александр"
            className="bg-transparent text-lg font-medium outline-none placeholder:text-black"
          />
        </div>

        <div className="w-[352px] h-[101px] rounded-3xl bg-[#F4F7FF] flex flex-col justify-center px-6">
          <label className="text-[#848B8C] text-sm">Электронный адрес</label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="bg-transparent text-lg font-medium outline-none"
          />
        </div>

        <div className="w-[352px] h-[101px] rounded-3xl bg-[#F4F7FF] flex items-center px-6">
          <div className="flex items-center gap-3 w-full">
            <img src="/quvonch/Siroj/image0.png" alt="" className="w-6 h-6" />
            <span className="text-lg font-medium">+7</span>
            <input
              type="tel"
              placeholder="(___) ___-__-__"
              className="bg-transparent text-lg outline-none w-full placeholder:text-[#848B8C]"
            />
          </div>
        </div>

        <button className="w-[263px] h-[101px] rounded-3xl bg-[#355094] flex items-center justify-center">
          <span className="text-white text-lg font-medium">Отправить</span>
        </button>
      </div>
    </div>
  );
}
