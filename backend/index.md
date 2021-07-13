# What to install

## Mocha - The testing framework, built to work with express and date request functions

*npm i mocha* 

describe() it()

describe("pizza routes test suite",() => {

    it("should delete a pizza", () => {

    })

})

## Chai - plugin for Mocha for use with web applications
enables expect testing and makes HTTP requests easier to use

*npm i chai-http*

chai.request(app).get(/getAll)

expect(response).to.equal("all data got")