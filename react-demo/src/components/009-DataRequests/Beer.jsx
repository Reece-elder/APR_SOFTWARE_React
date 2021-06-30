const Beer = (props) => {

    const{name, image, abv, foodPairing} = props; 

    return ( 
        <div>
            <h3> Beer name : {name}</h3>
            <img src={image} width={200} alt={name}/>
            <h4> Beer abv : {abv}</h4>
            {foodPairing.map((x) => (
                <p> Food Pairing: {x}</p>
            ))}
        </div>
     );
}
 
export default Beer;