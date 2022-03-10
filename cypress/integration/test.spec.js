/// <reference types='cypress' />

it('Test Carousel Slider', () => {
    const data = 'Nicole Kong'
    cy.visit('/#about')
    cy.get('.team-carousel').should('be.visible').scrollIntoView()
    function scrollCarousel(data) {
        cy.contains('.team-carousel .owl-item', data).then(e => {
            if (Cypress.dom.isVisible(e))
                cy.log('Found!')
            else {
                cy.get('.team-carousel .owl-next').click()
                scrollCarousel(data)
            }
        })
    }
    scrollCarousel(data)
})