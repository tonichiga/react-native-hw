import { View, Text, TextInput, Pressable } from "react-native";
import s from "./login.module.scss";

const Login = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Войти</Text>
      <TextInput
        placeholder={"Логин"}
        style={{ ...s.input, ...s.marginBottom }}
      />
      <TextInput placeholder={"Пароль"} style={s.input} />

      <Pressable style={s.btn}>
        <Text style={s.text_btn}>Войти</Text>
      </Pressable>
      <View style={s.recovery}>
        <Text style={s.recovery_text}>Нет аккаунта?</Text>
        <Text style={s.recovery_text}>Зарегистрироваться</Text>
      </View>
    </View>
  );
};

export default Login;
