
// Functional Component called HelloWorld
const HelloWorld = () => {

    // Variables at the top
    let name = "Reece";
    let colour = "Purple";
    let hobby = "Kite flying";
    let date = new Date();
    //let templateLit = `This is a literal with variable ${name}`

    // What does the function return
    return (
        // The HTML/data being returned as HTML + JS
        // Use {} to add JS variables/functions to HTML
        <div>
            <h2> Hello everyone, this is my profile </h2>
            <h4> My name is {name} </h4>
            <p> My favourite colour is {colour} </p>
            <p> My favourite hobby is {hobby} </p>
            <p> The current date is {date.toLocaleDateString()} </p>
            <p> The current time is {date.toLocaleTimeString()} </p>
        </div>
    )

}

// Exports the component
export default HelloWorld;

