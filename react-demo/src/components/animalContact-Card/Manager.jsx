// import { useState } from "react";
// import AnimalList from "./AnimalList";

// const Manager = () => {


//     const [type, setType] = useState('blank');
//     const [name, setName] = useState('blank');
//     const [image, setImage] = useState('blank');
//     const [diet, setDiet] = useState(["blank", "blank"]);
//     const [cute, setCute] = useState(true);

//     const handleSubmit = (e) => {

//         console.log(e.target.value);
//         e.preventDefault();
        
//         clearData();

//         const element1 = document.querySelector('#diet1');
//         element1.value = "";
//         const element2 = document.querySelector('#diet2');
//         element2.value = "";
//         const element3 = document.querySelector('#diet3');
//         element3.value = "";
//     }

//     const clearData = () => {
//         setType("");
//         setName("");
//         setImage("");
//         setDiet([]);
//         setCute(true);
//     }

//     return ( 
//         <div>
//             <AnimalList/>
//             <form >
//                 <label> Type: </label>
//                 <input type="text" value={type} onChange={(e) => setType(e.target.value)}></input>

//                 <label> Name: </label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

//                 <label> Image: </label>
//                 <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>

//                 <label> Diet 1: </label>
//                 <input id="diet1" type="text" onBlur={(e) => setDiet(f => [...f, e.target.value])}></input>

//                 <label> Diet 2: </label>
//                 <input id="diet2" type="text"  onBlur={(e) => setDiet(f => [...f, e.target.value])}></input>

//                 <label> Diet 3: </label>
//                 <input id="diet3" type="text"  onBlur={(e) => setDiet(f => [...f, e.target.value])}></input>

//                 <label> Is Cute: </label>
//                 <input type="text" value={cute} onChange={(e) => setCute(e.target.value)}></input>

//                 <button type="submit" onClick={handleSubmit}> Submit! </button>

//             </form>
//             <AnimalList data={createData}/>
//         </div>
//      );
// }
 
// export default Manager;