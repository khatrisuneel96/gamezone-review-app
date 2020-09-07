import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/heart_logo.png")} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 25,
    color: "#333",
    letterSpacing: 2,
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});
