import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  Image,
  TouchableOpacity,
  // Dimensions,
  // Animated,
} from "react-native";
import s from "./registration.module.scss";
import bg from "../../assets/images/bg.png";
import { Link } from "@react-navigation/native";
import { IconPlus } from "../../Components/SVG";

const Registration = ({ navigation }) => {
  const [inputStyle, setInputStyle] = useState({});
  const [viewWidth, setViewWidth] = useState(0);

  // const windowWidth = Dimensions.get("window").width;
  // const value = useRef(new Animated.Value(windowWidth)).current;

  const handleFocus = () => {
    // setInputStyle({ borderColor: "red" });
  };

  const handleBlur = () => {
    // setInputStyle({ borderColor: "#e8e8e8" });
  };

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

  return (
    <View style={s.wrapper}>
      <ImageBackground
        resizeMode="cover"
        source={bg}
        style={{
          height: "100%",
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              position: "relative",
              backgroundColor: "#e8e8e8",
              // flex: 0.55,
              height: 550,
              paddingTop: 40,
              marginTop: "auto",
              justifyContent: "flex-end",
              paddingBottom: 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <KeyboardAvoidingView
            // behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  position: "absolute",
                  top: -175,
                  left: "33%",
                }}
              >
                <Image
                  source={bg}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,

                    // transform: [{ translateX: viewWidth / 2 }],
                    borderColor: "grey",
                    borderWidth: 2,
                  }}
                />

                <View style={{ position: "absolute", right: -12, top: 70 }}>
                  <IconPlus />
                </View>
              </View>
              <Text style={s.title}>Регистрация</Text>

              <TextInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={"Логин"}
                style={{ ...s.input, ...inputStyle }}
              />
              <TextInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={"Пароль"}
                secureTextEntry={true}
                style={{ ...s.input, ...inputStyle }}
              />
              <TextInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={"Повторить пароль"}
                secureTextEntry={true}
                style={{ ...s.input, ...inputStyle, marginBottom: 43 }}
              />
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? "rgba(250, 0, 0, 0.3)"
                      : "rgba(250, 0, 0, 1)",
                  },
                  s.btn,
                ]}
              >
                <Text style={s.text_btn}>Зарегистрироваться</Text>
              </Pressable>
              <View style={s.recovery}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("login")}

                  // to={{ screen: "registration", params: { id: "hello world" } }}
                >
                  <Text className={s.recovery_text}>
                    Уже существует аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default Registration;
