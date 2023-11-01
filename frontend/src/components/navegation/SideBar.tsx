'use client'

import ButtonRounded from "@components/button/ButtonRounded";
import { Home, UtensilsCrossed, BookOpen, Lock, Star } from 'lucide-react';
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()
  const [route, setRoute] = useState(pathname);
  
  return (
    <aside className="flex flex-col px-3 items-center h-full w-20 backdrop-blur-md bg-gradient-to-br from-[rgba(255,255,255,0.50)] to-[rgba(255,255,255,0.50)]">
      <div className="flex p-6 flex-col justify-center items-center gap-6">
        <ButtonRounded
        href="/"
        Icon={Home}
        />
        <ButtonRounded
        href="categorias"
        Icon={UtensilsCrossed}
        />
        <ButtonRounded
        href="receitas"
        Icon={BookOpen}
        />
        <ButtonRounded
        href="permissoes"
        Icon={Lock}
        />
        <ButtonRounded
        href="favoritos"
        Icon={Star}
        />
      </div>
    </aside>
  )
}