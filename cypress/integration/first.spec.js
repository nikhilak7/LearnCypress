describe ('google', ()=>{
    it ('should check url', ()=>{
        cy.visit('https://www.google.com');
        cy.get('#gb_70').click();
        cy.url().should('include','signin');
    });
});
