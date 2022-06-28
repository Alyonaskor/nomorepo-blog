describe('std-watch-ui: Post component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=post--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Post!');
    });
});
