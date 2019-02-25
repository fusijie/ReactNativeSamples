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
        <Button
          onPress={() => {
            this.props.navigation.navigate("Settings");
          }}
          title="Go to Settings"
        />
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
        <Button
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
          title="Go to Home"
        />
      </View>
    );
  }
}

class IconWithBadge extends Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: "absolute",
              right: -6,
              top: -3,
              backgroundColor: "red",
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

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
          IconComponent = HomeIconWithBadge;
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
