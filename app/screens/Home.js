import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/styles/Global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textItem}>Home Screen Test</Text>
    </View>
  );
}
