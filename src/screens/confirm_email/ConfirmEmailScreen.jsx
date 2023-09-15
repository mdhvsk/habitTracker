import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/login_reg/CustomInput";
import CustomButton from "../../components/login_reg/CustomButton";

const ConfirmEmailScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [code, setCode] = useState("")
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        console.log("Signed in")
        navigation.navigate('Home')
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed')
    }

    const onSignInWithGoogle = () => {
        console.warn('onSignInWithGoogle')

    }

    const onSignInWithFacebook = () => {
        console.warn('onSignInWithFacebook')

    }
    const onSignInWithApple = () => {
        console.warn('onSignInWithApple')
    }

    const onSignUpPressed = () => {
        navigation.navigate('Sign Up')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Sign Up.</Text>
            <CustomInput
                placeholder={"Email"}
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder={"Enter your confirmation code"}
                value={code}
                setValue={setCode}
                secureTextEntry={true}
            />

            <CustomButton
                onPress={onConfirmPressed}
                text="Confirm"
            />
            <CustomButton
                onPress={onForgotPasswordPressed}
                text="Code not sent, resend code"
                type="SECONDARY"
            />
            <CustomButton
                onPress={onForgotPasswordPressed}
                text="Already have an account? Sign in here"
                type="SECONDARY"
            />
        </View>
    )
}

export default ConfirmEmailScreen

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