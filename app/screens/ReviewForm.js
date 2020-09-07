import React from "react";
import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../assets/styles/Global";

const reviewSchema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(5),
  rating: yup
    .string()
    .required()
    .test(
      "is-num-1-5",
      "Rating must be a number 1 - 5",
      (val) => parseInt(val) < 6 && parseInt(val) > 0
    ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating 1-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
