import React, { Component } from "react";
import { Button, StyleSheet, Text, View, Clipboard } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default class App extends Component {
  state = {
    textFromClipboard: "",
    textToClipboard: "Hello, Clipboard!"
  };

  pasteFromClipboard = () => {
    Clipboard.getString()
      .then(textFromClipboard => {
        this.setState({
          textFromClipboard: textFromClipboard
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  copyToClipboard = () => {
    Clipboard.setString(this.state.textToClipboard);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.textToClipboard}</Text>
        <Button onPress={this.copyToClipboard} title="Copy" />
        <Text>{this.state.textFromClipboard}</Text>
        <Button onPress={this.pasteFromClipboard} title="Paste" />
      </View>
    );
  }
}
