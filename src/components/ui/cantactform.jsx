import FormPost from "./FormPost";

export default function CantactForm() {
  return (
    <div className="max-w-[1400px] w-full m-auto h-auto md:h-[455px] rounded-[25px] mb-[50px] md:mb-[100px] bg-white mt-[80px] md:mt-[150px] p-5 md:p-0">
      <div data-aos="fade-up" data-aos-delay={150} className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-5 md:mt-10 md:ml-10 text-center md:text-left">
          <h2 className="font-semibold text-3xl md:text-6xl mb-[15px]">
            Остались вопросы?
          </h2>
          <h3 className="text-[#11111166] font-normal text-base md:text-lg">
            Свяжитесь с нами — подберём запчасти{" "}
            <br className=" md:block" /> и проконсультируем
          </h3>
        </div>
        <div className="flex justify-center items-center max-md:mt-[100px]">
          <img
            src="/quvonch/Siroj/1780.png"
            alt=""
            className="w-2/3 md:w-auto mt-[-100px] md:ml-[200px]"
          />
        </div>
      </div>

      <FormPost />
    </div>
  );
}
