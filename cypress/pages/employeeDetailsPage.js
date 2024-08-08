/// <reference types="cypress" />

export class EmployeeDetailsPage {

clickEdit(name){

    cy.get('.table')
    .find('td')
    .contains(name)
    .parent()
    .contains('Edit')
    .click();

}

verifyTableContent_NameAndHours(){
    cy.get('.table')
      .find('td')
      // .contains('John')
      .filter(':contains("John")')
      .parent()
      .contains('30');

    cy.get('.table').parent().should('have.class', 'container body-content');

}



}

export const employeeDetailsPage = new EmployeeDetailsPage();