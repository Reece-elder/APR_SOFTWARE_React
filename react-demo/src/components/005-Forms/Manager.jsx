import { useState } from 'react';
import Child from './Child'

const Manager = () => {

    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        // Preventing the page from refreshing
        e.preventDefault();

        // Taking the state you've created
        // Stringify and format
        // Post to database
        // const dataToSend = JSON.stringify({username});
        // console.log("data has been sent");

        // Setting the username back to ''
        setUsername('');
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" id="username" name="username" value={username} onChange={(event) => {
                    return setUsername(event.target.value);
                }}/>
                <button type="submit" onClick={handleSubmit}> Submit </button>
            </form>
            <h2> Username = {username} </h2>
            <Child username={username}/>
        </div>
     );
}
 
export default Manager;