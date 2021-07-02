import Beer from './Beer'

const Bar = () => {

    const name = 'Buzz';
    const image = 'https://images.punkapi.com/v2/keg.png'
    const abv = 4.5;
    const foodPairing = ["food pairing 1", "food pairing 2"];

    return ( 
        <Beer name={name} image={image} abv={abv} foodPairing={foodPairing}/>
     );
}
 
export default Bar;