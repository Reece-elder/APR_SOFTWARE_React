'use strict';

// JS has few restrictions = lots of silent errors
// Important to format correctly (or consistently) to prevent confusion and human mistakes

// Example - an add function

// ! Bad Code

let x = 5;
let y = 7;
let value;

value = x + y;
console.log(value);

// * better code

const add = (x,y) => {
    let value = x + y;
    console.log(value);
}

add(5,7);

// * Function formatting

// Within scripts break up code into three(ish) sections: 
// ? Fetching components / Grabbing creating variables
// ? Manipulate the data - Methods 
// ? Initialisations / Event listeners

// * Keep code modular! 

// Any methods being run multiple time, save them as a variable/function you can call back at any time