/// <reference types="Cypress" />

const _urlbase = 'https://frontendpodyplomowe.github.io/logging/';
const indexPage = _urlbase + 'index.html';
const loginPage = _urlbase + 'login.html';
const registerPage = _urlbase + 'register.html';

describe('Account Manger - app', ()=>{

    before(()=>{
        cy.visit(_urlbase);
    });

    describe('Check of basic elements of login page',()=>{
        xit('Go to home page with login form',()=>{  
            cy.get('.container').should('contain','Logowanie');
            cy.get('#form').should('exist');
            cy.get('#login').should('exist');
            cy.get('#password').should('exist');
            cy.get('button').should('exist').and('have.text','Zaloguj się!');
            cy.get('a').should('exist').and('have.text','Zarejestruj się!');
        })

        it('Register form - check elements',()=>{
            cy.get('a').click();
            cy.get('.container').should('contain','Rejestracja');
            cy.get('#form').should('exist');
            cy.get('#login').should('exist');
            cy.get('#password').should('exist');
            cy.get('button').should('exist').and('have.text','Załóż konto');
            cy.get('a').should('exist').and('have.text','Wróc do logowania!');
        })

        it('Register and login in app',()=>{
            //cy.visit(loginPage);
            cy.get('a').click();
            cy.get('#login').type('tester');
            cy.get('#password').type('12345');
            cy.get('button').should('exist').and('have.text','Załóż konto').click();
            cy.get('#login').type('tester');
            cy.get('#password').type('12345');
            cy.get('button').should('exist').and('have.text','Zaloguj się!').click();
            cy.get('button').should('have.text','Wyloguj się');
        })

        xit('Login with existing user',()=>{
            //cy.visit(loginPage);
            cy.get('#login').type('tester');
            cy.get('#password').type('12345');
            cy.get('button').should('exist').and('have.text','Zaloguj się!').click();
            
        })

    })


})


