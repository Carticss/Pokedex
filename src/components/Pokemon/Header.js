import { StyleSheet, View, Text, Image } from 'react-native'
import { capitalize } from 'lodash'
import { SafeAreaView } from 'react-native-safe-area-context';
import getColorByPokemonType from '../../utils/Constants'
import React from 'react'

export default function Header(props) {

    const { id, name, sprite, type } = props;
    const color = getColorByPokemonType(type)
    
    const bgStyle = [{ backgroundColor: color, ...styles.bg }]

    return (
        <>
                <View style={bgStyle}/>
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.id}>#{`${id}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: sprite }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 27
    },
    id: {
        color: "white",
        fontWeight: "bold"
    },
    contentImg: {
        justifyContent: "center",
        alignItems: "center",
        top: 30
    }, 
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    },
})