'use client'

import CategoryCard from "@components/cards/CategoryCard";
import NavBar from "@components/navegation/NavBar";
import { useState } from "react";

export default function Categorias() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto">
        <div className="py-24">
            <div className="flex justify-between items-center pb-11">
              <h1 className="font-semibold text-5xl">Categorias</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}