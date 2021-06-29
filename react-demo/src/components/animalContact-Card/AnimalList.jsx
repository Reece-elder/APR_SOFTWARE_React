import ContactCard from "./ContactCard";

const AnimalList = ({data}) => {
    console.log(data);
    return ( 
        <div>
            <h3> Animal list </h3>
            <h3>{data.type}</h3>
            <h3>{data.name}</h3>
            <h3>{data.image}</h3>
            <>
            {data.diet.map((diet) => (
                <h3>{diet}</h3>
            ))}
            </>

            <h3>{data.type}</h3>
            <h3>{data.cute.toString()}</h3>
            {/* <ContactCard/> */}
        </div>
     );
}
 
export default AnimalList;