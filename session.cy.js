import { homepage } from "../pages/homePage.js";
import { LoginPage, loginPage } from "../pages/login.js";

describe('template spec', () => {
    it('usesession', () => {

        cy.session('login', () => {

            cy.session('login', () => {
                loginPage.visitHomePage();
                loginPage.clickLogin();
                loginPage.performLogin();
                loginPage.clickLoginButton();
            })
        })

        cy.screenshot('testscreenshot', {
            capture: 'fullPage'
        })

    });


})