import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../repository/PokedexRepo';
import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi( nextUrl );
      setNextUrl(response.next);
      
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          sprite: pokemonDetails.sprites.front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (e) {
      console.error(e);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        isMore={nextUrl}
      />
    </SafeAreaView>
  )
}