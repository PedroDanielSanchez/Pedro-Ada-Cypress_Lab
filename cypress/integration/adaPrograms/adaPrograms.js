import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I navigate to Programs section`, () => {
  cy.visit('');
  cy.get(`[href='/#programas']`).click();
});

When(`The programs section is loaded`, () => {
  cy.get('#programas').should('be.visible');
});

/// <reference types="cypress-xpath" />
Then(`I see the program with title {string}`, (title) => {
    // Ejemplo de como usar xpath con cypress si llega a ser necesario.
    cy.xpath(`//h3[contains(text(),'${title}')]`).should('be.visible');
    // Tomamos solo la primera palabra del nombre del programa para 
    // posteriormente buscar una imagen cuyo src la contenga
    const programKeyWord = title.split(/(\s+)/)[0]; 
    cy.get(`img[src*='${programKeyWord.toLowerCase()}']`)
      .should('not.exist')
      //  .should('not.be.visible')
       
});