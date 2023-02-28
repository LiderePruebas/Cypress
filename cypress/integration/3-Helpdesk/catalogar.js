const logo = [

    "Requerimiento{enter}",
    "Actualizacion{enter}",
    "No{enter}",
    "Solicitud de documentos{enter}",
    "Examenes{enter}",
    "Responsable servicio{enter}",
    "AGENTE DE MESA{enter}",
    "Media{enter}",
    "Media{enter}"

]

class catalogar {

    elementscata() {

        cy.get('.form-group').within(() => {

            cy.get('path').eq(2).click({ force: true })
            cy.get('div.css-1g6gooi').eq(2)
                .find('div.react-select__input').then(() => {
                    for (var i = 2; i < 10; i++) {
                        cy.wait(2000)
                        cy.get('input')
                            .eq(i)
                            .type(logo[i-2], { force: true })
                        cy.wait(2000)
                    }
                })
        })
        cy.wait(5000)
        cy.get('.text-center > .btn').click({ force: true })
        cy.wait(5000)
        cy.get('.Toastify__toast-body').should('have.text','Se editó correctamente la solicitud')
        cy.pause(7000)
        cy.get('button.btn.btn-secondary').eq(0).click({force:true})
        cy.wait(5000)
        cy.get('.Toastify__toast-body').should('have.text','Se Aceptó correctamente la solicitud')
        cy.wait(5000)
       
    }
}

module.exports = new catalogar();