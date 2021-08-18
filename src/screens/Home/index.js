// ---------- Imports ---------- //
import React, { useEffect, useState } from "react";
import {
  DeviceEventEmitter,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { bindActionCreators } from "redux";

import Images from "../../common/images";
import CatItem from "../../components/CatItem";
import { connect } from "react-redux";
import styles from "./style";
import { registrationDataChanged } from "../../store/actions";
// ---------- Global Variables ---------- //s

// ---------- component ---------- //
const Home = (props) => {
  // ---------- Variable Declaration ---------- //

  // ---------- useState ---------- //
  const [data, setData] = useState(props.registrationData);

  // ---------- Life-Cycle Method ---------- //
  useEffect(() => {
    DeviceEventEmitter.addListener("UpdateData", () => {
      setData([]);

      setTimeout(() => {
        setData(props.registrationData);
      }, 200);
    });
  });

  // ---------- Function Declaration ---------- //

  return (
    <SafeAreaView style={styles.safeConatiner}>
      <View style={styles.conatiner}>
        {props.registrationData.length > 0 ? (
          <FlatList
            style={styles.flatContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={(item, index) => (
              <CatItem
                image={Images.abyssinian}
                name={item.item.catName}
                breedName={item.item.catBreed}
                onPress={() =>
                  props.navigation.navigate("Details", {
                    data: item,
                    index: index,
                  })
                }
              />
            )}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.commonTextStyle}>Please add your Cats</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.addBtn}
          onPress={(item) =>
            props.navigation.navigate("Registration", {
              screen: "Home",
            })
          }
        >
          <Image style={styles.addBtnImg} source={Images.Add} />
        </TouchableOpacity>
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

export default connect(mapStatToProps, mapDispatchToProps)(Home);
