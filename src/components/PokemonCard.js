import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

import React from 'react'

export default function PokemonCard(props) {
    
    const { pokemon } = props;

    const goToPokemon = () => {
        console.log(pokemon)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Text style={styles.id}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
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
        backgroundColor: "grey"
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
        bottom: -20,
        right: 2,
        width: 90,
        height: 90
    }
})