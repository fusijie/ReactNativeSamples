import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  StatusBar,
  Platform
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1FB9FF"
  },
  screenName: {
    fontSize: 30
  }
});

class Screen1 extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("light-content");
      isAndroid && StatusBar.setBackgroundColor("#6a51ae");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenName}>1</Text>
      </View>
    );
  }
}

class Screen2 extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
      isAndroid && StatusBar.setBackgroundColor("#ecf0f1");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenName}>2</Text>
      </View>
    );
  }
}

export default createAppContainer(
  createBottomTabNavigator({
    Screen1: Screen1,
    Screen2: Screen2
  })
);
