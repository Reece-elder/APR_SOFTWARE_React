import { useState, useEffect } from "react";
import axios from 'axios';

import Beer from "./Beer";

const Bar = () => {

    // Data being pulled from API
    const [beerList, setBeerList] = useState([]);

    // Error state
    const [error, setError] = useState(null);

    // Check if Loaded state
    const [loaded, setLoaded] = useState(false)

    // Load time for setLoaded function
    const loadTime = 3000;

    // Use Effect Hook

    // axios.*request type*(url)
    useEffect(() => {
        getData();
    },);


    const getData = () => {
        setTimeout(() => {
            axios.get('https://api.punkapi.com/v2/beers')
            .then((response) => {
                // Setting loaded state to true because data is loaded
                setLoaded(true);
    
                // Set beerList to response to populate array
                setBeerList(response.data)
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
        }, loadTime);
    }

    const beerBody = {
        name: "beer123",
        image_url: "www.randomimage.com",
        abv: 98,
        food_pairing : {
            0: "apple",
            1: "crisps",
            2: "eggplant"
        }
    };

    const postData = (id) => {
        axios.post(`https://api.punkapi.com/v2/beers/${id}`,beerBody, {
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
            setError(error)
        });
    }

    // Name, image url, abv and food pairing 

    if (error) {
        return <p> Oops, something has gone wrong! {error.message} </p>
    } else if (!loaded) {
        return <p> Please wait, we are loading your data :)</p>
    } else {
        return (
            <div>
                {beerList.map((beer) => (
                    <Beer key={beer.id} name={beer.name} image={beer.image_url} abv={beer.abv} foodPairing={beer.food_pairing}/>
                ))}
            </div>
        )
    }

}
 
export default Bar;