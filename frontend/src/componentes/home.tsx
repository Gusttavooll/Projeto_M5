import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthFormData } from '../types'; 

interface HomeProps {
  onAuthSuccess: () => void;
}

// Componente da página inicial (registro/login)
const Home: React.FC<HomeProps> = ({ onAuthSuccess }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AuthFormData>();

  // Função para simular o envio do formulário de registro/login
  const onSubmitAuth = async (data: AuthFormData) => {
    console.log("Dados de autenticação:", data);
    // substituir pela nossa API 
    try {
      // chamada de API com fetch:
      // const response = await fetch('/api/auth', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // const result = await response.json();
      // console.log("Resposta da API:", result);

      onAuthSuccess(); 
    } catch (error) {
      console.error("Erro na autenticação:", error);
      alert('Erro ao tentar autenticar. Tente novamente.');
    }
    reset(); // Limpa o formulário
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-green-800">Seja Mais Sustentável!</h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Registre e acompanhe suas iniciativas ecológicas, acesse dicas valiosas e explore um catálogo de ações para inspirar sua jornada por um futuro mais verde.
        </p>
        <form onSubmit={handleSubmit(onSubmitAuth)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              {...register("name", { required: "Nome é obrigatório.", minLength: { value: 3, message: "O nome deve conter pelo menos 3 caracteres." } })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-200"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
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
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Cadastrar / Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
