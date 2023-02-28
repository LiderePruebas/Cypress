const { method } = require("bluebird");

describe('Prueba api', {
    baseUrl: 'https://testapp.helppeoplecloud.com'
}, () => {
    context('Utilizing API Request', () => {
        Cypress.Cookies.preserveOnce('$_SESSION')
        before(() => cy.getAndSetToken());
        
        

        it('should validate login status', () => {
            cy.visit('/');
            
        });
    });
    /*it('Modulo login', () => {

        cy.request({
            url: 'https://test.helppeoplecloud.com/helppeople_api/api/security/gettoken ',
            method: 'POST',
            body: {

                username: "YWdlbnRl",
                password: "Q2xvdWQyMDIxKg=="
            }

        }).then(res => {
            cy.setCookie('clientIdlocal', 'value=fb5d2f3a-bee2-4442-8875-8a87ff70a46b');
            localStorage.setItem('username', 'YWdlbnRl'),
                localStorage.setItem('token', res.body.Token),
                localStorage.setItem('cantidadOt', '11')
            // localStorage.setItem('datosOt', '[{"ID":"4","ServiceOrderID":"5","Description":"Este cambio requiere de NIvel 2","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"22","ServiceOrderID":"110","Description":"No puedo ingresa al equipo","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"34","ServiceOrderID":"197","Description":"Toner para impresora","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"65","ServiceOrderID":"240","Description":"ctualizacion de Script de mantenimiento general","Percentage":"50","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"67","ServiceOrderID":"229","Description":"Nueva orden","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"68","ServiceOrderID":"220","Description":"Es una nueva orden 3333","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"69","ServiceOrderID":"229","Description":"Indique los componentes de la hamburguesa:\n","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"70","ServiceOrderID":"220","Description":"Numero 100000000000","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"71","ServiceOrderID":"187","Description":"Adjuntos de comidas","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"80","ServiceOrderID":"243","Description":"error al imprimir","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"105","ServiceOrderID":"276","Description":"Asunto d epruebas","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""}]')

        }).wait(1000)
*/




        // cy.reload()

    

});