import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../common/colors";
import Fonts from "../common/fonts";

const ToastComponent = ({ child, isDisplay }) => {
  return isDisplay ? (
    <View style={styles.container}>
      <Text style={styles.text}>{child}</Text>
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "tomato",
    bottom: "17%",
    zIndex: 1,
    width: "90%",
    padding: scale(5),
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: Colors.White,
    fontFamily: Fonts.Montserrat_SemiBold,
    fontSize: scale(14),
  },
});

export default ToastComponent;
