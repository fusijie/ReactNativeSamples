import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Home",
      headerLeft: (
        <Button
          title="Info"
          onPress={() => {
            navigation.navigate("MyModal");
          }}
        />
      )
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button
          title="Detail"
          onPress={() => {
            this.props.navigation.navigate("Detail");
          }}
        />
      </View>
    );
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
});

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
