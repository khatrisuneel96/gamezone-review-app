import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/styles/Global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.itemTitle}>
        This App is created by Suneel Kumar Khatri.
      </Text>
    </View>
  );
}
