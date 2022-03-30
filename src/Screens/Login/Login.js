import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  // Animated,
  // Dimensions,
} from "react-native";
import { useRef, useEffect, useState } from "react";
import s from "./login.module.scss";
import bg from "../../assets/images/bg.png";
import { Link } from "@react-navigation/native";

const Login = ({ onAuth, navigation }) => {
  // const [value, setValue] = useState(0);
  // const windowWidth = Dimensions.get("window").width;
  // const value = useRef(new Animated.Value(windowWidth)).current;

  // useEffect(() => {
  //   Animated.timing(value, {
  //     toValue: 0,
  //     useNativeDriver: true,
  //   }).start();
  //   return () => {
  //     Animated.timing(value, {
  //       toValue: windowWidth,
  //       useNativeDriver: true,
  //     }).start();
  //   };
  // }, []);

  const handleLayout = (e) => {
    // console.log(e.nativeEvent.layout);
    // setLayoutHeight(e.nativeEvent.layout.height);
  };

  return (
    <View style={s.container} onLayout={handleLayout}>
      <ImageBackground
        resizeMode="cover"
        source={bg}
        style={{
          height: "100%",
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={{ height: "100%" }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                backgroundColor: "#e8e8e8",
                // flex: 0.5,
                height: 500,
                justifyContent: "flex-end",
                paddingBottom: 80,
                paddingLeft: 16,
                paddingRight: 16,
                marginTop: "auto",
                paddingTop: 16,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <Text style={s.title}>Войти</Text>
              <TextInput
                placeholder={"Логин"}
                style={{ ...s.input, ...s.marginBottom }}
              />
              <TextInput placeholder={"Пароль"} style={s.input} />

              <Pressable
                onPress={onAuth}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? "rgba(250, 0, 0, 0.3)"
                      : "rgba(250, 0, 0, 1)",
                  },
                  s.btn,
                ]}
              >
                <Text style={s.text_btn}>Войти</Text>
              </Pressable>
              <View style={s.recovery}>
                {/* <NavLink
              className={({ isActive }) => s.recovery_text}
              to="/registration"
            >
              Нет аккаунта? Зарегистрироваться
            </NavLink> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate("registration")}

                  // to={{ screen: "registration", params: { id: "hello world" } }}
                >
                  <Text className={s.recovery_text}>
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default Login;
