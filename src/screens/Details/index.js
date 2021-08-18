import React, { useState } from "react";
import {
  DeviceEventEmitter,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Colors from "../../common/colors";
import Images from "../../common/images";
import styles from "./style";
import { registrationDataChanged } from "../../store/actions";
const Details = (props) => {
  const [catData, setCatData] = useState({
    name: "Luna",
    color: "dark-Grey",
    breed: "Abyssinian",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  });
  const { catName, catBreed, catColor, catDesc } = props.route.params.data.item;
  const { index } = props.route.params.data;

  const deleteData = () => {
    const dummyArray = props.registrationData;
    dummyArray.splice(index, 1);
    props.registrationDataChanged(dummyArray);
    setTimeout(() => {
      props.navigation.goBack();
    }, 800);

    DeviceEventEmitter.emit("UpdateData");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Images.abyssinian} />
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView>
          <View>
            <View style={styles.catDetailsContainer}>
              <View>
                <Text style={styles.catCommonTitleStyle}>Name</Text>
                <Text style={styles.catTextCommonStyle}>{catName}</Text>
              </View>
              <View>
                <Text style={styles.catCommonTitleStyle}>Color</Text>
                <Text style={styles.catTextCommonStyle}>{catColor}</Text>
              </View>
              <View>
                <Text style={styles.catCommonTitleStyle}>Breed</Text>
                <Text style={styles.catTextCommonStyle}>{catBreed}</Text>
              </View>
            </View>

            <View style={styles.descContainer}>
              <Text style={styles.descText}>Description</Text>
              <Text style={styles.descriptionTxt}>{catDesc}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.commonBtnStyle, { backgroundColor: Colors.SKY }]}
          onPress={() =>
            props.navigation.navigate("Registration", {
              data: props.route.params.data,
              screen: "Details",
            })
          }
        >
          <Text style={styles.commonBtnTextStyle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.commonBtnStyle, { backgroundColor: Colors.RED }]}
          onPress={() => deleteData()}
        >
          <Text style={styles.commonBtnTextStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => props.navigation.goBack()}
      >
        <Image style={styles.backArrowImg} source={Images.BackArrow} />
      </TouchableOpacity>
    </View>
  );
};

function mapStatToProps({ registrationReducer }) {
  const { error, registrationLoader, registrationData } = registrationReducer;

  return { error, registrationLoader, registrationData };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      registrationDataChanged,
    },
    dispatch
  );
export default connect(mapStatToProps, mapDispatchToProps)(Details);
