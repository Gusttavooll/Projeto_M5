/*import React, { useEffect } from 'react';
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { Action, ActionFormData } from '../app/page'; // Importa as interfaces de App.tsx

// Interface para as props do componente ActionForm
interface ActionFormProps {
  editingAction: Action | null;
  addOrUpdateAction: (action: ActionFormData) => void;
  setCurrentPage: (page: string) => void;
  setEditingAction: (action: Action | null) => void;
}

// Componente de formulário para adicionar/editar ações
const ActionForm: React.FC<ActionFormProps> = ({ editingAction, addOrUpdateAction, setCurrentPage, setEditingAction }) => {
  // UseForm tipado com ActionFormData
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ActionFormData>({
    defaultValues: editingAction || {} // Preenche com dados da ação se estiver editando
  });

  // Atualiza os valores do formulário quando `editingAction` muda
  useEffect(() => {
    if (editingAction) {
      reset(editingAction);
    } else {
      reset(); // Limpa o formulário se não estiver editando
    }
  }, [editingAction, reset]);

  const onSubmitAction = (data: ActionFormData) => {
    addOrUpdateAction(data);
    setCurrentPage('my-actions'); // Volta para a lista de ações
    reset(); // Limpa o formulário
  };

  return (
    <form onSubmit={handleSubmit(onSubmitAction)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">{editingAction ? 'Editar Ação Sustentável' : 'Registrar Nova Ação'}</h2>
      <div className="mb-4">
        <label htmlFor="actionName" className="block text-gray-700 text-sm font-bold mb-2">Nome da Ação:</label>
        <input
          type="text"
          id="actionName"
          {...register("actionName", { required: "O nome da ação é obrigatório." })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.actionName && <p className="text-red-500 text-xs italic mt-1">{errors.actionName.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Categoria:</label>
        <input
          type="text"
          id="category"
          {...register("category", { required: "A categoria é obrigatória." })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.category && <p className="text-red-500 text-xs italic mt-1">{errors.category.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="observations" className="block text-gray-700 text-sm font-bold mb-2">Observações:</label>
        <textarea
          id="observations"
          {...register("observations")}
          rows={4}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        >
          {editingAction ? 'Atualizar Ação' : 'Registrar Ação'}
        </button>
        <button
          type="button"
          onClick={() => { setCurrentPage('my-actions'); setEditingAction(null); reset(); }}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ActionForm;*/
