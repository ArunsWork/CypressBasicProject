import { EmployeeDetailsPage } from "../pages/employeeDetailsPage.js";
import { employeeDetailsPage } from "../pages/employeeDetailsPage.js";
import { employeePage } from "../pages/employeePage.js";
import { homepage } from "../pages/homePage.js";
import { LoginPage, loginPage } from "../pages/login.js";
describe('template spec', () => {
  it('passes', () => {
    const n = '30';
    loginPage.visitHomePage();
    loginPage.clickLogin();
    loginPage.performLogin();
    loginPage.clickLoginButton();
    homepage.clickEmployeeDetailsTab();
    employeeDetailsPage.clickEdit('John');
    employeePage.fillInDurationWorkedField(n);
    employeePage.clickSaveButton();
    employeeDetailsPage.verifyTableContent_NameAndHours();

  });



  // click every row of the table

  // it.skip('Click all the table rows', () =>{

//   loginPage.visitHomePage();
//   loginPage.clickLogin();
//   loginPage.performLogin();
//   loginPage.clickLoginButton();
//   cy.url().should("include", "somee.com/");
//   cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click();
//   cy.get('.table').find('tr').then(($tr) => {
//     expect($tr.length).to.be.greaterThan(50);
//     cy.wrap($tr).click({ multiple: true });
//   })
// })

})
