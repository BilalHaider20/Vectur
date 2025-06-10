import { useMemo } from "react";

export default function CircleCard({ number, title, subtitle, description }) {
  return (
    <div className="group relative flex flex-col items-center justify-center w-[16rem] h-[16rem] lg:w-[20rem] lg:h-[20rem] xl:w-[24rem] xl:h-[24rem] rounded-full border border-blue text-center text-white transition-all duration-300 hover:scale-110 active:scale-105 hover:shadow-[0_0_10px_2px_#009CFE] active:shadow-[0_0_10px_2px_#009CFE] cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-[#062949] hover:to-[#0a2841] hover:z-100 hover:border-blue-dark active:bg-gradient-to-r active:from-[#062949] active:to-[#0a2841] active:z-100 active:border-blue-dark">
  <div className="flex flex-col items-start justify-center font-sora text-gray-medium px-4">
    <span className="text-xs sm:text-sm lg:text-base font-normal group-hover:hidden">0{number}</span>
    <h3 className="mt-2 text-xl sm:text-2xl lg:text-4xl font-bold text-gray-light">{title}</h3>
    <p className="text-xs sm:text-sm lg:text-base mt-1 group-hover:hidden group-active:hidden">{subtitle}</p>
    <p className="text-[8px] lg:text-xs 2xl:text-sm mt-1 hidden group-hover:block group-active:block text-left w-40 lg:w-56">{description}</p>
  </div>
</div>


  );
}