/// <reference types="cypress" />

describe('api testing', () => {
    it('GET OPERATION', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false,
            headers: {
                'accept': 'text/plain'
            }
        }).then((response => {
            expect(response.status).to.equal(200);

        }))

    })

    it('POST OPERATION', () => {

        cy.request({
            method: "POST",
            url: 'https://reqres.in/api/users',
            failOnStatusCode: false,
            headers: {
                'accept': "application/json",

            },
            body: {
                "name": "morpheus",
                "job": "leader"
            }

        }).then((response => {
            expect(response.status).to.equal(201);
        }))

    })







})
