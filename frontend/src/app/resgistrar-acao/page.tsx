'use client';
import React, { useState } from 'react';
import HeaderLogado from '@/componentes/Navbar';
import Link from 'next/link';

export default function RegistrarAcao() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaAcao = {
      nome,
      categoria,
      observacoes,
    };

    console.log('Nova ação registrada:', novaAcao);

    // Resetar campos
    setNome('');
    setCategoria('');
    setObservacoes('');
  };

  return (
    <div>
      <HeaderLogado isLoggedIn={true} onLogout={() => {}} onNavigate={() => {}} />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 to-blue-100 px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
            Registrar Nova Ação
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Ação:
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoria:
              </label>
              <input
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observações:
              </label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
              >
                Registrar Ação
              </button>
              <Link href="/minhas-acoes">
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-semibold"
                >
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

