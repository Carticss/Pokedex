import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import {getPokemonDetailsApi} from '../repository/PokedexRepo'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'

export default function Pokemon(props) {
    
    const { 
      navigation,
      route: { params } 
    } = props
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
      (async () => {
        try {
          const response = await getPokemonDetailsApi(params.id)
          setPokemon(response)
        } catch (e) {
          navigation.goBack();
        }
      })()
    }, [params])
    
    if (!pokemon) return null;

    return (
      <ScrollView>
        <Header 
          name={pokemon.name} 
          id={pokemon.id} 
          sprite={pokemon.sprites.other["official-artwork"].front_default} 
          type={pokemon.types[0].type.name}
        />
        <Type types={pokemon.types}/>
      </ScrollView>
    )
}