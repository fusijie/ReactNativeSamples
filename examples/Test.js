import React, { Component } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  innerContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red"
  }
});

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          height: 20,
          backgroundColor: "pink",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 100
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            alignSelf: "flex-end"
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
      </View>
    );
  }
}
