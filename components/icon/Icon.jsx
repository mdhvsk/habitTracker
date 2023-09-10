import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

const Icon = (props) => {

    return (
        <TouchableOpacity>
            <Image
                source={require("../../assets/calendar.png")}
                style={styles.icon}
            />
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    icon: {
        tintColor: 'white',
        width: 30,
        height: 30,
    }

})

export default Icon