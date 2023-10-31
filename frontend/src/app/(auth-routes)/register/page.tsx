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
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status == 200) {
        toast.info('Registrado com sucesso!', {
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
              router.replace('/login');
            }, 3000);
          },
        }); 
      }
    } catch (error) {
      toast.error('Erro ao fazer registro, verifique os dados!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="h-screen">
      <div className="flex h-full flex-end items-center gap-24 px-32 py-16 bg-gradient-to-r from-[#FEDCC5] to-[#FEDDC6] max-lg: justify-center">
        <div className="w-[500px] h-[600px] shadow-sm drop-shadow-[0_4px_70xpx_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.30)] backdrop-blur-3xl rounded-3xl">
          <div className="p-24 flex flex-col gap-6">
            <Image src={logo} alt="logo" className="m-auto" />
            <h1 className="text-gray-950 text-3xl font-semibold">Cadastre-se</h1>
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <InputGroup>
                <Label htmfor="name">Nome completo</Label>
                <Input id="name" name="name" type="name" placeholder="Seu nome completo" onChange={handleInputChange} />
              </InputGroup>
              <InputGroup>
                <Label htmfor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="Seu Email" onChange={handleInputChange} />
              </InputGroup>
              <InputGroup>
                <Label htmfor="password">Senha</Label>
                <Input id="password" name="password" type="password" placeholder="Sua senha" onChange={handleInputChange} />
              </InputGroup>
              <Button type="submit">Cadastrar-se</Button>
              <h2 className="text-xs font-normal">Você já tem uma conta? <a href="login" className="text-xs font-semibold hover:underline">Logue-se aqui</a></h2>
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