describe('std-watch-ui: CommentsForm component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commentsform--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommentsForm!');
    });
});
