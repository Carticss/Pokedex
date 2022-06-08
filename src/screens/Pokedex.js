import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi } from '../repository/PokedexRepo';
import React, { useState, useEffect } from 'react';

export default function Pokedex() {
  
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}