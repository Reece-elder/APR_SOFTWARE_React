import {useParams} from 'react-router-dom';

const Product = () => {

    const {id} = useParams();

    return ( 
        <div>
            <h3> Product id: {id} </h3>
        </div>
     );
}
 
export default Product;