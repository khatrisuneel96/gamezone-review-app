import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../assets/styles/Global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Review Details");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textItem}>Home Screen Test</Text>
      <Button title="Go to Reviews" onPress={pressHandler} />
    </View>
  );
}
