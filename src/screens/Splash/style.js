import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../common/colors";
import Fonts from "../../common/fonts";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  AppLogo: {
    height: scale(100),
    width: scale(100),
  },
  appName: {
    color: Colors.BLACK,
    fontFamily: Fonts.Montserrat_Bold,
    fontSize: scale(16),
    marginVertical: scale(20),
  },
});

export default styles;
