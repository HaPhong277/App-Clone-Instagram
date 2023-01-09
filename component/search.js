import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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
const DATA = [
  {
    id: "1",
    image: require("../assets/avatar.jpg"),
    image1: require("../assets/sohee.jpg"),
    image2: require("../assets/ly.jpg"),
    image3: require("../assets/1.jpg"),
    image4: require("../assets/2.jpg"),
    image5: require("../assets/hansohee.jpg"),
  },
  {
    id: "2",
    image: require("../assets/images.png"),
    image1: require("../assets/jennie.png"),
    image2: require("../assets/jiso.jpg"),
    image3: require("../assets/iu.jpg"),
    image4: require("../assets/lisa.jpg"),
    image5: require("../assets/Seorina.jpg"),
  },
];
const posts = [
  {
    id: "1",
    avatar: require("../assets/mckbia.webp"),
    name: "rpt.mckeyyyyy",
    images: require("../assets/mck.jpg"),
    like: "Liked by xuando._ and 38,500 others",
    title: "Verified We had fun 😜",
  },
  {
    id: "2",
    avatar: require("../assets/Cristiano-Ronaldo--G-01.jpg"),
    name: "cristiano",
    images: require("../assets/ramos.jpg"),
    like: "Liked by bluee.berryy._ and 6,810,425 others",
    title: "cristiano Unidos e focados. Rumo ao nosso objectivo.🇵🇹🙏🏽",
  },
  {
    id: "3",
    avatar: require("../assets/SpaceSpeakerslogo.png"),
    name: "spacespeakerss",
    images: require("../assets/ssg.jpg"),
    like: "Liked by rpt.gonzo and 3,376 others",
    title: "#spacespeakers",
  },
];
function search({ navigation }) {
  const [isModalisible, setisModalisible] = useState(false);
  const [editItem, seteditItem] = useState();
  const onPressitem = (item) => {
    setisModalisible(true);
  };
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View
        style={{
          width: "100%",
          height: 300,
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <View style={styles.it_main}>
            <Text onPress={() => onPressitem(item)}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 150,
                  }}
                  source={item.image}
                />
              </View>
            </Text>
          </View>
          <View style={styles.it_main}>
            <Text onPress={() => onPressitem(item)}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 150,
                  }}
                  source={item.image1}
                />
              </View>
            </Text>
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <View style={styles.right}>
            <Text onPress={() => onPressitem(item)}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 300,
                  }}
                  source={item.image2}
                />
              </View>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 300,
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <View style={styles.right}>
            <Text onPress={() => onPressitem(item)}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 300,
                  }}
                  source={item.image3}
                />
              </View>
            </Text>
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <View style={styles.it_main}>
            <Text onPress={() => onPressitem(item)}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 150,
                  }}
                  source={item.image4}
                />
              </View>
            </Text>
          </View>
          <View style={styles.it_main}>
            <Text onPress={() => onPressitem(item)}>
              <View>
                <Image
                  style={{
                    width: 200,
                    height: 150,
                  }}
                  source={item.image5}
                />
              </View>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  const onPressreturn = () => {
    setisModalisible(false);
  };
  const [follow, setfollow] = useState("Follow");
  const onPressTitle = (item) => {
    setfollow("Following");
    seteditItem(item.id);
  };
  const render = ({ item }) => (
    <View style={styles.contain}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View style={styles.CTop}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "violet",
              left: 10,
            }}
            source={item.avatar}
          />
          <Text
            style={{
              textAlign: "center",
              left: 20,
              fontWeight: "600",
              fontSize: 18,
              color: "white",
            }}
          >
            {item.name}
          </Text>
        </View>
        <View
          style={{
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              padding: 7,
              borderRadius: 5,
              width: 90,
              textAlign: "center",
              color: "white",
            }}
            onPress={onPressTitle}
          >
            {follow}
          </Text>
        </View>
      </View>
      <View>
        <Image
          style={{
            width: "100%",
            height: 500,
          }}
          source={item.images}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "35%",
            height: 60,
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="hearto" size={24} color="white" />
          <FontAwesome name="comment-o" size={24} color="white" />
          <Ionicons name="ios-paper-plane-outline" size={24} color="white" />
        </View>
        <View style={{ justifyContent: "center", width: 35, height: 60 }}>
          <FontAwesome name="bookmark-o" size={24} color="white" />
        </View>
      </View>
      <View style={{ left: 15 }}>
        <Text style={{ color: "white" }}>{item.like}</Text>
      </View>
      <View style={{ width: "100%", left: 15 }}>
        <Text style={{ color: "white" }}>{item.title}</Text>
      </View>
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
        }}
      >
        <Text
          style={{ fontSize: 20, fontWeight: "bold", color: "white", left: 10 }}
        >
          Search
        </Text>
      </View>
      <View style={{ width: "100%", height: 630 }}>
        <SafeAreaView style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Modal
            animationType="fade"
            visible={isModalisible}
            onRequestClose={() => setisModalisible(false)}
          >
            <View style={styles.ModalView}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "black",
                  height: 70,
                  marginTop: 20,
                  // top: -790,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 280,
                    left: 10,
                    height: "100%",
                  }}
                >
                  <TouchableOpacity onPress={() => onPressreturn()}>
                    <AntDesign
                      style={{ left: 5 }}
                      name="left"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      left: 10,
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Bài viết bạn có thể thích
                  </Text>
                </View>
              </View>
              <View style={styles.body}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  // horizontal={true}
                  data={posts}
                  renderItem={render}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </Modal>
        </SafeAreaView>
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
export default search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  item: {
    width: "100%",
    height: 600,
  },
  it_main: {
    width: "100%",
    height: 150,
  },
  right: {
    width: "100%",
    height: 300,
  },
  ModalView: {
    flex: 1,
    backgroundColor: "black",
  },
  contain: {
    width: "100%",
    height: 700,
  },
  CTop: {
    width: "75%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    width: "100%",
    height: 747,
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
