import Image from "next/image";
import login from "@assets/logar.png";
import logo from "@assets/icon.png";
import InputGroup from "@components/inputs/InputGroup";
import Input from "@components/inputs/Input";
import Label from "@components/labels/Label";
import Button from "@components/button/Button"

export default function Register() {
	return (
		<section className="h-screen">
			<div className="flex h-full flex-end items-center gap-24 px-32 py-16 bg-gradient-to-r from-[#FEDCC5] to-[#FEDDC6] max-lg: justify-center">
				<div className="w-[500px] h-[600px] shadow-sm drop-shadow-[0_4px_70xpx_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.30)] backdrop-blur-3xl rounded-3xl">
					<div className="p-24 flex flex-col gap-6">
						<Image src={logo} alt="logo" className="m-auto" />
						<h1 className="text-gray-950 text-3xl font-semibold">Cadastre-se</h1>
						<form className="flex flex-col gap-4">
                            <InputGroup>
                                <Label htmfor="name">Nome completo</Label>
                                <Input id="name" type="name" placeholder="Seu nome completo"></Input>
                            </InputGroup>
							<InputGroup>
								<Label htmfor="email">E-mail</Label>
								<Input id="email" type="email" placeholder="Seu Email"></Input>
							</InputGroup>
							<InputGroup>
								<Label htmfor="password">Senha</Label>
								<Input id="password" type="password" placeholder="Sua senha"></Input>
							</InputGroup>
							<Button type="submit">Cadastrar-se</Button>
							<h2 className="text-xs font-normal">Você já tem uma conta? <a href="login" className="text-xs font-semibold hover:underline">Logue-se aqui</a> </h2>
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