describe('DuckDuckGo API Request Tests', () => {
    it('Get DuckDuckGo Response Should be 200 and Return Image Url', () => {
        cy.request(
            'GET',
            `${Cypress.env('apiUrl')}`
        ).then((response) => {
            expect(response.status).to.eq(200)

            const responseBody = JSON.parse(response.body)
            const results = responseBody.Results

            if (results.length > 0) {
                const iconUrl = results[55].Icon.URL
                cy.log(iconUrl)
            } else {
                cy.log('No Icon URL Found')
            }
        })
    })
})
