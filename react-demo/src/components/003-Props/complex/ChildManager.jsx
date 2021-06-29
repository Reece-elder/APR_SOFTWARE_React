import Child from "./Child";
import Penguin from './Penguin';
import PenguinData from './PenguinData';

const ChildManager = (props) => {

  // Deconstruction
  const {numProp, arrayProp, penguinProp, penguinListProp} = props;

  console.log(arrayProp);

  return (
    <>
      <h4> Child Manager with number {numProp} </h4>
      {/* <h4> Child Manager with number {props.numProp} </h4> */}
      {/* <h5> The list is {arrayProp}</h5> */}

      <h5> The penguins name is {penguinProp.name}</h5>
      <h5> The penguin has flippers {penguinProp.flippers.toString()}</h5>
      <h5> The penguins age is {penguinProp.age}</h5>

      {arrayProp.map((colour, i) => (
        <Child key={i} colour={colour}/>
      ))};

      {/* {penguinListProp.map((penguin, p) => (
        <Penguin key={p} name={penguin.name} isCute={penguin.isCute} age={penguin.age}/>
      ))}; */}

{penguinListProp.map((penguin) => (
        <PenguinData data={penguin}/>
      ))};

    </>
  );
};

export default ChildManager;
