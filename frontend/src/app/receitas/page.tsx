'use client'

import Button from "@components/button/Button";
import NavBar from "@components/navegation/NavBar";
import { api } from "@services/api";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "react-tooltip";
import toastOptions from "@services/toastConfig";
import Swal, { SweetAlertResult } from 'sweetalert2';
import RecipeCard from "@components/cards/RecipeCard";
import { useSearchParams } from 'next/navigation'

type Recipe = {
  id: number;
  title: string;
  description: string;
  file: Array<any>;
};

export default function Receitas() {
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const filesUrl = process.env.filesUrl;
  const [isAdmin, setIsAdmin] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = useCallback(async () => {
    try {
      const route = category ? `recipe?category=${category}` : 'recipe';
      const response = await api.get(route);

      setRecipes(response.data);
    } catch (error) {
      // Tratar erro de autenticação, redirecionar para o login, renovar token, etc.
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {

      } else {
        // Se não for um erro do Axios, você pode tratar de outra maneira
      }
    }
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchRecipes();
    };
    fetchData();
  }, [fetchRecipes]);

  useEffect(() => {
    if (session) {
      setIsAdmin(session.user.admin);
    }
  }, [session]);

  async function deleteRecipe(categoryId: string) {
    const result: SweetAlertResult = await Swal.fire({
      title: 'Você tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, tenho certeza!',
      cancelButtonText: 'Cancelar'
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await api.delete(`category/${categoryId}`, {
        headers: {
          'Authorization': `Bearer ${session?.token}`,
        },
      });

      fetchRecipes();

      toast.info('Categoria deletada com sucesso!', toastOptions);
      return;
    } catch (error) {
      toast.error('Erro ao deletar categoria!' + error, toastOptions);
      return;
    }
  };

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto py-10">
          <div className="flex justify-between items-center pb-11">
            <h1 className="font-semibold text-5xl">Receitas</h1>
            {isAdmin && (
              <a href="/receitas/cadastrar" className="w-40 h-12 flex justify-center items-center bg-[rgba(225,152,83,0.7)] rounded-md text-white hover:bg-[rgba(207,140,76,0.7)]" data-tooltip-id="tooltip" data-tooltip-content="Adicionar receita">Adicionar</a>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} title={recipe.title} stars={5} description={recipe.description} id={recipe.id} />
            ))}
          </div>
        </div>
        <Tooltip id="tooltip" style={{ background: '#fff', color: "#000", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", zIndex: "20" }} />
      </main>
    </>
  )
}