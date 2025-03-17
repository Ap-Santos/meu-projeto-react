Este é um projeto básico em React criado como parte de um desafio para aprender conceitos fundamentais como Componentes, Props, Hooks (`useState`, `useEffect` e `useContext`) e Navegação com React Router.


Tecnologias Utilizadas

- React
- React Router
- Hooks (`useState`, `useEffect`, `useContext`)

Funcionalidades

**Navegação entre Páginas:**
 Utiliza `react-router-dom` para navegação sem recarregar a página.
 
**Componentes Reutilizáveis:**
   - `Header`: Exibe o título da página.
   - `Button`: Botão genérico com função passada via props.
   - `Card`: Exibe informações dinâmicas recebidas via props.

**Formulário de Contato:**
   - Campos de `Nome`, `Email` e `Mensagem`.
   - Reset automático dos campos após o envio.
   - Exibição de mensagem de sucesso simulada com `useEffect`.

4. **Hooks:**
   - `useState`: Para gerenciar estados do formulário e status de envio.
   - `useEffect`: Para simular o envio assíncrono do formulário.