const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Pizza } = require('../database');
chai.use(chaiHttp); // associate the module with chai!

// App = server.js file
const app = require('../index')

describe(`Hello route`, () => {

    it(`Should return hi when /hello is accessed`, (done) => {

        // ? Arrange
        // Telling chai to use the server index.js
        chai.request(app)

        // ? Act
        // Get request with /hello
        .get("/hello")

        // Asynchronous function (with.end)
        .end((error, response) => {
            
            // if error is true end the function and log out error
            if (error) {
                console.log(`Something went wrong!`);
                done(error);
            }

            // ? Assert
            // What do we expect the response to be?
            expect(response).to.have.status(200);
            expect(response).to.not.be.null;
            expect(response).to.have.property('text','hi');
            done();
        });
    });

});

describe(`Pizza Routes`, () => {

    const createPizza = new Pizza({
        customer: 'create_test_name',
        flavour: 'create_test_flavour',
        price: 123,
        type: 'create_test_type'
    });

    const testPizza = new Pizza({
        customer: 'test_name',
        flavour: 'test_flavour',
        price: 123,
        type: 'test_type'
    });

    before((done) => {

        chai.request(app).post("/create").send(testPizza).end(() => {
            done();
        });

    })

    it(`should respond with customer name has been added when /create is accessed` , (done) => {

        //* Arrange
        const testCustomer = "test_name";
        chai.request(app)

        //* Act 
        .post("/create")

        // .send is the request body
        .send(createPizza)

        // testing the asynchronous functionality
        .end((err, res) => {
            if(err) {
                done(err);
            }
            
            //* Assert 
            expect(err).to.be.null;
            expect(res).to.not.be.undefined;
            expect(res).to.have.status(201);
            expect(res).to.have.property('text', `${createPizza.customer} has been added successfully!` );
            done();
        });
    });

    it('Should get all data when /getAll is accessed', (done) => {

        // Act
        chai.request(app)

        // Arrange
        .get("/getAll")

        .end((err, res) => {
            if(err) {
                done(error);
            };

            // Assert
            // Body is equal to entire response 
            const body = res.body;
            expect(res).to.have.status(200);
            expect(body).to.not.be.null;
            // expect(body.len()).to.equal.to(6)

            // Map out every object within body response

            body.map((pizza) => {
                // Is the object an object?
                expect(pizza).to.be.a("object");

                // Does each pizza contain the key customer? 
                expect(pizza).to.contain.keys("customer");

                // Is the customer key a string? 
                expect(pizza.customer).to.be.a("string");
            });

            done();
        });
    });

    it(`should delete the item and print out customer deleted succesfully`, (done) => {
        
        // Arrange
        chai.request(app)

        // Act
        .delete(`/delete/${testPizza.customer}`)

        .end((err, res) => {
            if(err) done(err);

            // Assert
            expect(err).to.be.null;
            expect(res).to.not.be.undefined;
            expect(res).to.have.status(202);
            expect(res).to.have.property('text',`${testPizza.customer} order Successfully deleted`);
            done();
        });
    });
});