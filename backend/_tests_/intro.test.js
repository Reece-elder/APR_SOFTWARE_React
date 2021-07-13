// Basic tests
// Following the Arrange, Act, Assert policy

// * Arrange - Arranging and grabbing dependencies
// * Act - What is the test testing
// * Assert - checking what has happened did actually happen

const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); // associate the module with chai!

describe(`Testing process`, () => {

    // Hooks - Allow you to setup and clean up your tests

    // before - runs once before ALL tests
    // after - runs once after ALL tests
    // beforeEach - runs before EACH TEST
    // aftereach - runs after EACH TEST

    // before(function(){

    // })

    let sum = 0;

    before(() => {
        sum = 1;
    })

    it(`Returns 2 when 1 + 1`, () => {

        // Arrange
        // sum = 1;

        // Act
        sum += 1;

        // Assert
        expect(sum).to.equal(2);
    });

    it.skip(`Should skip this test because it is incorrect`, () => {
        // Arrange
        // let sum = 2;

        // Act
        sum += 2;

        // Assert
        expect(sum).to.equal(5);
    });

});