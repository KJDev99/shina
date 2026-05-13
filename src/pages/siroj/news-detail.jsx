import FormPost from "../../components/ui/FormPost";

export default function NewsDetail() {
  return (
    <div className="max-w-[1436px] m-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6 text-[14px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-black">Новости</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Запчасти для спецтехники Санкт-Петербург</span>
      </div>
       <div className="mt-[20px]">
        <div className="mb-12 flex gap-[300px] ">
          <h1 className="text-6xl font-semibold uppercase   text-black">
            Запчасти для спецтехники Санкт-Петербург
          </h1>
         <div className="flex mr-5 mt-[60px]">
          <h2 className="font-semibold text-6xl">22</h2>
          <h3 className="text-3xl font-semibold text-[#11111133] mt-[23px]">.03.2026</h3>
         </div>
        </div>
      </div>
      <div className="mt-[20px] mb-[55px]">
        <img src="/quvonch/Siroj/bir.png" alt="" />
      </div>
        <div className="">
          <p className="text-lg font-normal mb-[20px]">ООО "Максан Групп" является надежным партнером в области поставки оборудования и запасных частей для горно-шахтного сектора. Мы успешно решаем задачи по обеспечению наших клиентов лучшими узлами и агрегатами от мировых лидеров, таких как Caterpillar, Atlas Copco, Epiroc, Sandvik, Cummins, Deutz, Allison Transmission, Dana и Kessler.</p>
          <p className="text-lg font-normal mb-[20px]">Наша компания специализируется на поставке оборудования, уделяя особое внимание качеству и своевременности предоставляемых решений. Мы предлагаем широкий ассортимент продукции, которая гарантирует эффективность и надежность в суровых условиях добычи полезных ископаемых.</p>
          <p className="text-lg font-normal mb-[20px]">Поставка оборудования и запасных частей от "Максан Групп" включает в себя комплексный подход к каждому клиенту. Мы обеспечиваем индивидуальный подбор техники и комплектующих, учитывая все технические требования и специфику эксплуатации. Наши специалисты готовы предоставить профессиональные консультации и поддержку на всех этапах сотрудничества, чтобы ваши производственные процессы были непрерывными и эффективными. Выбирая нас, вы получаете надежность и гарантии качественного обслуживания.</p>
        </div>
        <FormPost />
    </div>
  );
}
