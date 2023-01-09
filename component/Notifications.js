import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  ViewBase,
} from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  ScrollView,
} from "@expo/vector-icons";
import "react-native-gesture-handler";

function Notifications({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 50,
          marginTop: 50,
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Text
          style={{ fontSize: 20, fontWeight: "bold", color: "white", left: 10 }}
        >
          Thông Báo
        </Text>
      </View>
      <View style={{ width: "100%", height: 630 }}>
        <View
          style={{
            justifyContent: "center",
            height: 70,
            borderBottomColor: "#737373",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "50%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/hansohee.jpg")}
              />
              <View>
                <Text style={{ color: "#fff" }}>yêu cầu theo dõi</Text>
                <Text style={{ color: "#fff" }}>xeesoxee</Text>
              </View>
            </View>
            <AntDesign
              style={{ right: 10 }}
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.main_top}>
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18, color: "#fff" }}>Tháng này</Text>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/hansohee.jpg")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  xeesoxee
                </Text>
                <Text style={{ color: "#fff" }}> bắt đầu theo dõi</Text>
              </View>
            </View>
            <View style={styles.Button}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Follow
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/PL.jpg")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  may__lily
                </Text>
                <Text style={{ color: "#fff" }}> bắt đầu theo dõi</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Following
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/Seorina.jpg")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  _seorina
                </Text>
                <Text style={{ color: "#fff" }}> bắt đầu theo dõi</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Following
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.main_body}>
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Trước đó</Text>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/images.png")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>rosie</Text>
                <Text style={{ color: "#fff" }}> bắt đầu theo dõi</Text>
              </View>
            </View>
            <View style={styles.Button}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Follow
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/jennie.png")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  jennie
                </Text>
                <Text style={{ color: "#fff" }}> bắt đầu theo dõi</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Following
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 2,
                  justifyContent: "center",
                  borderColor: "violet",
                  left: 5,
                }}
                source={require("../assets/jiso.jpg")}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  sooyaaa__
                </Text>
                <Text style={{ color: "#fff" }}> bắt đầu theo dõi</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Following
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Entypo
          name="home"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Instagram")}
        />
        <FontAwesome
          name="search"
          size={24}
          color="white"
          onPress={() => navigation.navigate("search")}
        />
        <Entypo
          name="folder-video"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Reels")}
        />
        <Entypo
          name="heart"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Notifications")}
        />
        <FontAwesome
          name="user-circle-o"
          size={24}
          color="white"
          onPress={() => navigation.navigate("ProFile")}
        />
      </View>
    </View>
  );
}
export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  main_top: {
    width: "100%",
    height: 270,
    top: 20,
    // backgroundColor: "red",
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    // top: 20,
    marginTop: 20,
    // backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  Button: {
    width: 90,
    height: 40,
    right: 10,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#385898",
  },
  button: {
    width: 90,
    height: 40,
    right: 10,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "silver",
  },
  main_body: {
    width: "100%",
    height: 270,
    marginTop: 40,
  },
  footer: {
    width: "100%",
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
  },
});
