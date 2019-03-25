import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF"
    },
    screenName: {
        fontSize: 30
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenName}>Home Screen</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenName}>Settings Screen</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({ HomeScreen });
const SettingsStack = createStackNavigator({ SettingsScreen });

HomeStack.navigationOptions = {
    tabBarLabel: "Home-X"
};
SettingsStack.navigationOptions = {
    tabBarLabel: "Settings-X"
};

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack
});

TabNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];

    const headerTitle = routeName;

    return {
        headerTitle
    };
};

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
