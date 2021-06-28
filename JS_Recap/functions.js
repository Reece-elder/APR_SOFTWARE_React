'use strict';

// basic usage of function

function add(x, y){
    return x + y;
}

add(7,8);

// Basic Function expression

let subFun = function(x, y) {
    return x - y
};

subFun;

// Arrow Functions
// Short hand method of writing functions

let helloFunc = function(){
    return 'HelloWorld'
}

let helloArrow = () => {
    return 'HelloWorld'
}

let helloArrowSimpler = () => 'HelloNewWorld'

let helloArrowSuperSimpler = (name) => `Hello ${name}` 
let helloArrowSuperSimpler = name => `Hello ${name}` 



