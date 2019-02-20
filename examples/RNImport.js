import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ExportComponent, { a, b, sum } from "./RNExport";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default class App extends Component {
  state = {
    result: 0
  };
  render() {
    return (
      <View style={styles.container}>
        <ExportComponent>Hello, World!</ExportComponent>
        <Text
          onPress={() => {
            this.setState({
              result: sum(a, b)
            });
          }}
        >
          {this.state.result}
        </Text>
      </View>
    );
  }
}
