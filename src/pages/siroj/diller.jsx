export default function Diller() {
  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[14px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Caterpillar</span>
      </div>
      <div className="">
        <div className="mb-12 flex gap-[550px] ">
          <h1 className="text-[120px] font-bold uppercase tracking-tighter leading-[0.9] text-black">
            Caterpillar
          </h1>
          <img src="/quvonch/icon/logo.svg" alt="" />
        </div>
      </div>
      <div className="">
        <p className="font-normal text-lg mb-[15px]">
          ООО "МАКСАН ГРУПП" является надежным поставщиком запасных частей,
          узлов и агрегатов для горно-шахтного направления, и особое внимание мы
          уделяем продукции от всемирно известного производителя Caterpillar.
          Благодаря более чем вековому опыту и инновационным
          разработкам, Caterpillar зарекомендовал себя как лидер в производстве
          надежной и долговечной техники.
        </p>
        <p className="font-normal text-lg mb-[15px]">
          Мы понимаем, что для эффективной работы в тяжелых условиях
          горнодобывающей отрасли, каждая деталь имеет значение. Поэтому ООО
          "МАКСАН ГРУПП" предлагает только оригинальные запасные части от
          Caterpillar, которые гарантируют долговечность и безотказность вашей
          техники. В нашем ассортименте вы найдете широкий спектр запчастей,
          включая двигатели, трансмиссии, гидравлические системы и системы
          управления, что позволяет максимально быстро и точно удовлетворить
          любые ваши потребности.
        </p>
        <p className="font-normal text-lg mb-[15px]">
          Мы понимаем, что для эффективной работы в тяжелых условиях
          горнодобывающей отрасли, каждая деталь имеет значение. Поэтому ООО
          "МАКСАН ГРУПП" предлагает только оригинальные запасные части от
          Caterpillar, которые гарантируют долговечность и безотказность вашей
          техники. В нашем ассортименте вы найдете широкий спектр запчастей,
          включая двигатели, трансмиссии, гидравлические системы и системы
          управления, что позволяет максимально быстро и точно удовлетворить
          любые ваши потребности.
        </p>
        <p className="font-normal text-lg mb-[15px]">
          ООО "МАКСАН ГРУПП" является надежным поставщиком запасных частей,
          узлов и агрегатов для горно-шахтного направления, и особое внимание мы
          уделяем продукции от всемирно известного производителя Caterpillar.
          Благодаря более чем вековому опыту и инновационным
          разработкам, Caterpillar зарекомендовал себя как лидер в производстве
          надежной и долговечной техники.
        </p>
        <div className="">
          <img src="/quvonch/Siroj/kran.png" alt="" />
        </div>
        <div className="w-[1400px] h-[435px] rounded-lg bg-white shadow-lg mt-[150px] mb-10">
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

          <div className="flex gap-[11px] mt-[30px] ">
            <button className="w-[352px] h-[101px]  ml-[11px] rounded-3xl bg-[#F4F7FF]">
              <h1 className="text-[#848B8C] text-base font-nor">Имя</h1>
              <h2 className="text-lg font-medium">Александр</h2>
            </button>
            <button className="w-[353px] h-[101px]  rounded-3xl bg-[#F4F7FF]">
              <h1 className="text-[#848B8C] font-normal text-lg">
                Электронный адрес
              </h1>
            </button>
            <button className="w-[352px] h-[101px]  rounded-3xl bg-[#F4F7FF]">
              <div className="flex gap-3 ml-[25px]">
                {" "}
                <img src="/quvonch/Siroj/image0.png" alt="" />
                <h2>+7</h2>
                <h3 className="text-[#848B8C]">(___) ___-__-__</h3>
              </div>
            </button>
            <button className="w-[263px] h-[101px]  rounded-3xl bg-[#355094]">
              <h1 className="text-white">Отправить</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
