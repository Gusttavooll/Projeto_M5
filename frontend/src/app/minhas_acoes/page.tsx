'use client';
import React, { useState } from 'react';

import HeaderLogado from "@/componentes/Navbar";
interface AcaoSustentavel {
    id: number;
    nome: string;
  // Adicione outras propriedades que uma ação possa ter, como 'data', 'pontos', etc.
}

export default function MinhasAcoes() {

   // const [currentPage, setCurrentPage] = useState('list');
    const [currentPage, setCurrentPage] = useState<string>('list');
    const [userActions, setUserActions] = useState<AcaoSustentavel[]>([]); // Tipamos o estado aqui

// Definindo o tipo para os dados do formulário
interface FormData {
    nomeAcao: string;
    categoria: string;
    observacoes: string;
}

// Estados do formulário
const [formData, setFormData] = useState<FormData>({
    nomeAcao: '',
    categoria: '',
    observacoes: '',
});

// Funções de manipulação do formulário
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nomeAcao || !formData.categoria) {
        alert('Por favor, preencha o nome da ação e a categoria.');
        return;
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/acoes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Erro ao registrar a ação.');
        }

        const data = await response.json();
        console.log('Ação registrada com sucesso:', data);
        alert('Ação registrada com sucesso!');
        
        // Limpa o formulário e volta para a lista
        setFormData({ nomeAcao: '', categoria: '', observacoes: '' });
        setCurrentPage('list');
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao registrar a ação.');
    }
};
    /* const startEditingAction = (action: any) => {
    console.log("Editar ação:", action);
    // Implementar lógica de edição
    };

    const deleteAction = (actionId: number) => {
    console.log("Remover ação com ID:", actionId);
    // Implementar lógica de remoção
    };
    */

   if (currentPage === 'add-edit-action') {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-100 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
                <h1 className="mb-8 text-center text-2xl font-bold text-green-600">Registrar Nova Ação</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="nomeAcao" className="mb-2 block font-medium text-gray-700">
                            Nome da Ação:
                        </label>
                        <input 
                            type="text" 
                            id="nomeAcao" 
                            name="nomeAcao" 
                            value={formData.nomeAcao}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-200 p-3 transition-colors duration-200 focus:border-green-500 focus:outline-none"
                            required 
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="categoria" className="mb-2 block font-medium text-gray-700">
                            Categoria:
                        </label>
                        <input 
                            type="text" 
                            id="categoria" 
                            name="categoria" 
                            value={formData.categoria}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-200 p-3 transition-colors duration-200 focus:border-green-500 focus:outline-none"
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="observacoes" className="mb-2 block font-medium text-gray-700">
                            Observações:
                        </label>
                        <textarea 
                            id="observacoes" 
                            name="observacoes" 
                            rows={6}
                            value={formData.observacoes}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-200 p-3 transition-colors duration-200 focus:border-green-500 focus:outline-none"
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-between space-x-4 pt-4">
                        <button 
                            type="submit" 
                            className="w-1/2 rounded-lg bg-green-600 py-3 font-bold text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-green-700"
                        >
                            Registrar Ação
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setCurrentPage('list')}
                            className="w-1/2 rounded-lg bg-gray-600 py-3 font-bold text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-gray-700"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

    return (
    <div>
        <HeaderLogado isLoggedIn={true} onLogout={() => {}} onNavigate={() => {}} />

        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-green-800">Minhas Ações Sustentáveis</h1>
            <div className="flex justify-center mb-6">
                <button onClick={() => setCurrentPage('add-edit-action')} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    Registrar Nova Ação
                </button>
        </div>
        {userActions.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Você ainda não registrou nenhuma ação. Comece agora!</p>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* O resto do seu código para exibir as ações existentes */}
        </div>
            )}
    </div>
    </div>
    );
}