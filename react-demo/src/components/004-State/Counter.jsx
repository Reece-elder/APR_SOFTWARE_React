import {useState} from 'react';

import Child from "./Child";

const Counter = () => {

    // const [value, function to update value]
    const [count, setCount] = useState(7);

    // logs out the value of count
    console.log(count);

    // logs out the setCount() function
    console.log(setCount);

    // setCount(4);
    // console.log(`Count is equal to ${count}`);

  return (
    <>
      <h1> Counter </h1>
      <Child count={count} />
      <h3> The current value of count is: {count}</h3>
    </>
  );
};

export default Counter;

// Store a value as state