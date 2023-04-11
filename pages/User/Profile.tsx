import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  function ProfileInfo() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 24,
                }}
              >
                Conta
              </Text>
              <Text
                style={{
                  color: "#AAA",
                  fontSize: 16,
                }}
              >
                Informações sobre sua conta
              </Text>
            </View>

            {/* <Ionicons
                  name="checkmark-circle"
                  style={{
                    marginTop: 5,
                  }}
                  color="#3D6FBC"
                  size={20}
                /> */}
          </View>
        </View>
      </View>
    );
  }

  function Options() {
    function Option({ name = "", nameHref = "" }) {
      return (
        <Pressable
          onPress={() => {
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Error
            );
          }}
          style={{
            backgroundColor: "#333",
            borderRadius: 10,
            marginTop: 10,
            height: 45,
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Feather
            name={
              name === "Seus pedidos"
                ? "package"
                : name === "Favoritos"
                ? "heart"
                : "globe"
            }
            color="#FFF"
            size={20}
          />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              marginLeft: 10,
              color: "#FFF",
              fontSize: 15,
            }}
          >
            {name}
          </Text>
        </Pressable>
      );
    }
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <Option name="Seus pedidos" />
        <Option name="Favoritos" />
      </View>
    );
  }

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#202123",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SafeAreaView>
        <ProfileInfo />
        <Options />
      </SafeAreaView>
    </View>
  );
}
