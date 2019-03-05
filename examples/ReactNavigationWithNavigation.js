import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import {
  withNavigation,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});

class BackButton extends React.Component {
  render() {
    // This will throw an 'undefined is not a function' exception because the navigation
    // prop is undefined.
    return (
      <Button
        title="Back"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}

const BackButtonWithNavigation = withNavigation(BackButton);

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackButton navigation={this.props.navigation} />
        <BackButtonWithNavigation />
      </View>
    );
  }
}

const AppContainer = createAppContainer(createStackNavigator({ HomeScreen }));

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
