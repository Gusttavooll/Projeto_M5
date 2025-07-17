'use client';
import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import HeaderLogado from "@/componentes/Navbar";
import { Action } from '../types'; 


interface AcaoSustentavelAPI {
  id: number;
  nome: string; // Nome da ação
  descricao?: string;
  pontos: number;
  categoria?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Componente do Card de Ação
const AcaoCard: React.FC<{ acao: AcaoSustentavelAPI }> = ({ acao }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 text-center">
      <Leaf className="h-8 w-8 text-green-600 mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{acao.nome}</h3>
      {acao.categoria && <p className="text-sm text-gray-500 mb-2">Categoria: {acao.categoria}</p>}
      {acao.descricao && <p className="text-sm text-gray-700 mb-2">{acao.descricao}</p>}
      <p className="text-md font-bold text-green-700">Pontos: {acao.pontos}</p>
    </div>
  );
};

const Catalogo: React.FC = () => {
  const [acoes, setAcoes] = useState<AcaoSustentavelAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcoes = async () => {
      try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${apiBaseUrl}/acoes-sustentaveis`); // Sua rota para listar ações sustentáveis

        if (!response.ok) {
          throw new Error(`Erro ao carregar ações: ${response.statusText}`);
        }
        const data = await response.json();
        setAcoes(data); // Assume que a API retorna um array de ações
      } catch (err: any) {
        setError(err.message);
        console.error("Erro ao buscar ações:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAcoes();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez ao montar o componente

  if (loading) return <div className="text-center mt-8 text-gray-700">Carregando ações sustentáveis...</div>;
  if (error) return <div className="text-center mt-8 text-red-600">Erro: {error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderLogado isLoggedIn={true} onLogout={() => {}} onNavigate={() => {}} />

      <main className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Catálogo de Ações Sustentáveis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acoes.length > 0 ? (
            acoes.map((acao) => (
              <AcaoCard key={acao.id} acao={acao} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">Nenhuma ação sustentável encontrada no momento.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Catalogo;