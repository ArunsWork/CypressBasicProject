
/// <reference types="cypress" />

export class EmployeePage {

    fillInDurationWorkedField(num) {

        cy.get('#DurationWorked').clear().type(num)
    }

    clickSaveButton() {

        cy.get('.btn').click();
    }


}

export const employeePage = new EmployeePage();