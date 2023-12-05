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
import { FormEvent, useCallback, useEffect, useState } from "react";
import bolo from "@assets/bolo.jpg";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "react-tooltip";
import toastOptions from "@services/toastConfig";
import Swal, { SweetAlertResult } from 'sweetalert2';

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
  const [selectedImage, setSelectedImage] = useState<File | null | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [swalProps, setSwalProps] = useState({});

  const fetchCategories = useCallback(async () => {
    try {
      const response = await api.get("category");

      setCategories(response.data);
    } catch (error) {
      // // Tratar erro de autenticação, redirecionar para o login, renovar token, etc.
      // if (axios.isAxiosError(error) && error.response && error.response.status === 401) {

      // } else {
      //   // Se não for um erro do Axios, você pode tratar de outra maneira
      // }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        await fetchCategories();
    };
    fetchData();
  }, [session?.token, fetchCategories]);

  useEffect(() => {
    if (session) {
      setIsAdmin(session.user.admin);
    }
  }, [session]);

  const handleFileChange = (file: File | null) => {
    setSelectedImage(file);
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (!selectedImage || !title || !description) {
      toast.warning("Por favor, preencha todos os campos antes de enviar.", toastOptions);
      return;
    }
  
    const formData = new FormData(event.currentTarget);
  
    try {
      if (isUpdating) {
        console.log(categoryId);
        await api.patch(`category/${categoryId}`, formData, {
          headers: {
            'Authorization': `Bearer ${session?.token}`,
          },
        });
      } else {
        await api.post("category", formData, {
          headers: {
            'Authorization': `Bearer ${session?.token}`,
          },
        });
      }
  
      setModalOpen(false);
      setIsUpdating(false);
      setTitle('');
      setDescription('');
      setSelectedImage(null);
      fetchCategories();
  
      toast.info(`${isUpdating ? 'Categoria atualizada' : 'Categoria adicionada'} com sucesso!`, toastOptions);
  
      return;
    } catch (error) {
      toast.error(`Erro ao ${isUpdating ? 'atualizar' : 'adicionar'} categoria! ${error}`, toastOptions);
      return;
    }
  }  

  async function deleteCategory(categoryId: string) {
    const result: SweetAlertResult = await Swal.fire({
      title: 'Você tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, tenho certeza!',
      cancelButtonText: 'Cancelar'
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await api.delete(`category/${categoryId}`, {
        headers: {
          'Authorization': `Bearer ${session?.token}`,
        },
      });

      fetchCategories();

      toast.info('Categoria deletada com sucesso!', toastOptions);
      return;
    } catch (error) {
      toast.error('Erro ao deletar categoria!' + error, toastOptions);
      return;
    }
  };

  const handleUpdateCategory = (category: Category) => {
    setIsUpdating(true);
    setModalOpen(true);
    setCategoryId(category.id);
    setTitle(category.title);
    setDescription(category.description);
    setSelectedImage(category.file && category.file.length > 0 ? filesUrl + category.file[0]?.file_path : null);
  };

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
              <CategoryCard
                deleteFunction={() => deleteCategory(`${category.id}`)}
                updateFunction={() => handleUpdateCategory(category)}
                file={category.file && category.file.length > 0 ? filesUrl + category.file[0]?.file_path : bolo}
                key={category.id}
                id={category.id}
                isAdmin={isAdmin}
                title={category.title} />
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
                <h3 className="mb-4 text-xl font-medium text-gray-900">{isUpdating ? 'Atualizar categoria' : 'Adicionar categoria'}</h3>
                <form className="space-y-6" onSubmit={onSubmit}>
                  <InputGroup>
                    <Label htmfor="title">Título</Label>
                    <Input value={title} name="title" id="title" type="title" placeholder="Digite o título" onChange={(e: any) => setTitle(e.target.value)} required />
                  </InputGroup>
                  <InputGroup>
                    <Label htmfor="description">Descrição</Label>
                    <Input value={description} name="description" id="description" type="description" placeholder="Digite a descrição" onChange={(e: any) => setDescription(e.target.value)} required />
                  </InputGroup>
                  <Dropzone file={selectedImage} onFileChange={handleFileChange} />
                  <Button>{isUpdating ? 'Atualizar' : 'Adicionar'}</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}