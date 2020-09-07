import React from "react";
import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../assets/styles/Global";
import FlatButton from "../shared/Button";

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
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.textError}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.textError}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating 1-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
              keyboardType="numeric"
            />
            <Text style={globalStyles.textError}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton text="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
