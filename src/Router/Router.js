import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// import Login from "../Screens/Login";
// import Registration from "../Screens/Registration";
// import Advertisement from "../Screens/Advertisement";
// import { AntDesign, Ionicons } from "@expo/vector-icons";
import AuthScreen from "./AuthScreen";
import MainScreen from "./MainScreen";

const Auth = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Router = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handlerEnter = () => {
    setIsAuth(true);
  };

  const handlerExit = () => {
    setIsAuth(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {isAuth ? (
        <MainScreen onAuth={handlerExit} />
      ) : (
        <AuthScreen onEnter={handlerEnter} />
      )}
    </View>
  );
};

export default Router;
