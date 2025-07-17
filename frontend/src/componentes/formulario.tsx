'use client';
import React, { useEffect, useState } from 'react'; 
import { useForm, FieldErrors } from 'react-hook-form';
import { Action, ActionFormData } from '../types'; 
import HeaderLogado from "@/componentes/Navbar"; 

interface ActionFormProps {
  editingAction: Action | null;
  setCurrentPage: (page: string) => void;
  setEditingAction: (action: Action | null) => void;
}


interface AcaoSustentavelAPI {
  id: number;
  nome: string;
  descricao?: string;
  pontos: number;
  categoria?: string;
}

const ActionForm: React.FC<ActionFormProps> = ({ editingAction, setCurrentPage, setEditingAction }) => {
  
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ActionFormData & { acaoIdSelecionada?: string }>();
  const [acoesDisponiveis, setAcoesDisponiveis] = useState<AcaoSustentavelAPI[]>([]);
  const [loadingAcoes, setLoadingAcoes] = useState(true);
  const [errorAcoes, setErrorAcoes] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcoes = async () => {
      try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${apiBaseUrl}/acoes-sustentaveis`);
        if (!response.ok) {
          throw new Error(`Erro ao carregar ações para o formulário: ${response.statusText}`);
        }
        const data = await response.json();
        setAcoesDisponiveis(data);
      } catch (err: any) {
        setErrorAcoes(err.message);
        console.error("Erro ao buscar ações para o formulário:", err);
      } finally {
        setLoadingAcoes(false);
      }
    };

    fetchAcoes();
  }, []);

  useEffect(() => {
    if (editingAction) {
      
      reset(editingAction);
      
    } else {
      reset();
      setValue('acaoIdSelecionada', ''); // Limpa a seleção ao criar nova
    }
  }, [editingAction, reset, setValue]);


  
  const onSubmitAction = async (data: ActionFormData & { acaoIdSelecionada?: string }) => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId'); // Obtém o userId do localStorage

    if (!token) {
      alert('Você precisa estar logado para registrar uma ação.');
      setCurrentPage('home'); // Redireciona para login
      return;
    }

    if (!userId) {
        alert('Não foi possível identificar seu usuário. Por favor, faça login novamente.');
        setCurrentPage('home');
        return;
    }

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    let response;
    let finalData: { usuario_id: number; acao_id: number; observacao?: string; };

    // Valida se uma ação foi selecionada
    if (!data.acaoIdSelecionada) {
        alert("Por favor, selecione uma Ação Sustentável.");
        return;
    }

    // Mapeia os dados do formulário para o formato da API de RegistroAtividade
    finalData = {
      usuario_id: Number(userId),
      acao_id: Number(data.acaoIdSelecionada), // ID da ação sustentável selecionada
      observacao: data.observations,
    };

    try {
      if (editingAction && editingAction.id) {
        
        response = await fetch(`${apiBaseUrl}/atividades/atividade/${editingAction.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify({ observacao: finalData.observacao }), 
        });
      } else {
        
        response = await fetch(`${apiBaseUrl}/atividades`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify(finalData),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log("Atividade registrada/atualizada:", result);
      alert('Atividade registrada/atualizada com sucesso!');
      setCurrentPage('my-actions');
      reset();
      setEditingAction(null); 
    } catch (error: any) {
      console.error("Erro ao registrar/atualizar atividade:", error);
      alert(`Erro ao salvar atividade: ${error.message}.`);
    }
  };

  if (loadingAcoes) return <div className="text-center mt-8 text-gray-700">Carregando opções de ações...</div>;
  if (errorAcoes) return <div className="text-center mt-8 text-red-600">Erro ao carregar ações: {errorAcoes}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderLogado isLoggedIn={true} onLogout={() => {}} onNavigate={() => {}} /> {/* Adapte as props */}
      <form onSubmit={handleSubmit(onSubmitAction)} className="bg-white p-8 rounded-lg shadow-xl max-w-xl mx-auto my-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {editingAction ? 'Atualizar Registro de Atividade' : 'Registrar Nova Atividade'}
        </h2>

        {/* Campo de seleção para Ação Sustentável */}
        <div className="mb-4">
          <label htmlFor="acaoIdSelecionada" className="block text-gray-700 text-sm font-bold mb-2">Ação Sustentável:</label>
          <select
            id="acaoIdSelecionada"
            {...register("acaoIdSelecionada", { required: "Selecione uma ação sustentável." })}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={!!editingAction} 
          >
            <option value="">Selecione uma ação...</option>
            {acoesDisponiveis.map((acao) => (
              <option key={acao.id} value={acao.id}>
                {acao.nome} (Pontos: {acao.pontos})
              </option>
            ))}
          </select>
          {errors.acaoIdSelecionada && <p className="text-red-500 text-xs italic mt-1">{errors.acaoIdSelecionada.message}</p>}
        </div>

        {/* Campo de Observações */}
        <div className="mb-6">
          <label htmlFor="observations" className="block text-gray-700 text-sm font-bold mb-2">Observações:</label>
          <textarea
            id="observations"
            {...register("observations")}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex: Concluí a compostagem da semana. Usei os resíduos da cozinha."
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            {editingAction ? 'Atualizar Atividade' : 'Registrar Atividade'}
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
    </div>
  );
};

export default ActionForm;
