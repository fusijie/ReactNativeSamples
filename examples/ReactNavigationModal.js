import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const styles = StyleSheet.create({
  screenName: {
    fontSize: 30
  }
});

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
        <Text style={styles.screenName}>Home Screen</Text>
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
        <Text style={styles.screenName}>Detail Screen</Text>
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.screenName}>This is a modal!</Text>
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
