import React from 'react';
import { Leaf } from 'lucide-react'; 

// Interface para definir a estrutura de cada ação sustentável
interface AcaoSustentavel {
  id: number;
  nome: string;
}

// Dados de exemplo para as ações. Deve ser trocado pela rota da API
const acoes: AcaoSustentavel[] = [
  { id: 1, nome: 'Compostagem doméstica' },
  { id: 2, nome: 'Reutilização de embalagens' },
  { id: 3, nome: 'Economia de energia elétrica' },
  { id: 4, nome: 'Consumo consciente de água' },
  { id: 5, nome: 'Apoio a produtores locais' },
  { id: 6, nome: 'Participação em mutirões de limpeza' },
  { id: 7, nome: 'Uso de sacolas reutilizáveis' },
  { id: 8, nome: 'Descarte correto de eletrônicos' },
];

// Componente do Card de Ação
const AcaoCard: React.FC<{ acao: AcaoSustentavel }> = ({ acao }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200">
      <Leaf className="h-6 w-6 text-green-600 mr-4" />
      <span className="text-gray-800 font-medium">{acao.nome}</span>
    </div>
  );
};

const Catalogo: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-green-700 text-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">EcoTracker</h1>
          <div className="flex items-center space-x-4">
            <a href="#" className="font-bold hover:underline">Catálogo de Ações</a>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Sair
            </button>
          </div>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
          Catálogo de Ações Sustentáveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acoes.map((acao) => (
            <AcaoCard key={acao.id} acao={acao} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Catalogo;