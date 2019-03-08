import React, { Component } from "react";
import { Button, StyleSheet, Text, View, AsyncStorage } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default class App extends Component {
  item = {
    key: "text",
    value: "Hello, AsynStorage!"
  };

  state = {
    text: ""
  };

  setASItem = () => {
    AsyncStorage.setItem(this.item.key, this.item.value);
  };

  getASItem = () => {
    AsyncStorage.getItem(this.item.key)
      .then(result => {
        if (result === null) {
          this.setState({ text: "" });
          return;
        }
        this.setState({ text: result });
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeASItem = () => {
    AsyncStorage.removeItem(this.item.key);
  };

  clearASItem = () => {
    AsyncStorage.clear();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button onPress={this.getASItem} title="Get" />
        <Button onPress={this.setASItem} title="Set" />
        <Button onPress={this.removeASItem} title="Remove" />
        <Button onPress={this.clearASItem} title="Clear" />
      </View>
    );
  }
}
