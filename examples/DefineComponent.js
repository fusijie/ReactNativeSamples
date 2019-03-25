import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import createReactClass from "create-react-class";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

/**
 * ES6
 */
// class NewComponent extends Component {
//   render() {
//     return <Text>Hello {this.props.name}</Text>;
//   }
// }

/**
 * ES5
 * 已经移除了React.createClass
 * 需要使用 npm install create-react-class --save-dev
 */
let NewComponent = createReactClass({
    render() {
        return <Text>Hello {this.props.name}</Text>;
    }
});

/**
 * 函数式定义
 */
// function NewComponent(props) {
//   return <Text>Hello {props.name}</Text>;
// }

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NewComponent name="New Component!" />
            </View>
        );
    }
}
