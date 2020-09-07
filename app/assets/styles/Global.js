import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemTitle: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 20,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  font: {
    fontFamily: "Century-Gothic-Regular",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ddd",
    fontSize: 20,
    fontFamily: "Century-Gothic-Regular",
    marginVertical: 3,
  },
  textError: {
    marginTop: 6,
    marginBottom: 10,
    color: "crimson",
    textAlign: "center",
    fontFamily: "Century-Gothic-Bold",
    textTransform: "capitalize",
  },
  empty: {
    fontFamily: "Century-Gothic-Regular",
    fontSize: 20,
    marginVertical: 50,
    textAlign: "center",
  },
  reviewDetailTitle: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 18,
  },
});

export const images = {
  ratings: {
    1: require("../rating-1.png"),
    2: require("../rating-2.png"),
    3: require("../rating-3.png"),
    4: require("../rating-4.png"),
    5: require("../rating-5.png"),
  },
};
