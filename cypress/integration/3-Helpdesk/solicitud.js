import formulario from './formulario.js'
const crear = require('../../fixtures/dataprocess/solicitud.json');

class solicitud {

    elementssol() {

        crear.forEach(asun => {

            cy.log(asun.affair).then(() => {

                cy.sol(asun.affair, asun.format)

                switch (asun.format) {

                    case 'Guia comidas{enter}':
                        cy.wait(2000)
                        cy.get("iframe").then(($iframe) => {
                            const $body = $iframe.contents().find('body');
                            cy.wrap($body).click().type(asun.describe);
                        });
                        break;

                    case 'Datos de usuario{enter}':

                        cy.get("iframe").then(($iframe) => {
                            const $body = $iframe.contents().find('body');
                            cy.wrap($body).click().type(asun.describe);
                        });
                        break;

                    case 'guia creacion{enter}':

                        cy.get("iframe").then(($iframe) => {
                            const $body = $iframe.contents().find('body');
                            cy.wrap($body).click().type(asun.describe);
                        });
                        break;

                    case 'impresoras{enter}':

                        cy.get("iframe").then(($iframe) => {
                            const $body = $iframe.contents().find('body');
                            cy.wrap($body).click().type(asun.describe);
                        });
                        break;
                }
            });
        });
        //cy.sol();
        cy.get(':nth-child(4) > input').check().should('be.checked');
        cy.get(':nth-child(5) > .btn > span').click();
        cy.get('.form-group').eq(8).dblclick({ force: true }).type('Fotocopiadoras{enter}')
        cy.get('div.css-16pqwjk-indicatorContainer.react-select__indicator.react-select__clear-indicator').click({ force: true })
        cy.get('.form-group').eq(9).dblclick({ force: true }).type('sede{enter}');
        cy.wait(2000);
        cy.get('input.p-0').eq(0).check();
        cy.get('.modal-footer > .btn-primary').click({ force: true });
        cy.wait(5000);
        cy.get('div.asset-list-container').contains('Departamento: Administrativa Ubicación: Sede Occidente ')
        cy.get(':nth-child(6) > .p-2').dblclick()
        cy.get('div.k-button.k-upload-button')
            .attachFile(['informeSecretaria(2).pdf', 'Firma.png'], { subjectType: 'drag-n-drop' });

        formulario.elementsform();

    }
}
module.exports = new solicitud();