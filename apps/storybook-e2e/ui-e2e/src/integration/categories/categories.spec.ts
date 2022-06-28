describe('std-watch-ui: Categories component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=categories--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Categories!');
    });
});
