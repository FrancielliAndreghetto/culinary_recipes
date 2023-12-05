'use client'

import NavBar from "@components/navegation/NavBar";
import { useSession } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "react-tooltip";
import InputGroup from "@components/inputs/InputGroup";
import Label from "@components/labels/Label";
import Input from "@components/inputs/Input";
import TextEditor from "@components/editors/TextEditor";
import { ChangeEvent, FormEvent, useState } from "react";
import VideoDropZone from "@components/inputs/VideoDropZone";
import Image from "next/image";
import { api } from "@services/api";
import toastOptions from "@services/toastConfig";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from "@components/button/Button";

export default function Receitas() {
  // const { data: session } = useSession();
  // const filesUrl = process.env.filesUrl;
  const { data: session } = useSession();

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparation, setPreparation] = useState('');
  const [adicionalInformation, setAdicionalInformation] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<File | null | string>(null);
  const [selectedImageOne, setSelectedImageOne] = useState<string | null>(null);
  const [selectedImageTwo, setSelectedImageTwo] = useState<string | null>(null);
  const [selectedImageThree, setSelectedImageThree] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, setImage: (value: string | null) => void) => {
    const file = event.target.files?.[0] || null;
  
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          if (e.target) {
            setImage(e.target.result as string);
          }
        };
  
        reader.readAsDataURL(file);
      } else {
        console.error('Tipo de arquivo não suportado');
      }
    } else {
      setImage(null);
    }
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (!selectedImageOne || !selectedImageTwo || !selectedImageThree || !ingredientes || !preparation || !selectedVideo) {
      toast.warning("Por favor, preencha todos os campos antes de enviar.", toastOptions);
      return;
    }
  
    let formData = new FormData(event.currentTarget);
    formData.append("ingredients", ingredientes);
    formData.append("preparation", preparation);
    formData.append("cooking_hours", '1');
    formData.append("portion", '4');
    formData.append("categories", '1');
  
    try {
        await api.post("recipe", formData, {
          headers: {
            'Authorization': `Bearer ${session?.token}`,
          },
        });
  
      toast.info('Receita adicionada com sucesso!', toastOptions);
  
      return;
    } catch (error) {
      toast.error(`Erro ao adicionar Receita! ${error}`, toastOptions);
      return;
    }
  }  

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto py-10">
          <div className="flex flex-col w-full justify-center h-full bg-[rgb(255,255,255,0.50)] backdrop-blur-md rounded-2xl p-16">
            <h1 className="font-semibold text-4xl text-center pb-6">Cadastrar receita</h1>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <div className="flex gap-4">
                <InputGroup>
                  <Label htmfor="title">Nome</Label>
                  <Input value={name} id="title" name="title" placeholder="Digite o nome" onChange={(e: any) => setName(e.target.value)} />
                </InputGroup>
                <InputGroup>
                  <Label htmfor="description">Descrição</Label>
                  <Input value={description} id="description" name="description" placeholder="Digite a descrição" onChange={(e: any) => setDescription(e.target.value)} />
                </InputGroup>
              </div>
                <InputGroup>
                  <Label htmfor="description">Vídeo</Label>
                  <Input value={selectedVideo} id="video" name="video" placeholder="Digite o link do vídeo" onChange={(e: any) => setSelectedVideo(e.target.value)} />
                </InputGroup>
              <InputGroup>
                <Label htmfor="ingredientes">Ingredientes</Label>
                <TextEditor id="ingredientes" size={200} state={setIngredientes} />
              </InputGroup>
              <InputGroup>  
                <Label htmfor="preparation">Preparação</Label>
                <TextEditor id="preparation" size={200} state={setPreparation} />
              </InputGroup>
              <InputGroup>
                <Label htmfor="adicional_information">Informações adicionais</Label>
                <TextEditor id="adicional_information" size={200} state={setAdicionalInformation} />
              </InputGroup>
              <Label htmfor="ingredientes">Images</Label>
              <div className="flex gap-4 -mt-3">
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="one" className="flex flex-col items-center justify-center w-full h-64 border-2 border-[rgba(255,161,74,0.7)] border-dashed rounded-lg cursor-pointer bg-gray-50">
                    {selectedImageOne ? (
                      <>
                        <Image src={selectedImageOne} alt="Imagem selecionada" width="200" height="200" className="w-full max-w-full max-h-full rounded-lg" />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para enviar arquivo</span> ou arraste</p>
                        <p className="text-xs text-gray-500">PNG ou JPG</p>
                      </div>
                    )}
                    <input id="one" type="file" name="files" className="hidden" onChange={(e) => handleFileChange(e, setSelectedImageOne)} />
                  </label>
                </div>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="two" className="flex flex-col items-center justify-center w-full h-64 border-2 border-[rgba(255,161,74,0.7)] border-dashed rounded-lg cursor-pointer bg-gray-50">
                    {selectedImageTwo ? (
                      <>
                        <Image src={selectedImageTwo} alt="Imagem selecionada" width="200" height="200" className="w-full max-w-full max-h-full rounded-lg" />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para enviar arquivo</span> ou arraste</p>
                        <p className="text-xs text-gray-500">PNG ou JPG</p>
                      </div>
                    )}
                    <input id="two" type="file" name="files" className="hidden" onChange={(e) => handleFileChange(e, setSelectedImageTwo)}  />
                  </label>
                </div>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="three" className="flex flex-col items-center justify-center w-full h-64 border-2 border-[rgba(255,161,74,0.7)] border-dashed rounded-lg cursor-pointer bg-gray-50">
                    {selectedImageThree ? (
                      <>
                        <Image src={selectedImageThree} alt="Imagem selecionada" width="200" height="200" className="w-full max-w-full max-h-full rounded-lg" />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para enviar arquivo</span> ou arraste</p>
                        <p className="text-xs text-gray-500">PNG ou JPG</p>
                      </div>
                    )}
                    <input id="three" type="file" name="files" className="hidden" onChange={(e) => handleFileChange(e, setSelectedImageThree)}  />
                  </label>
                </div>
              </div>
              <Button>Adicionar</Button>
            </form>
          </div>
        </div>
        <Tooltip id="tooltip" style={{ background: '#fff', color: "#000", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", zIndex: "20" }} />
      </main>
    </>
  )
}
