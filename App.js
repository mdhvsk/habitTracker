import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView } from 'react-native';
import HomeScreen from './screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'yellow',

  },
  headerText: {
    color: "green",
    fontSize: 20
  }
});
