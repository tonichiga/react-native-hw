import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Login from "../Screens/Login";
import Registration from "../Screens/Registration";
import Advertisement from "../Screens/Advertisement";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Auth = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Router = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleClick = () => {
    setIsAuth(true);
  };

  const authOptions = {
    headerShown: false,
  };

  if (isAuth) {
    return (
      <View style={s.container}>
        <Tabs.Navigator
          screenOptions={{
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name="Публикации"
            component={Advertisement}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "SemiBold",
              },
              tabBarIcon: (focused, size, color) => (
                <AntDesign name="appstore-o" size={24} color="blue" />
              ),
            }}
          />
          <Tabs.Screen
            name="Создать публикацию"
            component={Advertisement}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "SemiBold",
              },
              headerRight: () => (
                <View style={{ paddingRight: 20 }}>
                  <Ionicons name="exit-outline" size={24} color="black" />
                </View>
              ),
              tabBarIcon: (focused, size, color) => (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 40,
                    backgroundColor: "tomato",
                    borderRadius: 20,
                  }}
                >
                  <Ionicons name="ios-add" size={24} color="blue" />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="Комментарии"
            component={Advertisement}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "SemiBold",
              },
              tabBarIcon: (focused, size, color) => (
                <Ionicons name="md-people-outline" size={24} color="blue" />
              ),
            }}
          />
        </Tabs.Navigator>
      </View>
    );
  } else {
    return (
      <View style={s.container}>
        <Auth.Navigator initialRouteName="login">
          <Auth.Screen name="login" options={authOptions}>
            {(props) => <Login {...props} onAuth={handleClick} />}
          </Auth.Screen>
          <Auth.Screen
            name="registration"
            component={Registration}
            options={authOptions}
          />
        </Auth.Navigator>
      </View>
    );
  }
};

export default Router;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
