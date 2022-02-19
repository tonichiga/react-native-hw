import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  // Animated,
  // Dimensions,
} from "react-native";
import { useRef, useEffect, useState } from "react";
import s from "./login.module.scss";
import bg from "../../assets/images/bg.png";
import { Link } from "react-router-native";

const Login = () => {
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
        <View
          style={{
            backgroundColor: "#e8e8e8",
            flex: 0.5,
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
            <Link
              to="/registration"
              className={s.recovery_text}
              underlayColor="#DDD"
            >
              <Text>У Вас уже есть аккаунт? Войти</Text>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
