class nota {


    elementsnote() {

        cy.get('div.rc-tabs-tab').contains('Notas').click({force:true})

        cy.get('button.btn.btn-link').contains('Agregar Nota').click({ force: true });
        cy.get('div.css-1g6gooi').eq(0)
            .find('div.react-select__input').within(()=>{
                   cy.get('input').type('Actualización del usuario{enter}', { force: true })
                cy.wait(5000)
            })

        cy.get("iframe").then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).click().type('La solicitud ya esta solucionada');
        });
        cy.get('button.btn.btn-primary').contains('Crear').click({ force: true });
        cy.wait(5000)
        cy.get('.Toastify__toast-body').contains('Nota creada con Éxito')


}
}
module.exports= new nota();