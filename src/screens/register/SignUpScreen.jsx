import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/login_reg/CustomInput";
import CustomButton from "../../components/login_reg/CustomButton";
import { useForm } from "react-hook-form";

const SignUpScreen = () => {
  const [passwordRepeat, setPasswordRepeat] = useState("")
  const { control, handleSubmit, formState: { errors } } = useForm()

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.log("Signed in")
    navigation.navigate('Confirm Email')
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
      <Text style={styles.title}>Create Account.</Text>
      <CustomInput
        name="Email"
        placeholder={"Email"}
        control={control}
        rules={{ required: true }}
      />
      <CustomInput
        name="Password"
        placeholder={"Password"}
        control={control}
        secureTextEntry={true}
        rules={{ required: true }}
      />
      <CustomInput
        placeholder={"Confirm Password"}
        control={control}
        secureTextEntry={true}
      />
      <CustomButton
        onPress={onRegisterPressed}
        text="Register"
      />
      <Text style={styles.text}> By registering, you agree to aour Terms and Policies</Text>
      <CustomButton
        onPress={onSignInWithGoogle}
        text="Sign in with Google"
        bgColor={"#FAE9EA"}
        fgColor={"#DD4D44"}
      />
      <CustomButton
        onPress={onSignInWithFacebook}
        text="Sign in with Facebook"
        bgColor={"#E7EAF4"}
        fgColor={"#4765A9"}
      />
      <CustomButton
        onPress={onSignInWithApple}
        text="Sign in with Apple"
        bgColor={"#e3e3e3"}
        fgColor={"#363636"}
      />
      <CustomButton
        onPress={onForgotPasswordPressed}
        text="Already have an account? Sign in here"
        type="TERTIARY"
      />
    </View>
  )
}

export default SignUpScreen

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