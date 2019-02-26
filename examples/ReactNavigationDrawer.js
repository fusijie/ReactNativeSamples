import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const styles = StyleSheet.create({
  screenName: {
    fontSize: 30
  },
  icon: {
    width: 24,
    height: 24
  }
});

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => {
      <Image
        source={require("../assets/logo.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />;
    }
  };
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
          title="Open Drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <Button
          title="Toggle Drawer"
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <Button
          title="Go to Detail"
          onPress={() => {
            this.props.navigation.navigate("Detail");
          }}
        />
      </View>
    );
  }
}

class DetailScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Detail",
    drawerIcon: ({ tintColor }) => {
      <Image
        source={require("../assets/logo.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />;
    }
  };
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
        <Text style={styles.screenName}>Detail Screen</Text>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
