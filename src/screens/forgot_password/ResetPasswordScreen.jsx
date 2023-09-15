import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/login_reg/CustomInput";
import CustomButton from "../../components/login_reg/CustomButton";

const ResetPasswordScreen = () => {
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("")
    const navigation = useNavigation();

    const onReset = () => {
        console.log("Login")
        navigation.navigate('Login')
    };

    const onBackToLogin = () => {
        navigation.navigate('Login')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password.</Text>
            <CustomInput
                placeholder={"Enter your Confirmation Code"}
                value={code}
                setValue={setCode}
            />
            <CustomInput
                placeholder={"Enter your password"}
                value={password}
                setValue={setPassword}
            />

            <CustomButton
                onPress={onReset}
                text="Reset"
            />
            <CustomButton
                onPress={onBackToLogin}
                text="Back to Login"
                type="TERTIARY"
            />


        </View>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'black',
        color: 'white',
        flex: 1


    },
    title: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: '800',
        color: 'white'
    },
    input: {
        marginBottom: 16,
    },
    text: {
        color: 'grey',
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'center'
    }
});