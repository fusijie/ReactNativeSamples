import React, { Component } from "react";
import { StyleSheet, Animated, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    };
    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 10000
        }).start();
    }
    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FadeInView
                    style={{
                        width: 250,
                        height: 50,
                        backgroundColor: "powderblue"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 28,
                            textAlign: "center",
                            margin: 10
                        }}
                    >
                        FadeIn
                    </Text>
                </FadeInView>
            </View>
        );
    }
}
