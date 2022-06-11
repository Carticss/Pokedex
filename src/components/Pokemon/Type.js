import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'
import getColorByPokemonType from '../../utils/Constants'

export default function Type(props) {
    
    const { types } = props

    return (
        <View style={style.content}>
            {map(types, (item, index) => (
                <View key={index} style={ {...style.pill, backgroundColor: getColorByPokemonType(item.type.name) } }>
                    <Text style={style.type}>
                        {capitalize(item.type.name)}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    type : {
        color: "white"
    }
})