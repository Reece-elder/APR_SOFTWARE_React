'use strict';

// For Loop
// Does a command while the query is correct

for(let i = 0; i < 10; i++){
    console.log(i);
}

// While Loop
// While something is true, do thing

let notEnoughPizza = true;
let pizzaSlices = 0;

while(notEnoughPizza) {
    console.log(`There are only ${pizzaSlices} left :(`);
    pizzaSlices+=4;

    if (pizzaSlices > 20){
        notEnoughPizza = false;
    }
}