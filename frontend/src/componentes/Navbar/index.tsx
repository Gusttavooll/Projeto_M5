// components/HeaderLogado/index.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import NavItem, { NavItemProps } from "../NavItem"; // Comentado ou removido

// Definindo a interface diretamente no arquivo
export interface NavItemProps {
    url: string;
    label: string;
}

interface HeaderLogadoProps {
    isLoggedIn?: boolean;
  onLogout?: () => void; // Função para lidar com o logout
  onNavigate: (page: string) => void; // Função para lidar com a navegação interna
}

export default function HeaderLogado({ isLoggedIn, onLogout, onNavigate }: HeaderLogadoProps) {
const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);

  // Itens de navegação para usuários logados
const items: NavItemProps[] = [
    { url: "/minhas_acoes", label: "Minhas Ações" },
    { url: "/dicas-ecologicas", label: "Dicas Ecológicas" },
    { url: "/catalogo", label: "Catálogo de Ações" },
];

if (!isLoggedIn) {
    return null; // Não renderiza nada se o usuário não estiver logado
}

return (
    <header className="bg-green-800 p-4 shadow-lg">
    <nav className="container mx-auto flex justify-between items-center">
        {/* Você pode substituir o texto por uma imagem de logo se desejar */}
        <Link href="/dashboard" className="text-white text-2xl font-bold">
        EcoTracker
        </Link>

        {/* Menu para desktop e mobile */}
        <ul className={`flex space-x-6 ${menuOpen ? "active" : ""} md:flex`}>
        {items.map((item, index) => (
            <li key={index}>
            <Link
                href={item.url}
                onClick={() => {
                  setMenuOpen(false); // Fecha o menu mobile ao clicar
                  // onNavigate(item.url.substring(1).replace(/-/g, '')); // Exemplo se você precisar do estado interno
                }}
                className={`text-white hover:text-green-200 transition duration-300 ease-in-out text-lg ${pathname === item.url ? "font-bold" : ""}`}
            >
                {item.label}
            </Link>
            </li>
        ))}
        <li>
            <button
            onClick={() => {
               // onLogout && onLogout(); // Chama onLogout apenas se ela existir
                setMenuOpen(false); // Fecha o menu mobile ao clicar
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg"
            >
            Sair
            </button>
        </li>
        </ul>

        {/* Botão para menu mobile (hamburguer) */}
        <button
        className="md:hidden text-white text-3xl"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen((open) => !open)}
        >
        ☰
        </button>
    </nav>
    </header>
);
}