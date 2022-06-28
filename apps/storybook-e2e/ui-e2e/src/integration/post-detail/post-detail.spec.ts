describe('std-watch-ui: PostDetail component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=postdetail--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PostDetail!');
    });
});
