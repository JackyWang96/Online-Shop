describe('Directory and Categories', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/') // Visits the main page
    })

    it('should render the directory and categories correctly', () => {
        cy.get('.directory-container').should('exist')
        cy.get('.category-container').should('have.length', 5)
        cy.get('.category-container').each(($category) => {
            cy.wrap($category).find('h2').should('exist')
            cy.wrap($category).find('p').should('contain', 'Shop Now')
        })
    })

    it('should navigate to the correct category page when "Shop Now" is clicked', () => {
        // First, get all the category names
        cy.get('.category-container h2').then(($categories) => {
            const categoryNames = $categories.toArray().map(el => el.innerText.toLowerCase());

            // Then, for each category...
            categoryNames.forEach((categoryName, index) => {
                // Visit the home page
                cy.visit('http://localhost:3000/')

                // Click on the "Shop Now" button of the category
                cy.get('.category-container').eq(index).find('p').click()

                // Check the URL to make sure the page has navigated to the correct category.
                cy.url().should('include', `/shop/${categoryName}`)
            });
        });
    });
})



