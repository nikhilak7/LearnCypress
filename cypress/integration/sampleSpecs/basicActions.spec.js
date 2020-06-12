var faker = require('faker');

describe("Basic actions", () => {
  it("visit url", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("be.visible");
  });

  it("click and type", () => {
    var randomEmail = faker.internet.email();
    var fullName = faker.name.findName();
    var description = faker.lorem.sentences();
    var couponCode = faker.random.number();

    cy.get(":nth-child(3) > ul > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get("#email1")
      .type(randomEmail)
      .should("have.value", randomEmail);

    cy.get('#password1')
        .type("123456789");
    
    cy.get('#fullName1')
        .type(fullName);

    cy.get('#description')
        .type(description);

    cy.get('#couponCode1')
        .type(couponCode);

    cy.get('.action-form > .btn')
        .click();
  });

  it("Assert popover", () =>{
    cy.get('.well > .btn-danger')
        .click();

    cy.get('.popover-title')
        .should("be.visible");

    cy.get('.popover-content')
        .should("be.visible");

    cy.get('.action-labels > ')
        .click({multiple:true})
  });

  it("Different types of click", () => {
    cy.get('.action-div')
        .dblclick();
    cy.get('.action-input-hidden')
        .clear()
        .type("verified");

    cy.get('.rightclick-action-div')
        .rightclick();
    cy.get('.rightclick-action-input-hidden')
        .clear()
        .type("verified");
  });

  it("To Select from dropdown", () => {
    cy.get('.action-select')
        .should("have.value","--Select a fruit--")
        .select("apples");
        cy.get('#trigger > a').scrollIntoView();
  });
});
