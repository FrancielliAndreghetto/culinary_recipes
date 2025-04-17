'use client'
import ButtonLogout from "@components/button/ButtonLogout"
import { useSession } from "next-auth/react";

export default function Admin(){
	const { data: session } = useSession();
	console.log(session)
	
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1 className="text-2xl mb-8">Olá, {JSON.stringify(session?.token)} {session?.user.name}. Bem vindo(a)!</h1>
			<ButtonLogout />
		</div>
	)
}