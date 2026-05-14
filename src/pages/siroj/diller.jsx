import CantactForm from "../../components/ui/cantactform";

export default function Diller() {
  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[12px] sm:text-[14px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Caterpillar</span>
      </div>

      <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-[42px] sm:text-[120px] font-bold uppercase tracking-tighter leading-[1] sm:leading-[0.9] text-black">
          Caterpillar
        </h1>
        <img
          src="/quvonch/icon/logo.svg"
          alt=""
          className="w-[120px] sm:w-auto"
        />
      </div>

      <div>
        <p className="font-normal text-[14px] sm:text-lg mb-[12px] sm:mb-[15px]">
          ООО "МАКСАН ГРУПП" является надежным поставщиком запасных частей,
          узлов и агрегатов для горно-шахтного направления, и особое внимание мы
          уделяем продукции от всемирно известного производителя Caterpillar.
          Благодаря более чем вековому опыту и инновационным разработкам,
          Caterpillar зарекомендовал себя как лидер в производстве надежной и
          долговечной техники.
        </p>

        <p className="font-normal text-[14px] sm:text-lg mb-[12px] sm:mb-[15px]">
          Мы понимаем, что для эффективной работы в тяжелых условиях
          горнодобывающей отрасли, каждая деталь имеет значение. Поэтому ООО
          "МАКСАН ГРУПП" предлагает только оригинальные запасные части от
          Caterpillar, которые гарантируют долговечность и безотказность вашей
          техники. В нашем ассортименте вы найдете широкий спектр запчастей,
          включая двигатели, трансмиссии, гидравлические системы и системы
          управления, что позволяет максимально быстро и точно удовлетворить
          любые ваши потребности.
        </p>

        <p className="font-normal text-[14px] sm:text-lg mb-[12px] sm:mb-[15px]">
          Мы понимаем, что для эффективной работы в тяжелых условиях
          горнодобывающей отрасли, каждая деталь имеет значение. Поэтому ООО
          "МАКСАН ГРУПП" предлагает только оригинальные запасные части от
          Caterpillar, которые гарантируют долговечность и безотказность вашей
          техники. В нашем ассортименте вы найдете широкий спектр запчастей,
          включая двигатели, трансмиссии, гидравлические системы и системы
          управления, что позволяет максимально быстро и точно удовлетворить
          любые ваши потребности.
        </p>

        <p className="font-normal text-[14px] sm:text-lg mb-[12px] sm:mb-[15px]">
          ООО "МАКСАН ГРУПП" является надежным поставщиком запасных частей,
          узлов и агрегатов для горно-шахтного направления, и особое внимание мы
          уделяем продукции от всемирно известного производителя Caterpillar.
          Благодаря более чем вековому опыту и инновационным разработкам,
          Caterpillar зарекомендовал себя как лидер в производстве надежной и
          долговечной техники.
        </p>

        <div className="mt-6 sm:mt-8">
          <img
            src="/quvonch/Siroj/kran.png"
            alt=""
            className="w-full h-auto rounded-[16px] sm:rounded-[24px]"
          />
        </div>

        <div className="mt-10 sm:mt-16">
          <CantactForm />
        </div>
      </div>
    </div>
  );
}