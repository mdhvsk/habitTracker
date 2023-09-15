import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const CaptureButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}> Capture </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 100,
        height: 100,
        borderColor: 'black',
        borderWidth: 2,
        opacity: 0.7

    },

    text: {
        display: 'flex',
        paddingTop: 25,
        textAlign: 'center',
        justifyContent: 'space-evenly'
    }
})
export default CaptureButton