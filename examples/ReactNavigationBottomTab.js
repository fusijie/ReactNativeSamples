import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

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
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          icon_name = `ios-information-circle${focused ? "" : "-outline"}`;
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === "Settings") {
          icon_name = `ios-options${focused ? "" : "-outline"}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    })
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
