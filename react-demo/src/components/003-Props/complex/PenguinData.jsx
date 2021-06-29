const PenguinData = ({data}) => {
    return ( 
    <div>
        <h3> Penguins name is {data.name} </h3>
        <h3> Is penguin cute? {data.isCute.toString()} </h3>
        <h3> Penguins age is {data.age} </h3>
        <br/>
    </div>
     );
}
 
export default PenguinData;