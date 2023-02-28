const logo = [

    "Cierre Unificado{enter}",
    "En Sitio{enter}"

]

class orden {

    elementsorden() {
        cy.wait(5000)
        cy.get('.rc-tabs-nav > :nth-child(1) > :nth-child(1) > span').contains('Ordenes de Trabajo').click({ force: true })
        cy.get('table.k-grid-table').find('tbody').within(() => {

            cy.get('tr.k-master-row').eq(0).dblclick({ force: true }).within(() => {

                cy.get('td').eq(0).click({ force: true })
            })

        })
        cy.get('button.btn.btn-link').contains('Ver más').click({ force: true });
        cy.get("iframe").then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).click().type('La solicitud ya esta solucionada');
        });

        cy.get('div.css-1g6gooi').eq(0)
            .find('div.react-select__input').within(() => {

                cy.wait(2000)
                cy.get('input')
                    .eq(0)
                    .type(logo[0], { force: true })

            })
        cy.get('div.css-1g6gooi').eq(1)
            .find('div.react-select__input').within(() => {
                cy.wait(2000)
                cy.get('input')
                    .type(logo[1], { force: true })
            })

        cy.get('button.btn.btn-primary').contains('Guardar').click({ force: true })

    }


}
module.exports = new orden();