/// <reference types='cypress' />

it('Test Carousel Slider', () => {
    const data = 'Wong Kee Vin'
    cy.visit('/#about')
    cy.get('.team-carousel').should('be.visible').scrollIntoView()
    cy.get('div.team-carousel div.owl-item').as('lstItems')
    .should('have.length.greaterThan', 0)
    scrollCarousel(data)
})

function scrollCarousel(data) {
    cy.get('@lstItems').contains(data)
    .then(e => {
        if (!Cypress.dom.isVisible(e)) {
            cy.get('.team-carousel .owl-next').click()
            return scrollCarousel(data)
        }
        cy.log('Found!')
    })
}