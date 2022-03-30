import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Login";
import Registration from "../../Screens/Registration";

const AuthScreen = ({ onEnter }) => {
  const Auth = createNativeStackNavigator();

  const authOptions = {
    headerShown: false,
  };

  return (
    <View style={{ height: "100%" }}>
      <Auth.Navigator initialRouteName="login">
        <Auth.Screen name="login" options={authOptions}>
          {(props) => <Login {...props} onAuth={onEnter} />}
        </Auth.Screen>
        <Auth.Screen
          name="registration"
          component={Registration}
          options={authOptions}
        />
      </Auth.Navigator>
    </View>
  );
};

export default AuthScreen;
