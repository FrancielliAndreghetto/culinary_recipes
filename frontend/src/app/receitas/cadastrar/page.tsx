'use client'

import NavBar from "@components/navegation/NavBar";
import { useSession } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "react-tooltip";
import InputGroup from "@components/inputs/InputGroup";
import Label from "@components/labels/Label";
import Input from "@components/inputs/Input";
import TextEditor from "@components/editors/TextEditor";
import { useState } from "react";

export default function Receitas() {
  // const { data: session } = useSession();
  // const filesUrl = process.env.filesUrl;

  const [ingredientes, setIngredientes] = useState('');
  const [preparation, setPreparation] = useState('');
  const [adicionalInformation, setAdicionalInformation] = useState('');
  
  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto py-10">
          <div className="flex flex-col w-full justify-center h-full bg-[rgb(255,255,255,0.50)] backdrop-blur-md rounded-2xl p-16">
            <h1 className="font-semibold text-4xl text-center pb-6">Cadastrar receita</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <InputGroup>
                  <Label htmfor="name">Nome</Label>
                  <Input id="name" name="name" placeholder="Digite o nome" />
                </InputGroup>
                <InputGroup>
                  <Label htmfor="description">Descrição</Label>
                  <Input id="description" name="description" placeholder="Digite a descrição" />
                </InputGroup>
              </div>
              <InputGroup>
                <Label htmfor="ingredientes">Ingredientes</Label>
                <TextEditor id="ingredientes" size={200} state={setIngredientes}/>
              </InputGroup>
              <InputGroup>
                <Label htmfor="preparation">Preparação</Label>
                <TextEditor id="preparation" size={200} state={setPreparation}/>
              </InputGroup>
              <InputGroup>
                <Label htmfor="adicional_information">Informações adicionais</Label>
                <TextEditor id="adicional_information" size={200} state={setAdicionalInformation}/>
              </InputGroup>
            </div>
          </div>
        </div>
        <Tooltip id="tooltip" style={{ background: '#fff', color: "#000", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", zIndex: "20" }} />
      </main>
    </>
  )
}
