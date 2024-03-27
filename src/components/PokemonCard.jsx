

function PokemonCard({ pokemon }) {
 return (
      <figure>
        {pokemon.imgSrc === undefined ? <>
        <p>"???"</p>
        <figcaption>{pokemon.name}</figcaption></> 
        : 
        <>
        <img src= {pokemon.imgSrc}/><figcaption>{pokemon.name}</figcaption></>}
        </figure>
 )
 }


export default PokemonCard



