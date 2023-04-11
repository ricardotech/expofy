import React, { useContext } from "react";
import { Platform, View } from "react-native";

import * as Device from "expo-device";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../pages/User/Home";
import ProfileScreen from "../pages/User/Profile";
import CartScreen from "../pages/User/Cart";
import { useCart } from "../contexts/CartContext";

type TabNavigatorParamList = {
  EventListView: { icon: string };
  CreateEvent: { icon: string };
};

type StackNavigatorParamList = {
  Tab: {};
  Intro: {};
  Favoritos: {};
  Course: {
    id: string;
  };
  Lesson: {};
  Profile: {};
};

const UserStack = createNativeStackNavigator<StackNavigatorParamList>();
const Tab = createBottomTabNavigator();

function TabNavigator() {

  const { getCartData } = useCart();

  const cartData: any = getCartData();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#1C1D21",
          height:
            Platform.OS === "ios"
              ? Device.deviceName === "iPhone 5" ||
                Device.deviceName === "iPhone 5s" ||
                Device.deviceName === "iPhone SE" ||
                Device.deviceName === "iPhone SE (2nd generation)" ||
                Device.deviceName === "iPhone SE (3rd generation)" ||
                Device.deviceName === "iPhone 6" ||
                Device.deviceName === "iPhone 6s" ||
                Device.deviceName === "iPhone 7" ||
                Device.deviceName === "iPhone 7 Plus" ||
                Device.deviceName === "iPhone 8" ||
                Device.deviceName === "iPhone 8 Plus" ||
                Device.deviceName === "iPhone X" ||
                Device.deviceName === "iPhone Xr" ||
                Device.deviceName === "iPhone Xs" ||
                Device.deviceName === "iPhone Xs Max"
                ? 65
                : 75
              : 80,
          paddingTop: Platform.OS === "ios" ? 10 : 0,
          paddingBottom:
            Platform.OS === "ios"
              ? Device.deviceName === "iPhone 5" ||
                Device.deviceName === "iPhone 5s" ||
                Device.deviceName === "iPhone SE" ||
                Device.deviceName === "iPhone SE (2nd generation)" ||
                Device.deviceName === "iPhone SE (3rd generation)" ||
                Device.deviceName === "iPhone 6" ||
                Device.deviceName === "iPhone 6s" ||
                Device.deviceName === "iPhone 7" ||
                Device.deviceName === "iPhone 7 Plus" ||
                Device.deviceName === "iPhone 8" ||
                Device.deviceName === "iPhone 8 Plus" ||
                Device.deviceName === "iPhone X" ||
                Device.deviceName === "iPhone Xr" ||
                Device.deviceName === "iPhone Xs" ||
                Device.deviceName === "iPhone Xs Max"
                ? 10
                : 24
              : 10,
        },
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "#3E6FBC",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeStack") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "SettingsStack") {
            iconName = focused
              ? "account-settings"
              : "account-settings-outline";
          }
          return (
            <View>
              <Ionicons
                name={
                  route.name === "Home"
                    ? (iconName = focused ? "albums" : "albums-outline")
                    : route.name === "Cart"
                    ? (iconName = focused ? "cart" : "cart-outline")
                    : route.name === "Profile"
                    ? (iconName = focused
                        ? "person-circle"
                        : "person-circle-outline")
                    : "person-circle-outline"
                }
                size={30}
                color={!focused ? "gray" : "#3E6FBC"}
              />
              {route.name === "Cart" && cartData.products && cartData.products.length > 0 && (
                <View
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: 5,
                    position: "absolute",
                    right: -5,
                    backgroundColor: "#FF5A5F",
                  }}
                />
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Biblioteca",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Profile",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

function Stack() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          headerShown: false,
          title: "Ricardo",
        }}
      />

      <UserStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <UserStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            title: "Lesson",
          }}
        />
      </UserStack.Group>
    </UserStack.Navigator>
  );
}

export default Stack;
