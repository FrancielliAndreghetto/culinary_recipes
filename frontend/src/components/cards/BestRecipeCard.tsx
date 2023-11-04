import Image from "next/image";
import pizza from "@assets/pizza.jpg";
import lasanha from "@assets/lasanha.jpg";
import massa from "@assets/massa.jpg";
import bolo from "@assets/bolo.jpg";
import { Calendar, ChevronRight, Clock } from "lucide-react";

interface CardProps {
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

export default function BestRecipeCard({ stars }: CardProps) {
  return (
    <div className="w-100% h-[630px] bg-[rgb(255,255,255,0.50)] backdrop-blur-md rounded-2xl hover:shadow-sm transition-all">
      <div className="p-12 h-full flex gap-12">
        <div className="w-3/6 h-full flex flex-col gap-10 justify-center">
          <div className="flex gap-6 h-full w-full">
            <Image className="w-[440px] h-full object-cover rounded-2xl" src={pizza} alt="" />
            <div className="flex flex-col gap-7 h-full justify-center">
              <Image className="w-28 h-28 rounded-2xl" src={pizza} alt="" />
              <Image className="w-28 h-28 rounded-2xl" src={pizza} alt="" />
              <Image className="w-28 h-28 rounded-2xl" src={pizza} alt="" />
              <Image className="w-28 h-28 rounded-2xl" src={pizza} alt="" />
            </div>
          </div>
        </div>
        <div className="w-4/6 h-full flex flex-col justify-between">
          <div>
            <h1 className="font-medium text-3xl text-[#333333]">Pizza bonita</h1>
            <p className="mt-3 text-[#333333CC]">Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit.</p>
          </div>
          <div className="flex gap-2 items-center py-5">
              <div className="flex items-center gap-2">
                <Calendar color="#333333CC" width={20} height={20} />
                <p className="text-[#333333CC]">25 de agosto de 2003</p>
              </div>
              <div className="w-[0.5px] h-5/6 bg-[#333333CC]" />
              <div className="flex items-center gap-2">
                <Clock color="#333333CC" width={20} height={20} />
                <p className="text-[#333333CC]">15 minutos no forno</p>
              </div>
            </div>
          <div>
            <p className="text-[#333333CC]">
              1- Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo.
              <br />
              2- Venenatis cras sed felis eget.
              <br />
              3- Duis ultricies lacus sed turpis tincidunt.
              <br />
              4- Interdum varius sit amet mattis.
              <br />
              5- Libero justo laoreet sit amet cursus sit amet dictum sit.
              <br />
              6- Pellentesque massa placerat duis
              <br />
              7- Pellentesque massa placerat duis
              <br />
              8- Pellentesque massa placerat duis
              <br />
              9- Pellentesque massa placerat duis
              <br />
              10- Pellentesque massa placerat duis
              <br />
              11- Pellentesque massa placerat duis
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
                {renderStars(stars)}
              </div>
              <div className="w-12 h-12 flex justify-center items-center bg-[#FFA14AB2] rounded-full cursor-pointer">
                <ChevronRight width={24} height={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}