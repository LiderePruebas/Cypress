import login from "./login";
import enlace from "./url";
import solicitud from "./solicitud";
import iniciars from "./pruebas"

describe('Primer Modulo de Pruebas', () => {
    before(() => Cypress.Cookies.preserveOnce('$_SESSION'));
    before(() => cy.visit('/'));

    it.skip('Pruebas URL', () => {
        cy.pause();
        enlace.elementsUrl();
    });

    it.skip('Pruebas Login', () => {

        login.elementssesion()

    });

    it('Pruebas Solicitud', () => {
    
        iniciars.login('agente','Cloud2021*')

        solicitud.elementssol();

    });

});

