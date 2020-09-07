import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            if (route.name === "Home") {
              return <AntDesign name="home" size={size} color={color} />;
            } else if (route.name === "About") {
              return (
                <AntDesign
                  name={focused ? "infocirlceo" : "infocirlce"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          inactiveTintColor: "gray",
          labelStyle: {
            fontFamily: "Century-Gothic-Regular",
            fontSize: 15,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="About" component={AboutStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabStack;
