import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../assets/styles/Global";
import Card from "../shared/Card";

export default function Home({ navigation }) {
  const [modelOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: "Review1", body: "Review Detail", rating: 5, key: 1 },
    { title: "Review2", body: "Review Detail", rating: 4, key: 2 },
    { title: "Review3", body: "Review Detail", rating: 3, key: 3 },
  ]);

  return (
    <View style={globalStyles.container}>
      <Ionicons
        name="md-add"
        size={25}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <Modal visible={modelOpen} animated="slice">
        <View>
          <Ionicons
            name="ios-close"
            size={25}
            style={{ ...styles.modalClose, ...styles.modalToggle }}
            onPress={() => setModalOpen(false)}
          />
          <Text style={styles.modalContent}>Hello MoFos!</Text>
        </View>
      </Modal>
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

const styles = StyleSheet.create({
  modalToggle: {
    alignSelf: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    padding: 10,
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
