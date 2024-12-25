
let demo = function() { 
    return{
        visit: function(path) {
            cy.visit(path);
        },
    
        inputText: (text) => {
            cy.get('#textArea').clear().type(text);
        },
    
        submitText: () => {
            cy.get('#btnRunAnalysis').click();
        },

        verifyAnalysis: (document, magnitudeMin, magnitudeMax, category, categoryScore) => {
            cy.get('#divResults').should('be.visible');
            cy.get('#divResults').within(() => {
                cy.contains('This document is:').should('be.visible');
                cy.contains('This document is:').within(() => {
                    cy.get('font').should('contain.text', document);
                    cy.get('font').then(($font) => {
                        const fontText = $font.text();
                        const match = fontText.match("/-?\d+(\.\d+)?/");
                        if (match) {
                            const fontValue = parseFloat(match[1]);
                            expect(fontValue).to.be.within(magnitudeMin, magnitudeMax);
                        }
                    });
                });
            });
        },
    
        verifyPrediction: (expectedPrediction) => {
            cy.get('#prediction').should('contain.text', expectedPrediction);
        },
    
        verifyErrorMessage: (errorMessage) => {
            cy.get('.alert-danger').should('contain.text', errorMessage);
        },
    
        verifyInferenceQuality: (quality) => {
            cy.contains('This document is:').should('be.visible');
            cy.contains('This document is:').within(() => {
                cy.get('font').should('contain.text', quality);
            });
        }
    }
}

module.exports = demo;