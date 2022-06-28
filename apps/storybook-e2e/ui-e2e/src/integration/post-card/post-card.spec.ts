describe('std-watch-ui: PostCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=postcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PostCard!');
    });
});
