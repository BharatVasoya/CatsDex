import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/index";
const App = () => {
  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
