'use client'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import login from "@assets/logar.png";
import logo from "@assets/icon.png";
import InputGroup from "@components/inputs/InputGroup";
import Input from "@components/inputs/Input";
import Label from "@components/labels/Label";
import Button from "@components/button/Button"
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
			toast.error('Erro ao logar, verifique os dados!', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
      return;
    }

		toast.info('Logado com sucesso, redirecionando!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			onClose: () => {
				setTimeout(() => {
					router.replace('/');
				}, 3000);
			},
		});
  }

	return (
		<section className="h-screen">
			<div className="flex h-full flex-end items-center gap-24 px-32 py-16 bg-gradient-to-r from-[#FEDCC5] to-[#FEDDC6] max-lg: justify-center">
				<div className="w-[500px] h-[600px] shadow-sm drop-shadow-[0_4px_70xpx_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.30)] backdrop-blur-3xl rounded-3xl">
					<div className="p-24 flex flex-col gap-6">
						<Image src={logo} alt="logo" className="m-auto" />
						<h1 className="text-gray-950 text-3xl font-semibold">Login</h1>
						<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
							<InputGroup>
								<Label htmfor="email">E-mail</Label>
								<Input id="email" type="email" placeholder="Seu Email" onChange={(e: any) => setEmail(e.target.value)} />
							</InputGroup>
							<InputGroup>
								<Label htmfor="password">Senha</Label>
								<Input id="password" type="password" placeholder="Sua senha" onChange={(e: any) => setPassword(e.target.value)} />
								<a href="forgot-password" className="hover:underline text-xs font-normal mt-1 w-fit">Esqueceu a senha?</a>
							</InputGroup>
							<Button type="submit">Logar-se</Button>
							<h2 className="text-xs font-normal">Você não tem uma conta? <a href="register" className="text-xs font-semibold hover:underline">Registre-se aqui</a> </h2>
						</form>
					</div>
				</div>
				<div className="w-2/4 max-lg:hidden">
					<Image src={login} alt="login" />
				</div>
			</div>
		</section>
	)
}