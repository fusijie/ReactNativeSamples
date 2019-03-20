import React, { Component } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import Dimensions from "Dimensions";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  block: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: 180
  }
});

class MyScrollView extends Component {
  render() {
    return <ScrollView>{this.getBlocksView()}</ScrollView>;
  }

  getBlocksView() {
    let all = [];
    let color = ["red", "blue", "green", "black", "gray"];
    for (let i = 0; i < color.length; i++) {
      all.push(
        <View key={i} style={[styles.block, { backgroundColor: color[i] }]}>
          <Text style={{ color: "white" }}>第{i + 1}个文本</Text>
        </View>
      );
    }
    return all;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyScrollView />
      </View>
    );
  }
}
