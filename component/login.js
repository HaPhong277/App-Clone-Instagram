import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import "react-native-gesture-handler";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.logo}
          source={require("../assets/longdan.jpg")}
        ></Image>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholderTextColor={"white"}
          placeholder="Tài khoản"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor={"white"}
          placeholder="  Mật khẩu"
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "#66B2FF" }}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btndn}
          onPress={() => navigation.navigate("Instagram")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 20, alignItems: "center" }}>
        <Text style={{ color: "white" }}>HOẶC</Text>
      </View>
      <View style={styles.loginfb}>
        <AntDesign
          style={{ marginRight: 10 }}
          name="facebook-square"
          size={24}
          color="#66B2FF"
        />
        <Text
          style={{ color: "#66B2FF" }}
          onPress={() => Linking.openURL("http://facebook.com")}
        >
          Đăng nhập bằng Facebook
        </Text>
      </View>
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    paddingHorizontal: 10,
  },
  logo: {
    width: 300,
    height: 100,
  },
  loginfb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "95%",
    margin: 12,
    backgroundColor: "rgb(41, 38, 38)",
    color: "white",
  },
  btndn: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#66B2FF",
    padding: 10,
    borderRadius: 10,
  },
});
