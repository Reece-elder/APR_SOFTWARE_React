import Beer from "../components/011-testing/components/Beer";

import {create} from 'react-test-renderer'

describe(`Beer component testing with props`, () => {

    // Variable for the props to pass into beer
    const beerData = {
        name: 'test_name',
        image: 'test_url',
        abv: 123,
        foodPairing: ['food_pairing1', 'food_pairing2']
    };

    // Create a variable called testComponent
    let testComponent;

    // before each test create a new component and assign to test component
    beforeEach(() => {
        const TestInstance = create(<Beer {...beerData}/>);
        testComponent = TestInstance.root;
    });

    it(`a should be equal to 5`, () => {
        const a = 5;
        expect(a).toBe(5);
    });

    it(`Should render a h3 which contains the name of the beer`, () => {
        // Arrange + Act
        // Create h3 variable, it is equal to the first h3 in our testComponent
        const h3 = testComponent.findByType('h3');

        // Assert
        // Expecting to recieve an [array] so to equal must be an array
        expect(h3.children).toEqual([beerData.name]);
    });

    it(`Should render the FIRST p which should contain the abv`, () => {
        const firstP = testComponent.findAllByType('p')[0];
        expect(firstP.children[1]).toContain([beerData.abv]);
    });

    it(`Should render a h4 which contains the string 'Good food pairings..`, () => {
        const h4 = testComponent.findByType('h4');
        expect(h4.children.toString()).toMatch('Good food pairings');
    })

});

describe(`Snapshot testing`,()=> {

        // Variable for the props to pass into beer
        const beerData = {
            name: 'test_name',
            image: 'test_url',
            abv: 123,
            foodPairing: ['food_pairing1', 'food_pairing2']
        };
    
        // Create a variable called testComponent
        let testComponent;
    
        // before each test create a new component and assign to test component
        beforeEach(() => {
            const TestInstance = create(<Beer {...beerData}/>);
            testComponent = TestInstance.root;
        });

        // Snapshot test - Takes a snapshot of the code (in JSON), checks the current code against the snapshot
        // If match - Test passes
        // If not match.. test fails. 

        it(`Should match the snapshot`, () => {
            const element = create(<Beer {...beerData}/>).toJSON();
            expect(element).toMatchSnapshot();
        })

        it(`a = 5`, () => {
            const a = 5;
            expect(a).toBe(5);
        })
    

})