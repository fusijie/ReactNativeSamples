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
      <View style={styles.container}>
        <View style={styles.innerContainer} />
      </View>
    );
  }
}
