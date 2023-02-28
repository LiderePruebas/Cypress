describe ('',()=>{

it ('',()=>{
cy.visit('/');
cy.request({
    url: 'https://test.helppeoplecloud.com/helppeople_api/api/security/gettoken ',
    method: 'POST',
    body: {

        username: "YWdlbnRl",
        password: "Q2xvdWQyMDIxKg=="
    }

}).its('body').then(res => {
    localStorage.setItem('username', 'YWdlbnRl');
    localStorage.setItem('token', res.Token);
    cy.setCookie('clientIdlocal', 'value=fb5d2f3a-bee2-4442-8875-8a87ff70a46b');
    
}).as('token');
cy.request('GET','https://test.helppeoplecloud.com/helppeople_api/api//services/getservices?',cy.get('@token'));

cy.visit('/')

});
});