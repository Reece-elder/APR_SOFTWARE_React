// State to store the time (because state can change) 
// Use effect will be used to re render the time

import { useState, useEffect } from "react";

const Clock = () => {

    // When component is initialised it sets time = current time
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [zip, setZip] = useState("");

    // Use effect runs at every render AND the beginning of web application 
    // Adding a [state] at the bottom forces useEffect to re render whenever this state changes

    useEffect(() => {
        setTimeout(tick,1000)
    },[time]);

    // Function that sets time to be current time 
    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    return ( 
        <div>
            <h3> Clock: {time} </h3>
        </div>
     );
}
 
export default Clock;