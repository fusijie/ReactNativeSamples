import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

export default class App extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            console.log("timeout");
        }, 500);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello, World!</Text>
            </View>
        );
    }
}
