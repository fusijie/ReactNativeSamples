import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../assets/logo.png")} />
                <Image
                    source={{
                        uri: "https://facebook.github.io/react/logo-og.png",
                        method: "POST",
                        headers: {
                            Pragma: "no-cache"
                        },
                        body: "Your Body goes here"
                    }}
                    style={{ width: 300, height: 300, margin: 20 }}
                />
                <Image
                    style={{ width: 51, height: 51, resizeMode: "contain" }}
                    source={{
                        uri:
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
                    }}
                />
                <ImageBackground
                    source={require("../assets/logo.png")}
                    style={{ width: 100, height: 100 }}
                >
                    <Text>Inside</Text>
                </ImageBackground>
            </View>
        );
    }
}
