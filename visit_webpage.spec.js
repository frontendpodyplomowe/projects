/// <reference types="Cypress" />


describe("Opening webpage test", ()=>{

    it("should open google.com", ()=>{
        cy.visit("www.google.com");
           
    })

    it("verify text on results page", ()=>{
        cy
            .get('.gLFyf')
            .type('studia angular{enter}');
        cy
            .get('#center_col')
            .contains('Programista Front-End'); 
    })
})