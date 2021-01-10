/// <reference types="cypress" />

describe("Checkboxes test", () => {
  it.only("should set Japan in the country select", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/jquery-dropdown-search-demo.html"
    );

    cy.get("select#country").siblings(".select2").click();
    cy.get("select#country").select("Japan", { force: true });
    cy.get("#select2-country-container").should("contain", "Japan");
  });
});
