import {useState} from 'react';

import Child from "./Child";

const Counter = () => {

    // const [value, function to update value]
    const [count, setCount] = useState(0);

    // Create an addone function
    // Save it as a variable

    const addOne = () => {
        console.log('Increment function called');
        setCount((x) => x + 1)
        // setCount((x) => {
        //     return x + 1
        // });
    }

    const subOne = () => {
        console.log('Subtraction called');
        if (count < 1){
            console.log("Count minimum reached");
        } else{
            setCount((x) => x - 1);
        }
    }


  return (
    <>
      <h1> Counter </h1>
      <button onClick={addOne}> Add 1 </button>
      <button onClick={subOne}> Sub 1 </button>
      <Child count={count} />
      <h3> The current value of count is: {count}</h3>
    </>
  );
};

export default Counter;

// Store a value as state