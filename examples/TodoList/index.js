import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeContainer from "./containers/HomeContainer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  wrapper: {
    flex: 1,
    marginTop: 38
  }
});

class RootWrapper extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <HomeContainer />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootWrapper />
      </View>
    );
  }
}
