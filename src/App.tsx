import React, { useState } from 'react';

interface pokedexProps {

}

const pokemonsArray: string[] = ["Pikachu", "Ditto", "Metapoid", "Magicarp"]

const pokedex: React.FC<pokedexProps> = () => {

  const [pokemons, setPokemons] = useState<string[]>(pokemonsArray);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>('undefined');

  return (
    <div>
      <h1>Pokedex</h1>

      Pokemons:
      {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon}</button>)}

      <h2>Pokemon Selecionado: {selectedPokemon ? selectedPokemon : "Nenhum Pokemon selecionado"} </h2>
    </div>
  );

}

export default pokedex;
