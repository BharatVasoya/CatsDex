import React, { useEffect, useRef, useState } from "react";
import {
  DeviceEventEmitter,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { bindActionCreators } from "redux";
import Colors from "../../common/colors";
import Images from "../../common/images";
import InputText from "../../components/InputText";
import ActionSheet from "react-native-actionsheet";
import styles from "./style";
import ToastCompnent from "../../components/ToastCompnent";
import { connect } from "react-redux";
import { registrationDataChanged } from "../../store/actions";
import registrationReducer from "../../store/reducers/Registration";
const data = ["Cancel", "White", "Red", "Brown", "Black"];

const Registration = (props) => {
  const actionsheet = useRef();
  const showActionSheet = () => {
    //To show the Bottom ActionSheet
    actionsheet.current.show();
  };
  const [catName, setCatName] = useState(
    props.route.params.data !== undefined
      ? props.route.params.data.item.catName
      : ""
  );
  const [catBreed, setCatBreed] = useState(
    props.route.params.data !== undefined
      ? props.route.params.data.item.catBreed
      : ""
  );
  const [catColor, setCatColor] = useState(
    props.route.params.data !== undefined
      ? props.route.params.data.item.catColor
      : ""
  );
  const [catDesc, setCatDesc] = useState(
    props.route.params.data !== undefined
      ? props.route.params.data.item.catDesc
      : ""
  );
  const [message, setMessage] = useState("");
  const [catRegistrationData, setCatRegistrationData] = useState([]);
  const [isDisplay, setDisplay] = useState(false);

  const { screen } = props.route.params;
  useEffect(() => {
    if (screen !== "Home") {
      props.navigation.setOptions({ headerTitle: "Edit" });
    } else {
      props.navigation.setOptions({ headerTitle: "Add" });
    }
  });
  const addData = () => {
    if (catName === "") {
      displayToast("Cat name must not be blank!");
    } else if (catBreed === "") {
      displayToast("Cat breed must not be blank!");
    } else if (catDesc === "") {
      displayToast("Cat description must not be blank!");
    } else if (catColor === "") {
      displayToast("Cat color must not be blank!");
    } else {
      const catDataObj = {
        catName: catName,
        catBreed: catBreed,
        catDesc: catDesc,
        catColor: catColor,
      };
      catRegistrationData.push(catDataObj);
      props.registrationData.map((data) => {
        catRegistrationData.push(data);
      });
      props.registrationDataChanged(catRegistrationData);
      setTimeout(() => {
        props.navigation.goBack();
      }, 800);

      DeviceEventEmitter.emit("UpdateData");
    }
  };
  const editData = () => {
    if (catName === "") {
      displayToast("Cat name must not be blank!");
    } else if (catBreed === "") {
      displayToast("Cat breed must not be blank!");
    } else if (catDesc === "") {
      displayToast("Cat description must not be blank!");
    } else if (catColor === "") {
      displayToast("Cat color must not be blank!");
    } else {
      const catDataObj = {
        catName: catName,
        catBreed: catBreed,
        catDesc: catDesc,
        catColor: catColor,
      };

      const { index } = props.route.params.data;

      const dummyArray = props.registrationData;
      dummyArray[index] = catDataObj;
      props.registrationDataChanged(dummyArray);

      DeviceEventEmitter.emit("UpdateData");

      setTimeout(() => {
        props.navigation.popToTop();
      }, 800);
    }
  };

  const displayToast = (message) => {
    setMessage(message);
    setDisplay(true);
    setTimeout(() => {
      setMessage("");
      setDisplay(false);
    }, 3000);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.formView}>
            <Text style={styles.commonTextStyle}>Name</Text>
            <InputText
              placeholder={"Name"}
              onChangeText={(name) => setCatName(name)}
              value={catName}
            />
            <Text style={styles.commonTextStyle}>Breed</Text>
            <InputText
              placeholder={"Breed"}
              onChangeText={(breed) => setCatBreed(breed)}
              value={catBreed}
            />
            <Text style={styles.commonTextStyle}>Description</Text>
            <InputText
              extraStyle={styles.description}
              placeholder={"Description"}
              multiline={true}
              onChangeText={(desc) => setCatDesc(desc)}
              value={catDesc}
            />
            <Text style={styles.commonTextStyle}>Color</Text>
            <TouchableOpacity
              style={styles.colorsBtn}
              onPress={() => showActionSheet()}
            >
              <Text
                style={{
                  color:
                    catColor === "" || catColor === "Choose The Color"
                      ? Colors.GREY
                      : Colors.BLACK,
                }}
              >
                {catColor === "Cancel" || catColor === ""
                  ? "Choose The Color"
                  : catColor}
              </Text>
              <Image style={styles.bottomArrow} source={Images.BottomArrow} />
              <ActionSheet
                style={styles.actionsheet}
                ref={actionsheet}
                title={"Choose the Color of Your Pet"}
                options={data}
                onPress={(index) => {
                  setCatColor(data[index]);
                }}
                cancelButtonIndex={0}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.commonBtnStyle}
          onPress={() => {
            screen !== "Home" ? editData() : addData();
          }}
        >
          <Text style={styles.commonBtnTextStyle}>
            {screen !== "Home" ? "Save" : "Add"}
          </Text>
        </TouchableOpacity>
        <ToastCompnent isDisplay={isDisplay} child={message} />
      </View>
    </SafeAreaView>
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

export default connect(mapStatToProps, mapDispatchToProps)(Registration);
