describe ('Assertion', () => {
    it ('should check basic assertions', () => {
        cy.visit('https://example.cypress.io');
        expect(true).to.be.true;
        expect(67).to.not.equal(87);
        expect(54).to.oneOf([45,78,54,32]);
        expect('thing').to.have.length.of.at.most(5);

        cy.url().should('include','example');
        cy.url().should('eq','https://example.cypress.io/');
    })
})