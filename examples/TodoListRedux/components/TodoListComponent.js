import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { cloneDeep } from "lodash";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20
    },
    todo: {
        paddingVertical: 5
    },
    textFinished: {
        textDecorationLine: "line-through",
        color: "gray"
    }
});

export default class TodoListComponent extends Component {
    static defaultProps = {
        todoList: []
    };

    toggleTodo(id) {
        this.props.toggleTodo && this.props.toggleTodo(id);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {this.props.todoList.map((todo, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                this.toggleTodo(todo.id);
                            }}
                            key={index}
                        >
                            <Text
                                style={[
                                    styles.todo,
                                    todo.status && styles.textFinished
                                ]}
                            >
                                {todo.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}
