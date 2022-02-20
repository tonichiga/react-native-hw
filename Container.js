import { View, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "./src/Screens/Registration/";
import Login from "./src/Screens/Login";

const Stack = createNativeStackNavigator();

const Container = () => {
  console.log("Refresh...");
  return (
    <View style={s.container}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registration"
          component={Registration}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Container;

const s = StyleSheet.create({
  container: { height: "100%" },
});
