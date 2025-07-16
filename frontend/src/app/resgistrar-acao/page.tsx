import React from 'react';

export default function RegistrarAcao() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Registrar Nova Ação
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Ação:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoria:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observações:
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Registrar Ação
            </button>
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
