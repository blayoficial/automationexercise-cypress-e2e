//=======================funcoes

// Acessar tela de login
function acessarLogin() {
  cy.get('.fa.fa-lock').click()
  cy.contains('Login to your account').should('be.visible')
}

// Fazer login
function fazerLogin(email, senha) {
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('input[name="password"]').type(senha)
  cy.get('[data-qa="login-button"]').click()
}

// Fazer cadastro
function fazerCadastro(nome, email) {
  cy.get('[data-qa="signup-name"]').type(nome)
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()
  cy.contains('Enter Account Information').should('be.visible')
}

// Preencher informações completas de cadastro
function preencherCadastro(email) {
  cy.get('input[name="name"]').type('blayblade')
  cy.get('input[data-qa="signup-email"]').type(email)
  cy.get('.btn.btn-default').contains('Signup').click()
  cy.contains('Enter Account Information').should('be.visible')

  cy.get('#id_gender1').click()
  cy.get('#password').type('blayblade123')
  cy.get('#days').select('14')
  cy.get('#months').select('April')
  cy.get('#years').select('2003')

  cy.get('#first_name').type('blay')
  cy.get('#last_name').type('ishii')
  cy.get('#company').type('bliblin')
  cy.get('#address1').type('rua bliblin')
  cy.get('#address2').type('rua bliblin2')
  cy.get('#country').select('United States')
  cy.get('#state').type('florida')
  cy.get('#city').type('miami')
  cy.get('#zipcode').type('33101')
  cy.get('#mobile_number').type('+13054045027')

  cy.get('.btn.btn-default').contains('Create Account').click()
  cy.contains('Account Created!').should('be.visible')
  cy.get('.btn.btn-primary').click()
}

// Adicionar produtos ao carrinho
function adicionarProdutos(produtosIds) {
  produtosIds.forEach(id => {
    cy.get(`[data-product-id="${id}"]`).first().click()
    cy.get('.btn-success').click()
  })
}

// Validar produtos no carrinho
function validarProdutos(produtos) {
  produtos.forEach(produto => {
    cy.contains(produto).should('be.visible')
  })
}

// Finalizar pedido
function finalizarPedido(mensagem, cartao) {
  cy.get('.btn.btn-default.check_out').click()
  cy.get('.form-control').type(mensagem)
  cy.get('.btn.btn-default.check_out').click()

  cy.get('input[name="name_on_card"]').type(cartao.nome)
  cy.get('input[name="card_number"]').type(cartao.numero)
  cy.get('input[name="cvc"]').type(cartao.cvc)
  cy.get('input[placeholder="MM"]').type(cartao.mes)
  cy.get('input[placeholder="YYYY"]').type(cartao.ano)
  cy.get('.form-control.btn.btn-primary.submit-button').click()

  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  cy.get('.btn-primary').click()
}

// Exportando para usar no a.cy.js
module.exports = {
  acessarLogin,
  fazerLogin,
  fazerCadastro,
  preencherCadastro,
  adicionarProdutos,
  validarProdutos,
  finalizarPedido
}
