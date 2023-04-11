import React from "react";

import { View, Text, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#202123",
        display: "flex",
        padding: 20,
        paddingTop: 25,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator color="#eee" size="large" />
    </View>
  );
}
