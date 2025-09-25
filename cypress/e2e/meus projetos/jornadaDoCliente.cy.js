const { 
  acessarLogin, 
  fazerLogin, 
  fazerCadastro, 
  preencherCadastro, 
  adicionarProdutos, 
  validarProdutos, 
  finalizarPedido 
} = require('../../support/funcoes')

describe('Teste de automação completa', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
  })
  it('Testando botões da tela inicial', () => {
    //Carrosséis
    cy.get('.carousel').first().within(() => {
      cy.get('[data-slide="prev"]').click()
      cy.get('[data-slide="next"]').click()
    })
    cy.get('.carousel').last().within(() => {
      cy.get('[data-slide="prev"]').click()
      cy.get('[data-slide="next"]').click()
    })
    //Menus principais
    cy.get('[href="#Women"]').click()
    cy.get('[href="#Men"]').click()
    cy.get('[href="#Kids"]').click()
    //Carrinho vazio
    cy.get('.material-icons.card_travel').click()
    cy.get('[href="/view_cart"]').first().click()
    cy.contains('Cart is empty!').should('be.visible')
    //Login
    acessarLogin()
    //Test cases
    cy.get('[href="/test_cases"]').click()
    cy.contains('Test Cases').should('be.visible')
    //API list
    cy.get('[href="/api_list"]').click()
    cy.contains('APIs List for practice').should('be.visible')
    //Contact
    cy.get('.fa.fa-envelope').click()
    cy.contains('Contact Us').should('be.visible')
  })
  it('Fluxos de login com erros', () => {
    acessarLogin()
    //Cadastro com email inválido
    cy.get('[data-qa="signup-name"]').type('blayblade')
    cy.get('[data-qa="signup-email"]').type('blay123gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('input[name="email"]').then($input => {
      expect($input[1].validationMessage).to.contain('@')
    })
    //Login errado
    fazerLogin('blay@gmail.com', 'blay123')
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
  it('Fluxo de cadastro e compra de produtos', () => {
    acessarLogin()
    //Email aleatório
    const emailRandom = `blay${Date.now()}@mail.com`
    preencherCadastro(emailRandom)
    //Produtos masculinos
    cy.get('[href="#Men"]').click()
    cy.get('[href="/category_products/3"]').click()
    adicionarProdutos([2, 28, 31, 43])
    //Produtos femininos
    cy.get('[href="#Women"]').click()
    cy.get('.panel-body').contains('Dress').click()
    adicionarProdutos([3, 4])
    //Produtos infantis
    cy.get('[href="#Kids"]').click()
    cy.get('.panel-body').contains('Tops & Shirts').click()
    adicionarProdutos([13, 18])
    //Validar carrinho
    cy.get('[href="/view_cart"]').first().click()
    validarProdutos([
      'Men Tshirt',
      'Pure Cotton V-Neck T-Shirt',
      'Pure Cotton Neon Green Tshirt',
      'GRAPHIC DESIGN MEN T SHIRT - BLUE',
      'Sleeveless Dress',
      'Stylish Dress',
      'Frozen Tops For Kids',
      'Little Girls Mr. Panda Shirt'
    ])
    //Finalizar pedido
    finalizarPedido('Mensagem de teste', {
      nome: 'Blay Blade',
      numero: '5754464646546',
      cvc: '123',
      mes: '12',
      ano: '2030'
    })
  })
    it('deve realizar o login com sucesso', () => {
        cy.request({
            method:'POST',
            form:true,
            url:'https://automationexercise.com/api/verifyLogin',
            body:{          
                
               email:'blay1758738723181@mail.com',                                                                 ///O método que encontrei para testar minha API vai ser mais complicado por causa do login,
               password:'blayblade123'                                                                             ///já que estou gerando o email de forma aleatória. Agora, toda vez, terei que olhar no teste
            }                                                                                                      ///descobrir qual email usar na API. A password sempre vai ser a mesma.                                                                                                                             
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.contain('User exists!');
  });
});
})
