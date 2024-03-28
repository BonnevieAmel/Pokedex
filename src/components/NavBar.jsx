
 const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex}) => {
    
    return (
      <div>
          {pokemonList.map((pokemon, index) => (

            <button key={pokemon.name + index} onClick={() => setPokemonIndex(index)}>
                {pokemon.name}
              </button>
          ))}
      </div>
  
    );
  
  };
  
  export default NavBar;
