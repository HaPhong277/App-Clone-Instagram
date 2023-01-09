import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
function setting({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <AntDesign
            style={{ margin: 10 }}
            name="setting"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Cài đặt</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="progress-clock"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Hoạt động của bạn</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="clock-plus-outline"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Kho lưu trữ</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <AntDesign
            style={{ margin: 10 }}
            name="qrcode"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Mã QR</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <MaterialIcons
            style={{ margin: 10 }}
            name="save-alt"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Đã lưu</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="sticker-check"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Vật phẩm kỹ thuật số</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <FontAwesome
            style={{ margin: 10 }}
            name="list-ul"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Bạn thân</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <FontAwesome
            style={{ margin: 10 }}
            name="star"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Yêu thích</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <AntDesign
            style={{ margin: 10 }}
            name="addusergroup"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>Khám phá mọi người</Text>
        </TouchableOpacity>
        <Separator />
      </View>
      <View>
        <TouchableOpacity style={styles.btnseting}>
          <FontAwesome
            style={{ margin: 10 }}
            name="heartbeat"
            size={24}
            color="white"
          />
          <Text style={{ color: "white" }}>(COVID-19) Trung tâm thông tin</Text>
        </TouchableOpacity>
        <Separator />
      </View>
    </View>
  );
  //   const Separator = () => <View style={styles.separator} />;
}
export default setting;
const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  btnseting: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    marginVertical: 7,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 400,
  },
});
