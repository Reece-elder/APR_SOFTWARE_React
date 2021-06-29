const Penguin = ({name, isCute, age}) => {
    return ( 
        <div>
            <h3> Penguins name is {name} </h3>
            <h3> Is penguin cute? {isCute.toString()} </h3>
            <h3> Penguins age is {age} </h3>
        </div>
     );
}
 
export default Penguin ;