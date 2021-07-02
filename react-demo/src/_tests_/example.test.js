// describe and it 
// Creating test packages 

// Describe will be your group of tests 
// describe(`Form control of add ticket`, () => {

    // Where you put the tests 

    // 'It' is the function you call to create tests
    // it(`Will render an input with type of text`, () => {

            // Where you do your actual tests
    //})

//})

describe(`My example test suite`, () => {

    // Parent level variables
    let a;
    let b;

    it(`Is just testing where a is true` , () => {
        // Creating a test to test whether a is true

        //  Arrange - getting prerequisites
        let x;

        //  Act - what are you doing?
        x = true;

        //  Assert - Testing/observing if you are corrent or not
        expect(x).toBe(true);
    })

    test(`Either test or it can be used`, () => {
        // Act + Arrange
        b = `Some String`;

        // Assert
        expect(b).toContain(`me`);
        // expect(b).toBe(`me`); -> This will fail
    });

    it(`Tobe is looking for an exact match`, () => {
        // to be test that will take in 2 numbers and show they match#
        // Act + Arrange
        a = 5;
        b = 7;

        // Assert
        expect(a+b).toBe(12);
    });

    //toEqual - checks recursively every field in an object or array
    it(`will create an object with the value cheese = false`, () => {
        const sandwich = {ham: true};
        sandwich['cheese'] = false;
        expect(sandwich).toEqual({ham:true, cheese:false});
        // expect(sandwich).toContain({cheese:false}); --> Doesnt work
    });

    // not - negation of matcher
    it(`Adding positive numbers is not zero`, () => {
        for(let a=1; a<10; a++){
            for (let b=0; b<10; b++){
                expect(a+b).not.toBe(0);
            }
        }
    })

    // toMatch - checking if a string matches another 
    it(`There is no i in team`, () => {
        const string = "team";

        expect(string).not.toMatch(/i/); // --> Works better for Strings
        // expect(string).not.toContain("i"); --> Works better for arrays
    });

    const shoppingList =["apples", "chocolate", "coffee", "fruits", "wine", "cheese"];

    it(`Is there coffee in my list?`, () => {
        expect(shoppingList).toContain("coffee");
    })

    
})