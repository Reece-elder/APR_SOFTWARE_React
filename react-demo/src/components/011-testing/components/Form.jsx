import { useState } from "react";

const Form = () => {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> username: </label>
                <input id="username" type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <button id="submitButton" type="submit" onClick={handleSubmit}> Submit Button </button>
            </form>
            <h3> The username is: {username} </h3>
        </div>
    )

}

export default Form;