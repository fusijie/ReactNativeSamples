import React, { Component } from "react";
import { Button, StyleSheet, Alert, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Alert"
          onPress={() => {
            Alert.alert("标题", "描述", [
              {
                text: "取消",
                onPress: () => {},
                style: "cancel"
              },
              {
                text: "确定",
                onPress: () => {}
              },
              {
                text: "忽略"
              }
            ]);
          }}
        />
      </View>
    );
  }
}
