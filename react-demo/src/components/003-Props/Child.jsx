
// Pass in the data in the function
const Child = ({type, size, stuffedCrust}) => {

  return (
    <div>
        <h2> The pizza type is {type} </h2>
        <h3> The pizza size is {size} </h3>
        <h3> The pizza has stuffed crust? {stuffedCrust.toString()}</h3>
    </div>
  );
};

export default Child;