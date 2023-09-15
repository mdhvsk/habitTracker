import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/login_reg/CustomInput";
import CustomButton from "../../components/login_reg/CustomButton";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [code, setCode] = useState("")
    const navigation = useNavigation();

    const onSend = () => {
        console.log("Login")
        navigation.navigate('Reset Password')
    };

    const onBackToLogin = () => {
        navigation.navigate('Login')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password.</Text>
            <CustomInput
                placeholder={"Email"}
                value={email}
                setValue={setEmail}
            />
            <CustomButton
                onPress={onSend}
                text="Send"
            />
            <CustomButton
                onPress={onBackToLogin}
                text="Back to Login"
                type="TERTIARY"
            />


        </View>
    )
}

export default ForgotPasswordScreen

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