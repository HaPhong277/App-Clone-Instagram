import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Video from "react-native-video";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

const SingleReel = ({ item, index, currentIndex }) => {
  const WindowWidth = Dimensions.get("window").width;
  const WindowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("buffring", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);
  return (
    <View
      style={{ width: WindowWidth, height: WindowHeight, position: "relative" }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        // onPress={() => setMute(!mute)}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          mute={mute}
          source={item.Image}
        />
        {/* <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
        /> */}
      </TouchableOpacity>
      {/* <Ionicons
        style={{
          fontSize: mute ? 20 : 0,
          color: "white",
          position: "absolute",
          top: WindowHeight / 2.3,
          left: WindowWidth / 2.3,
          backgroundColor: "rgba(52,52,52,0.6)",
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
        name="volume-mute"
      /> */}
      <View
        style={{
          position: "absolute",
          width: WindowWidth,
          zIndex: 1,
          bottom: 80,
          padding: 10,
        }}
      >
        <View style={{}}>
          <TouchableOpacity>
            <View
              style={{ width: 100, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: "white",
                  margin: 10,
                }}
              >
                <Image
                  source={item.postProfile}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{ color: "white", fontSize: 16 }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 14, marginHorizontal: 10 }}>
            {item.description}
          </Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Ionicons
              style={{
                fontSize: 16,
                color: "white",
              }}
              name="ios-musical-note"
            />
            <Text style={{ color: "white" }}>Original Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          right: 0,
          // alignItems: "center",
          // flexDirection: "column",
        }}
      >
        <TouchableOpacity
          onPress={() => setLike(!like)}
          style={{ padding: 10 }}
        >
          <AntDesign
            name={like ? "heart" : "hearto"}
            style={{ fontSize: 25, color: like ? "red" : "white" }}
          />
          <Text style={{ color: "white" }}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons
            name="ios-chatbubble-outline"
            style={{ fontSize: 25, color: "white" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons
            name="paper-plane-outline"
            style={{ fontSize: 25, color: "white" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{ fontSize: 25, color: "white" }}
          />
        </TouchableOpacity>
        <View
          style={{
            with: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white",
            margin: 10,
          }}
        >
          <Image
            source={item.postProfile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default SingleReel;
const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
