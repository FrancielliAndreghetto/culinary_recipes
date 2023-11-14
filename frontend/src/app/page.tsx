'use client'

import NavBar from "@components/navegation/NavBar";
import DashboardCard from "@components/cards/DashboardCard";
import { ChevronRight } from "lucide-react";
import CategoryCard from "@components/cards/CategoryCard";
import RecipeCard from "@components/cards/RecipeCard";
import BestRecipeCard from "@components/cards/BestRecipeCard";
import Footer from "@components/footer/Footer";
import { useCallback, useEffect, useState } from "react";
import { api } from "@services/api";
import axios from "axios";
import { useSession } from "next-auth/react";
import bolo from "@assets/bolo.jpg";
import { Tooltip } from "react-tooltip";

type Category = {
  id: number;
  title: string;
  description: string;
  file: Array<any>;
};

export default function Home() {
  const { data: session } = useSession();
  const filesUrl = process.env.filesUrl;
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await api.get("category");

      setCategories(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          // Tratar erro de autenticação, redirecionar para o login, renovar token, etc.
        } else {
        }
      } else {
        // Se não for um erro do Axios, você pode tratar de outra maneira
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        await fetchCategories();
      }
    };
    fetchData();
  }, [session?.token, fetchCategories]);

  function shuffleArray(array: Array<Category>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const shuffledCategories = shuffleArray(categories).slice(0, 6);

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto">
          <DashboardCard />
          <div className="py-24">
            <div className="flex justify-between items-center pb-11">
              <h1 className="font-semibold text-5xl">Categorias</h1>
              <a href="categorias" className="flex gap-1 text-base text-[#FFA14AB2] hover:text-[#ffa14a]">Ver todas<ChevronRight /></a>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {shuffledCategories.map((category) => (
                <CategoryCard file={category.file && category.file.length > 0 ? filesUrl + category.file[0]?.file_path : bolo} key={category.id} isAdmin={false} title={category.title} />
              ))}
            </div>
          </div>
          <div className="py-24">
            <div className="flex justify-between items-center pb-11">
              <h1 className="font-semibold text-5xl">Melhores receitas</h1>
              <a href="categorias" className="flex gap-1 text-base text-[#FFA14AB2] hover:text-[#ffa14a]">Ver todas<ChevronRight /></a>
            </div>
            <div className="flex flex-wrap justify-center gap-20">
              <RecipeCard id={4} title="Bolos" stars={5} description="Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit." />
              <RecipeCard id={4} title="Bolos" stars={3} description="Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit." />
              <RecipeCard id={4} title="Bolos" stars={4} description="Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit." />
            </div>
          </div>
          <div className="py-24">
            <div className="flex justify-between items-center pb-11">
              <h1 className="font-semibold text-5xl">Receita do dia</h1>
              <a href="categorias" className="flex gap-1 text-base text-[#FFA14AB2] hover:text-[#ffa14a]">Ver todas<ChevronRight /></a>
            </div>
            <BestRecipeCard stars={5} />
          </div>
        </div>
        <Tooltip id="tooltip" style={{ background: '#fff', color: "#000", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", zIndex: "20" }} />
      </main>
      <Footer />
    </>
  )
}
