import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from '../icon/Icon'

const BottomNav = () => {
    return (
        <View style={styles.container}>
            <Icon url="../../assets/calendar.png" />
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({

    container: {
        color: 'white',
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'black',
        opacity: 0.8,
        padding: 10
    }


})