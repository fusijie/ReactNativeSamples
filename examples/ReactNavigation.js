import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
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
        <Text>Home Screen</Text>
        <Button
          title="Go to Navi"
          onPress={() => {
            this.props.navigation.navigate("Navi");
          }}
        />
        <Button
          title="Go to Param"
          onPress={() => {
            this.props.navigation.navigate("Param", {
              param: "Param From Home."
            });
          }}
        />
        <Button
          title="Go to Title"
          onPress={() => {
            this.props.navigation.navigate("Title", {
              title: "Title From Home"
            });
          }}
        />
      </View>
    );
  }
}

class NaviScreen extends Component {
  static navigationOptions = {
    title: "Navi"
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
        <Text>Navi Screen</Text>
        <Button
          title="Go to Navi again"
          onPress={() => {
            // this.props.navigation.navigate("Navi");
            this.props.navigation.push("Navi");
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Button
          title="Go to Top"
          onPress={() => {
            this.props.navigation.popToTop();
          }}
        />
      </View>
    );
  }
}

class ParamScreen extends Component {
  static navigationOptions = {
    title: "Param"
  };

  render() {
    const { navigation } = this.props;
    const param = navigation.getParam("param", "defaultParam");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Param Screen</Text>
        <Text>传递的参数是：{param}</Text>
      </View>
    );
  }
}

class TitleScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "defaultTitle")
    };
  };

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "defaultTitle");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Title Screen</Text>
        <Text>传递的标题是：{title}</Text>
        <Button
          title="Update title"
          onPress={() => {
            this.props.navigation.setParams({ title: "Title Update New" });
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Navi: NaviScreen,
    Param: ParamScreen,
    Title: TitleScreen
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
