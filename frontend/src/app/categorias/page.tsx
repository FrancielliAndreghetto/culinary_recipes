'use client'

import Button from "@components/button/Button";
import CategoryCard from "@components/cards/CategoryCard";
import Dropzone from "@components/inputs/DropZone";
import Input from "@components/inputs/Input";
import InputGroup from "@components/inputs/InputGroup";
import Label from "@components/labels/Label";
import NavBar from "@components/navegation/NavBar";
import { api } from "@services/api";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import bolo from "@assets/bolo.jpg";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "react-tooltip";

type Category = {
  id: number;
  title: string;
  description: string;
  file: Array<any>;
};

export default function Categorias() {
  const { data: session } = useSession();
  
  const filesUrl = process.env.filesUrl;
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleFileChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedImage || !title || !description) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", selectedImage);
    try {
      await api.post("category", formData, {
        headers: {
          'Authorization': `Bearer ${session?.token}`,
        },
      });

      toast.info('Categoria salva com sucesso!', {
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
            setModalOpen(false);
            setTitle('');
            setDescription('');
            setSelectedImage(null);
            fetchCategories();
          }, 3000);
        },
      });
      return;
    } catch (error) {
      toast.error('Erro ao salvar categoria!' + error, {
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
  };

  const fetchCategories = useCallback(async () => {
    try {
      const response = await api.get("category");

      setCategories(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          // Tratar erro de autenticação, redirecionar para o login, renovar token, etc.
        } else {
        }
      } else {
        // Se não for um erro do Axios, você pode tratar de outra maneira
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        await fetchCategories();
      }
    };
    fetchData();
  }, [session?.token, fetchCategories]);

  useEffect(() => {
    if (session) {
      setIsAdmin(session.user.admin);
    }
  }, [session]);
  
  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto py-10">
          <div className="flex justify-between items-center pb-11">
            <h1 className="font-semibold text-5xl">Categorias</h1>
            {isAdmin && (
              <div className="w-40">
                <Button data-tooltip-id="tooltip" data-tooltip-content="Adicionar categoria" onClick={() => setModalOpen(true)}>Adicionar</Button>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {categories.map((category) => (
              <CategoryCard file={category.file && category.file.length > 0 ? filesUrl + category.file[0]?.file_path : bolo} key={category.id} isAdmin={isAdmin} title={category.title} />
            ))}
          </div>
        </div>
        <Tooltip id="tooltip" style={{ background: '#fff', color: "#000", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", zIndex: "20" }} />
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
                    <Label htmfor="title">Título</Label>
                    <Input value={title} id="title" type="title" placeholder="Digite o título" onChange={(e: any) => setTitle(e.target.value)} required />
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