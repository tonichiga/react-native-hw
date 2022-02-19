import { View, StyleSheet } from "react-native";
import Registration from "./src/Screens/Registration/";
import Login from "./src/Screens/Login";
import { Route, Routes, Navigate } from "react-router-native";

const Container = () => {
  return (
    <View style={s.container}>
      <Routes>
        <Route exact path="/" element={<Navigate to="/registration" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </View>
  );
};

export default Container;

const s = StyleSheet.create({
  container: {},
});
