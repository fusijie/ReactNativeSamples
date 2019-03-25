import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 20
    },
    filter: {
        marginRight: 20,
        textDecorationLine: "underline"
    },
    filterCurrent: {
        color: "gray",
        textDecorationLine: "none"
    }
});

export default class TodoFilterComponent extends Component {
    filterTodo(filter) {
        this.props.filterTodo && this.props.filterTodo(filter);
    }

    renderFilter(filter) {
        if (filter === this.props.filter) {
            return (
                <Text style={[styles.filter, styles.filterCurrent]}>
                    {filter}
                </Text>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={() => {
                        this.filterTodo(filter);
                    }}
                >
                    <Text style={styles.filter}>{filter}</Text>
                </TouchableOpacity>
            );
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                {this.renderFilter("All")}
                {this.renderFilter("Undo")}
                {this.renderFilter("Finish")}
            </View>
        );
    }
}
