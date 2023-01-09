import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Dimensions,
} from "react-native";
import ReelsComponent from "./ReelsComponent";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import "react-native-gesture-handler";

function Reels({ navigation }) {
  // const Reels = ({ navigation }) => {
  const WindowWidth = Dimensions.get("window").width;
  const WindowHeight = Dimensions.get("window").height;
  return (
    <View style={{ backgroundColor: "black" }}>
      <View
        style={{
          marginTop: 50,
          // paddingTop: 50,
          width: WindowWidth,
          height: WindowHeight,
          // backgroundColor: "white",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 1,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Reels
          </Text>
          <Feather name="camera" size={25} color="white" />
        </View>
        <ReelsComponent />
      </View>
    </View>
  );
  // };
}
export default Reels;
const styles = StyleSheet.create({});
