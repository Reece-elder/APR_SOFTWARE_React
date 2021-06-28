import Child from "./Child";

const Parent = () => {

    // Functions that take in 'props' 

    const addFunc = (x,y) => {
        return x + y;
    }

    // Call a function and pass in 'props' it creates the object with data
    addFunc(5,6);

    // With images 'src' can be considred a prop
    return (
        // <div>
        //     <h3> This is where you put the data </h3>
        //     <img src="https://picsum.photos/500/300?random=1" width={500} alt=""/>
        // </div>
        <div>
            <Child type="Pepperoni" size={12} stuffedCrust={true}/>
            <Child size={19} type="Chicago Deep Dish" stuffedCrust={false}/>
        </div>
    )
}

export default Parent;