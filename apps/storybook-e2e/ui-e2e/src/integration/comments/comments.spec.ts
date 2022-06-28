describe('std-watch-ui: Comments component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=comments--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Comments!');
    });
});
