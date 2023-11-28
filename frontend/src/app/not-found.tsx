'use client'

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import NotFoundImageOne from "@assets/errors/404.1.png";
import NotFoundImageTwo from "@assets/errors/404.2.png";
import NotFoundImageThree from "@assets/errors/404.3.png";

const NotFound = () => {
  const images = useMemo(() => [NotFoundImageOne, NotFoundImageTwo, NotFoundImageThree],[]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const transition = () => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex + direction;

        if (newIndex === images.length - 1) {
          setDirection(-1);
        } else if (newIndex === 0) {
          setDirection(1);
        }

        return newIndex;
      });
    };

    const timeoutId = setTimeout(() => {
      transition();
      setTimeout(transition, 1000);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [direction, images]);

  return (
    <main className="flex max-lg:h-screen justify-center items-center overflow-hidden relative">
      <div className="container flex flex-col justify-center items-center">
        <div className="w-4/6">
          <Image src={images[currentImageIndex]} alt="Error image" />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-semibold text-5xl text-center">Página não foi encontrada</h1>
          <div>
            <p className="text-center">A página que você procura não está disponível.</p>
            <p className="text-center">Tente pesquisar novamente ou use o botão Voltar abaixo.</p>
          </div>
          <a href="/" title="" className="flex justify-center items-center w-40 h-12 bg-[#e09752] rounded-md text-white hover:bg-[#cf8a4a]">VOLTAR</a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
