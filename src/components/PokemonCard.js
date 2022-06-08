import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { capitalize } from 'lodash'
import getColorByPokemonType from '../utils/Constants'

import React from 'react'

export default function PokemonCard(props) {
    
    const { pokemon } = props;
    
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }

    const goToPokemon = () => {
        console.log(pokemon)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.id}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{uri: pokemon.sprite}} style={styles.image}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    id: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    image: {
        position: "absolute",
        bottom: -10,
        right: 10,
        width: 90,
        height: 90
    }
})