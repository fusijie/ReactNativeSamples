import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class NewComponent extends Component {
  state = {
    size: 80
  };

  render() {
    return (
      <View>
        <Text
          style={{ textAlign: "center", margin: 20 }}
          onPress={() => {
            this.setState({ size: this.state.size + 10 });
          }}
        >
          点击
        </Text>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: this.state.size, height: this.state.size }}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NewComponent />
      </View>
    );
  }
}
