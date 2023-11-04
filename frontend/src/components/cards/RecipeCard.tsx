import Image from "next/image";
import bolo from "@assets/bolo.jpg"
import { ChevronRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  stars: number;
}

function renderStars(stars: number) {
  const starIcons = [];

  for (let i = 0; i < 5; i++) {
    const isFilled = i < stars;
    starIcons.push(
      <svg
        key={i}
        className={`w-7 h-7 ${isFilled ? 'text-[#FFA14AB2]' : 'text-gray-200'}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }
  return starIcons;
}

export default function RecipeCard({ title, description, stars }: CardProps) {
  return (
    <div className="w-[350px] h-[350px] bg-[#FFFFFF80] backdrop-blur-md rounded-3xl flex flex-col justify-evenly mt-24 items-center group hover:shadow-lg transition-all">
      <Image className="rounded-full w-52 h-52 -mt-28 object-fill" src={bolo} alt="" />
      <div className="px-8 flex flex-col gap-6">
        <h1 className="text-black text-3xl text-center font-medium">{title}</h1>
        <p className="text-[#333333CC] text-base">{description}</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            {renderStars(stars)}
          </div>
          <div className="w-12 h-12 flex justify-center items-center bg-[#FFA14AB2] rounded-full cursor-pointer">
            <ChevronRight width={24} height={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}