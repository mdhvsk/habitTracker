import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {},

            ]}>
            <Text
                style={[styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
                ]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: 'blue',
    },
    container_SECONDARY: {
        borderColor: 'blue',
        borderWidth: 2
    },
    container_TERTIARY: {
        marginBottom: 20
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY: {
        color: 'white'
    },
    text_TERTIARY: {
        color: 'grey'
    }
})