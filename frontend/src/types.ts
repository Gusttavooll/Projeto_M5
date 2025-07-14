//Define interfaces 
//organiza, padroniza e tipa dados de forma clara e reutilizável

// Interface para autenticação (login/cadastro)
export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}

// Interface de uma ação sustentável
export interface Action {
  id: number;
  actionName: string;
  category: string;
  observations?: string;
}

// Interface para o formulário de ação
export interface ActionFormData {
  actionName: string;
  category: string;
  observations?: string;
}
