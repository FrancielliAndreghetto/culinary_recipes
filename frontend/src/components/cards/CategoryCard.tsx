import Image from "next/image";
import { ChevronRight, Pencil, Trash } from "lucide-react";

interface CardProps {
  title: string;
  file: string;
  isAdmin?: boolean;
}

export default function CategoryCard({ title, file, isAdmin = false }: CardProps) {
  return (
    <div className="w-52 h-96 bg-[#FFFFFF80] backdrop-blur-md hover:bg-[#FFA14AB2] transition-all rounded-3xl flex flex-col justify-evenly items-center group">
      <Image className="rounded-full w-28 h-28 object-fill" width={100} height={100} src={file} alt=""/>
      <h1 className="text-black group-hover:text-white text-2xl text-center font-medium">{title}</h1>
      <div className="h-[2px] w-24 bg-[#FFA14AB2] group-hover:bg-white"></div>
      <div className="flex gap-2">
        {isAdmin && (
          <>
            <div data-tooltip-id="tooltip" data-tooltip-content="Excluir categoria" data-tooltip-target="tooltip-default" className="w-12 h-12 flex justify-center items-center bg-[#FFA14AB2] rounded-full group-hover:bg-white cursor-pointer">
              <Trash width={24} height={24} className="text-white group-hover:text-[#FFA14AB2]" />
            </div>
            <div data-tooltip-id="tooltip" data-tooltip-content="Editar categoria" className="w-12 h-12 flex justify-center items-center bg-[#FFA14AB2] rounded-full group-hover:bg-white cursor-pointer">
              <Pencil width={24} height={24} className="text-white group-hover:text-[#FFA14AB2]" />
            </div>
          </>
        )}
        <div data-tooltip-id="tooltip" data-tooltip-content="Acessar categoria" className="tooltip w-12 h-12 flex justify-center items-center bg-[#FFA14AB2] rounded-full group-hover:bg-white cursor-pointer">
          <ChevronRight width={24} height={24} className="text-white group-hover:text-[#FFA14AB2]" />
        </div>
      </div>
    </div>
  )
}