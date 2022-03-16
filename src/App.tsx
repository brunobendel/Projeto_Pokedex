import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PokedexProps {

}

interface PokemonlListInterface {
  name: string
  national_number: number
}


export const Pokedex: React.FC<PokedexProps> = () => {

  const [pokemons, setPokemons] = useState<PokemonlListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonlListInterface | undefined>(undefined);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<any | undefined>(undefined);


  useEffect(() => {
    axios.get('https://unpkg.com/pokemons@1.1.0/pokemons.json').then((response) => setPokemons(response.data.results))

  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    axios.get(`https://unpkg.com/pokemons@1.1.0/pokemons.json`).then((response) => {
      console.log(response.data)
      setSelectedPokemonDetails(response.data.results[0])
    }
    )

  }, [selectedPokemon])

  return (
    <div>
      <h1>Pokedex</h1>

      Pokemons:
      {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

      <h2>Pokemon Selecionado: {selectedPokemon?.name || "Nenhum Pokemon selecionado"} </h2>

      {JSON.stringify(selectedPokemonDetails, undefined, 2)}


    </div>
  );

}

export default Pokedex;
