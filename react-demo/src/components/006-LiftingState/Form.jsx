const Form = (props) => {

    const {textProp, submitProp, updateText, funcProp} = props;

    return ( 
        <div>
            <h4> Form </h4>
            <form onSubmit={submitProp}>
                <label> Text to display: </label>
                <input type="text" value={textProp} onChange={updateText} name="displayText"/>
                <button type="submit" onClick={submitProp}> Submit! </button>
            </form>
        </div>
     );
}
 
export default Form;