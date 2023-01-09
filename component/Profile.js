import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import "react-native-gesture-handler";

const DATA = [
  {
    id: "1",
    image: require("../assets/dd.jpg"),
    name: "dx.t__",
  },
  {
    id: "2",
    image: require("../assets/long.jpg"),
    name: "longfilwh",
  },
  {
    id: "3",
    image: require("../assets/tule.jpg"),
    name: "tule0489",
  },
  {
    id: "4",
    image: require("../assets/ta.jpg"),
    name: "tuanh_2906",
  },
  {
    id: "5",
    image: require("../assets/123.jpg"),
    name: "you_r_love",
  },
];
function ProFile({ navigation }) {
  const renderItem = ({ item }) => (
    // <View style={styles.box}>
    <View style={styles.item}>
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 50,
          justifyContent: "center",
        }}
        source={item.image}
      />
      <Text style={{ textAlign: "center", color: "white" }}>{item.name}</Text>
      <Text
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: "#385898",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: 100,
          borderRadius: 10,
          color: "white",
        }}
      >
        Theo dõi lại
      </Text>
      {/* </View> */}
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 50,
          marginTop: 50,
          justifyContent: "center",
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "38%",
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            left: 10,
          }}
        >
          <Feather name="lock" size={16} color="white" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            dh.phongg
          </Text>
          <AntDesign name="down" size={14} color="white" />
        </View>
        <View
          style={{
            width: 50,
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            right: 10,
          }}
        >
          <MaterialIcons name="my-library-add" size={24} color="white" />
          <Foundation
            name="list-bullet"
            size={24}
            color="white"
            onPress={() => navigation.navigate("setting")}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", height: 730, backgroundColor: "black" }}>
          <View style={styles.top}>
            <View style={{ width: "20%", height: "90%" }}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  justifyContent: "center",
                  left: 5,
                }}
                source={require("../assets/avatar.jpg")}
              />
              <Text style={{ left: 5, color: "white" }}>Hà phong</Text>
            </View>
            <View
              style={{
                width: "70%",
                height: "90%",
                // backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                right: 15,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white" }}> 0</Text>
                <Text style={{ color: "white", fontWeight: "800" }}>
                  Bài viết
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white" }}> 54</Text>
                <Text style={{ color: "white", fontWeight: "800" }}>
                  Người theo dõi
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white" }}> 65</Text>
                <Text style={{ color: "white", fontWeight: "800" }}>
                  Đang theo dõi
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 50,
              // backgroundColor: "black",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: "84%",
                height: "90%",
                borderRadius: 15,
                backgroundColor: "#171718",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "800" }}>
                Chỉnh sửa trang cá nhân
              </Text>
            </View>
            <View
              style={{
                width: "14%",
                height: "90%",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#171718",
              }}
            >
              <FontAwesome name="user-plus" size={20} color="white" />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 50,
              // backgroundColor: "green",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                left: 5,
                fontSize: 16,
                color: "white",
                fontWeight: "700",
              }}
            >
              Khám phá mọi người
            </Text>
          </View>
          <View>
            <SafeAreaView style={styles.box}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>
          <View
            style={{
              width: "100%",
              height: 50,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              // backgroundColor: "red",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "50%",
                // height: "100%",
                alignItems: "center",
                borderBottomColor: "white",
                borderEndWidth: 10,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            >
              <FontAwesome name="list-alt" size={34} color="white" />
            </View>
            <View style={{ width: "50%", alignItems: "center" }}>
              <FontAwesome name="user-circle-o" size={34} color="white" />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 300,
              // backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                // borderRadius: 50,
                justifyContent: "center",
              }}
              source={require("../assets/photo.png")}
            />
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Chưa có bài viết
            </Text>
          </View>
        </View>
      </ScrollView>
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
export default ProFile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  top: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  box: {
    width: "100%",
    height: 150,
  },
  item: {
    width: 130,
    height: 150,
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 5,
    justifyContent: "space-between",
    backgroundColor: "#171718",
    marginHorizontal: 5,
  },
  footer: {
    width: "100%",
    height: 135,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
  },
});
