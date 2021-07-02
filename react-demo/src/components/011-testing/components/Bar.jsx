import Beer from './Beer'

const Bar = () => {

    const name = 'Buzz';
    const image = 'https://images.punkapi.com/v2/keg.png'
    const abv = 4.5;
    const foodPairing = ["food pairing 1", "food pairing 2"];

    return (
        <>
        <h2>This should break it (hopefully)</h2>
            <Beer name={name} image={image} abv={abv} foodPairing={foodPairing}/>
        </> 
        
     );
}
 
export default Bar;