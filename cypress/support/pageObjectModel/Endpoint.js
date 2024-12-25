
let endpoint = function() { 
    return{
        visit: function(path) {
            cy.visit(path);
        }, 
        getRequestAndAssertStatus: function(path, code) {
            cy.request(path).then((response) => {
                expect(response.status).to.eq(code);
            });
        },
        getRequestAndAssertContentType: function(path, header, contentTypeValue) {
            cy.request(path).then((response) => {
                expect(response.headers[header]).to.contain(contentTypeValue);
            });
        }
    }
}

module.exports = endpoint;