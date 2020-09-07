import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../assets/styles/Global";
import Card from "../shared/Card";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Review1", body: "Review Detail", rating: 5, key: 1 },
    { title: "Review2", body: "Review Detail", rating: 4, key: 2 },
    { title: "Review3", body: "Review Detail", rating: 3, key: 3 },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ReviewDetails", { otherParam: item })
            }
          >
            <Card>
              <Text style={globalStyles.itemTitle}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
