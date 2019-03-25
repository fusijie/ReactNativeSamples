import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

let a = 1;
let b = 1;
export { a, b };

export default class ExportComponent extends Component {
    render() {
        return <Text>Hello, World!</Text>;
    }
}

export function sum(a, b) {
    return a + b;
}
