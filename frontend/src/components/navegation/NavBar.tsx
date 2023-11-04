'use client'

import Image from "next/image";
import eu from "@assets/eu.jpg";
import logo from "@assets/icon.png";
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation';
import ButtonRounded from "@components/button/ButtonRounded";
import { Home, UtensilsCrossed, BookOpen, Lock, Star } from 'lucide-react';

export default function NavBar({ ...props }) {
	const router = useRouter();
	const [menu, setMenu] = useState(false);
	const { data: session, status } = useSession();
	const menuRef = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();
	const [route, setRoute] = useState(pathname);

	async function logout() {
		await signOut({
			redirect: false
		});

		router.replace('/');
	}

	const toggleMenu = () => {
		setMenu(!menu);
	};

	useEffect(() => {
		const closeMenu = () => {
			setMenu(false);
		};

		const handleDocumentClick = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				closeMenu();
			}
		};

		if (menu) {
			document.addEventListener("click", handleDocumentClick);
		} else {
			document.removeEventListener("click", handleDocumentClick);
		}

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, [menu]);

	return (
		<nav className="px-10 items-center flex justify-between backdrop-blur-md bg-gradient-to-br from-[rgba(255,255,255,0.50)] to-[rgba(255,255,255,0.50)] h-16 w-full">
			<div className="flex gap-10 w-3/12">
				<Image className="h-10 w-auto" src={logo} alt="logo" />
				<div className="bg-[#F5F5F5] w-[300px] h-10 flex items-center px-3 py-2 gap-2 rounded-md">
					<Search color="#0A0A0A" />
					<input className="bg-[#F5F5F5] w-full outline-none" placeholder="Pesquisar" name="search" id="search"></input>
				</div>
			</div>
			<div className="flex w-6/12 justify-center items-center">
				<ButtonRounded
					active={route == '/'}
					href="/"
					Icon={Home}
					text="Ínicio"
				/>
				<ButtonRounded
					active={route == 'categorias'}
					href="categorias"
					Icon={UtensilsCrossed}
					text="Categorias"
				/>
				<ButtonRounded
					active={route == 'receitas'}
					href="receitas"
					Icon={BookOpen}
					text="Receitas"
				/>
				<ButtonRounded
					active={route == 'permissoes'}
					href="permissoes"
					Icon={Lock}
					text="Permissões"
				/>
				<ButtonRounded
					active={route == 'favoritos'}
					href="favoritos"
					Icon={Star}
					text="Favoritos"
				/>
			</div>
			{status === "loading" || status === "unauthenticated" ? (
				<div className="h-3/12 flex gap-2">
					<a href="login" className="flex justify-center items-center w-20 h-full bg-[rgba(225,152,83,0.7)] rounded-lg text-white hover:bg-[rgba(207,140,76,0.7)]">Login</a>
					<a href="register" className="flex justify-center items-center w-32 h-full border-[1px] border-[rgba(225,152,83,0.7)] text-[rgba(225,152,83,0.7)] rounded-lg hover:bg-[rgba(207,140,76,0.7)] hover:border-[rgba(207,140,76,0.7)] hover:text-white">Registrar-se</a>
				</div>
			) : (
				<div className="w-3/12 flex justify-end items-center gap-2" >
					<div className="relative inline-block text-left" ref={menuRef}>
						<div className="flex gap-3 justify-center items-center cursor-pointer" onClick={toggleMenu}>
							<Image className="h-10 w-10 rounded-full" src={eu} alt="logo" />
							<div>
								<h1 className="text-sm">{session?.user.name}</h1>
								<p className="text-xs">Perfil</p>
							</div>
						</div>
						{menu && (
							<div className="absolute z-20 mt-3 w-56 right-0 rounded-md bg-gradient-to-br from-[rgba(255,255,255,0.50)] to-[rgba(255,255,255,0.50)] ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1" role="none">
									<a href="#" className="text-gray-700 hover:bg-[#ffeedf] block px-4 py-2 text-sm">Perfil</a>
									<a href="#" className="text-gray-700 hover:bg-[#ffeedf] block px-4 py-2 text-sm">Suporte</a>
									<form method="POST" action="#">
										<button type="submit" onClick={logout} className="text-gray-700 hover:bg-[#ffeedf] block w-full px-4 py-2 text-left text-sm">Logout</button>
									</form>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</nav>
	)
}