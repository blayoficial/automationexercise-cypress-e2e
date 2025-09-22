AutomationExercise Cypress E2E Tests

Automação end-to-end (E2E) do site Automation Exercise
 usando Cypress, cobrindo desde a navegação inicial até a finalização de pedidos.

Descrição do Projeto

Este projeto tem como objetivo demonstrar a criação de testes automatizados E2E em um e-commerce de demonstração, validando fluxos críticos como:

Navegação e interação com a home page

Login com validação de erros

Cadastro completo de usuário

Adição e validação de produtos no carrinho

Finalização do pedido com dados de pagamento

O projeto aplica boas práticas de automação, como funções reutilizáveis, dados dinâmicos e validações de elementos visíveis.

Funcionalidades Testadas

Tela Inicial

Carrosséis (prev/next)

Menus principais: Women, Men, Kids

Carrinho vazio

Login

Login com email/senha incorretos

Mensagens de erro exibidas corretamente

Cadastro de Usuário

Dados pessoais, endereço, senha e data de nascimento

Email dinâmico para evitar duplicidade

Compra de Produtos

Seleção de produtos masculinos, femininos e infantis

Adição ao carrinho e validação de itens

Finalização de Pedido

Mensagem no checkout

Dados de cartão de pagamento

Confirmação da compra

Como Rodar o Projeto

Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>


Instale as dependências:

npm install


Abra o Cypress:

npx cypress open


Execute os testes desejados a partir da interface do Cypress ou pelo terminal:

npx cypress run

Estrutura do Projeto
/cypress
  /e2e
    a.cy.js           <- Testes E2E principais
  /support
    funcoes.js        <- Funções reutilizáveis (login, cadastro, produtos, checkout)
cypress.config.js      <- Configurações do Cypress
package.json           <- Dependências do projeto
README.md              <- Documentação

Boas Práticas Aplicadas

Funções modulares e reutilizáveis

Dados dinâmicos para cadastro de usuários

Validações visuais de elementos para maior confiabilidade

Estrutura de teste organizada com describe e it

Aprendizados

Automatização de testes E2E aumenta confiabilidade e manutenção do software

Importância de selecionar elementos robustos e evitar nth-child quando possível

Cypress é uma ferramenta poderosa para testes rápidos e legíveis
