import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    SafeAreaView
} from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },

    screenName: {
        fontSize: 40
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.screenName}>Home Top</Text>
                <Text style={styles.screenName}>Home Bottom</Text>
            </SafeAreaView>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.screenName}>Settings Top</Text>
                <Text style={styles.screenName}>Settings Bottom</Text>
            </SafeAreaView>
        );
    }
}

const AppContainer = createAppContainer(
    createBottomTabNavigator(
        {
            Home: HomeScreen,
            Settings: SettingsScreen
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === "Home") {
                        iconName = `ios-home${focused ? "" : ""}`;
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
