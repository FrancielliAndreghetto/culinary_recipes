import { useState } from "react";

type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  portion: number;
  preparation: string;
  adicional_information: string;
  cooking_hours: number;
  file: Array<{ id: string; file_path: string; type: string }>;
};

type TabKey = 'Ingredientes' | 'ModoPreparo' | 'Instrucoes' | 'Avaliacoes';

type TabProps = {
  recipe: Recipe | null;
};

export default function Tab({ recipe }: TabProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('Ingredientes');

  const handleTabClick = (label: TabKey) => {
    setActiveTab(label);
  };

  const tabContent: Record<TabKey, React.ReactNode> = {
    'Ingredientes': recipe?.ingredients,
    'ModoPreparo': recipe?.preparation,
    'Instrucoes': recipe?.adicional_information,
    'Avaliacoes': <div>Conteúdo das Avaliações</div>,
  };

  return (
    <div>
      <div className="text-sm text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              onClick={() => handleTabClick('Ingredientes')}
              className={`inline-block cursor-pointer p-2 rounded-t-lg hover:text-[#FFA14AB2] hover:border-[#FFA14AB2] ${activeTab === 'Ingredientes' ? 'text-[#FFA14AB2] border-[#FFA14AB2] active border-b-2' : ''}`}
            >
              Ingredientes
            </a>
          </li>
          <li className="me-2">
            <a
              onClick={() => handleTabClick('ModoPreparo')}
              className={`inline-block cursor-pointer p-2 rounded-t-lg hover:text-[#FFA14AB2] hover:border-[#FFA14AB2] ${activeTab === 'ModoPreparo' ? 'text-[#FFA14AB2] border-[#FFA14AB2] active border-b-2' : ''}`}
            >
              Modo de preparo
            </a>
          </li>
          <li className="me-2">
            <a
              onClick={() => handleTabClick('Instrucoes')}
              className={`inline-block cursor-pointer p-2 rounded-t-lg hover:text-[#FFA14AB2] hover:border-[#FFA14AB2] ${activeTab === 'Instrucoes' ? 'text-[#FFA14AB2] border-[#FFA14AB2] active border-b-2' : ''}`}
            >
              Instruções adicionais
            </a>
          </li>
          <li className="me-2">
            <a
              onClick={() => handleTabClick('Avaliacoes')}
              className={`inline-block cursor-pointer p-2 rounded-t-lg hover:text-[#FFA14AB2] hover:border-[#FFA14AB2] ${activeTab === 'Avaliacoes' ? 'text-[#FFA14AB2] border-[#FFA14AB2] active border-b-2' : ''}`}
            >
              Avaliações
            </a>
          </li>
        </ul>
      </div>
      <div className="py-4">
        <p className="text-sm">{tabContent[activeTab]}</p>
      </div>
    </div>
  )
}