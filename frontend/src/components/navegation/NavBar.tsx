'use client'

import Image from "next/image";
import eu from "@assets/eu.jpg";
import logo from "@assets/icon.png";
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function NavBar({ ...props }) {
	const router = useRouter();
	const [menu, setMenu] = useState(false);
	const { data: session, status } = useSession();
	const menuRef = useRef<HTMLDivElement | null>(null);

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
			<Image className="h-10 w-auto" src={logo} alt="logo" />
			<div className="bg-[#F5F5F5] w-[500px] h-10 flex items-center px-3 py-2 gap-2 rounded-md">
				<Search color="#0A0A0A" />
				<input className="bg-[#F5F5F5] w-full outline-none" placeholder="Pesquisar" name="search" id="search"></input>
			</div>
			{status === "loading" || status === "unauthenticated" ? (
				<div className="h-8 flex gap-2">
					<a href="register" className="flex justify-center items-center w-32 h-full border-[1px] border-[rgba(225,152,83,0.7)] text-[rgba(225,152,83,0.7)] rounded-lg hover:bg-[rgba(207,140,76,0.7)] hover:border-[rgba(207,140,76,0.7)] hover:text-white">Registrar-se</a>
					<a href="login" className="flex justify-center items-center w-20 h-full bg-[rgba(225,152,83,0.7)] rounded-lg text-white hover:bg-[rgba(207,140,76,0.7)]">Login</a>
				</div>
			) : (
				<div className="h-8 flex justify-center items-center gap-2 cursor-pointer" onClick={toggleMenu} >
					<div className="relative inline-block text-left" ref={menuRef}>
						<div className="flex gap-3 justify-center items-center">
							<Image className="h-10 w-10 rounded-full" src={eu} alt="logo" />
							<div>
								<h1 className="text-sm">{session?.user.name}</h1>
								<p className="text-xs">Perfil</p>
							</div>
						</div>
						{menu && (
							<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
								<div className="py-1" role="none">
									<a href="#" className="text-gray-700 block px-4 py-2 text-sm">Perfil</a>
									<a href="#" className="text-gray-700 block px-4 py-2 text-sm">Suporte</a>
									<form method="POST" action="#">
										<button type="submit" onClick={logout} className="text-gray-700 block w-full px-4 py-2 text-left text-sm">Logout</button>
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