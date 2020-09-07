import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
        },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About GameZone",
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AboutStack;
