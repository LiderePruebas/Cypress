import filtro from "./filtro"

class gestion {

    elementsgs() {
        cy.wait(6000)

        filtro.elementsfil()
        cy.get('table.k-grid-table').find('tbody').within(() => {

            cy.get('tr').find('td.p-0').eq(0).click({ force: true })

        })


    }


}

module.exports = new gestion();