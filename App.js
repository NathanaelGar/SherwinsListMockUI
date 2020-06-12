import React from "react";
import info from "./info";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return <info />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
