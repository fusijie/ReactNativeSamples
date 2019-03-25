import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-navigation";

export default class App extends Component {
    state = {
        top: "always",
        bottom: "always"
    };

    toggleForceInset = side => () => {
        this.setState({
            [side]: this.state[side] === "always" ? "never" : "always"
        });
    };

    render() {
        return (
            <SafeAreaView
                style={styles.container}
                forceInset={{
                    top: this.state.top,
                    bottom: this.state.bottom
                }}
            >
                <Text style={styles.paragraph}>This is top text.</Text>
                <View>
                    <Button
                        title="Toggle top padding"
                        onPress={this.toggleForceInset("top")}
                    />
                    <Button
                        title="Toggle bottom padding"
                        onPress={this.toggleForceInset("bottom")}
                    />
                </View>
                <Text style={styles.paragraph}>This is bottom text.</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1",
        justifyContent: "space-between"
    },
    paragraph: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495e"
    }
});
