// // const url = 'https://test.helppeoplecloud.com/helppeople_api/api//security'

const { defaults, valuesIn } = require("lodash");
const { isIntersectionTypeNode } = require("typescript");

// // var $usuario = "";

// describe('a', () => {

//     it('afd', ($usuario) => {
//         cy.visit('/')
//         // cy.intercept('POST', `${url}/gettoken`).as('user')
//         cy.login('agente', 'Cloud2021*')
//         // cy.wait(2000)
//         // cy.get('@user').then(xhr => xhr.response.body.Token).then(($jwt) => {
//         //     cy.request('GET', `${url}/GetUserPermisions?token=${$jwt}`).as('permisos')
//         // })
//         // cy.wait(2000)
//         // cy.get('@permisos.all').then(xhr => xhr.body.Values.UserInfo.Name).then(($usuario)=>{
//         //     cy.request('GET', `${url}/GetUserActive?usuario=${$usuario}`).as('usuario')
//         // })
//         // cy.get('@usuario')

//     })

var roles = ""
const url = 'https://test.helppeoplecloud.com/helppeople_api/api//security'
class iniciars {

    constructor () {


        this.username = '#username';
        this.password = '#password'

    }
    
    login = (user, pass) =>{
        
        cy.intercept('POST', `${url}/gettoken`).as('user')
        cy.get(this.username).type(user);
        cy.get(this.password).type(pass);
        cy.get('.btn > span').click({ force: true });
        cy.wait(2000)
        cy.get('@user').then(xhr => xhr.response.body.Token).then(($jwt) => {
            cy.request('GET', `${url}/GetUserPermisions?token=${$jwt}`).as('permisos')
        })
        cy.wait(2000)
        cy.get('@permisos.all').then(xhr => xhr.body.Values.UserInfo.Name).then(($rol)=>{
           roles = $rol
        }).as('usuarios')
    }

}
export {roles};

export default new iniciars ();
