import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import NavigationService from "./ReactNavigationNavigationService";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF"
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        NavigationService.navigate("Settings", {
                            userName: "Lucky"
                        });
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
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        NavigationService.navigate("Home");
                    }}
                    title="Go to Home"
                />
            </View>
        );
    }
}

const AppContainer = createAppContainer(
    createBottomTabNavigator({
        Home: HomeScreen,
        Settings: SettingsScreen
    })
);

export default class App extends Component {
    render() {
        return (
            <AppContainer
                ref={navigationRef => {
                    NavigationService.setTopLevelNavigator(navigationRef);
                }}
            />
        );
    }
}
