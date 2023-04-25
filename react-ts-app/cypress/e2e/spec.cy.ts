/// <reference types="cypress" />

describe("Relevant content at each route", () => {
  it("Checks main page", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Picture Search");
  });

  it("Checks About page", () => {
    cy.visit("/about");
    cy.get("h1").should("have.text", "About Us");
  });

  it("Checks Form page", () => {
    cy.visit("/form");
    cy.get("h1").should("have.text", "Your Favourite Book");
  });

  it("Checks 404 page", () => {
    cy.visit("/404");
    cy.get("h1").should("have.text", "Not Found");
  });
});

describe("Links are working", () => {
  it("Form link is working", () => {
    cy.visit("/");
    cy.get(".header-nav").contains("Form").click();
    cy.url().should("include", "/form");
    cy.get("h1").should("have.text", "Your Favourite Book");
  });

  it("About link is working", () => {
    cy.visit("/");
    cy.get(".header-nav").contains("About Us").click();
    cy.url().should("include", "/about");
    cy.get("h1").should("have.text", "About Us");
  });

  it("Home link is working", () => {
    cy.visit("/form");
    cy.get(".header-nav").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").should("have.text", "Picture Search");
  });
});

describe("Form creation page is working", () => {
  it("When not filled in and submit is pressed, errors appear", () => {
    cy.visit("/form");
    cy.get("[type='submit']").contains("Post it!").click();
    cy.get(".form-error").first().should("have.text", "Please make sure the field is filled in.");
    cy.get(".form-error").last().should("have.text", "Please agree to post your book.");
  });

  it("When errors are corrected, error messages disappear", () => {
    cy.visit("/form");
    cy.get("[type='submit']").contains("Post it!").click();
    cy.get(".form-error").first().should("have.text", "Please make sure the field is filled in.");
    cy.get(".form-text-input").first().type("Test book title");
    cy.get("[type='submit']").contains("Post it!").click();
    cy.get(".form-error").first().should("not.have.text");
  });
});

describe("The Home Page contains operational Search", () => {
  it("There is Search area on Home page", () => {
    cy.visit("/");
    cy.get(".home-search-form").should("exist");
  });

  it("The Search has input", () => {
    cy.visit("/");
    cy.get(".home-search").should("exist");
  });

  it("The Search has input which can be typed in", () => {
    cy.visit("/");
    cy.get(".home-search").type("Test").should("contain.value", "Test");
  });

  it("The Search element has Submit button with text Search", () => {
    cy.visit("/");
    cy.get(".home-search-form button").should("contain.text", "Search");
  });
});

describe("Basic Layout is correct", () => {
  it("There is header", () => {
    cy.visit("/");
    cy.get(".header").should("be.visible");
  });

  it("There is Nav component in the header", () => {
    cy.visit("/");
    cy.get(".header-nav").should("be.visible");
  });

  it("The Nav component in the header contains 3 elements", () => {
    cy.visit("/");
    cy.get(".header-nav-item ").first().should("be.visible");
    cy.get(".header-nav-item ").last().should("be.visible");
  });

  it("There must be a root element on Home page", () => {
    cy.visit("/");
    cy.get("#root").should("exist");
  });

  it("There must be a root element on Form page", () => {
    cy.visit("/form");
    cy.get("#root").should("exist");
  });

  it("There must be a form on Form page", () => {
    cy.visit("/form");
    cy.get(".form-form").should("be.visible");
  });

  it("Form must be below the Form page title", () => {
    cy.visit("/form");
    cy.get(".form-form").should("be.visible");
  });
});
