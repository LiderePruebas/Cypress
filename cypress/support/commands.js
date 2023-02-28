import 'cypress-file-upload';
import 'cypress-iframe';
import '@testing-library/cypress/add-commands';

const username = Cypress.env('username');
const password = Cypress.env('password');

/*Cypress.Commands.add('iniciar', (username, password) => {
  cy.session([username, password], () => {
    cy.request({
      url: 'https://test.helppeoplecloud.com/helppeople_api/api/security/gettoken',
      method: 'POST',
      body: {
        username,
        password
      },
    }).then(({ body }) => {
      window.localStorage.setItem('authToken', body.token)
    })
  })
},
{
  validate() {
    cy.request('/whoami').its('statusCode').should('eq', 200)
  },
}

)*/


Cypress.Commands.add('sol', (asunto, formato, flujo, descripcion) => {

  //cy.get('div.icon-wrapper-bg.bg-primary').eq(0).click()
  //cy.get('.btn-icon-vertical').click({ force: true });
  cy.wait(5000)
  cy.get('div.app-sidebar__inner.pt-3').find('a').eq(0).click({ force: true });
  cy.wait(5000)
  cy.get('#Subject').type(asunto, { force: true });
  cy.wait(5000);
  cy.get('.form-group').eq(2).click();
  cy.focused().then(($el) => {
    cy.log($el).type(formato);
  });
  cy.wait(5000);
  cy.get("iframe").then(($iframe) => {
    const $body = $iframe.contents().find('body')
    cy.wrap($body).then(($caso) => {

      if (formato == 'Guia comidas{enter}') {

        cy.get($caso).should('have.text', 'Indique los componentes de la hamburguesa:\n').dblclick();
        cy.get("iframe").then(($iframe) => {
          const $body = $iframe.contents().find('body');
          cy.wrap($body).click()
        });

      } else if (formato == 'Datos de usuario{enter}') {

        cy.get($caso).should('have.text', 'Hola por favor ayúdanos llenando estos campos').click();

      } else if (formato == 'guia creacion{enter}') {

        cy.get($caso).should('have.text', 'esta guia es para realizar pruebas de la demostracion de la administracion de helppeople').click();

      } else if (formato == 'impresoras{enter}') {

        cy.get($caso).should('have.text', 'ubicacion de la impresora:').click();

      } else {

        cy.log('error');

      };
    });
  });
  /*cy.get('.form-group').eq(3).click();
  cy.focused().then(($fl) => {
    cy.log($fl).type(flujo);
    cy.wait(2000);
    cy.get('#Subject').should('have.value', 'Consentimiento informado')
    if (flujo === 'solicitud consentimiento informado{enter}') {
      cy.get("iframe").then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
          .click()
          .type(descripcion, { force: true })
          .should('have.text', 'Paciente solicita documento de consentimiento informado para cirugia \npor favor indicar: Nombres y apellidos completos ,tipo cirugia y correo electronico\n\n')

      });
    } else {
      cy.log('error')
    }
  });*/
  //cy.get(':nth-child(4) > input').check().should('be.checked');
});

Cypress.Commands.add('logout', () => {

  cy.get('.btn-group > .btn-link').eq(0).click({ force: true })

  cy.get('div.widget-content-right.mr-2').within(() => {

    cy.get('button.btn.btn-pill.btn-shadow.btn-shine.btn-primary').eq(0).click({ force: true })
  })


})



Cypress.Commands.add('login', (username, password) => {
  const url = 'https://test.helppeoplecloud.com/helppeople_api/api//security'

  cy.intercept('POST', `${url}/gettoken`).as('user')
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('.btn > span').click({ force: true });
  cy.wait(2000)
  cy.get('@user').then(xhr => xhr.response.body.Token).then(($jwt) => {
    cy.request('GET', `${url}/GetUserPermisions?token=${$jwt}`).as('permisos')
  })
  cy.wait(2000)
  cy.get('@permisos.all').then(xhr => xhr.body.Values.UserInfo.Name).then(($usuario) => {
    cy.request('GET', `${url}/GetUserActive?usuario=${$usuario}`).as('usuario')
  })
  cy.get('@usuario')
});

Cypress.Commands.add('getAndSetToken', () => {
  Cypress.log({
    message: 'Requests token and sets in local storage.',
    displayName: 'GetToken'
  });
  cy.request({
    url: 'https://test.helppeoplecloud.com/helppeople_api/api/security/gettoken',
    method: 'POST',
    body: {
      username,
      password
    }
  }).then(res => {
    localStorage.setItem('username', 'YWdlbnRl'),
      localStorage.setItem('token', res.body.Token)
    //localStorage.setItem('cantidadOt', '11'),
    //localStorage.setItem('datosOt', '[{"ID":"4","ServiceOrderID":"5","Description":"Este cambio requiere de NIvel 2","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"22","ServiceOrderID":"110","Description":"No puedo ingresa al equipo","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"34","ServiceOrderID":"197","Description":"Toner para impresora","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"65","ServiceOrderID":"240","Description":"ctualizacion de Script de mantenimiento general","Percentage":"50","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"67","ServiceOrderID":"229","Description":"Nueva orden","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"68","ServiceOrderID":"220","Description":"Es una nueva orden 3333","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"69","ServiceOrderID":"229","Description":"Indique los componentes de la hamburguesa:\n","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"70","ServiceOrderID":"220","Description":"Numero 100000000000","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"71","ServiceOrderID":"187","Description":"Adjuntos de comidas","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"80","ServiceOrderID":"243","Description":"error al imprimir","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""},{"ID":"105","ServiceOrderID":"276","Description":"Asunto d epruebas","Percentage":"0","TechnicianID":"agente","StatusID":"1","StatusDescription":"abierta","TechnicianName":"AGENTE DE MESA","TechnicianIsVIP":"0","IsPredecessor":"","UserImage":""}]')

    cy.setCookie('clientIdlocal', 'value=fb5d2f3a-bee2-4442-8875-8a87ff70a46b');


  });

});

Cypress.Commands.add('upload', (documento1, documento2) => {

  cy.get('div.k-button.k-upload-button')
    .attachFile([documento1, documento2], { subjectType: 'drag-n-drop' });
  cy.get('.Toastify__toast-body').should('have.text', 'Se adjuntaron exitosamente los archivos')

})