import {roles} from "./pruebas"

const logo = [
    'Mesa de Servicios{enter}',
    'Solicitud de documentos{enter}',
    "Requerimiento{enter}",
    "Actualizacion{enter}",
    "Solicitud de documentos{enter}",
    "Examenes{enter}",
    "Responsable servicio{enter}",
    "AGENTE DE MESA{enter}",
    "Media{enter}",
    "Media{enter}"

]
class formulario {


    elementsform() {



        if (cy.get('@usuarios') == "AGENTE") {
            cy.get('.form-group').within(() => {

                cy.get('path').eq(2).click({ force: true })
                cy.get('div.css-1g6gooi')
                    .eq(2)
                    .find('div.react-select__input').then(() => {
                        for (var i = 4; i < 6; i++) {
                            cy.wait(2000)
                            cy.get('input')
                                .eq(i)
                                .type(logo[i - 4], { force: true })
                            cy.wait(3000)
                        }
                    })
            })
            cy.get('.form-group').within(() => {

                cy.get('path').eq(3).click({ force: true })
                cy.get('div.css-1g6gooi').eq(2)
                    .find('div.react-select__input').then(() => {
                        for (var i = 6; i < 14; i++) {
                            cy.wait(2000)
                            cy.get('input')
                                .eq(i)
                                .type(logo[i - 4], { force: true })
                            cy.wait(2000)
                        }
                    })
            })


        }else if(cy.get("@usuarios").contains('USUARIO') === "uSUARIO"){

            cy.get('.form-group').within(() => {

                cy.get('path').eq(2).click({ force: true })
                cy.get('div.css-1g6gooi')
                    .eq(2)
                    .find('div.react-select__input').then(() => {
                        cy.wait(5000)
                        cy.get('input')
                            .eq(4)
                            .type('Mesa de Servicios{enter}', { force: true })
                        cy.wait(5000)
                        cy.get('input')
                            .eq(5)
                            .type('Solicitud de documentos{enter}', { force: true })
                        cy.wait(5000)
                    })
            })
            
        
    }else {

        cy.log('eror')
    }
        /*cy.get('.btn-group > .btn-link').click({ force: true })

        cy.get('div.rm-pointers.dropdown-menu-lg.dropdown-menu.dropdown-menu-right.show').within(() => {
            cy.get('button')
                .click({ force: true })

        })*/
    }
}

module.exports = new formulario();