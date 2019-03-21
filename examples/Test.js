import React, { Component } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "pink"
          // alignItems: "center"
        }}
      >
        {/* <View style={{ width: 50, backgroundColor: "blue" }} /> */}
        <ScrollView style={{ width: 200, backgroundColor: "blue" }} />
      </View>
    );
  }
}
