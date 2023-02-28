
class enlace{

elementsUrl(){

cy.visit('/');
cy.url().should('eq',Cypress.config().baseUrl+'/login');
cy.location('protocol').should('contains','https');
cy.location('hostname').should('eq','testapp.helppeoplecloud.com');
cy.login('administrador','Cloud2021*');
cy.wait(5000)
cy.location('pathname').should('eq','/app/requests/requestgrid');
cy.get('.widget-content-right > .btn').click({force:true});


}


}

module.exports = new enlace();