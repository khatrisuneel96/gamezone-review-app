// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/screens/Home";
import Reviews from "./app/screens/Reviews";
import About from "./app/screens/About";

export default function App() {
  return (
    <View>
      <Home />
      <Reviews />
      <About />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: "#fff",
  // },
});
