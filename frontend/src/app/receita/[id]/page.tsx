'use client'

import NavBar from "@components/navegation/NavBar";
import Image from "next/image";
import pizza from "@assets/pizza.jpg";
import lasanha from "@assets/lasanha.jpg";
import massa from "@assets/massa.jpg";
import bolo from "@assets/bolo.jpg";
import { useEffect, useState } from "react";
import { api } from "@services/api";
import Plyr from "plyr-react";
import 'plyr/dist/plyr.css';
import { Clock, User } from "lucide-react";
import Tab from "@components/tab/Tab";

type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  portion: number;
  preparation: string;
  adicional_information: string;
  cooking_hours: number;
  file: Array<{ id: string; file_path: string; type: string }>;
};

export default function Receita({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const filesUrl = process.env.filesUrl;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`recipe/${params.id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Erro ao buscar a receita:', error);
      }
    })();
  }, [params.id]);

  const imageFiles = recipe?.file.filter((file) => file.type === 'image') || [];

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto py-10">
          <div className="flex flex-col w-full justify-center h-full bg-[rgb(255,255,255,0.50)] backdrop-blur-md rounded-2xl">
            <div className="px-16 pt-16 w-full flex gap-5">
              <div className="w-9/12">
                <Plyr
                  options={{
                    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
                  }}
                  source={{
                    type: "video",
                    sources: [{ src: recipe && filesUrl ? filesUrl + recipe.file.find((file) => file.type === 'video')?.file_path : '', type: 'video/mp4' }],
                  }}
                />
              </div>
              <div className="w-3/12 flex gap-3 justify-center flex-col">
                {imageFiles.map((imageFile) => (
                  <Image
                    key={imageFile.id}
                    width={1000}
                    height={1000}
                    className="w-full h-44 rounded-lg object-cover"
                    src={filesUrl + imageFile.file_path}
                    alt={imageFile.type}
                  />
                ))}
              </div>
            </div>
            <div className="px-16 py-8 w-full flex flex-col gap-6">
              <h1 className="font-semibold text-3xl">{recipe?.title}</h1>
              <div className="flex gap-3 items-center h-full">
                <Image className="h-10 w-10 rounded-full" src={bolo} alt="logo" />
                <p className="text-sm">Marizete Souza</p>
                <div className="w-[1px] h-4 bg-[#DFDFDF]" />
                <p className="text-[#9C9CA4] text-sm">Café da manhã</p>
              </div>
              <div className="flex gap-6 items-center h-full">
                <div className="flex gap-2 items-center">
                  <User color="#9C9CA4" className="w-4 h-4" />
                  <p className="text-sm">Serve 4 pessoas</p>
                </div>
                <div className="flex gap-2  items-center">
                  <Clock color="#9C9CA4" className="w-4 h-4" />
                  <p className="text-sm">Serve 4 pessoas</p>
                </div>
              </div>
              <Tab recipe={recipe}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
