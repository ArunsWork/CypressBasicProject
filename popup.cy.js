import { homepage } from "../pages/homePage.js";
import { LoginPage, loginPage } from "../pages/login.js";
describe('template spec', () => {
    it('handlepopups', () => {

        loginPage.visitHomePage();
        loginPage.clickLogin();
        loginPage.performLogin();
        loginPage.clickLoginButton();

        // Start Code here - TBC


    });


})
