'use client'

import ButtonRounded from "@components/button/ButtonRounded";
import { Home, UtensilsCrossed, BookOpen, Lock, Star } from 'lucide-react';
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()
  const [route, setRoute] = useState(pathname);
  
  return (
    <aside className="flex flex-col px-3 items-center w-1/12 backdrop-blur-md bg-gradient-to-br from-[rgba(255,255,255,0.50)] to-[rgba(255,255,255,0.50)]">
      <div className="flex flex-col justify-center items-center gap-2">
        <ButtonRounded
          href="/"
          Icon={Home}
          text="Ínicio"
        />
        <ButtonRounded
          href="categorias"
          Icon={UtensilsCrossed}
          text="Categorias"
        />
        <ButtonRounded
          href="receitas"
          Icon={BookOpen}
          text="Receitas"
        />
        <ButtonRounded
          href="permissoes"
          Icon={Lock}
          text="Permissões"
        />
        <ButtonRounded
          href="favoritos"
          Icon={Star}
          text="Favoritos"
        />
      </div>
    </aside>
  )
}