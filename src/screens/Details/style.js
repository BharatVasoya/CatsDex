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
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottomContainer: {
    flex: 1,
    borderTopEndRadius: scale(15),
    borderTopStartRadius: scale(15),
    marginTop: scale(-12),
    backgroundColor: Colors.White,
    padding: scale(10),
  },
  catDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: scale(10),
  },
  catCommonTitleStyle: {
    color: Colors.GREY,
    fontSize: scale(12),
    fontFamily: Fonts.Montserrat_Medium,
    // textAlign: "center",
  },
  catTextCommonStyle: {
    color: Colors.BLACK,
    fontSize: scale(14),
    fontFamily: Fonts.Montserrat_Medium,
    textAlign: "center",
  },
  descContainer: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(25),
  },
  descText: {
    color: Colors.GREY,
    fontSize: scale(14),
    fontFamily: Fonts.Montserrat_Medium,
  },
  descriptionTxt: {
    color: Colors.BLACK,
    fontSize: scale(12),
    fontFamily: Fonts.Montserrat_Regular,
    textAlign: "justify",
    marginTop: scale(5),
  },
  btnContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  commonBtnStyle: {
    borderRadius: scale(10),
    alignItems: "center",
    paddingVertical: scale(5),
    height: scale(35),
    width: scale(100),
    justifyContent: "center",
  },
  commonBtnTextStyle: {
    color: Colors.White,
    fontFamily: Fonts.Montserrat_SemiBold,
    fontSize: scale(13),
  },
  backBtn: {
    height: scale(40),
    width: scale(40),
    backgroundColor: Colors.WhiteTransparent,
    position: "absolute",
    top: Platform.OS === "ios" ? scale(40) : scale(10),
    left: scale(10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(20),
  },
  backArrowImg: {
    height: scale(20),
    width: scale(20),
    resizeMode: "contain",
    tintColor: Colors.BLACK,
  },
});
export default styles;
