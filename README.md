# Landing Page - Clube Esportivo (Processo Seletivo)

Esta é a landing page desenvolvida para o desafio técnico de Estágio Front-end. O projeto apresenta um clube esportivo, destacando suas atividades, informações e um formulário de contato. O foco do desenvolvimento foi a organização do código, o uso de boas práticas do React e a criação de uma interface moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **React:** Biblioteca para criação de interfaces baseada em componentes.
- **Vite:** Ferramenta de build extremamente rápida, melhorando a experiência de desenvolvimento (DX).
- **Tailwind CSS:** Framework CSS utility-first para estilização rápida, responsiva e com fácil manutenção.

## 📦 Como rodar o projeto

Siga os passos abaixo para executar a aplicação localmente:

1. **Clone o repositório:**
   ```bash
   https://github.com/Faelzin09663/landing-page.git
   cd <nome-da-pasta>
   ```

2. **Instale as dependências:**
   Certifique-se de ter o Node.js instalado na sua máquina e execute na raiz do projeto:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesso:**
   Acesse a URL gerada no terminal (geralmente `http://localhost:3000/`) no seu navegador.

## 🧠 Decisões Técnicas

- **Vite + React:** Optou-se pela utilização do Vite na inicialização do projeto em detrimento ao antigo Create React App (CRA). Isso se deve à velocidade na inicialização do servidor local e ao HMR (Hot Module Replacement) instantâneo, resultando em um ciclo de feedback muito mais ágil durante o desenvolvimento.
- **Tailwind CSS (Estilização):** O Tailwind foi escolhido para agilizar a criação de uma interface limpa, moderna e 100% responsiva sem escrever CSS customizado exaustivo. Ele facilita a padronização do design e das medidas, com as classes definidas diretamente no JSX, mantendo o estilo próximo da estrutura.
- **Arquitetura de Componentes:** A landing page foi estruturada dividindo cada seção visual em um componente React independente (`Header`, `Hero`, `Activities`, `About`, `Contact`, `Footer`). Essa modularização mantém o arquivo principal (`App.jsx`) limpo, torna o código muito mais legível e permite a reutilização futura no escalonamento do projeto.
- **Design Premium e Mobile-First:** O foco do visual foi transmitir a sensação de um clube moderno, adotando um layout fluido e utilizando os conceitos de Mobile-First. As interações visuais foram criadas pensando no melhor engajamento do usuário (UX).
- **Formulário de Contato Simples:** Atendendo ao requisito do desafio, desenvolvemos um formulário de contato isolado cujo comportamento em uma situação real seria conectar a uma API, mas para o escopo desta avaliação apresenta apenas a estrutura funcional no lado cliente (Front-end).
