import { EmployeeDetailsPage } from "../pages/employeeDetailsPage.js";
import { employeeDetailsPage } from "../pages/employeeDetailsPage.js";
import { employeePage } from "../pages/employeePage.js";
import { homepage } from "../pages/homePage.js";
import { LoginPage, loginPage } from "../pages/login.js";

describe('Network Intercept', () => {


  it('Intercept Network or Throttle Network', () => {

    loginPage.visitHomePage();

    cy.intercept('/EmployeeDetails').as('EmployeeDetails');
    loginPage.clickLogin();
    loginPage.performLogin();
    loginPage.clickLoginButton();
    cy.contains('Employee List').click();
    cy.get('[href="/Employee/Edit/1"]').click();
    cy.get('.btn').click();
    cy.url().should("include", "somee.com/");
    cy.contains('Employee Details').click();

    cy.wait('@EmployeeDetails').then((req) => {
      expect(req.response.body.length).to.be.greaterThan(0);
      expect(req.response.statusCode).to.be.equal(200);
      expect(req.response.body).to.contain('John');
     })

  })

})
