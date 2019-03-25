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

    constructor(props) {
        super(props);
        this.state = {
            todoList: cloneDeep(this.props.todoList)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todoList: cloneDeep(nextProps.todoList)
        });
    }

    toggleTodo(index) {
        this.props.toggleTodo && this.props.toggleTodo(index);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {this.state.todoList.map((todo, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                this.toggleTodo(index);
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
