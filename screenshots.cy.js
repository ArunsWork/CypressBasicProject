import { homepage } from "../pages/homePage.js";
import { LoginPage, loginPage } from "../pages/login.js";
describe('template spec', () => {
    it('screenshots', () => {

        loginPage.visitHomePage();
        loginPage.clickLogin();
        loginPage.performLogin();
        loginPage.clickLoginButton();

        //Capture full page after user is logged in
        cy.screenshot('testscreenshot', {
            capture: 'fullPage'
        })

    });


})