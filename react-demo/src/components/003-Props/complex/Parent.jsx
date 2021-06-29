import ChildManager from "./ChildManager";

// Simple React Snippet - sfc
const Parent = () => {

    // Number variable
    const numVal = 30;

    // Array Variable 
    // Render a new component for every colour in the list
    const colourList = ["red", "Pink", "Purple", "blue", "Black", "Turquoise", "White", "Sage"];


    // Object Variable
    const penguinVal = {
        name: "Tony",
        flippers: true,
        age: 7
    }


    const penguinList = [
        {
            name: "Pingu",
            isCute: false,
            age:3,
        },        
        {
            name: "Bob",
            isCute: false,
            age:12
        },
        {
            name: "Flipper",
            isCute: true,
            age:7
        },
        {
            name: "Bruce",
            isCute: true,
            age:9
        },
        {
            name: "Skipper",
            isCute: false,
            age:78
        },
    ]



    console.log(numVal);
    console.log(colourList);

  return (
    <>
      <h3> Parent </h3>
      <ChildManager 
      numProp={numVal} 
      arrayProp={colourList}
      penguinProp={penguinVal}
      penguinListProp={penguinList}/>
    </>
  );
};

export default Parent;
