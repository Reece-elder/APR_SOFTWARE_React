import Form from "./Form";
import Display from "./Display";
import { useState } from "react";

const Manager = () => {

    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

    // Handles the text query
    const handleText = (e) => {
        setText(e.target.value)
    }

    // Handle the submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setDisplayText(text);
        setText("");
    }

    // Showing the function has been passed
    const funcTest = () => 'This has been called';

    return ( 
        <div>
            <h3> Manager </h3>
            <Form textProp={text} submitProp={handleSubmit} updateText={handleText} funcProp={funcTest}/>
            <Display text={displayText}/>
        </div>
     );
}
 
export default Manager;