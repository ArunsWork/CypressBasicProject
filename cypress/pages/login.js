/// <reference types="cypress" />

export class LoginPage {

    performLogin() {

        
        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");
        cy.fixture('login').then(login => {
            cy.get('#UserName').type(login.name);
            cy.get('#Password').type(login.password)
        });
    }

    clickLoginButton() {
        cy.get('.btn').click();
        //Verify user is on correct page
        cy.url().should("include", "somee.com/");
    }
    clickLogin() {

        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");
    }

    visitHomePage(){
        cy.visit("/");
    }

}

export const loginPage = new LoginPage();