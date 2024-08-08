
/// <reference types="cypress" />

export class HomePage {

    clickEmployeeDetailsTab() {

        cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click();
    }
}

export const homepage = new HomePage();

