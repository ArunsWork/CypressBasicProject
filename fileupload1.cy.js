/// <reference types="cypress" />

describe('File Upload Test', () => {

    it('Upload File', () => {

        // TBC - add pages for home page and file upload pop up
        cy.visit('https://fineuploader.com/demos.html')
        cy.url().should('include', 'fineuploader.com/demos.html')
        cy.get('.span2 > .nav > :nth-child(3) > a').click();
        // cy.get('file input').click();
        cy.get('#fine-uploader-manual-trigger > div > div.buttons > div > input[type=file]').selectFile('cypress/fixtures/a.png', { force: true });

    })







})




