const { internet } = require("faker")

var faker = require("faker");

describe("Sign up to Gmail",() => {
    it("visit url", () => {
        cy.visit("https://mail.google.com");
        cy.url()
            .should("include","google.com");
        cy.get('#link-signup > a')
            .click();
    });

    it("Fill details", () => {
        fillDetails();
        cy.get('.RveJvd')
            .click();
    });
});

function fillDetails() {
    let firstName = faker.name.firstName(),
            lastName = faker.name.lastName(),
            password = "Welcome@123";

        cy.get('#firstName ')
            .type(firstName);
        cy.get('#lastName ')
            .type(lastName);
        cy.get('#username ')
            .type(firstName+lastName+474);
        cy.get('#passwd')
            .type(password);
        cy.get('#confirm-passwd')
            .type(password);

}
