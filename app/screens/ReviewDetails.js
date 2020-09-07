import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles, images } from "../assets/styles/Global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const { otherParam } = route.params;
  const rating = otherParam.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.font}>{otherParam.title}</Text>
        <Text style={globalStyles.font}>{otherParam.body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.font}>GameZone Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    justifyContent: "center",
    marginTop: 16,
    paddingTop: 16,
    marginVertical: 16,
  },
});
