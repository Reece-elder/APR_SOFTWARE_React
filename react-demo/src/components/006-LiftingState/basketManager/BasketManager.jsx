import { useState } from "react";

import Basket from "./Basket";
import Product from "./Product";

const BasketManager = () => {

    const [basket, setBasket] = useState([]);

    const addToBasket = (item) => {
        setBasket((basket) => [...basket, item])
    }

    const logBasket = () => {
        console.log(basket);
    }

    return ( 
        <div>
            <h2> Basket manager </h2>
            <Product addToBasket={addToBasket} logBasket={logBasket}/>
            <Basket info={basket}/>
        </div>
     );
}
 
export default BasketManager;