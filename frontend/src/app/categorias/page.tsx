'use client'

import Button from "@components/button/Button";
import CategoryCard from "@components/cards/CategoryCard";
import Dropzone from "@components/inputs/DropZone";
import Input from "@components/inputs/Input";
import InputGroup from "@components/inputs/InputGroup";
import Label from "@components/labels/Label";
import NavBar from "@components/navegation/NavBar";
import { ChangeEvent, useState } from "react";

export default function Categorias() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleUpload = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedImage || !name || !description) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", selectedImage);
    // fetch("/endpoint", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Sucesso ao enviar dados para o backend:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao enviar dados para o backend:", error);
    //   });
  };

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto">
          <div className="py-24">
            <div className="flex justify-between items-center pb-11">
              <h1 className="font-semibold text-5xl">Categorias</h1>
              <div className="w-40">
                <Button onClick={() => setModalOpen(true)}>Adicionar</Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
              <CategoryCard isAdmin={isAdmin} title="Bolos" />
            </div>
          </div>
        </div>
      </main>
      {modalOpen && (
        <div id="authentication-modal" aria-hidden="true" className={`flex justify-center items-center bg-[#000000bd] fixed z-50 w-full overflow-hidden md:inset-0 h-screen`}>
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button onClick={() => setModalOpen(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Fechar modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">Adicionar categoria</h3>
                <form className="space-y-6" action="#">
                  <InputGroup>
                    <Label htmfor="name">Nome</Label>
                    <Input value={name} id="name" type="name" placeholder="Digite o nome" onChange={(e: any) => setName(e.target.value)} required />
                  </InputGroup>
                  <InputGroup>
                    <Label htmfor="description">Descrição</Label>
                    <Input value={description} id="description" type="description" placeholder="Digite a desrcição" onChange={(e: any) => setDescription(e.target.value)} required />
                  </InputGroup>
                  <Dropzone onFileChange={handleFileChange} />
                  <Button onClick={handleUpload}>Adicionar</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}