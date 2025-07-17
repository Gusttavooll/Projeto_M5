'use client';

import React, { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { AuthFormData } from '../types';
import HeaderDeslogado from "@/componentes/Navbar"; 

interface HomeProps {
  onAuthSuccess: () => void;
}

const Home: React.FC<HomeProps> = ({ onAuthSuccess }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AuthFormData>();
  const [isRegisterMode, setIsRegisterMode] = useState(true); // Para alternar entre registro e login

  const onSubmitAuth = async (data: AuthFormData) => {
    console.log("Dados de autenticação:", data);

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    let endpoint = '';
    let method = 'POST';

    if (isRegisterMode) {
      // Rota para registro de novo usuário
      endpoint = `${apiBaseUrl}/usuarios`;
      
      if (!data.name) {
        alert("Nome é obrigatório para o registro.");
        return;
      }
    } else {
      // Rota para login
      endpoint = `${apiBaseUrl}/auth/login`; // Confirme esta rota no seu authRoutes.js
      const { name, ...loginData } = data;
      data = loginData as AuthFormData;
    }

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log("Resposta da API:", result);

      
      if (!isRegisterMode && result.token) {
        
        localStorage.setItem('authToken', result.token);
       
        if (result.user && result.user.id) {
            localStorage.setItem('userId', result.user.id);
        }
        alert("Login realizado com sucesso!");
        onAuthSuccess(); // Redireciona ou muda a tela após login
      } else if (isRegisterMode) {
        alert("Cadastro realizado com sucesso! Faça login para continuar.");
        setIsRegisterMode(false); // Após o registro, sugere login
      } else {
        // Caso de sucesso inesperado sem token para login, ou apenas registro concluído
        alert("Operação realizada com sucesso!");
        // Se for registro e você quer redirecionar, pode chamar onAuthSuccess() aqui
        // ou deixar para o usuário clicar em "Já tenho conta" para fazer login.
      }

    } catch (error: any) {
      console.error("Erro na autenticação:", error);
      alert(`Erro ao tentar ${isRegisterMode ? 'cadastrar' : 'entrar'}: ${error.message}. Tente novamente.`);
    }
    reset(); // Limpa o formulário
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <HeaderDeslogado onNavigate={() => {}} />

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mt-8">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-6">EcoAção</h1>
        <p className="text-center text-gray-600 mb-8">
          Acompanhe suas ações sustentáveis e faça a diferença!
        </p>

        <form onSubmit={handleSubmit(onSubmitAuth)} className="space-y-6">
          {isRegisterMode && (
            <div>
              <input
                type="text"
                placeholder="Nome"
                {...register("name", { required: isRegisterMode ? "Nome é obrigatório." : false })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-200"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email é obrigatório.", pattern: { value: /^\S+@\S+$/i, message: "Email inválido." } })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-200"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register("password", { required: "Senha é obrigatória.", minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres." } })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-200"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isRegisterMode ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>

        <button
          onClick={() => setIsRegisterMode(!isRegisterMode)}
          className="mt-4 w-full text-center text-green-700 hover:underline transition duration-200"
        >
          {isRegisterMode ? 'Já tenho conta. Fazer Login' : 'Não tenho conta. Cadastrar'}
        </button>
      </div>
    </div>
  );
};

export default Home;
