

function NavBar ({pokemonList, pokemonIndex, setPokemonIndex}) {

    const handleClickPrevious = () => setPokemonIndex(pokemonIndex - 1);
    const handleClickNext = () => setPokemonIndex(pokemonIndex + 1);
  
    return (
      <div>
      {pokemonIndex > 0 ? <button onClick= {handleClickPrevious}> Previous </button> : undefined } 
      {pokemonIndex < pokemonList.length - 1 ? <button onClick= {handleClickNext}> Next </button> : undefined}
      </div>
    );
  }

  export default NavBar;