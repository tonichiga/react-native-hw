import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Container from "./Container";
import { NativeRouter } from "react-router-native";

const loadFonts = async () => {
  await Font.loadAsync({
    Medium: require("./src/assets/fonts/TTSmalls-Medium.ttf"),
    Regular: require("./src/assets/fonts/TTSmalls-Regular.ttf"),
    SemiBold: require("./src/assets/fonts/TTSmalls-SemiBold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={(e) => console.log(e)}
        onFinish={() => setIsReady(true)}
      />
    );
  } else {
    return (
      <NativeRouter>
        <View
          style={{
            fontFamily: "Medium",
          }}
        >
          <Container />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
