import Link from "next/link";

export default function Home() {

  return (
    <div className="w-fit flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mx-auto">
      <div className="w-[60vw] max-w-[45rem]">
        <img src="/fishing.png" alt="Fishing image" className="bg-blend-multiply w-full " />
      </div>
      <div className="min-w-fit w-fit lg:mr-auto lg:pl-10">
        <Link href="/predict" className="text-center block font-bold px-5 py-4  rounded-lg lg:px-14 lg:py-6 shadow-[4px_5px_6px_1px] shadow-[#1cc4f2] lg:text-2xl bg-[#29d3ed] dark:bg-[#277AF8] hover:shadow-[8px_6px_5px_2px] hover:shadow-[#1cc4f2] dark:shadow-[#277bf8b8] dark:hover:shadow-[#2743f8d6] hover:bounce  text-white hover:scale-105 duration-200 transition-all">Detect Now</Link>
      </div>
    </div>
  );
}
