import NavBar from "@components/navegation/NavBar"
import SideBar from "@components/navegation/SideBar";
import DashboardCard from "@components/cards/DashboardCard";
import { ChevronRight } from "lucide-react";
import CategoryCard from "@components/cards/CategoryCard";
import RecipeCard from "@components/cards/RecipeCard";
import BestRecipeCard from "@components/cards/BestRecipeCard";
import Footer from "@components/footer/Footer";

export default async function Home() {
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
              <CategoryCard title="Bolos" />
              <CategoryCard title="Bolos" />
              <CategoryCard title="Bolos" />
              <CategoryCard title="Bolos" />
              <CategoryCard title="Bolos" />
              <CategoryCard title="Bolos" />
            </div>
          </div>
          <div className="py-24">
            <div className="flex justify-between items-center pb-11">
              <h1 className="font-semibold text-5xl">Melhores receitas</h1>
              <a href="categorias" className="flex gap-1 text-base text-[#FFA14AB2] hover:text-[#ffa14a]">Ver todas<ChevronRight /></a>
            </div>
            <div className="flex flex-wrap justify-center gap-20">
              <RecipeCard title="Bolos" stars={5} description="Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit." />
              <RecipeCard title="Bolos" stars={3} description="Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit." />
              <RecipeCard title="Bolos" stars={4} description="Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit." />
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
      </main>
      <Footer />
    </>
  )
}
