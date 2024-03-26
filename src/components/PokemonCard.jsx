const PokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard () {
 return (
      <figure>
        {Pokemon.imgSrc === undefined ? <><p>"???"</p><figcaption>{Pokemon.name}</figcaption></> : <><img src= {Pokemon.imgSrc}/><figcaption>{Pokemon.name}</figcaption></>}
        </figure>
 )
 }
let Pokemon = PokemonList[0]

export default PokemonCard;

