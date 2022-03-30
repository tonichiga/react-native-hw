import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Advertisement from "../../Screens/Advertisement";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const MainScreen = ({ onAuth }) => {
  const Tabs = createBottomTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            // height: "100%",
            // backgroundColor: "teal",
            // justifyContent: "center",
            // alignItems: "center",
          },
          tabBarShowLabel: false,
        }}
        // height={50}
      >
        <Tabs.Screen
          name="Публикации"
          component={Advertisement}
          options={{
            tabBarStyle: {
              // flex: 1,
              backgroundColor: "grey",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "SemiBold",
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ paddingRight: 20 }}
                  onPress={() => {
                    onAuth();
                  }}
                >
                  <Ionicons name="exit-outline" size={24} color="black" />
                </TouchableOpacity>
              );
            },
            tabBarIcon: (focused, size, color) => (
              <AntDesign name="appstore-o" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="Создать публикацию"
          component={Advertisement}
          options={{
            tabBarStyle: {
              // flex: 1,
              backgroundColor: "grey",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "SemiBold",
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ paddingRight: 20 }}
                  onPress={() => {
                    onAuth();
                  }}
                >
                  <Ionicons name="exit-outline" size={24} color="black" />
                </TouchableOpacity>
              );
            },
            tabBarIcon: (focused, size, color) => (
              <View
                style={{
                  //   display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 100,
                  height: 40,
                  backgroundColor: "tomato",
                  borderRadius: 20,
                }}
              >
                <Ionicons name="ios-add" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Комментарии"
          component={Advertisement}
          options={{
            tabBarStyle: {
              // flex: 1,
              backgroundColor: "grey",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "SemiBold",
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ paddingRight: 20 }}
                  onPress={() => {
                    onAuth();
                  }}
                >
                  <Ionicons name="exit-outline" size={24} color="black" />
                </TouchableOpacity>
              );
            },
            tabBarIcon: (focused, size, color) => (
              <Ionicons name="md-people-outline" size={24} color="white" />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default MainScreen;
