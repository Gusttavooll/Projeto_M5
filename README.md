
Publicaçao do Linkedin : https://www.linkedin.com/posts/gustavo-alves-dev_desenvolvimentoweb-frontend-apiintegration-activity-7351682771154554880-LFwM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJqE88BU6Q-4GSSDnJXpIBPYKcQht4gljg


-----



#  Meu Projeto Fullstack Integrado

Este repositório serve como o ponto de entrada principal para o nosso projeto, que é composto por duas partes independentes, porém interconectadas: o `backend` e o `frontend`.

-----

## Estrutura do Projeto

Nosso projeto segue uma arquitetura de monorepo utilizando submódulos Git para gerenciar o `backend` e o `frontend`.

```
.
├── backend/                  # Código-fonte do Backend (Node.js)
│   ├── .git/                  # Repositório Git do Backend
│   ├── .gitignore             # Regras de ignorar arquivos do Backend
│   └── ... (arquivos do backend, ex: package.json, src/, etc.)
├── frontend/                 # Código-fonte do Frontend (Next.js)
│   ├── .git/                  # Repositório Git do Frontend
│   ├── .gitignore             # Regras de ignorar arquivos do Frontend
│   └── ... (arquivos do frontend, ex: package.json, pages/, public/, etc.)
├── .git/                     # Repositório Git principal (rastreia as versões dos submódulos)
├── .gitignore                # Regras de ignorar arquivos globais do projeto principal
└── README.md                 # Este arquivo de documentação
```

**Importante:** As pastas `backend` e `frontend` são **submódulos Git**. Isso significa que cada uma é um repositório Git completo e independente, e este repositório principal rastreia apenas uma versão específica (um *commit hash*) de cada um deles.

-----

## Configuração Inicial do Ambiente de Desenvolvimento

Siga estes passos para configurar o projeto em sua máquina local pela primeira vez.

### 1\. Pré-requisitos

Certifique-se de ter instalado:

  * **Git:** Para controle de versão.
  * **Node.js** (versão LTS recomendada): Inclui o npm.
  * **(Opcional) Yarn:** Se você preferir usar Yarn em vez de npm.

### 2\. Clonar o Repositório Principal (com Submódulos)

Para garantir que você clone o repositório principal *e* todos os seus submódulos (backend e frontend) corretamente, use o comando `--recurse-submodules`:

```bash
git clone --recurse-submodules <URL_DO_SEU_REPOSITORIO_PRINCIPAL>
```

**Exemplo:**
`git clone --recurse-submodules https://github.com/Gusttavooll/Projeto_M5_Final.git`

**Se você já clonou o repositório principal e percebeu que as pastas `backend/` e `frontend/` estão vazias, ou se precisa atualizar os submódulos para a versão mais recente:**

1.  Navegue até a pasta raiz do projeto clonado:
    ```bash
    cd NomeDoSeuProjetoPrincipal # Ex: cd Projeto_M5_Final
    ```
2.  Inicialize e atualize os submódulos:
    ```bash
    git submodule update --init --recursive
    ```

-----

### 3\. Configurar o Backend

Esta seção é para a equipe de backend e para qualquer pessoa que precise rodar ou desenvolver o backend.

1.  **Navegue para a pasta do Backend:**

    ```bash
    cd backend
    ```

2.  **Instale as Dependências do Backend:**

    ```bash
    npm install
    # OU, se estiver usando Yarn:
    # yarn install
    ```

3.  **Configurar Variáveis de Ambiente do Backend:**

      * Crie um arquivo `.env` na raiz da pasta `backend/`.
      * Consulte o arquivo `backend/.env.example` (se existir) ou a documentação específica do backend para saber quais variáveis de ambiente são necessárias (ex: credenciais de banco de dados, chaves de API).

4.  **Inicie o Servidor de Desenvolvimento do Backend:**

    ```bash
    npm run dev
    # OU, se estiver usando Yarn:
    # yarn dev
    ```

    (O comando exato pode variar dependendo da configuração do seu backend. Se `npm run dev` não funcionar, verifique o `package.json` do backend para os scripts disponíveis.)

-----

### 4\. Configurar o Frontend

Esta seção é para a equipe de frontend e para qualquer pessoa que precise rodar ou desenvolver o frontend.

1.  **Navegue para a pasta do Frontend:**

    ```bash
    cd frontend
    ```

2.  **Instale as Dependências do Frontend:**

    ```bash
    npm install
    # OU, se estiver usando Yarn:
    # yarn install
    ```

3.  **Configurar Variáveis de Ambiente do Frontend:**

      * Crie um arquivo `.env.local` na raiz da pasta `frontend/`.
      * Consulte o arquivo `frontend/.env.example` (se existir) ou a documentação específica do frontend para saber quais variáveis de ambiente são necessárias (ex: URL da API do backend, chaves públicas).

4.  **Inicie o Servidor de Desenvolvimento do Frontend:**

    ```bash
    npm run dev
    # OU, se estiver usando Yarn:
    # yarn dev
    ```

    (Este comando geralmente inicia o aplicativo Next.js em `http://localhost:3000`.)

-----

## Contribuindo com o Código

Para contribuir com o projeto, siga o fluxo de trabalho Git padrão, prestando atenção especial aos submódulos:

1.  **Faça suas alterações:** Trabalhe nos arquivos dentro da pasta `backend/` ou `frontend/` conforme a parte que você está desenvolvendo.

2.  **Faça commits no submódulo:**

      * Navegue para a pasta do submódulo que você modificou (ex: `cd backend` ou `cd frontend`).
      * Adicione suas alterações: `git add .`
      * Faça seu commit: `git commit -m "feat: Descrição clara da sua mudança"`
      * **Envie para o repositório remoto do submódulo:** `git push origin main` (ou `master`, dependendo da branch principal do seu submódulo).

3.  **Atualize a referência do submódulo no repositório principal:**

      * Volte para a raiz do seu projeto principal: `cd ..`
      * O Git detectará que o submódulo foi atualizado. Adicione essa mudança:
        ```bash
        git add backend frontend # Ou apenas o submódulo que você atualizou
        ```
      * Faça commit da referência atualizada:
        ```bash
        git commit -m "chore: Atualiza a versão do [backend/frontend]"
        ```
      * **Envie para o repositório principal:**
        ```bash
        git push origin main # Ou master, dependendo da branch principal do seu projeto principal
        ```

-----

## Deployment (Implantação)

[ **Espaço para instruções de Deployment** ]

  * Descreva como cada parte (backend e frontend) é implantada.
  * Mencione ferramentas ou plataformas de CI/CD, se aplicável.
  * Exemplo: "O backend é implantado no Heroku, o frontend no Vercel."

-----
