import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from '../icon/Icon'
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={require("../../assets/calendar.png")}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require("../../assets/home.png")}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require("../../assets/history.png")}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 75,
        backgroundColor: 'black',
        opacity: 0.8,
        padding: 10
    },
    icon: {
        tintColor: 'white',
        width: 40,
        height: 40,

    }


})