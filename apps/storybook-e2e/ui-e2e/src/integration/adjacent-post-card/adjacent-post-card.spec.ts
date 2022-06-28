describe('std-watch-ui: AdjacentPostCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=adjacentpostcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AdjacentPostCard!');
    });
});
