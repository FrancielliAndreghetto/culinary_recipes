import Image from "next/image";
import bolo from "@assets/bolo.jpg"
import { ChevronRight } from "lucide-react";

interface CardProps {
  title: string;
}

export default function CategoryCard({ title }: CardProps) {
  return (
    <div className="w-52 h-96 bg-[#FFFFFF80] backdrop-blur-md hover:bg-[#FFA14AB2] transition-all rounded-3xl flex flex-col justify-evenly items-center group">
      <Image className="rounded-full w-28 h-28 object-fill" src={bolo} alt=""/>
      <h1 className="text-black group-hover:text-white text-2xl text-center font-medium">{title}</h1>
      <div className="h-[2px] w-24 bg-[#FFA14AB2] group-hover:bg-white"></div>
      <div className="w-12 h-12 flex justify-center items-center bg-[#FFA14AB2] rounded-full group-hover:bg-white cursor-pointer">
        <ChevronRight width={24} height={24} className="text-white group-hover:text-[#FFA14AB2]" />
      </div>
    </div>
  )
}