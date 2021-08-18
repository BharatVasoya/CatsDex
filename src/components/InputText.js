import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../common/colors";

const InputText = ({
  placeholder,
  multiline,
  onChangeText,
  value,
  extraStyle,
}) => {
  return (
    <View style={[styles.container, extraStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.GREY}
        multiline={multiline}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scale(40),
    width: "100%",
    borderRadius: scale(5),
    backgroundColor: Colors.White,
    borderColor: Colors.GREY,
    borderWidth: scale(0.8),
    paddingVertical: scale(5),
    paddingHorizontal: scale(20),
    justifyContent: "center",
    marginVertical: scale(8),
  },
  textInput: {
    color: Colors.BLACK,
  },
});

export default InputText;
