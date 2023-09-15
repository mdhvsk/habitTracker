import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login/LoginScreen';
import CameraComponent from './src/components/camera/CameraComponent';
import SignUpScreen from './src/screens/register/SignUpScreen';
import ConfirmEmailScreen from './src/screens/confirm_email/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/forgot_password/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/forgot_password/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Sign Up" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen}></Stack.Screen>

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Camera" component={CameraComponent}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black'
  },

});
