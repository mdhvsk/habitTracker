import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/login_reg/CustomInput";
import CustomButton from "../../components/login_reg/CustomButton";
import { Controller, useForm } from "react-hook-form";

const LoginScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)
  const onSignInPressed = (data) => {
    console.log(data)
    console.log("Signed in")
    navigation.navigate('Home')
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed')
    navigation.navigate('Forgot Password')
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

      <Text style={styles.title}>Habits.</Text>
      <CustomInput
        name="Email"
        placeholder={"Email"}
        control={control}
        rules={{ required: true }}
      />
      <CustomInput
        name="Password"
        placeholder={"Password"}
        secureTextEntry={true}
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 3,
            message: "Password must be over 3 characters long",
          }
        }}

      />

      <CustomButton
        onPress={handleSubmit(onSignInPressed)}
        text="Sign In"
      />
      <CustomButton
        onPress={onForgotPasswordPressed}
        text="Forgot Password"
        type="TERTIARY"
      />

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
        onPress={onSignUpPressed}
        text="Don't have an account? Register Now"
        type="TERTIARY"
      />
    </View>


  );
};

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
});

export default LoginScreen;
