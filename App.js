import { StyleSheet, Text, View } from "react-native";
import Home from "./component/Home";
import search from "./component/search";
import setting from "./component/setting";
import Reels from "./component/Reels";
import Notifications from "./component/Notifications";
import ProFile from "./component/Profile";
import Login from "./component/login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Instagram" component={Home} />
      <Stack.Screen name="search" component={search} />
      <Stack.Screen name="Reels" component={Reels} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ProFile" component={ProFile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="setting" component={setting} />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator> */}
      <Tab.Screen
        name="Instagram"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={search}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notifications}
        options={{
          tabBarIcon: () => <Entypo name="heart" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="ProFile"
        component={ProFile}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user-circle-o" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const MyRender = () => {
  return (
    <NavigationContainer styles={styles.container}>
      {/* <MyTabs /> */}
      <MyStack />
    </NavigationContainer>
  );
};
export default MyRender;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
