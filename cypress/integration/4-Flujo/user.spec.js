import catalogar from "../3-Helpdesk/catalogar.js";
import formulario from "../3-Helpdesk/formulario.js"
import gestion from "../3-Helpdesk/gestin.js"
import nota from "../3-Helpdesk/nota"
import orden from "../3-Helpdesk/cerrar"


//Cypress.config()
//Cypress.session.SavedAllSessions()


describe('Rol Usuario', () => {
    before(() => {

        cy.setCookie('clientIdlocal', 'value=fb5d2f3a-bee2-4442-8875-8a87ff70a46b', 'test.helppeoplecloud.com');
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('clientIdlocal', '1P_JAR')
    });


    it('CREAR SOLICITUD', () => {
        cy.pause()
        cy.visit('/');
        cy.waitForReact();
        cy.login('usuario', 'Cloud2021*');
        cy.wait(5000)
        cy.log('CREAR SOLICITUD')
        cy.sol('Solicitud#1', 'Guia comidas{enter}', 'solicitud consentimiento informado{enter}', '\n arroz y carne dias{enter}');
        cy.log('CARGAR ARCHIVOS')
        cy.upload('informeSecretaria(2).pdf', 'Firma.png');
        cy.wait(5000);
        cy.log('formulario  ')
        formulario.elementsform();

    });

    it('GESTIÓN DE SOLICITUD', () => {
        cy.logout();
        cy.wait(2000);
        cy.login('agente', 'Cloud2021*');
        gestion.elementsgs();
        catalogar.elementscata();
        cy.wait(5000)
        nota.elementsnote();
        orden.elementsorden();


    });

});