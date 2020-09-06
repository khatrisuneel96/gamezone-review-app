// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Home from "./app/screens/Home";

export default function App() {
  let [fontLoaded] = useFonts({
    "Century-Gothic-Regular": require("./app/assets/fonts/Century-Gothic-Regular.ttf"),
    "Century-Gothic-Bold": require("./app/assets/fonts/Century-Gothic-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: "#fff",
  // },
});
