import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    
    const { pokemons } = props

    const loadMore = () => {
        console.log("Cargar Mas");
    }

    return (
        <FlatList 
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            
        />
    )
}


const styles = StyleSheet.create({
    flatListContentContainer : {
        paddingHorizontal: 5
    }
})