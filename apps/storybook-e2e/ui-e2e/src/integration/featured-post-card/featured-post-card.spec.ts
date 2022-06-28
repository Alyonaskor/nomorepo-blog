describe('std-watch-ui: FeaturedPostCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=featuredpostcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FeaturedPostCard!');
    });
});
