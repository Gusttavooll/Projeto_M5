'use client';
import React, { useState } from 'react';

import HeaderLogado from "@/componentes/Navbar";
interface AcaoSustentavel {
    id: number;
    nome: string;
  // Adicione outras propriedades que uma ação possa ter, como 'data', 'pontos', etc.
}

export default function MinhasAcoes() {

    const [currentPage, setCurrentPage] = useState('list');
    const [userActions, setUserActions] = useState<AcaoSustentavel[]>([]); // Tipamos o estado aqui

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
            <div>
                {/* Formulário de adicionar/editar ação aqui */}
                <button onClick={() => setCurrentPage('list')}>Voltar para Lista</button>
        </div>
    );
    }

    return (
    <div>
        <HeaderLogado isLoggedIn={true} onLogout={() => {}} onNavigate={() => {}} />

        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-green-800">Minhas Ações Sustentáveis</h1>
            <div className="flex justify-center mb-6">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
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