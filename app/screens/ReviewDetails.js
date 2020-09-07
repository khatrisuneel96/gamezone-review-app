import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/styles/Global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const { otherParam } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{otherParam.title}</Text>
        <Text>{otherParam.body}</Text>
        <Text>{otherParam.rating}</Text>
      </Card>
    </View>
  );
}
