/// <reference types="cypress" />

describe("Checkboxes test", () => {
  it("Should nav to checkboxes test", () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
  });

  it("Interact with the menu on the left of the page and click Input Forms", () => {
    cy.contains("Input Forms").click();
  });

  it("On the sub-menu, click Checkbox Demo", () => {
    cy.contains("Checkbox Demo").click();
  });

  it("Under Multiple Checkbox Demo 1st test", () => {
    cy.get("#isAgeSelected").check();
    cy.get("#txtAge").should("contain", "Success - Check box is checked");

    cy.get(".cb1-element").check({ force: true }).should("be.checked");
    cy.get("#check1").should("have.value", "Check All");
  });

  it("Under Multiple Checkbox Demo 1st test", () => {
    cy.get(".cb1-element").eq(3).uncheck().should("not.be.checked");
    cy.get("#check1").should("have.value", "Uncheck All");
  });
});
