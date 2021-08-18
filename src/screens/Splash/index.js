// ---------- Imports ---------- //
import { CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../common/colors";
import Images from "../../common/images";
import styles from "./style";

// ---------- component ---------- //
const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      goToNextView("Home");
    }, 2000);
  });

  const goToNextView = (nextView = null) => {
    props.navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: nextView }] })
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <View style={styles.conatiner}>
        <Image style={styles.AppLogo} source={Images.Splash} />
        <Text style={styles.appName}>CatsDex</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
