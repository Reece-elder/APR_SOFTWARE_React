import { useState, useEffect } from "react";

const HelloWorld = () => {

    // state for name
    const [name, setName] = useState("");
    const [finalName, setFinalName] = useState("");

    // Use Effect to console log out the name

    useEffect(() => {
        console.log(finalName);
    },[finalName])

    // A form to update name

    // A button to submit changes

    // Function to set final name to be name

    const submitName = () => {
        setFinalName(name);
        setName("");
    }

    return ( 
        <div>
            <h3> Hello World! </h3>
            <form>
                <label> Name: </label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                <button type="button" onClick={submitName}> Print out name </button> 
            </form>
        </div>
     );
}
 
export default HelloWorld
