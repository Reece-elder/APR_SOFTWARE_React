const Beer = (props) => {
    const{name, image, abv, foodPairing} = props;

    return ( 
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} width={70}></img>
            <p>Alcohol content of beer is {abv}</p>
            <h4> Good food pairings with this are: </h4>
            {foodPairing.map((food) => (
                <p>{food}</p>
            ))}
        </div>
     );
}
 
export default Beer;