import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Provider } from "react-redux";

import store from "./store/index";
import HomeContainer from "./containers/HomeContainer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    wrapper: {
        flex: 1,
        marginTop: 38
    }
});

class RootWrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.wrapper}>
                    <HomeContainer />
                </View>
            </Provider>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RootWrapper />
            </View>
        );
    }
}
