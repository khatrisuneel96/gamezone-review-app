import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../assets/styles/Global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [modelOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReview) => [review, ...currentReview]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Ionicons
        name="md-add"
        size={25}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <Modal visible={modelOpen} animated="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <Ionicons
              name="ios-close"
              size={25}
              style={{ ...styles.modalClose, ...styles.modalToggle }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {reviews.length === 0 && (
        <Text style={globalStyles.empty}>No Reviews!</Text>
      )}
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
    padding: 10,
  },
});
