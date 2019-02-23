import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends Component {
  componentDidMount() {
    console.log("HomeScreen componentDidMount");
  }

  componentWillUnmount() {
    console.log("HomeScreen componentWillUnmount");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
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
  componentDidMount() {
    console.log("DetailScreen componentDidMount");
  }

  componentWillUnmount() {
    console.log("DetailScreen componentWillUnmount");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
