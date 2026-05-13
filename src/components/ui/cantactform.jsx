import FormPost from "./FormPost";

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

      <FormPost />
    </div>
  );
}
