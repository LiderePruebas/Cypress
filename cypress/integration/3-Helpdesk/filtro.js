class filtro {

    elementsfil() {


        cy.wait(7000)
            cy.get('div.css-1g6gooi').within(() => {
                cy.get('input')
                .eq(2)
                .click({force:true})
                .type('Octubre{enter}')
                cy.wait(7000)
            })
       

    }


}
module.exports = new filtro()