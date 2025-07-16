'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Home from '../componentes/home';

export interface Action {
  id: number;
  actionName: string;
  category: string;
  observations?: string;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    router.push('/minhas_acoes'); // Redireciona para a página de ações
  };

  return (
    <>
      {!isLoggedIn ? (
        <Home onAuthSuccess={handleAuthSuccess} />
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-white">
          <h1 className="text-3xl font-bold text-green-700">Redirecionando...</h1>
        </div>
      )}
    </>
  );
};

export default App;
