import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash'
import React from 'react'

export default function Stats(props) {

    const { stats } = props;

    const barStats = (num) => {
        const color2 = num > 59 ? "#00ac17" : "#ffd500"
        const color = num > 29 ? color2 : "#ff3e3e"
        return {
            backgroundColor: color,
            width: `${num}%`,
        }
    }

    return (
        <View style={style.content}>
            <Text style={style.title}>Base Stats</Text>
            {map( stats, (item, index) => (
                <View key={index} style={style.block}>
                    <View style={style.blockTitle}>
                        <Text style={style.statName}>{capitalize(item.stat.name)}</Text>
                    </View>
                    <View style={style.blockInfo}>
                        <Text style={style.number}>
                            {item.base_stat}
                        </Text>
                        <View style={style.bgBAR}>
                            <View style={[style.bar, barStats(item.base_stat)]}/>
                        </View>    
                    </View>
                </View>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 60
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blockTitle: {
        width: "32%",
    },
    statName: {
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: 'center'
    },
    number: {
        width: "12%",
        fontSize: 12
    },
    bgBAR: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden"
    },
    bar: {
        height: 5,
        borderRadius: 20
    }
})