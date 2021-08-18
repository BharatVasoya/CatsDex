import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../common/colors";
import Fonts from "../common/fonts";

const CatItem = ({ image, name, breedName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.commonTextStyle}>{name}</Text>
            <Text style={styles.commonTextStyle}>{breedName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(150),
    marginHorizontal: scale(10),
    marginVertical: scale(5),
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: scale(200),
    width: scale(150),
    resizeMode: "cover",
    borderRadius: scale(10),
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.BlackTransparent,
    alignItems: "center",
    borderBottomEndRadius: scale(10),
    borderBottomStartRadius: scale(10),
    paddingVertical: scale(5),
  },
  commonTextStyle: {
    color: Colors.White,
    fontFamily: Fonts.Montserrat_Medium,
    textAlign: "center",
  },
});

export default CatItem;
