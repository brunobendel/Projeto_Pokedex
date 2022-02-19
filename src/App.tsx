import React, { useState } from 'react';

interface pokedexProps {

}

const pokedex: React.FC = () => {

  const [pokemons, setPokemons] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>('PIKACHU');

  return (
    <div>
      <h1>Pokedex</h1>

      <h2>Pokemon Selecionado: {selectedPokemon} </h2>
    </div>
  );

}

export default pokedex;
