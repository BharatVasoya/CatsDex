import { Platform, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../common/colors";
import Fonts from "../../common/fonts";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  topContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: scale(130),
    width: scale(130),
    borderRadius: scale(65),
    resizeMode: "cover",
  },
  cameraBtn: {
    alignSelf: "flex-end",
    bottom: 25,
    right: 20,
    backgroundColor: Colors.BLACK,
    borderRadius: scale(10),
    height: scale(20),
    width: scale(20),
    alignItems: "center",
    justifyContent: "center",
  },
  cameraImg: {
    height: scale(15),
    width: scale(15),
    tintColor: Colors.White,
  },
  bottomContainer: {
    flex: 1,
    borderTopStartRadius: scale(10),
    borderTopEndRadius: scale(10),
  },
  formView: {
    flex: 0.8,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },
  description: {
    height: scale(75),
    justifyContent: "flex-start",
  },
  actionsheet: {
    height: scale(50),
  },
  colorsBtn: {
    height: scale(40),
    width: "100%",
    borderRadius: scale(5),
    backgroundColor: Colors.White,
    borderColor: Colors.GREY,
    borderWidth: scale(0.8),
    paddingVertical: scale(5),
    paddingHorizontal: scale(20),
    marginVertical: scale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commonBtnStyle: {
    borderRadius: scale(10),
    alignItems: "center",
    paddingVertical: scale(5),
    height: scale(40),
    width: "90%",
    justifyContent: "center",
    backgroundColor: Colors.SKY,
    alignSelf: "center",
    marginBottom: scale(10),
  },
  commonBtnTextStyle: {
    color: Colors.White,
    fontFamily: Fonts.Montserrat_SemiBold,
    fontSize: scale(13),
  },
  bottomArrow: {
    height: scale(8),
    width: scale(12),
    tintColor: Colors.BLACK,
  },
  commonTextStyle: {
    color: Colors.BLACK,
    fontSize: scale(12),
    fontFamily: Fonts.Montserrat_Medium,
  },
});
export default styles;
