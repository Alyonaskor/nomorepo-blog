describe('std-watch-ui: PostWidget component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=postwidget--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PostWidget!');
    });
});
