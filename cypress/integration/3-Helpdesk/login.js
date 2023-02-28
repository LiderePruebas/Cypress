


const testx = require('../../fixtures/dataprocess/login.json');



class login {

    elementssesion() {

        testx.forEach(tests => {

            cy.log(tests.name).then(() => {

                cy.login(tests.username, tests.password)

                if (tests.test === 'test#4') {
                    cy.get('head > title').should('contain.text', tests.expected);
                    cy.logout()
                } else if (tests.test === 'test#1' || tests.name === 'test#2') {
                    cy.get('#root > div.Toastify > div').should('contain.text', tests.expected);
                } else if (tests.test === 'test#3') {
                    cy.get('div.modal-footer.clearfix').should('contain.text', tests.expected);
                    cy.reload();
                    cy.wait(2000)
                }

            });


        });
    }
}
module.exports = new login()