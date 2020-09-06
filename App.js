import React from "react";
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
    return <Home />;
  }
}
