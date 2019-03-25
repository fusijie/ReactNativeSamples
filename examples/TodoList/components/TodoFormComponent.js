import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    input: {
        height: 30,
        borderColor: "gray",
        borderWidth: 1,
        flex: 1
    }
});

export default class TodoFormComponent extends Component {
    state = {
        todo: null
    };

    setTodo(text) {
        this.setState({
            todo: text
        });
    }

    addTodo() {
        this.props.addTodo && this.props.addTodo(this.state.todo);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        this.setTodo(text);
                    }}
                />
                <Button
                    title="添加"
                    onPress={() => {
                        this.addTodo();
                    }}
                />
            </View>
        );
    }
}
