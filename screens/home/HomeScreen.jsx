import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground
} from "react-native";
import CaptureButton from "../../components/CaptureButton";
import BottomNav from "../../components/nav/BottomNav";

const HomeScreen = () => {
  const [timeOfDay, setTimeOfDay] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/sunset.jpeg')}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Good Morning!</Text>
          <Text style={styles.headerText}>Madhav!</Text>
        </View>

        <View style={styles.capture}>
          <CaptureButton />


        </View>
        <BottomNav />
      </ImageBackground>
    </SafeAreaView>


  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Take up the full screen
    resizeMode: 'cover', // Cover the entire view, maintaining aspect ratio
    // borderBlockColor: 'pink',
    // borderWidth: 10
  },
  header: {
    padding: 50,
    alignItems: 'left'
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '800',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  capture: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 25

  }


});



