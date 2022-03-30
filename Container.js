import { View, StyleSheet } from "react-native";
import Router from "./src/Router";

const Container = () => {
  console.log("Refresh...");
  return (
    <View style={s.container}>
      <Router />
    </View>
  );
};

export default Container;

const s = StyleSheet.create({
  container: { flex: 1 },
});
