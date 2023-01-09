import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
// import "react-native-gesture-handler";
const DATA = [
  {
    id: "1",
    image: require("../assets/avatar.jpg"),
    name: "Tin của bạn",
    images: require("../assets/1.jpg"),
  },
  {
    id: "2",
    image: require("../assets/PL.jpg"),
    name: "may__lily",
    images: require("../assets/phl.jpg"),
  },
  {
    id: "3",
    image: require("../assets/hansohee.jpg"),
    name: "xeesoxee",
    images: require("../assets/xeso1.jpg"),
  },
  {
    id: "4",
    image: require("../assets/images.png"),
    name: "rosie",
    images: require("../assets/4.jpg"),
  },
  {
    id: "5",
    image: require("../assets/jennie.png"),
    name: "jennie",
    images: require("../assets/3.jpg"),
  },
  {
    id: "6",
    image: require("../assets/jiso.jpg"),
    name: "sooyaaa__",
    images: require("../assets/6.jpeg"),
  },
  {
    id: "7",
    image: require("../assets/Seorina.jpg"),
    name: "_seorina",
    images: require("../assets/7.jpg"),
  },
  {
    id: "8",
    image: require("../assets/lisa.jpg"),
    name: "lalalalisa_m",
    images: require("../assets/8.jpg"),
  },
];
const posts = [
  {
    id: "1",
    avatar: require("../assets/hansohee.jpg"),
    name: "xeesoxee",
    images: require("../assets/xeso1.jpg"),
    like: "có xuando._ và 1.127.125 người khác thích",
    title: "xeesoxee @bomin.cho @kangyewon @suhwa22 ❤️‍🔥my Avengers❤️‍🔥",
    baiviet: "295",
    nguoitheodoi: "10.3M",
    dangtheodoi: "0",
    story: "한소희",
    believe1: require("../assets/xeso1.jpg"),
    titleblv1: "1",
    believe2: require("../assets/xose2.jpg"),
    titleblv2: "2",
    believe3: require("../assets/xeso3.jpg"),
    titleblv3: "3",
    believe4: require("../assets/xeso4.png"),
    titleblv4: "4",
    believe5: require("../assets/xeso5.jpg"),
    titleblv5: "5",
    believe6: require("../assets/xeso6.jpg"),
    titleblv6: "6",
    isLike: false,
  },
  {
    id: "2",
    avatar: require("../assets/PL.jpg"),
    name: "may__lily",
    images: require("../assets/ly.jpg"),
    like: "Liked by xuando._ and 4,619 others",
    title:
      "may__lily Người hướng nội lâu lâu đi event 🖤 #phuongly #phuonglyharuharu",
    baiviet: "728",
    nguoitheodoi: "2M",
    dangtheodoi: "215",
    story: "Phuong Ly Artist",
    believe1: require("../assets/pl1.jpg"),
    titleblv1: "1",
    believe2: require("../assets/pl2.jpg"),
    titleblv2: "2",
    believe3: require("../assets/pl3.jpg"),
    titleblv3: "3",
    believe4: require("../assets/pl4.jpg"),
    titleblv4: "4",
    believe5: require("../assets/pl5.jpg"),
    titleblv5: "5",
    believe6: require("../assets/pl6.jpg"),
    titleblv6: "6",
    isLike: false,
  },
  {
    id: "3",
    avatar: require("../assets/mckbia.webp"),
    name: "rpt.mckeyyy",
    images: require("../assets/mck.jpg"),
    like: "Liked by xuando._ and 38,500 others",
    title: " We had fun 😜",
    baiviet: "32",
    nguoitheodoi: "458K",
    dangtheodoi: "639",
    story: "Nguyễn IVanI’m busy",
    believe1: require("../assets/mck.jpg"),
    titleblv1: "1",
    believe2: require("../assets/mck2.png"),
    titleblv2: "2",
    believe3: require("../assets/mck3.png"),
    titleblv3: "3",
    believe4: require("../assets/mck4.png"),
    titleblv4: "4",
    believe5: require("../assets/mck5.png"),
    titleblv5: "5",
    believe6: require("../assets/mck6.png"),
    titleblv6: "6",
    isLike: false,
  },
  {
    id: "4",
    avatar: require("../assets/1200px-Man_Utd_FC_.svg.png"),
    name: "Manchester United",
    images: require("../assets/2.jpg"),
    like: "Liked by xuando._ and 128,308 others",
    title: "manchesterunited Show your Ohana some love this festive season.",
    baiviet: "24,088",
    nguoitheodoi: "60.6M",
    dangtheodoi: "141b",
    story:
      "Official Manchester United account. Enjoy our winter friendlies live on #MUTV — subscribe now ⤵️",
    believe1: require("../assets/mu1.jpg"),
    titleblv1: "1",
    believe2: require("../assets/mu2.jpg"),
    titleblv2: "2",
    believe3: require("../assets/mu3.jpg"),
    titleblv3: "3",
    believe4: require("../assets/mu4.jpg"),
    titleblv4: "4",
    believe5: require("../assets/mu5.jpg"),
    titleblv5: "5",
    believe6: require("../assets/mu6.jpg"),
    titleblv6: "6",
    isLike: false,
  },
];

function HomePage({ navigation }) {
  const [isModalisible, setisModalisible] = useState(false);
  const [img, setimg] = useState();
  const [text, settext] = useState();
  const [believe, setbelieve] = useState();
  const [editItem, seteditItem] = useState();
  const onPressitem = (item) => {
    setisModalisible(true);
    settext(item.name);
    seteditItem(item.id);
    setimg(item.image);
    setbelieve(item.images);
  };
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text onPress={() => onPressitem(item)}>
          <View>
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                borderWidth: 2,
                justifyContent: "center",
                borderColor: "violet",
                left: 5,
              }}
              source={item.image}
            />
          </View>
        </Text>
        <Text
          style={{ textAlign: "center", color: "white" }}
          // onPress={() => navigation.navigate("search")}
          onPress={() => onPressitem(item)}
        >
          {item.name}
        </Text>
      </View>
    </View>
  );
  const onPressreturn = () => {
    setisModalisible(false);
  };
  const onPressreturnn = () => {
    setisModalisible1(false);
  };
  const [isModalisible1, setisModalisible1] = useState(false);
  const [image, setimage] = useState();
  const [Name, setName] = useState();
  const [Item, setItem] = useState();
  const [post, setpost] = useState();
  const [followers, setfollowers] = useState();
  const [following, setfollowing] = useState();
  const [background, setbackground] = useState();
  const [story, setstory] = useState();
  const [believe1, setbelieve1] = useState();
  const [believe2, setbelieve2] = useState();
  const [believe3, setbelieve3] = useState();
  const [believe4, setbelieve4] = useState();
  const [believe5, setbelieve5] = useState();
  const [believe6, setbelieve6] = useState();
  const [titleblv1, settitleblv1] = useState();
  const [titleblv2, settitleblv2] = useState();
  const [titleblv3, settitleblv3] = useState();
  const [titleblv4, settitleblv4] = useState();
  const [titleblv5, settitleblv5] = useState();
  const [titleblv6, settitleblv6] = useState();
  const [like, setLike] = useState(false);

  const onPressclick = (Item) => {
    setisModalisible1(true);
    setName(Item.name);
    setItem(Item.id);
    setbackground(Item.images);
    setimage(Item.avatar);
    setpost(Item.baiviet);
    setstory(Item.story);
    setfollowing(Item.dangtheodoi);
    setfollowers(Item.nguoitheodoi);
    setbelieve1(Item.believe1);
    setbelieve2(Item.believe2);
    setbelieve3(Item.believe3);
    setbelieve4(Item.believe4);
    setbelieve5(Item.believe5);
    setbelieve6(Item.believe6);
    settitleblv1(Item.titleblv1);
    settitleblv2(Item.titleblv2);
    settitleblv3(Item.titleblv3);
    settitleblv4(Item.titleblv4);
    settitleblv5(Item.titleblv5);
    settitleblv6(Item.titleblv6);
    setLike(Item.isLike);
  };
  const render = ({ item }) => (
    <View style={styles.contain}>
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
          onPress={() => onPressclick(item)}
        >
          {item.name}
        </Text>
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
          <AntDesign
            // name={"hearto"}
            name={like ? "heart" : "hearto"}
            size={24}
            color={like ? "red" : "white"}
            // onPress={() => onPresslịke(item)}
          />
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
          Instagram
        </Text>
      </View>
      <View style={{ width: "100%", height: 630 }}>
        <View>
          <View style={styles.believe}>
            <View style={styles.second}>
              <View>
                <SafeAreaView style={styles.second}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={DATA}
                    renderItem={renderItem}
                    // onPress={() => navigation.navigate("Profile")}
                    keyExtractor={(item) => item.id}
                  />
                  <Modal
                    animationType="fade"
                    visible={isModalisible}
                    onRequestClose={() => setisModalisible(false)}
                  >
                    <View style={styles.ModalView}>
                      <View style={{ position: "relative" }}>
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          source={believe}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                          height: 70,
                          top: -780,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: 100,
                            left: 10,
                            height: "100%",
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
                            source={img}
                          />
                          <Text
                            style={{ left: 10, fontSize: 18, color: "white" }}
                          >
                            {text}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={() => onPressreturn()}>
                          <Feather
                            style={{ right: 10 }}
                            name="x"
                            size={24}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </SafeAreaView>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <SafeAreaView style={styles.second}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={posts}
              renderItem={render}
              keyExtractor={(item) => item.id}
            />
            <Modal
              animationType="fade"
              visible={isModalisible1}
              onRequestClose={() => setisModalisible1(false)}
            >
              <View style={styles.ModalView}>
                <View
                  style={{
                    width: "100%",
                    height: 50,
                    marginTop: 50,
                    justifyContent: "center",
                    backgroundColor: "black",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "90%",
                      justifyContent: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="left"
                      size={24}
                      color="white"
                      onPress={() => onPressreturnn()}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {Name}
                    </Text>
                    <Octicons name="bell" size={24} color="white" />
                  </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      width: "100%",
                      height: 730,
                      backgroundColor: "black",
                    }}
                  >
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
                          source={image}
                        />
                        <Text style={{ left: 5, color: "white" }}>{Name}</Text>
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
                          <Text style={{ color: "white" }}> {post}</Text>
                          <Text style={{ color: "white", fontWeight: "800" }}>
                            Post
                          </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                          <Text style={{ color: "white" }}> {followers}</Text>
                          <Text style={{ color: "white", fontWeight: "800" }}>
                            followers
                          </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                          <Text style={{ color: "white" }}> {following}</Text>
                          <Text style={{ color: "white", fontWeight: "800" }}>
                            following
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 100,
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 10,
                        justifyContent: "flex-start",
                      }}
                    >
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {story}
                      </Text>
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
                          width: "40%",
                          height: "90%",
                          borderRadius: 15,
                          backgroundColor: "#171718",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "800",
                          }}
                        >
                          Đang theo dõi
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "40%",
                          height: "90%",
                          borderRadius: 15,
                          backgroundColor: "#171718",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "800",
                          }}
                        >
                          Nhắn tin
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
                    <View style={{ width: "100%" }}>
                      <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                      >
                        <View
                          style={{
                            width: 500,
                            height: 100,
                            marginTop: 20,
                            flexDirection: "row",
                            // backgroundColor: "blue",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              width: 80,
                              height: 100,
                              alignItems: "center",
                              justifyContent: "center",
                              // backgroundColor: "green",
                            }}
                          >
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: "violet",
                              }}
                              source={believe1}
                            />
                            <Text style={{ color: "white" }}>{titleblv1}</Text>
                          </View>
                          <View
                            style={{
                              width: 80,
                              height: 100,
                              alignItems: "center",
                              justifyContent: "center",
                              // backgroundColor: "green",
                            }}
                          >
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: "violet",
                              }}
                              source={believe2}
                            />
                            <Text style={{ color: "white" }}>{titleblv2}</Text>
                          </View>
                          <View
                            style={{
                              width: 80,
                              height: 100,
                              alignItems: "center",
                              justifyContent: "center",
                              // backgroundColor: "green",
                            }}
                          >
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: "violet",
                              }}
                              source={believe3}
                            />
                            <Text style={{ color: "white" }}>{titleblv3}</Text>
                          </View>
                          <View
                            style={{
                              width: 80,
                              height: 100,
                              alignItems: "center",
                              justifyContent: "center",
                              // backgroundColor: "green",
                            }}
                          >
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: "violet",
                              }}
                              source={believe4}
                            />
                            <Text style={{ color: "white" }}>{titleblv4}</Text>
                          </View>
                          <View
                            style={{
                              width: 80,
                              height: 100,
                              alignItems: "center",
                              justifyContent: "center",
                              // backgroundColor: "green",
                            }}
                          >
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: "violet",
                              }}
                              source={believe5}
                            />
                            <Text style={{ color: "white" }}>{titleblv5}</Text>
                          </View>
                          <View
                            style={{
                              width: 80,
                              height: 100,
                              alignItems: "center",
                              justifyContent: "center",
                              // backgroundColor: "green",
                            }}
                          >
                            <Image
                              style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: "violet",
                              }}
                              source={believe6}
                            />
                            <Text style={{ color: "white" }}>{titleblv6}</Text>
                          </View>
                        </View>
                      </ScrollView>
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
                        <FontAwesome
                          name="user-circle-o"
                          size={34}
                          color="white"
                        />
                      </View>
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
                          width: 120,
                          height: 120,
                          // backgroundColor: "red",
                        }}
                      >
                        <Image
                          style={{
                            width: 120,
                            height: 120,
                          }}
                          source={believe1}
                        />
                      </View>
                      <View
                        style={{
                          width: 120,
                          height: 120,
                          // backgroundColor: "red",
                        }}
                      >
                        <Image
                          style={{
                            width: 120,
                            height: 120,
                          }}
                          source={believe2}
                        />
                      </View>
                      <View
                        style={{
                          width: 120,
                          height: 120,
                          // backgroundColor: "red",
                        }}
                      >
                        <Image
                          style={{
                            width: 120,
                            height: 120,
                          }}
                          source={believe3}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: 120,
                          height: 120,
                          // backgroundColor: "red",
                        }}
                      >
                        <Image
                          style={{
                            width: 120,
                            height: 120,
                          }}
                          source={believe4}
                        />
                      </View>
                      <View
                        style={{
                          width: 120,
                          height: 120,
                          // backgroundColor: "red",
                        }}
                      >
                        <Image
                          style={{
                            width: 120,
                            height: 120,
                          }}
                          source={believe5}
                        />
                      </View>
                      <View
                        style={{
                          width: 120,
                          height: 120,
                          // backgroundColor: "red",
                        }}
                      >
                        <Image
                          style={{
                            width: 120,
                            height: 120,
                          }}
                          source={believe6}
                        />
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </Modal>
          </SafeAreaView>
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
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  believe: {
    width: "100%",
    height: 100,
  },
  second: {
    width: "100%",
    height: "100%",
  },
  item: {
    width: 80,
    height: 100,
    marginVertical: 5,
    marginHorizontal: 5,
    // backgroundColor: "red",
  },
  body: {
    width: "100%",
    height: 560,
    // backgroundColor: "blue",
  },
  contain: {
    width: "100%",
    height: 700,
    // backgroundColor: "red",
  },
  CTop: {
    width: "100%",
    height: 60,
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
  },
  ModalView: {
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
});
