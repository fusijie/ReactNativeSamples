import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const styles = StyleSheet.create({
  screenName: {
    fontSize: 30
  }
});

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5FCFF"
        }}
      >
        <Text style={styles.screenName}>Home</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5FCFF"
        }}
      >
        <Text style={styles.screenName}>Settings</Text>
      </View>
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
