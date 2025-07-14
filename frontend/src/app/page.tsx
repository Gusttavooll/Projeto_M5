'use client';

import React, { useState } from 'react';
import Home from '../componentes/home';

export interface Action {
  id: number;
  actionName: string;
  category: string;
  observations?: string;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Home onAuthSuccess={handleAuthSuccess} />
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-white">
          <h1 className="text-3xl font-bold text-green-700">Bem-vindo(a) ao EcoTracker!</h1>
        </div>
      )}
    </>
  );
};

export default App;
