import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
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
                    justifyContent: "center"
                }}
            >
                <Text style={styles.screenName}>Home Screen</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate("Settings")}
                />
                <Button
                    title="Go to Detail"
                    onPress={() => this.props.navigation.navigate("Detail")}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text style={styles.screenName}>Settings Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate("Home")}
                />
                <Button
                    title="Go to Detail"
                    onPress={() => this.props.navigation.navigate("Detail")}
                />
            </View>
        );
    }
}

class DetailScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text style={styles.screenName}>Detail Screen</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Detail: DetailScreen
});

const AppContainer = createAppContainer(
    createBottomTabNavigator(
        {
            Home: HomeStack,
            Settings: SettingsStack
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === "Home") {
                        iconName = `ios-information-circle${
                            focused ? "" : "-outline"
                        }`;
                    } else if (routeName === "Settings") {
                        iconName = `ios-options${focused ? "" : ""}`;
                    }

                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return (
                        <Ionicons name={iconName} size={25} color={tintColor} />
                    );
                }
            }),
            tabBarOptions: {
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
            }
        }
    )
);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
