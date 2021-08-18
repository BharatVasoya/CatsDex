import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../common/colors";
import Fonts from "../../common/fonts";

const styles = StyleSheet.create({
  safeConatiner: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  conatiner: {
    flex: 1,
  },
  flatContainer: {
    paddingHorizontal: scale(5),
  },
  addBtn: {
    height: scale(40),
    width: scale(40),
    backgroundColor: Colors.SKY,
    padding: scale(5),
    borderRadius: scale(20),
    alignSelf: "flex-end",
    bottom: 10,
    right: 20,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnImg: {
    height: scale(20),
    width: scale(20),
    tintColor: Colors.White,
  },
  commonTextStyle: {
    color: Colors.GREY,
    fontSize: scale(12),
    fontFamily: Fonts.Montserrat_Medium,
  },
});
export default styles;
